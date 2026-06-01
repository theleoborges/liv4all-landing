# Answers worklist — programmatic SEO/GEO layer

One question = one page at `/answers/<slug>`. Hidden from nav; discovered via Google + AI assistants. See `CLAUDE.md` and the SEO/GEO playbook for the methodology. Source-grounded moat: every claim about OpenClaw, Manus, costs, and Liv's behaviour is web-verified or matches the real product (demos in `src/data/demos.ts`, FAQ, CASA Tier 2).

## Positioning (the through-line for every page)

**Liv is OpenClaw as a service.** OpenClaw (github.com/openclaw/openclaw, MIT, open-source personal AI agent — "the lobster way 🦞") is powerful but built for tinkerers: you self-host it, write its `SOUL.md`, and carry 1–3 hrs/month of ops. Manus (Meta-acquired) is the polished opposite: a sandboxed solo agent with no integrations, no persistent workspace, credit-priced. Liv sits in the middle — the OpenClaw agent loop, persistence and real integrations (Gmail, Calendar, Telegram, WhatsApp), wrapped in managed infra + security (CASA Tier 2, user vaults), so you skip the ops. Always answer the question fully and for free, then point to Liv as the obvious "without the ops" next step.

## Verified facts (the brief)

- **OpenClaw**: MIT open-source, 15k+ stars, 200+ contributors. Runs on any OS. LLM-agnostic (Claude/GPT/Gemini/DeepSeek). Channels: Telegram, WhatsApp, Slack, Discord, Signal, iMessage + more. Self-host via Docker/Node (~15 min) or Railway one-click (~5 min). Min specs ~2 cores / 2GB RAM / 2GB storage, Ubuntu 24.04. Config: `SOUL.md` (identity/personality, 20–45 min to write well), `HEARTBEAT.md` (schedule), `AGENTS.md`, `USER.md`, memory files. Self-host maintenance ~1–3 hrs/month (OAuth token expiry, updates, heartbeat tuning, skill debugging); infra+API typically <$100/mo. Managed hosts (OneClaw, Blink Claw) ~$12–22/mo but minimal security/compliance.
- **Manus**: Butterfly Effect, acquired by Meta Dec 2025. Cloud-sandbox autonomous agent, "My Computer" feature. Solo, invite-gated, general-purpose. No team collab, no persistent workspace, no integrations. Free tier = limited credits (300/day); Pro $20–200/mo, credit-based (complex tasks 500–900 credits), costs hard to predict.
- **Competitors**: Lindy ($49.99/mo, 4000+ integrations), AutoGPT (free/open/local), ChatGPT Agent (replaced Operator), Devin ($500/mo, coding), Taskade Genesis. Managed OpenClaw: OneClaw.
- **AI chief of staff**: assistant = prompt-for-one-task tool; chief of staff = continuous system (triage, prep, follow-ups, overnight). AI covers ~70–80% (email, scheduling, follow-up, tasks); humans keep relationships/judgment/presence. Human CoS $120–200k/yr; EA $60–150k/yr; VA $2–5k/mo. Category tools: alfred_ ($24.99/mo), Alyna, Arahi.
- **Liv (real product — do not exceed these)**: persistent agent accessed via Telegram (required/default) + WhatsApp (invite-only, needs dedicated eSIM; Pro = DMs, Max = DMs+groups). Triages email, manages calendar, books (restaurants), daily briefings, forwards-to-calendar, user vaults (encrypted credential storage), web onboarding. Gmail/Calendar via Google OAuth, user-revocable. Passed Google CASA Tier 2 (verified by TAC Security). Not used to train models. Drafts need approval before sending. Pricing: Pro $79/mo, Max $149/mo, 14-day free trial, no card. Early access / batched onboarding. Each agent gets its own email + Telegram identity. CTA target: https://app.liv4all.com.

## Compliance guardrail

Liv is an independent managed service built on OpenClaw — **not affiliated with or endorsed by** OpenClaw, Manus, or any named product. Comparisons must be factual and fair, never disparaging. No invented Liv capabilities. Per-page disclaimer is rendered by `AnswerLayout`.

## The 50 (scoring: demand × tool-relevance × winnability × compliance-safety, 0–100)

| # | status | slug | topic | intent | tool-fit | comp | score | related |
|---|---|---|---|---|---|---|---|---|
| 1 | todo | what-is-openclaw | openclaw | definitional | direct | med | 92 | how-to-deploy-openclaw, openclaw-soul-md-explained, openclaw-hosting |
| 2 | todo | how-to-deploy-openclaw | openclaw | how-to | direct | med | 95 | openclaw-setup-guide, openclaw-system-requirements, how-to-run-openclaw-without-devops |
| 3 | todo | openclaw-hosting | openclaw | informational | direct | low | 90 | how-to-run-openclaw-without-devops, self-hosted-vs-managed-ai-agent, openclaw-vs-oneclaw |
| 4 | todo | how-to-run-openclaw-without-devops | openclaw | how-to | direct | low | 88 | openclaw-hosting, self-host-ai-agent-maintenance, build-vs-buy-ai-agent |
| 5 | todo | openclaw-setup-guide | openclaw | how-to | direct | med | 85 | how-to-deploy-openclaw, openclaw-soul-md-explained, openclaw-system-requirements |
| 6 | todo | is-openclaw-free | openclaw | informational | direct | low | 84 | how-much-does-openclaw-cost-to-run | openclaw-hosting |
| 7 | todo | openclaw-soul-md-explained | openclaw | definitional | direct | low | 86 | what-is-openclaw, openclaw-setup-guide, how-to-give-your-ai-agent-memory |
| 8 | todo | openclaw-system-requirements | openclaw | informational | direct | low | 80 | how-to-deploy-openclaw, best-vps-for-ai-agent, how-much-does-openclaw-cost-to-run |
| 9 | todo | how-to-self-host-an-ai-agent | self-hosting | how-to | direct | med | 90 | self-hosted-vs-managed-ai-agent, best-vps-for-ai-agent, how-to-deploy-openclaw |
| 10 | todo | cost-to-self-host-an-ai-agent | self-hosting | informational | direct | low | 86 | how-much-does-openclaw-cost-to-run, self-host-ai-agent-maintenance, self-hosted-vs-managed-ai-agent |
| 11 | todo | self-hosted-vs-managed-ai-agent | self-hosting | comparison | direct | low | 91 | build-vs-buy-ai-agent, openclaw-hosting, self-host-ai-agent-maintenance |
| 12 | todo | best-vps-for-ai-agent | self-hosting | informational | partial | low | 78 | openclaw-system-requirements, how-to-self-host-an-ai-agent, cost-to-self-host-an-ai-agent |
| 13 | todo | how-much-does-openclaw-cost-to-run | self-hosting | informational | direct | low | 85 | is-openclaw-free, cost-to-self-host-an-ai-agent, self-hosted-vs-managed-ai-agent |
| 14 | todo | self-host-ai-agent-maintenance | self-hosting | informational | direct | low | 83 | self-hosted-vs-managed-ai-agent, how-to-run-openclaw-without-devops, self-hosted-ai-agent-security-risks |
| 15 | todo | do-i-need-a-server-for-a-personal-ai-agent | self-hosting | informational | direct | low | 79 | how-to-self-host-an-ai-agent, openclaw-hosting, build-vs-buy-ai-agent |
| 16 | todo | how-to-build-a-personal-ai-agent | ai-agents | how-to | direct | high | 93 | build-vs-buy-ai-agent, what-is-a-persistent-ai-agent, how-to-deploy-openclaw |
| 17 | todo | build-vs-buy-ai-agent | ai-agents | comparison | direct | med | 89 | self-hosted-vs-managed-ai-agent, how-to-build-a-personal-ai-agent, openclaw-hosting |
| 18 | todo | what-is-a-persistent-ai-agent | ai-agents | definitional | direct | low | 84 | how-an-ai-agent-loop-works, ai-agent-vs-chatbot, what-is-an-autonomous-ai-agent |
| 19 | todo | how-an-ai-agent-loop-works | ai-agents | definitional | direct | low | 82 | what-is-a-persistent-ai-agent, what-is-an-autonomous-ai-agent, what-is-openclaw |
| 20 | todo | how-to-give-an-ai-agent-email-and-calendar-access | ai-agents | how-to | direct | low | 87 | is-it-safe-to-give-ai-access-to-your-gmail, ai-to-triage-your-email, how-to-securely-store-api-keys-for-ai-agents |
| 21 | todo | what-is-an-autonomous-ai-agent | ai-agents | definitional | direct | med | 80 | what-is-a-persistent-ai-agent, how-an-ai-agent-loop-works, ai-agent-vs-chatbot |
| 22 | todo | how-to-give-your-ai-agent-memory | ai-agents | how-to | direct | low | 81 | openclaw-soul-md-explained, what-is-a-persistent-ai-agent, how-to-give-an-ai-agent-email-and-calendar-access |
| 23 | todo | ai-agent-vs-chatbot | ai-agents | comparison | direct | med | 83 | what-is-an-autonomous-ai-agent, chatgpt-vs-ai-agent, ai-that-can-take-actions-not-just-answer |
| 24 | todo | manus-ai-alternative | comparisons | comparison | direct | med | 94 | best-manus-alternative, openclaw-vs-manus, self-hosted-vs-managed-ai-agent |
| 25 | todo | best-manus-alternative | comparisons | comparison | direct | med | 90 | manus-ai-alternative, openclaw-vs-manus, lindy-ai-alternative |
| 26 | todo | openclaw-vs-manus | comparisons | comparison | direct | low | 89 | manus-ai-alternative, what-is-openclaw, best-self-hosted-ai-assistant |
| 27 | todo | chatgpt-vs-ai-agent | comparisons | comparison | direct | high | 85 | ai-agent-vs-chatbot, ai-that-can-take-actions-not-just-answer, what-is-an-autonomous-ai-agent |
| 28 | todo | autogpt-alternative | comparisons | comparison | direct | med | 82 | manus-ai-alternative, how-to-build-a-personal-ai-agent, best-self-hosted-ai-assistant |
| 29 | todo | lindy-ai-alternative | comparisons | comparison | direct | med | 83 | manus-ai-alternative, best-manus-alternative, ai-calendar-assistant |
| 30 | todo | openclaw-vs-oneclaw | comparisons | comparison | direct | low | 84 | openclaw-hosting, self-hosted-vs-managed-ai-agent, how-much-does-a-managed-ai-agent-cost |
| 31 | todo | best-self-hosted-ai-assistant | comparisons | comparison | direct | med | 86 | what-is-openclaw, openclaw-vs-manus, how-to-self-host-an-ai-agent |
| 32 | todo | claude-vs-ai-agent-that-does-things | comparisons | comparison | direct | med | 81 | chatgpt-vs-ai-agent, ai-that-can-take-actions-not-just-answer, ai-agent-vs-chatbot |
| 33 | todo | ai-to-triage-your-email | use-cases | informational | direct | med | 88 | ai-calendar-assistant, how-to-get-a-daily-ai-briefing, how-to-give-an-ai-agent-email-and-calendar-access |
| 34 | todo | ai-calendar-assistant | use-cases | informational | direct | med | 87 | ai-to-triage-your-email, ai-that-books-restaurants, how-to-give-an-ai-agent-email-and-calendar-access |
| 35 | todo | ai-that-books-restaurants | use-cases | informational | direct | low | 80 | ai-calendar-assistant, ai-that-can-take-actions-not-just-answer, what-is-an-ai-chief-of-staff |
| 36 | todo | how-to-get-a-daily-ai-briefing | use-cases | how-to | direct | low | 83 | ai-to-triage-your-email, what-is-an-ai-chief-of-staff, openclaw-soul-md-explained |
| 37 | todo | what-is-an-ai-chief-of-staff | use-cases | definitional | direct | med | 90 | ai-chief-of-staff-vs-executive-assistant, ai-that-can-take-actions-not-just-answer, ai-to-triage-your-email |
| 38 | todo | ai-chief-of-staff-vs-executive-assistant | use-cases | comparison | direct | med | 85 | what-is-an-ai-chief-of-staff, ai-to-triage-your-email, how-much-does-a-managed-ai-agent-cost |
| 39 | todo | ai-that-can-take-actions-not-just-answer | use-cases | informational | direct | med | 86 | ai-agent-vs-chatbot, chatgpt-vs-ai-agent, what-is-an-ai-chief-of-staff |
| 40 | todo | telegram-ai-assistant | messaging | informational | direct | med | 87 | how-to-connect-an-ai-agent-to-telegram, whatsapp-ai-agent, best-messaging-app-for-an-ai-agent |
| 41 | todo | whatsapp-ai-agent | messaging | informational | direct | med | 86 | how-to-connect-an-ai-agent-to-whatsapp, telegram-ai-assistant, best-messaging-app-for-an-ai-agent |
| 42 | todo | how-to-connect-an-ai-agent-to-telegram | messaging | how-to | direct | low | 82 | telegram-ai-assistant, best-messaging-app-for-an-ai-agent, how-to-deploy-openclaw |
| 43 | todo | how-to-connect-an-ai-agent-to-whatsapp | messaging | how-to | direct | low | 81 | whatsapp-ai-agent, best-messaging-app-for-an-ai-agent, telegram-ai-assistant |
| 44 | todo | best-messaging-app-for-an-ai-agent | messaging | comparison | direct | low | 80 | telegram-ai-assistant, whatsapp-ai-agent, what-is-openclaw |
| 45 | todo | is-it-safe-to-give-ai-access-to-your-gmail | security | informational | direct | med | 89 | how-to-give-an-ai-agent-email-and-calendar-access, what-is-casa-tier-2-gmail, how-to-securely-store-api-keys-for-ai-agents |
| 46 | todo | how-to-securely-store-api-keys-for-ai-agents | security | how-to | direct | low | 84 | is-it-safe-to-give-ai-access-to-your-gmail, self-hosted-ai-agent-security-risks, how-to-give-an-ai-agent-email-and-calendar-access |
| 47 | todo | self-hosted-ai-agent-security-risks | security | informational | direct | low | 83 | self-host-ai-agent-maintenance, how-to-securely-store-api-keys-for-ai-agents, self-hosted-vs-managed-ai-agent |
| 48 | todo | what-is-casa-tier-2-gmail | security | definitional | partial | low | 82 | is-it-safe-to-give-ai-access-to-your-gmail, how-to-give-an-ai-agent-email-and-calendar-access, ai-to-triage-your-email |
| 49 | todo | how-much-does-a-managed-ai-agent-cost | getting-started | informational | direct | low | 85 | self-hosted-vs-managed-ai-agent, openclaw-vs-oneclaw, how-to-get-started-with-a-personal-ai-agent |
| 50 | todo | how-to-get-started-with-a-personal-ai-agent | getting-started | how-to | direct | med | 87 | how-to-build-a-personal-ai-agent, build-vs-buy-ai-agent, what-is-an-ai-chief-of-staff |

Note row 6's related uses a stray `|` in source; canonical related for #6 = [how-much-does-openclaw-cost-to-run, openclaw-hosting, is-openclaw-free→n/a]; writers use the master slug list and the `related` column values.

## Batch 2 (added 2026-06-02) — Hermes + small business

Facts + positioning + the full 60-slug master list live in `docs/answers-writer-brief-batch2.md`.

**Hermes / personal-agent category** (topic `comparisons`). Captures the Hermes Agent search space (Nous Research, OpenClaw's main rival). Liv positioned framework-neutrally as the managed/no-self-host option — does NOT claim OpenClaw lineage on these pages.

| slug | intent |
|---|---|
| what-is-hermes-agent | definitional |
| hermes-agent-vs-openclaw | comparison |
| hermes-agent-alternative | comparison |
| run-hermes-agent-without-a-vps | informational |
| best-personal-ai-agent | comparison |

**Small business** (new topic `small-business`). Grounded in the Foster Finance case (Urca, Rio; non-technical founder built a Nextcloud+GitHub+AWS client hub with Liv over ~2 weeks, avoiding an R$60k agency quote).

| slug | intent |
|---|---|
| ai-agent-for-small-business | informational |
| can-a-non-technical-person-build-with-an-ai-agent | informational |
| ai-agent-vs-hiring-a-developer | comparison |
| how-to-manage-clients-with-an-ai-agent | how-to |
| automate-your-small-business-with-an-ai-agent | how-to |

**Case-study article** (editorial collection, not an answer page): `src/content/articles/ai-agent-instead-of-an-agency.mdx` — the Foster Finance story. The 5 small-business answer pages link to it; it links back to several of them.

Infra changes this batch: added `small-business` to `ANSWER_TOPICS` (`src/content.config.ts`) + the hub label map (`answers/index.astro`); `AnswerLayout` now renders a "Related questions" block from the `related` frontmatter (benefits all answer pages).
