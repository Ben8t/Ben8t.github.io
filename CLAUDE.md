# CLAUDE.md

Guidance for Claude Code (claude.ai/code) when working in this repository.

## Project Overview

A deliberately tiny personal site for Benoit: one page, one interactive element.
Static Next.js export, deployed on Vercel.

The governing constraint is **weight**. The page should feel like raw HTML.
Before adding anything — a dependency, a font, an image, a route — the default
answer is no. If something can be plain text instead of an asset, it should be.

## Tech Stack

- Next.js 16.1.1, App Router, `output: 'export'`
- React 19.1.0
- TypeScript 5.8.3
- **No CSS framework.** Plain CSS in `src/app/globals.css`.
- **No web fonts.** The OS monospace stack (`ui-monospace, SFMono-Regular, …`).
- **No images.** The portrait is ASCII text in `src/app/portrait.ts`.
- Runtime dependencies: `next`, `react`, `react-dom`. That is the whole list.

## Commands

```bash
npm install
npm run dev      # dev server
npm run build    # static export to /out
```

There is no lint script: `next lint` was removed in Next 16 and no ESLint
config was carried over.

## Structure

```
src/app/
  layout.tsx      html/body shell + metadata
  page.tsx        the entire site
  globals.css     the entire stylesheet
  portrait.ts     ASCII portrait as a template literal
  icon.png        BP monogram favicon
  apple-icon.png
src/components/
  canvasui/DecryptReveal.tsx   vendored, see below
  rect-cache.ts                local fill-in for a missing canvasui dep
```

## DecryptReveal

`src/components/canvasui/DecryptReveal.tsx` is vendored verbatim from the
[canvasui](https://canvasui.dev/docs/components/decrypt-reveal) shadcn registry
(`https://canvasui.dev/r/decrypt-reveal-react.json`). Two things to know:

1. **It ships a broken import.** The file does
   `import { createRectCache } from "../rect-cache"`, but the registry does not
   publish a `rect-cache` item. `src/components/rect-cache.ts` is a local
   reimplementation. If you re-pull the component from the registry, keep that
   file.

2. **It is patched locally to work outside Chrome.** The effect needs the
   [HTML-in-Canvas API](https://developer.chrome.com/blog/html-in-canvas-origin-trial)
   (`drawElementImage` + `requestPaint`) to turn DOM into a texture. As of
   Chrome 148-150 that is an origin trial, and no other engine intends to
   implement it -- so upstream, the effect renders nothing at all for almost
   every visitor.

   The patch adds a `paintSource` option: a callback that draws the content into
   the source canvas with ordinary Canvas 2D calls. When HTML-in-Canvas is
   missing but a painter is supplied, the shader pipeline runs on that instead,
   so the cipher works in every browser with WebGL2. All local changes are
   marked `LOCAL ADDITION` in the file. They are:

   - a `paintSource` option on `DecryptRevealOptions`
   - `manualPaint` / `hasContent` flags, and `repaintSource()`
   - `hasContent` replacing `htmlInCanvas` at the four gates that ask whether a
     content texture can be built at all
   - `DEFAULTS` typed to keep `paintSource` optional
   - the React wrapper hiding the DOM copy once the cipher is confirmed running

   Re-pulling the component from the registry drops all of this. Re-apply it.

   **The DOM children stay in the tree** at `opacity: 0` -- the link is still
   clickable, focusable, and readable by screen readers, and the output canvas
   is `pointer-events: none` so clicks fall through. The card only hides once an
   instance exists, so no-JS and no-WebGL visitors still see it.

   **`paintCard()` in `Newsletter.tsx` mirrors `.card*` in `globals.css`.**
   One replaces the other visually, so the metrics must match. Change both
   together.

## Deployment

Vercel, `framework: nextjs` in `vercel.json`, static export from `/out`.
No CI. No API routes (static export forbids them).

## History

Everything before this rebuild — 13 project case studies, `/experience`,
`/ai-sessions` with its Supabase form, a three.js refraction hero — lives in
git history on `master` and the older feature branches. It was removed
deliberately, not lost.
