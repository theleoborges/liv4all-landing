# Answer-page writer brief — batch 2 (Hermes + small business)

**Read `docs/answers-writer-brief.md` first** for the positioning, frontmatter schema, body template, British-spelling style, compliance guardrail, and cross-linking rules. This addendum adds new verified facts, two new clusters, and the updated master slug list. Everything in the base brief still applies.

## New verified facts

### Hermes Agent (for the Hermes cluster)
- **Hermes Agent** by Nous Research — github.com/nousresearch/hermes-agent, MIT, written in Python. ~64k+ GitHub stars since a Feb 2026 launch. (Distinct from Nous's *Hermes LLM models* — always write "Hermes Agent", never just "Hermes", to avoid that collision.)
- A self-hosted, self-improving personal agent: persistent memory, a "learning loop" that creates and refines its own skills from experience and builds a model of the user across sessions.
- Runs on a $5 VPS, GPU cluster, or serverless (6 terminal backends: local, Docker, SSH, Daytona, Singularity, Modal). Two entry points: a terminal UI, or a gateway you reach from Telegram, Discord, Slack, WhatsApp, Signal, or Email. Model-agnostic (Nous Portal, OpenRouter, OpenAI, your own endpoint).
- **Hermes Agent vs OpenClaw** (both are self-hosted, open-source, technical): Hermes optimises for server-side footprint, scripting, and the learning loop; runs reliably, privacy-first, fully on your machine. OpenClaw optimises for multi-channel personal-assistant reach and a huge skill/integration ecosystem (24 platforms, far more stars), but pushes frequent updates that can break running instances. Neither is "better"; they're different philosophies. Be fair to both.

**Hermes positioning rule (IMPORTANT — differs from the base brief):** On Hermes pages, do **NOT** lead with "Liv is OpenClaw as a service" — that reads as taking OpenClaw's side against Hermes. Position Liv **framework-neutrally** as a *managed personal AI agent*: Hermes Agent and OpenClaw are both things you self-host and maintain on a VPS; Liv is for people who want the same outcome (a persistent personal agent with memory that lives in your chat apps and acts on your email/calendar) **without running or maintaining any of it themselves**. Liv happens to be built on OpenClaw, but that's beside the point here and need not be mentioned. Still answer the Hermes question fully and fairly first; Liv is the "if you'd rather not self-host at all" option at the end.

### Foster Finance case (for the small-business cluster + the article)
Real customer. **You may name and link the business; do NOT name the person.** No fabricated direct quotes (we don't have her words) — paraphrase the facts only.
- **Foster Finance** (foster.services → fosterfinance.com.br) — a boutique firm in **Urca, Rio de Janeiro** offering outsourced financial management and intelligence for SMEs (CFO-as-a-service, plus legal and consulting arms). Tagline: "outsourced financial management and intelligence services for small and medium-sized enterprises."
- The owner is a **non-technical, self-described tinkerer**. Refer to her as the founder/owner of Foster Finance, unnamed, "she".
- **Problem:** she wanted a client-management hub. An **agency quoted R$60,000** (roughly US$10,000) to build it.
- **What she did instead:** built it herself with **Liv over about two weeks**. Liv walked her through the setup and **itself configured the services** — writing automation scripts, calling the services' APIs — and asked for her permission or help for the steps an agent can't do alone.
- **Stack:** Nextcloud + GitHub + AWS.
- **The hub:** a dashboard with smart alerts showing active clients, tasks, and quick call-to-action buttons; client and task management; recurring tasks; automated backups.
- **Outcome:** she avoided the R$60,000 agency quote and owns the system herself.
- Honesty: the agent did real configuration work, but with a human in the loop for permissions and the occasional manual step. Don't imply it was fully autonomous or zero-effort.

## Clusters to write

### Hermes (5 pages, topic `comparisons`, intent `comparison` unless noted)
- `what-is-hermes-agent` (intent `definitional`) — related: hermes-agent-vs-openclaw, hermes-agent-alternative, best-personal-ai-agent
- `hermes-agent-vs-openclaw` — related: what-is-hermes-agent, openclaw-vs-manus, best-personal-ai-agent
- `hermes-agent-alternative` — related: what-is-hermes-agent, run-hermes-agent-without-a-vps, self-hosted-vs-managed-ai-agent
- `run-hermes-agent-without-a-vps` (intent `informational`) — related: hermes-agent-alternative, self-hosted-vs-managed-ai-agent, how-much-does-a-managed-ai-agent-cost
- `best-personal-ai-agent` — related: what-is-hermes-agent, openclaw-vs-manus, what-is-a-persistent-ai-agent

### Small business (5 pages, topic `small-business`)
Ground these in the Foster story where it fits, and **link each to the case-study article at `/articles/ai-agent-instead-of-an-agency`** in the body.
- `ai-agent-for-small-business` (intent `informational`) — related: automate-your-small-business-with-an-ai-agent, ai-agent-vs-hiring-a-developer, how-to-manage-clients-with-an-ai-agent
- `can-a-non-technical-person-build-with-an-ai-agent` (intent `informational`) — related: ai-agent-for-small-business, ai-agent-vs-hiring-a-developer, how-to-build-a-personal-ai-agent
- `ai-agent-vs-hiring-a-developer` (intent `comparison`) — related: ai-agent-for-small-business, build-vs-buy-ai-agent, can-a-non-technical-person-build-with-an-ai-agent
- `how-to-manage-clients-with-an-ai-agent` (intent `how-to`) — related: ai-agent-for-small-business, automate-your-small-business-with-an-ai-agent, ai-that-can-take-actions-not-just-answer
- `automate-your-small-business-with-an-ai-agent` (intent `how-to`) — related: ai-agent-for-small-business, how-to-manage-clients-with-an-ai-agent, ai-agent-vs-hiring-a-developer

## Updated MASTER SLUG LIST (the only valid internal /answers/ links — now 60)

what-is-openclaw, how-to-deploy-openclaw, openclaw-hosting, how-to-run-openclaw-without-devops, openclaw-setup-guide, is-openclaw-free, openclaw-soul-md-explained, openclaw-system-requirements, how-to-self-host-an-ai-agent, cost-to-self-host-an-ai-agent, self-hosted-vs-managed-ai-agent, best-vps-for-ai-agent, how-much-does-openclaw-cost-to-run, self-host-ai-agent-maintenance, do-i-need-a-server-for-a-personal-ai-agent, how-to-build-a-personal-ai-agent, build-vs-buy-ai-agent, what-is-a-persistent-ai-agent, how-an-ai-agent-loop-works, how-to-give-an-ai-agent-email-and-calendar-access, what-is-an-autonomous-ai-agent, how-to-give-your-ai-agent-memory, ai-agent-vs-chatbot, manus-ai-alternative, best-manus-alternative, openclaw-vs-manus, chatgpt-vs-ai-agent, autogpt-alternative, lindy-ai-alternative, openclaw-vs-oneclaw, best-self-hosted-ai-assistant, claude-vs-ai-agent-that-does-things, ai-to-triage-your-email, ai-calendar-assistant, ai-that-books-restaurants, how-to-get-a-daily-ai-briefing, what-is-an-ai-chief-of-staff, ai-chief-of-staff-vs-executive-assistant, ai-that-can-take-actions-not-just-answer, telegram-ai-assistant, whatsapp-ai-agent, how-to-connect-an-ai-agent-to-telegram, how-to-connect-an-ai-agent-to-whatsapp, best-messaging-app-for-an-ai-agent, is-it-safe-to-give-ai-access-to-your-gmail, how-to-securely-store-api-keys-for-ai-agents, self-hosted-ai-agent-security-risks, what-is-casa-tier-2-gmail, how-much-does-a-managed-ai-agent-cost, how-to-get-started-with-a-personal-ai-agent, what-is-hermes-agent, hermes-agent-vs-openclaw, hermes-agent-alternative, run-hermes-agent-without-a-vps, best-personal-ai-agent, ai-agent-for-small-business, can-a-non-technical-person-build-with-an-ai-agent, ai-agent-vs-hiring-a-developer, how-to-manage-clients-with-an-ai-agent, automate-your-small-business-with-an-ai-agent
