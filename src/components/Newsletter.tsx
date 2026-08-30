"use client";

import { DecryptReveal } from "@/components/canvasui/DecryptReveal";

const SUBSTACK = "https://fromanengineersight.substack.com/";

const MONO =
  'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace';

const TITLE = "From an Engineer's Sight";
const BODY = [
  "Notes on building product, data systems,",
  "and the craft in between.",
];
const CTA = "Read on Substack \u2192";

const LINK = "#0000ee";

const SIZE = 16;
const LINE = 24;

/**
 * Draws the card into the cipher's source canvas.
 *
 * The shader encrypts whatever texture it is given. Chrome's HTML-in-Canvas API
 * can hand it a snapshot of real DOM, but that is still an origin trial, so on
 * every other browser we paint the same card here instead and the effect works
 * regardless.
 *
 * These metrics mirror `.card*` in globals.css deliberately -- one replaces the
 * other, so they have to land in the same place. Change both together.
 */
function paintCard(ctx: CanvasRenderingContext2D, w: number, h: number) {
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, w, h);

  ctx.font = `${SIZE}px ${MONO}`;
  ctx.textBaseline = "alphabetic";
  ctx.textAlign = "center";

  // CSS centres the glyphs in the line box; the baseline sits at roughly
  // (line - size) / 2 + cap height below the top of each line.
  const baseline = (LINE - SIZE) / 2 + SIZE * 0.78;
  const mid = w / 2;

  const underline = (text: string, top: number) => {
    const width = ctx.measureText(text).width;
    ctx.fillRect(mid - width / 2, top + baseline + 3, width, 1);
  };

  let top = 0;
  ctx.fillStyle = "#000";
  ctx.fillText(TITLE, mid, top + baseline);

  top += LINE + 8; // .card-body margin-top
  for (const line of BODY) {
    ctx.fillText(line, mid, top + baseline);
    top += LINE;
  }

  top += 10; // .card-cta margin-top
  ctx.fillStyle = LINK;
  ctx.fillText(CTA, mid, top + baseline);
  underline(CTA, top);
}

export function Newsletter() {
  return (
    <DecryptReveal
      className="reveal"
      background="#ffffff"
      radius={190}
      cell={7}
      scramble={0.06}
      paintSource={paintCard}
    >
      <a className="card" href={SUBSTACK} rel="me noreferrer">
        <h1 className="card-title">{TITLE}</h1>
        <p className="card-body">
          {BODY.map((line, i) => (
            <span key={line}>
              {i > 0 && <br />}
              {line}
            </span>
          ))}
        </p>
        <span className="card-cta">{CTA}</span>
      </a>
    </DecryptReveal>
  );
}
