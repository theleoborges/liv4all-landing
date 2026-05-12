# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static marketing site for **Liv4All** — an AI Chief of Staff product. Canonical URL is `https://liv4all.com`. Hosted on GitHub Pages; the legacy `hello.liv4all.com` hostname redirects to the apex.

## Architecture

- **Astro 5** static site. No SSR adapter; all pages pre-rendered to `dist/`.
- Shared chrome (nav, footer, head meta, chat widget, fade-in observer) lives in `src/layouts/BaseLayout.astro` + components under `src/components/`.
- Global CSS (design tokens, nav/footer/fade-in styles) is in `src/styles/global.css` and imported once by `BaseLayout`.
- Page-specific CSS stays scoped inside each `.astro` file's `<style>` block.
- Demo pages are generated from `src/data/demos.ts` via `src/pages/demo/[slug].astro`.
- Articles are an MDX content collection: sources under `src/content/articles/`, schema in `src/content.config.ts`, rendered by `src/layouts/ArticleLayout.astro` via `src/pages/articles/[...slug].astro`. List page at `src/pages/articles/index.astro`. RSS feed generated at `src/pages/rss.xml.js`.
- `public/` holds static assets, `CNAME`, and `.nojekyll`. Files there are copied to `dist/` verbatim.

## Pages

- `index.astro` — hero, carousel, demos, features, docs, signup form
- `about.astro`, `faq.astro`, `guides.astro`, `survey.astro`, `terms.astro`, `privacy.astro`
- `articles/index.astro` — list page, sorted by `pubDate` desc, featured post as hero card, drafts filtered in production
- `articles/[...slug].astro` — per-article page (getStaticPaths over the collection)
- `guides/whatsapp-onboarding.astro` — self-contained guide (no shared nav, inline footer)
- `demo/[slug].astro` — dynamic demo video pages
- `rss.xml.js` — RSS feed for articles

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

## Articles

When the user asks to "write an article", "publish a post", or similar:

1. Create `src/content/articles/<kebab-case-slug>.mdx`. The filename is the URL slug.
2. Fill frontmatter matching the schema in `src/content.config.ts`:
   - **required:** `title`, `description`, `pubDate` (ISO date)
   - **optional:** `updatedDate`, `author` (defaults to "Liv & Leo"), `tags` (array), `ogImage`, `draft` (defaults to `false`), `featured` (defaults to `false`)
3. Write the body in markdown (MDX lets you embed Astro components like `<VideoPlayer>` inline if useful).
4. Only one post should be marked `featured: true` at a time — the list page renders the first featured post as the hero card and treats the rest as regular entries.
5. In production builds, `draft: true` posts are excluded from the list, from `getStaticPaths`, from the sitemap, and from RSS. They still render during `npm run dev` for preview.

Reference the full workflow and frontmatter schema in README.md → "Writing articles".

## Form endpoints

- Waitlist signup: Formspree `xzdawwzo` (`src/pages/index.astro`)
- Alpha feedback: Formspree `xbdzbekz` (`src/pages/survey.astro`)

## Design system

Fonts: Inter (body) and JetBrains Mono (code/monospace). Dark theme with CSS custom properties defined in `:root` inside `src/styles/global.css` (`--bg`, `--accent`, `--text-dim`, etc.). Article prose styles live scoped inside `src/layouts/ArticleLayout.astro` under the `.article-prose` class.

## Tone of voice and writing style for articles


## voice

- conversational but authoritative — no corporate jargon, but technical credibility intact
- contrarian but evidence-based — challenge conventional wisdom with data and lived experience, not vibes
- practical over theoretical — every piece must leave the reader with something they can apply on monday
- personal anecdote → systematic framework — open with a story or sharp observation, build to a generalisable
insight
- second-order thinking — connect technical decisions to business outcomes (margins, growth, hiring, risk)
- sardonic wit — sophisticated workplace satire that exposes corporate absurdities from an insider's seat.
dry, knowing, never mean-spirited or snarky-for-snark's-sake

## spelling & mechanics

- british spelling throughout (organisation, behaviour, optimise, centre, etc.)
- punctuation discipline:
   - avoid em-dashes as a default. use them ONLY when no other punctuation works
   - prefer commas for natural pauses, colons to introduce explanations, semicolons to join related independent
clauses, parentheses for genuine asides
   - if a sentence has more than one em-dash, rewrite it
- sentences vary in length; short ones land hits, longer ones carry argument

## ai tells to actively avoid

- the "[thing happened]. not because [obvious cause]. because [the actual point]." cadence — manufactures
false suspense, screams llm
- related shapes: "not x. y." or "it's not x. it's y." — only keep when they carry genuine thesis-bearing
parallelism, not when they're faking insight by negating a strawman
- generic "in today's fast-paced world" openers
- listicle-bait headers without substance underneath
- hedging into mush ("it depends, but…")

## what not to do

- no corporate platitudes
- no breathless ai boosterism
- no vendor-coded language
- no half-finished frameworks dressed up as insight
- no headers without payoff underneath