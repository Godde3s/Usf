---
title: "This Portfolio: One Design, Two Languages"
description: "The meta-story: how this very site was specified, built on a custom VitePress design system, translated into two languages and shipped by an agent team."
---

# This Portfolio: One Design, Two Languages

You are looking at the most self-referential project in my portfolio: **this website**. It is a custom VitePress build — an Apple-style home, glass navigation, a typing tagline and a story carousel — implemented end to end with every text and image being my own content, in **two languages**: English and Spanish.

## Why this design?

Because it is honest about what good engineering is: find something excellent, understand it completely, then adapt it with discipline. The Apple-style home, the glass chrome, the animated welcome, the MacBook-framed story carousel — all of it was studied, implemented and re-anchored to a current engine version, then filled with a life it was never written for.

## What made it non-trivial

- **A real i18n layer** — the language switcher, per-locale routes and localized UI chrome (settings panel, slides, code toggles) all work end to end.
- **Custom wordmark** — the script "Usf" logo is generated from a real font into SVG paths so the animated welcome screen could keep its draw-on effect.
- **Eighteen project covers and story illustrations** — every card and story cover generated to match the theme's pastel aesthetic.
- **Agent-team assembly** — theme, content, translations and deployment ran as parallel agent workstreams, coordinated the [Hermes way](/en/agentic/hermes/).

The source of truth lives at [github.com/Godde3s/Usf](https://github.com/Godde3s/Usf) — public, naturally. If you are reading this on the live site, the deploy pipeline worked; if you are reading it on GitHub, the pipeline is one `vitepress build` away.
