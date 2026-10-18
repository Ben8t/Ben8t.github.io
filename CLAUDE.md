# CLAUDE.md

Guidance for Claude Code (claude.ai/code) when working in this repository.

## Project Overview

A deliberately tiny personal site for Benoit: one page, one interactive element.
Static Next.js export, deployed on Cloudflare at benventure.net.

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
- Runtime dependencies: `next`, `react`, `react-dom`, `posthog-js`. That is the
  whole list. `posthog-js` is the one deliberate exception to the weight rule.

## Analytics (PostHog)

Set up by the PostHog wizard. EU cloud (`https://eu.i.posthog.com`).

- `instrumentation-client.ts` (repo root) runs `posthog.init` before hydration,
  with exception capture and logs on. In dev it **throws** if either env var is
  missing; in production it silently skips init.
- Custom events, each guarded by an `isPostHogConfigured` check:
  `email_contact_clicked` and `professional_profile_clicked` in `page.tsx`,
  `newsletter_link_clicked` in `Newsletter.tsx`.
- `src/app/global-error.tsx` reports uncaught errors via `captureException`.
- `page.tsx` is a client component (`"use client"`) because of the click
  handlers. Metadata lives in `layout.tsx`, so that is fine.

Env vars (see `.env.example`): `NEXT_PUBLIC_POSTHOG_KEY` and
`NEXT_PUBLIC_POSTHOG_HOST`. They are inlined at build time, so they must exist
wherever the build runs: `.env.local` locally, and as build variables on the
`benventure` Worker (Settings → Build → Variables and secrets) for Cloudflare
Workers Builds. Env files are not committed. Without the variables the site
deploys with no tracking and no error.

No reverse proxy: the wizard's usual Next `rewrites` are incompatible with
`output: 'export'`, so events go straight to PostHog's host.

## Commands

```bash
npm install
npm run dev      # dev server
npm run build    # static export to /out
npm run deploy   # build + wrangler deploy to Cloudflare
```

There is no lint script: `next lint` was removed in Next 16 and no ESLint
config was carried over.

## Structure

```
instrumentation-client.ts   PostHog init
wrangler.jsonc              Cloudflare Worker config
src/app/
  layout.tsx      html/body shell + metadata
  page.tsx        the entire site
  global-error.tsx  error boundary, reports to PostHog
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

Cloudflare Workers static assets, configured in `wrangler.jsonc`: the Worker
`benventure` serves `/out` with no script, on the custom domains
`benventure.net` and `www.benventure.net` (zone on Cloudflare, DNS records are
managed by the custom-domain routes). Wrangler is not a dependency on purpose.

Pushing to `master` deploys via Cloudflare Workers Builds (Git integration on
the `benventure` Worker: build `npm run build`, deploy `npx wrangler deploy`).
`npm run deploy` does the same thing from a local machine.
No API routes (static export forbids them).

## History

Everything before this rebuild — 13 project case studies, `/experience`,
`/ai-sessions` with its Supabase form, a three.js refraction hero — lives in
git history on `master` and the older feature branches. It was removed
deliberately, not lost.
