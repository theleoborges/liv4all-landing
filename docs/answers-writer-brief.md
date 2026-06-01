# Answer-page writer brief (read fully before writing)

You are writing **programmatic SEO/GEO answer pages** for Liv4All's hidden `answers` content layer. Each page targets one search question. Output: one MDX file per assigned slug at:

`/Users/leoborges/projects/liv4all/liv4all-landing/src/content/answers/<slug>.mdx`

Use the Write tool for each file. Do not touch any other files.

## Positioning — the through-line for every page

**Liv is "OpenClaw as a service."** OpenClaw (https://github.com/openclaw/openclaw, MIT, open-source personal AI agent — "the lobster way 🦞") is powerful but built for tinkerers: you self-host it, write its `SOUL.md`, and carry ongoing ops. Manus (Meta-acquired) is the polished opposite: a sandboxed solo agent with no integrations and credit pricing. **Liv sits in the middle** — the OpenClaw agent loop, persistence and real integrations (Gmail, Calendar, Telegram, WhatsApp), wrapped in managed infrastructure and security (CASA Tier 2, encrypted user vaults), so you skip the ops. Tinkerers love it.

Rule: **answer the question fully and honestly for free**, then point to Liv as the obvious "without the ops" next step. Never withhold the answer to force a click — that kills the GEO citation value.

## Verified facts (ground every claim in these; do NOT invent or exceed)

**OpenClaw**: MIT open-source, 15k+ GitHub stars, 200+ contributors. Runs on any OS. LLM-agnostic (Claude / GPT / Gemini / DeepSeek). Channels: Telegram, WhatsApp, Slack, Discord, Signal, iMessage and more. Self-host via Docker or Node (~15 min) or a Railway one-click template (~5 min). Minimum specs roughly 2 cores / 2 GB RAM / 2 GB storage, Ubuntu 24.04 recommended. Config files: `SOUL.md` (the agent's identity/personality, 20–45 min to write well), `HEARTBEAT.md` (its schedule), `AGENTS.md`, `USER.md`, plus memory files. Self-host maintenance is roughly 1–3 hours/month (OAuth token expiry, codebase updates, heartbeat tuning, debugging skill failures); infra + LLM API typically under $100/month. Cheap managed hosts exist (OneClaw, Blink Claw, ~$12–22/month) but add little security/compliance.

**Manus**: built by Butterfly Effect, acquired by Meta in Dec 2025. Cloud-sandbox autonomous agent with a "My Computer" feature. Solo, invite-gated, general-purpose. No team collaboration, no persistent workspace, no integrations. Free tier = limited daily credits; Pro $20–200/month, credit-based (complex tasks burn 500–900 credits), so costs are hard to predict.

**Other tools** (for comparison pages, factual only): Lindy (~$49.99/mo, 4000+ integrations), AutoGPT (free, open-source, runs locally), ChatGPT Agent (replaced Operator), Devin (~$500/mo, coding-focused), Taskade Genesis, OneClaw (managed OpenClaw hosting).

**AI chief of staff (category)**: an assistant is a tool you prompt for one task; a chief of staff is a continuous system that triages email, preps meetings, tracks follow-ups, works overnight. AI handles ~70–80% of the role (email, scheduling, follow-up, tasks); humans keep relationships, strategic judgment, physical presence. Cost anchors: human chief of staff $120–200k/yr, executive assistant $60–150k/yr, virtual assistant $2–5k/mo. Category tools: alfred_ (~$24.99/mo), Alyna, Arahi.

**Liv (the real product — never exceed these)**: a persistent AI agent you reach through Telegram (required and the default) and optionally WhatsApp (invite-only, needs a dedicated eSIM; Pro = DMs, Max = DMs + group chats). It triages email, manages your calendar, books things (e.g. restaurants), sends daily briefings, turns forwarded messages into calendar events, and stores secrets in encrypted per-user **vaults**. Gmail/Calendar access is via Google OAuth and user-revocable. Liv passed Google **CASA Tier 2** (independently verified by TAC Security). Your data is not used to train models. Outbound drafts need your approval before sending. Each agent gets its own email address and Telegram identity. Pricing: **Pro $79/mo, Max $149/mo, 14-day free trial, no credit card**. Currently early access / batched onboarding. CTA target: **https://app.liv4all.com**.

## Compliance guardrail (hard line)

Liv is an **independent managed service built on OpenClaw — not affiliated with or endorsed by** OpenClaw, Manus, or any product you name. Comparisons must be factual and fair, never disparaging ("alternative to", not "X is bad"). Invent no Liv capabilities beyond the facts above. The per-page disclaimer and the trial CTA button are rendered automatically by the layout — **do not write your own disclaimer or CTA button**.

## Frontmatter (exact — fill from your assigned rows)

```yaml
---
title: "Readable title that closely matches the target query"
question: "The natural-language question a person would type or ask"
answer: "One or two sentences that answer it directly. Lead with the key fact."
description: "Meta description, <=160 characters, also serves as the answer snippet."
topic: <exactly the topic assigned>      # enum, do not change
intent: <exactly the intent assigned>    # enum, do not change
datePublished: 2026-06-01
related:                                  # exactly the 3 slugs assigned
  - slug-a
  - slug-b
  - slug-c
---
```

IMPORTANT: the layout renders `answer` as a highlighted lede **above** your body. Do **not** repeat that sentence verbatim as your first body line.

## Body template (MDX, NO H1 — the layout renders the title + lede)

1. Open with 1–2 short paragraphs expanding the answer (don't repeat the lede verbatim).
2. `## How it works` — explain the mechanism; link authoritative sources inline (e.g. `[OpenClaw](https://github.com/openclaw/openclaw)`, Google CASA docs).
3. `## Worked example` — concrete, usually a markdown table. Favourite pattern: self-hosting OpenClaw vs Liv across setup time / monthly cost / ops hours. Ground numbers in the brief.
4. `## Try this in Liv` — a short, honest step-by-step into the product (start a trial at https://app.liv4all.com, message Liv on Telegram, connect Google, optionally link WhatsApp). Reflect real onboarding (Telegram default; early access).
5. `## Common questions` — 5–8 short Q&As; use `###` for each question, then a 1–2 sentence answer. Cover adjacent queries and misconceptions to widen keyword coverage.

## Style

- British spelling throughout (organise, behaviour, optimise, licence).
- Clear, direct, plain, answer-first. Technical credibility, no fluff, no marketing breathlessness.
- Avoid AI tells: no "not X. Y." faux-suspense cadence, no "in today's fast-paced world" openers, no hedging into mush.
- Sentences vary in length. Minimise em-dashes; prefer commas, colons, semicolons.
- ~500–900 words per page.

## Cross-linking (zero broken links)

In the body, link naturally to 2–4 sibling pages with markdown links to `/answers/<slug>`. **Only use slugs from the master list below** — any other slug is a broken link. Your assigned `related` slugs are good candidates but you may link any master-list slug where relevant.

## MASTER SLUG LIST (the only valid internal answer links)

what-is-openclaw, how-to-deploy-openclaw, openclaw-hosting, how-to-run-openclaw-without-devops, openclaw-setup-guide, is-openclaw-free, openclaw-soul-md-explained, openclaw-system-requirements, how-to-self-host-an-ai-agent, cost-to-self-host-an-ai-agent, self-hosted-vs-managed-ai-agent, best-vps-for-ai-agent, how-much-does-openclaw-cost-to-run, self-host-ai-agent-maintenance, do-i-need-a-server-for-a-personal-ai-agent, how-to-build-a-personal-ai-agent, build-vs-buy-ai-agent, what-is-a-persistent-ai-agent, how-an-ai-agent-loop-works, how-to-give-an-ai-agent-email-and-calendar-access, what-is-an-autonomous-ai-agent, how-to-give-your-ai-agent-memory, ai-agent-vs-chatbot, manus-ai-alternative, best-manus-alternative, openclaw-vs-manus, chatgpt-vs-ai-agent, autogpt-alternative, lindy-ai-alternative, openclaw-vs-oneclaw, best-self-hosted-ai-assistant, claude-vs-ai-agent-that-does-things, ai-to-triage-your-email, ai-calendar-assistant, ai-that-books-restaurants, how-to-get-a-daily-ai-briefing, what-is-an-ai-chief-of-staff, ai-chief-of-staff-vs-executive-assistant, ai-that-can-take-actions-not-just-answer, telegram-ai-assistant, whatsapp-ai-agent, how-to-connect-an-ai-agent-to-telegram, how-to-connect-an-ai-agent-to-whatsapp, best-messaging-app-for-an-ai-agent, is-it-safe-to-give-ai-access-to-your-gmail, how-to-securely-store-api-keys-for-ai-agents, self-hosted-ai-agent-security-risks, what-is-casa-tier-2-gmail, how-much-does-a-managed-ai-agent-cost, how-to-get-started-with-a-personal-ai-agent
