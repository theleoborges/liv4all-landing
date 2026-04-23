# Liv4All Landing

Static marketing site for **liv4all.com**, built with [Astro](https://astro.build/). Legacy `hello.liv4all.com` redirects to the canonical apex.

## Stack

- Astro 5 (static output, no SSR adapter)
- `@astrojs/mdx` for article content
- `@astrojs/rss` for the articles feed
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
  layouts/        BaseLayout.astro, DemoLayout.astro, ArticleLayout.astro
  components/     Head, Nav, Footer, ChatWidget, FadeInScript, SignupForm, VideoPlayer, …
  pages/          Route-mapped .astro files (+ rss.xml.js, articles/, demo/)
  content/        articles/*.mdx (content collection)
  content.config.ts   article collection schema
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

## Writing articles

Articles live under `src/content/articles/` as `.md` or `.mdx` files. The filename (without extension) becomes the URL slug — `src/content/articles/voice-ai-shift.mdx` → `/articles/voice-ai-shift/`.

### Create a new post

1. Drop a new `.mdx` file under `src/content/articles/`. Use a kebab-case filename.
2. Fill in the frontmatter (see schema below).
3. Write the body in markdown. Use MDX if you want to embed an Astro component inline (e.g. `<VideoPlayer>` from `src/components/`).
4. `npm run dev` to preview — drafts render locally.
5. When ready, flip `draft: false` (or remove the field), commit, and push. GitHub Actions rebuilds; the sitemap and RSS feed pick up the new post automatically.

### Frontmatter schema

Defined in `src/content.config.ts`. All fields are validated at build time — the build fails loudly if a post is missing a required field or has a bad type.

```yaml
---
title: voice AI — the next platform shift       # required
description: why the next wave of AI is voice.  # required (1-2 sentences; used in list cards, OG tags, RSS)
pubDate: 2026-04-23                             # required (ISO date)
updatedDate: 2026-04-28                         # optional
author: Leo Borges                              # optional, defaults to "Liv & Leo"
tags: [voice, platform]                         # optional, defaults to []
ogImage: ./voice-ai-hero.png                    # optional per-article OG image (falls back to /og-image.png)
draft: true                                     # optional, defaults to false — drafts are hidden in production
featured: true                                  # optional, defaults to false — only one featured post renders as the hero card
---
```

### Conventions

- **One featured post at a time.** The list page picks the first post with `featured: true` for the hero card. If multiple are marked featured, the rest fall back to the regular list.
- **Drafts are safe.** `draft: true` posts are excluded from the list page, from individual page generation, from the sitemap, and from the RSS feed in production builds — but still render during `npm run dev`.
- **Markdown ergonomics.** Standard markdown works (`##` headings, `>` blockquotes, fenced code blocks with Shiki highlighting, tables). MDX additionally lets you import and use Astro components inside the post body.
- **Images.** Drop them next to the post (e.g. `src/content/articles/voice-ai-shift/hero.png`) and reference them with relative paths. Astro's image pipeline hashes and optimises them.

### RSS feed

Served at `/rss.xml`, updated automatically on every build. `Head.astro` already emits the `<link rel="alternate" type="application/rss+xml">` autodiscovery tag on every page, so readers like Feedly pick it up without extra config.
