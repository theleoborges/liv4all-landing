# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static marketing site for **Liv4All** — an AI Chief of Staff product. Canonical URL is `https://liv4all.com`. Hosted on GitHub Pages; the legacy `hello.liv4all.com` hostname redirects to the apex.

**The product is shutting down.** Liv closed to new signups on 25 August 2026; the platform shuts down on **26 September 2026** and all user data is permanently deleted on **26 October 2026**. Subscribers active on the shutdown date are refunded pro-rata automatically. The site stays up as an archive with every page marked closed:

- `src/components/ShutdownBanner.astro` is pinned above the nav on every page (including the standalone `DemoLayout` and the WhatsApp guide, which have their own chrome). It sizes off `--banner-h` in `src/styles/global.css`, which also offsets `body` and `nav`.
- `src/components/ClosedNotice.astro` is the in-page callout for pages whose body copy describes a product no longer for sale. Default slot content covers the common case.
- `src/pages/shutdown.astro` is the canonical notice everything links to. Keep it, `/terms#closure` and `/privacy#closure` consistent with each other and with the email sent to users.
- Ivy shut down with Liv. The chat widget was removed (it loaded `app.liv4all.com/embed/chat.js`), and `/ivy` is marked retired.
- No live signup, trial or sales CTAs anywhere. `app.liv4all.com` is referenced only by the nav Login link (dead after 26 September) and by legal/scope text. Use absolute dates in copy, never tense-dependent phrasing, so pages stay accurate on both sides of the shutdown date.

## Architecture

- **Astro 5** static site. No SSR adapter; all pages pre-rendered to `dist/`.
- Shared chrome (shutdown banner, nav, footer, head meta, fade-in observer) lives in `src/layouts/BaseLayout.astro` + components under `src/components/`.
- Global CSS (design tokens, nav/footer/fade-in styles) is in `src/styles/global.css` and imported once by `BaseLayout`.
- Page-specific CSS stays scoped inside each `.astro` file's `<style>` block.
- Demo pages are generated from `src/data/demos.ts` via `src/pages/demo/[slug].astro`.
- Articles are an MDX content collection: sources under `src/content/articles/`, schema in `src/content.config.ts`, rendered by `src/layouts/ArticleLayout.astro` via `src/pages/articles/[...slug].astro`. List page at `src/pages/articles/index.astro`. RSS feed generated at `src/pages/rss.xml.js`.
- `answers` is a second MDX collection (`src/content/answers/`) powering a hidden programmatic SEO/GEO layer — see the "Answers" section below. Rendered by `src/layouts/AnswerLayout.astro` via `src/pages/answers/[...slug].astro`, hub at `src/pages/answers/index.astro`. Structured-data (`src/components/JsonLd.astro`) and canonical tags (threaded through `Head.astro`/`BaseLayout.astro`) were added for this layer and are reusable elsewhere.
- `public/` holds static assets, `CNAME`, and `.nojekyll`. Files there are copied to `dist/` verbatim.

## Pages

- `index.astro` — hero, carousel, demos, features, docs, closure notice (the signup form and the `/api/spots` capacity probe were removed)
- `shutdown.astro` — canonical service closure notice: dates, data, refunds, contact
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
npm run build     # astro build → legacy .html redirect shims
npm run preview   # serves the built dist/
npm run indexnow  # manual-only now; re-pings IndexNow for all /answers/ URLs (uses dist/, run after a build)
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

A hidden content channel of long-tail Q&A pages at `/answers/<slug>`, adapted from the SEO/GEO playbook at `~/projects/trueloan/docs/SEO-GEO-PLAYBOOK.md`. One search question = one page. Pages are crawlable, sitemapped, and structured-data-rich, but **not linked from the site nav/footer** — they exist to be found from Google and AI assistants. Distinct from `articles` (which are editorial/chronological).

**Post-shutdown status:** the layer is kept, not deleted. The pages are genuine OpenClaw/self-hosting explainers and still rank, but there is nothing left to convert to. `AnswerLayout` renders a shutdown notice where the trial CTA used to be, the per-page `## Try this in Liv` sections were stripped from all 60 files, and UTM tagging is gone. Any Liv pricing or trial language in bodies has been past-tensed. Do not reintroduce live-offer copy.

**The original positioning, for context:** Liv was "OpenClaw as a Service." OpenClaw (github.com/openclaw/openclaw, MIT) is the open-source agent loop, normally self-hosted by tinkerers; Liv wrapped it with managed infra + security (CASA Tier 2, encrypted user vaults) so you skipped the ops.

When asked to add answer pages:

1. Create `src/content/answers/<kebab-case-slug>.mdx`. Filename = URL slug. Match the slug to the target search query.
2. Fill frontmatter per the `answers` schema in `src/content.config.ts`:
   - **required:** `title`, `question` (natural-language → FAQPage JSON-LD), `answer` (1–2 sentence direct answer → FAQ answer + the on-page lede), `description` (≤160 chars), `topic` (enum), `intent` (enum), `datePublished`
   - **optional:** `updated`, `related` (sibling slugs — must resolve, validated at build), `draft`
3. Body is MDX with **no H1** (the layout renders title + the `answer` as a highlighted lede). Body template: opening expansion → `## How it works` (link authoritative sources) → `## Worked example` (table) → `## Common questions` (5–8 Q&As). Do NOT write a disclaimer, a CTA button, or a `## Try this in Liv` section — `AnswerLayout` renders the disclaimer and the shutdown notice.
4. Ground every claim: OpenClaw/Manus/competitor/cost facts are web-verified; Liv claims never exceed the real product. Compliance line: Liv is an independent service built on OpenClaw, **not affiliated/endorsed**; comparisons factual, never disparaging.
5. Cross-link 2–4 siblings in the body via `/answers/<slug>` links. Drafts excluded from build/sitemap in production (same as articles).

The 50-page first batch, scored worklist, and the full writer brief live in `docs/answers-worklist.md` and `docs/answers-writer-brief.md` (written pre-shutdown; read them as history). Discovery: `@astrojs/sitemap` auto-includes the pages and AI crawlers are allowed in `public/robots.txt`. IndexNow pinging was removed from `npm run build`; `scripts/indexnow-ping.mjs` and `npm run indexnow` survive for manual use.

## Analytics

- **Cloudflare Web Analytics** (cookieless, no consent banner) is loaded site-wide via `src/components/Analytics.astro` (rendered by `BaseLayout`). The beacon token is public and hardcoded in that component; rendering is gated on `import.meta.env.PROD` so `npm run dev` never sends localhost traffic. Use it for traffic + referrers (including GEO referrers: chatgpt.com, perplexity.ai, Bing).
- **Conversion attribution:** removed with the shutdown. There are no trial links and no UTM tagging left on answer pages.
- **Google Search Console** is the SEO ranking instrument (impressions, queries, which page ranks); no on-site analytics replaces it.

## Form endpoints

None. The waitlist form (Formspree `xzdawwzo`) and the alpha feedback survey (Formspree `xbdzbekz`) were both retired at shutdown. `/survey` is now a closed notice. Do not wire new forms up without asking.

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