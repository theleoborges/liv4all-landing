# Liv4All Landing

Static marketing site for **hello.liv4all.com**, built with [Astro](https://astro.build/).

## Stack

- Astro 5 (static output, no SSR adapter)
- `@astrojs/sitemap`
- Plain CSS (no framework)
- GitHub Pages via Actions

## Develop

```bash
npm install
npm run dev         # http://localhost:4321
```

## Build

```bash
npm run build       # runs astro build + scripts/generate-redirects.mjs
npm run preview
```

Output lands in `dist/`. The build script also emits meta-refresh shims at legacy `.html` paths (e.g. `faq.html` → `/faq/`) so external links to the pre-Astro URLs don't break.

## Deploy

Push to `main`; `.github/workflows/deploy.yml` builds and publishes to GitHub Pages. The custom domain is preserved via `public/CNAME`. Pages source must be set to **GitHub Actions** in repo settings.

## Structure

```
src/
  layouts/        BaseLayout.astro, DemoLayout.astro
  components/     Head, Nav, Footer, ChatWidget, FadeInScript, SignupForm, VideoPlayer, …
  pages/          Route-mapped .astro files
  data/           demos.ts, nav.ts (single sources of truth)
  styles/         global.css (vars, nav, footer, fade-in — shared across all main pages)
public/           Static assets served as-is (images, videos, CNAME, .nojekyll)
scripts/
  generate-redirects.mjs    Writes legacy .html → directory URL shims into dist/
```

## Forms

- Main signup uses Formspree endpoint `xzdawwzo` (see `src/pages/index.astro`).
- Alpha feedback survey uses `xbdzbekz` (see `src/pages/survey.astro`).

Both post via fetch/JSON and swap in a thank-you state on success.
