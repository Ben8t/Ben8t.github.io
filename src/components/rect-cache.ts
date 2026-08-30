/**
 * Missing dependency of the canvasui components.
 *
 * `DecryptReveal.tsx` (and its siblings) ship with `import { createRectCache }
 * from "../rect-cache"`, but the canvasui shadcn registry does not publish a
 * `rect-cache` item -- so the generated install is a broken import. This is a
 * local reimplementation.
 *
 * It exists purely so the pointer handler can map `event.clientX/Y` into
 * element-local coordinates without calling `getBoundingClientRect()` on every
 * `pointermove` (which forces a synchronous layout). The rect is read lazily
 * and only re-measured after something that could have moved the element.
 */

export interface RectCache {
  readonly current: DOMRect;
  destroy(): void;
}

// Built as a plain object rather than `new DOMRect()`: this module is
// evaluated during the static prerender, where DOMRect does not exist.
const EMPTY = {
  x: 0, y: 0, width: 0, height: 0,
  top: 0, right: 0, bottom: 0, left: 0,
  toJSON() { return this; },
} as DOMRect;

export function createRectCache(element: Element): RectCache {
  if (typeof window === "undefined") {
    return { current: EMPTY, destroy() {} };
  }

  let rect: DOMRect | null = null;
  const invalidate = () => {
    rect = null;
  };

  // Any ancestor scroll moves the element in viewport space, so listen in the
  // capture phase to catch scroll events that never reach window in the bubble
  // phase.
  window.addEventListener("scroll", invalidate, { capture: true, passive: true });
  window.addEventListener("resize", invalidate, { passive: true });

  const observer = new ResizeObserver(invalidate);
  observer.observe(element);

  return {
    get current() {
      if (rect === null) rect = element.getBoundingClientRect();
      return rect;
    },
    destroy() {
      window.removeEventListener("scroll", invalidate, { capture: true });
      window.removeEventListener("resize", invalidate);
      observer.disconnect();
    },
  };
}
