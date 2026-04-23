# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static marketing site for **Liv4All** (liv4all.com) — an AI Chief of Staff product. Hosted on GitHub Pages at hello.liv4all.com.

## Architecture

- **Astro 5** static site. No SSR adapter; all pages pre-rendered to `dist/`.
- Shared chrome (nav, footer, head meta, chat widget, fade-in observer) lives in `src/layouts/BaseLayout.astro` + components under `src/components/`.
- Global CSS (design tokens, nav/footer/fade-in styles) is in `src/styles/global.css` and imported once by `BaseLayout`.
- Page-specific CSS stays scoped inside each `.astro` file's `<style>` block.
- Demo pages are generated from `src/data/demos.ts` via `src/pages/demo/[slug].astro`.
- `public/` holds static assets, `CNAME`, and `.nojekyll`. Files there are copied to `dist/` verbatim.

## Pages

- `index.astro` — hero, carousel, demos, features, docs, signup form
- `about.astro`, `faq.astro`, `guides.astro`, `survey.astro`, `terms.astro`, `privacy.astro`
- `guides/whatsapp-onboarding.astro` — self-contained guide (no shared nav, inline footer)
- `demo/[slug].astro` — dynamic demo video pages

## Development

```bash
npm install
npm run dev       # astro dev server
npm run build     # builds dist/ and emits legacy .html redirect shims
npm run preview   # serves the built dist/
```

## Deployment

Push to `main` → GitHub Actions (`.github/workflows/deploy.yml`) builds and deploys to GitHub Pages. The Pages source must be set to **GitHub Actions** in repo settings. `public/CNAME` preserves the custom domain.

## Legacy URL handling

`scripts/generate-redirects.mjs` (invoked from `npm run build` after `astro build`) writes meta-refresh shims for every pre-Astro `.html` URL (`/faq.html`, `/demo/daily-briefing.html`, etc.) pointing at the new directory URL so inbound links don't 404.

## Form endpoints

- Waitlist signup: Formspree `xzdawwzo` (`src/pages/index.astro`)
- Alpha feedback: Formspree `xbdzbekz` (`src/pages/survey.astro`)

## Design system

Fonts: Inter (body) and JetBrains Mono (code/monospace). Dark theme with CSS custom properties defined in `:root` inside `src/styles/global.css` (`--bg`, `--accent`, `--text-dim`, etc.).
