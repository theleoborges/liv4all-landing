# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static landing site for **Liv4All** (liv4all.com) — an AI Chief of Staff product. Hosted on GitHub Pages at hello.liv4all.com.

## Architecture

- **No build step, no dependencies, no framework.** Pure static HTML/CSS/JS.
- All styles are inline within each HTML file's `<style>` block.
- All JavaScript is inline within `<script>` tags.
- Interest form submissions go through Formspree (endpoint ID `xzdawwzo` in form action URLs).

## Pages

- `index.html` — Main landing page (product pitch, features, interest form)
- `about.html` — About page
- `faq.html` — FAQ page
- `privacy.html` — Privacy policy
- `terms.html` — Terms of service

## Development

No install or build commands. Open HTML files directly in a browser or use any static file server:

```bash
python3 -m http.server 8000
```

## Deployment

Push to `main` branch — GitHub Pages serves from root. The `CNAME` file points to `liv4all.com`.

## Design System

Fonts: Inter (body) and JetBrains Mono (code/monospace). Dark theme with CSS custom properties defined in `:root` (e.g. `--bg`, `--accent`, `--text-dim`). Shared styles are duplicated across pages (no shared CSS file).
