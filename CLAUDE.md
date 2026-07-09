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
- `answers` is a second MDX collection (`src/content/answers/`) powering a hidden programmatic SEO/GEO layer — see the "Answers" section below. Rendered by `src/layouts/AnswerLayout.astro` via `src/pages/answers/[...slug].astro`, hub at `src/pages/answers/index.astro`. Structured-data (`src/components/JsonLd.astro`) and canonical tags (threaded through `Head.astro`/`BaseLayout.astro`) were added for this layer and are reusable elsewhere.
- `public/` holds static assets, `CNAME`, and `.nojekyll`. Files there are copied to `dist/` verbatim.

## Internationalisation (i18n)

The site is bilingual: English (default, unprefixed URLs) and Brazilian Portuguese under `/pt-br/`.

- All helpers live in `src/i18n/index.ts`: the `Lang` type (`'en' | 'pt-br'`), `TRANSLATED_ROUTES` (the routes that exist in both languages), `localizePath()` (prefixes internal links for pt-br, leaves English-only routes alone), `canonicalUrl()`, `alternateUrl()` (language-toggle target), and the shared chrome strings (`ui`).
- **Translated page pattern:** each bilingual page's full markup/CSS/scripts live in a component under `src/components/pages/` (e.g. `AboutPage.astro`) that takes a `lang` prop and pulls every user-visible string from a `const copy = { en: {...}, 'pt-br': {...} }[lang]` dictionary in its frontmatter. `src/pages/<route>.astro` and `src/pages/pt-br/<route>.astro` are thin wrappers rendering that component with `lang="en"` / `lang="pt-br"`. Markup is single-sourced — never duplicate HTML per language.
- When adding a new bilingual page: create the component + both wrappers AND add the route to `TRANSLATED_ROUTES` in `src/i18n/index.ts` (that's what turns on nav link localisation, the hreflang pair in `Head.astro`, and the language-toggle mapping).
- Nav/footer labels are bilingual in `src/data/nav.ts` (each item carries a `label: { en, 'pt-br' }`); `Nav.astro` renders the EN/PT toggle and localises links via `localizePath`.
- `BaseLayout` takes `lang` (defaults to `'en'`) and sets `<html lang>`; `Head.astro` emits `hreflang` alternates (en / pt-BR / x-default) for routes in `TRANSLATED_ROUTES` and under `TRANSLATED_PREFIXES` (`/answers/`, `/articles/`, `/demo/`), plus `og:locale`.
- **Content collections:** Portuguese entries live in a `pt-br/` subfolder of the same collection (`src/content/answers/pt-br/<slug>.mdx`, `src/content/articles/pt-br/<slug>.mdx`) — same filename as the English source, so ids carry a `pt-br/` prefix (`entryLang()`/`entrySlug()` in `src/i18n` decode this). English routes and RSS filter `entryLang(id) === 'en'`; `src/pages/pt-br/answers|articles/` render the `pt-br/` entries. `AnswerLayout`/`ArticleLayout` derive `lang` from the entry id and translate their own chrome (breadcrumbs, CTA, disclaimer, date locale). **Every new answer/article should be created in BOTH languages** — hreflang pairs are emitted by URL prefix and assume the counterpart exists. Translated frontmatter: `title`, `question`, `answer`, `description` (answers) / `title`, `description` (articles); everything else (topic, intent, dates, tags, related slugs — kept in English) stays identical.
- Demo copy is bilingual in `src/data/demos.ts` (`getDemos(lang)`); `/pt-br/demo/[slug].astro` mirrors the English route.
- **English-only surfaces (deliberate):** `/terms`, `/privacy`, and the RSS feed (EN articles only). `localizePath` leaves links to them unprefixed, and the language toggle on those pages falls back to the pt-br home.
- Form endpoints (Formspree) and submitted field `name`/`value` attributes stay identical in both languages — only visible labels are translated.
- `scripts/indexnow-ping.mjs` submits both `/answers/` and `/pt-br/answers/` URLs on CI deploys.

## Pages

- `index.astro` — hero, carousel, demos, features, docs, signup form
- `about.astro`, `faq.astro`, `guides.astro`, `survey.astro`, `terms.astro`, `privacy.astro`
- `articles/index.astro` — list page, sorted by `pubDate` desc, featured post as hero card, drafts filtered in production
- `articles/[...slug].astro` — per-article page (getStaticPaths over the collection)
- `guides/whatsapp-onboarding.astro` — self-contained guide (no shared nav, inline footer)
- `demo/[slug].astro` — dynamic demo video pages
- `answers/index.astro` — topic-grouped hub for the SEO/GEO layer; intentionally NOT linked from nav/footer (`src/data/nav.ts`)
- `answers/[...slug].astro` — per-answer page (getStaticPaths over the collection, drafts filtered in production)
- `rss.xml.js` — RSS feed for articles (answers are deliberately excluded)

## Development

```bash
npm install
npm run dev       # astro dev server
npm run build     # astro build → legacy .html redirect shims → IndexNow ping (ping only runs on CI)
npm run preview   # serves the built dist/
npm run indexnow  # manually re-ping IndexNow for all /answers/ URLs (uses dist/, run after a build)
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

## Answers (programmatic SEO/GEO layer)

A hidden content channel of long-tail Q&A pages at `/answers/<slug>`, adapted from the SEO/GEO playbook at `~/projects/trueloan/docs/SEO-GEO-PLAYBOOK.md`. One search question = one page. Pages are crawlable, sitemapped, and structured-data-rich, but **not linked from the site nav/footer** — they exist to be found from Google and AI assistants, and each CTAs into Liv. Distinct from `articles` (which are editorial/chronological).

**The positioning that makes it work:** Liv is "OpenClaw as a Service." OpenClaw (github.com/openclaw/openclaw, MIT) is the open-source agent loop, normally self-hosted by tinkerers; Liv wraps it with managed infra + security (CASA Tier 2, encrypted user vaults) so you skip the ops. It sits between cheap managed hosts (OneClaw) and polished walled agents (Manus). The answers layer is the first place this OpenClaw relationship is stated publicly. Strategy is "bridge": capture build/self-host/compare queries, convert to the managed "without the ops" option.

When asked to add answer pages:

1. Create `src/content/answers/<kebab-case-slug>.mdx`. Filename = URL slug. Match the slug to the target search query.
2. Fill frontmatter per the `answers` schema in `src/content.config.ts`:
   - **required:** `title`, `question` (natural-language → FAQPage JSON-LD), `answer` (1–2 sentence direct answer → FAQ answer + the on-page lede), `description` (≤160 chars), `topic` (enum), `intent` (enum), `datePublished`
   - **optional:** `updated`, `related` (sibling slugs — must resolve, validated at build), `draft`
3. Body is MDX with **no H1** (the layout renders title + the `answer` as a highlighted lede). Follow the body template: opening expansion → `## How it works` (link authoritative sources) → `## Worked example` (table, often self-host-vs-Liv) → `## Try this in Liv` → `## Common questions` (5–8 Q&As). Do NOT write a disclaimer or CTA button — `AnswerLayout` renders both.
4. Ground every claim: OpenClaw/Manus/competitor/cost facts are web-verified; Liv claims never exceed the real product. Compliance line: Liv is an independent service built on OpenClaw, **not affiliated/endorsed**; comparisons factual, never disparaging.
5. Cross-link 2–4 siblings in the body via `/answers/<slug>` links. Drafts excluded from build/sitemap in production (same as articles).

The 50-page first batch, scored worklist, and the full writer brief live in `docs/answers-worklist.md` and `docs/answers-writer-brief.md`. Discovery: `@astrojs/sitemap` auto-includes the pages; AI crawlers are explicitly allowed in `public/robots.txt`; `scripts/indexnow-ping.mjs` submits all answer URLs to IndexNow on each CI deploy (public key file `public/<key>.txt`). After deploy, the human step is Google Search Console: submit sitemap + Request Indexing on the top slugs.

## Analytics

- **Cloudflare Web Analytics** (cookieless, no consent banner) is loaded site-wide via `src/components/Analytics.astro` (rendered by `BaseLayout`). The beacon token is public and hardcoded in that component; rendering is gated on `import.meta.env.PROD` so `npm run dev` never sends localhost traffic. Use it for traffic + referrers (including GEO referrers: chatgpt.com, perplexity.ai, Bing).
- **Conversion attribution:** answer-page trial links point at `https://app.liv4all.com` with UTM params (`utm_source=answers`, `utm_medium=content`, `utm_campaign=seo-geo`, `utm_content=<slug>`). The CTA is tagged server-side; a small scoped script in `AnswerLayout` tags any in-body `app.liv4all.com` links with the same per-page slug. Trials are measured in the app's own analytics, filtered by `utm_campaign=seo-geo` / `utm_content`.
- **Google Search Console** is the SEO ranking instrument (impressions, queries, which page ranks); no on-site analytics replaces it.

## Form endpoints

- Waitlist signup: Formspree `xzdawwzo` (`src/pages/index.astro`)
- Alpha feedback: Formspree `xbdzbekz` (`src/pages/survey.astro`)

## Design system

Fonts: Inter (body) and JetBrains Mono (code/monospace). Dark theme with CSS custom properties defined in `:root` inside `src/styles/global.css` (`--bg`, `--accent`, `--text-dim`, etc.). Article prose styles live scoped inside `src/layouts/ArticleLayout.astro` under the `.article-prose` class; `AnswerLayout.astro` mirrors the same `.article-prose` block plus its own lede/CTA/disclaimer chrome.

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