---
title: "This Portfolio: Four Languages, One Repo"
description: "The meta-story: how this very site was specified, cloned from easy-vibe's design system, translated into four languages and shipped by an agent team."
---

# This Portfolio: Four Languages, One Repo

You are looking at the most self-referential project in my portfolio: **this website**. It is a faithful rebuild of the [easy-vibe](https://datawhalechina.github.io/easy-vibe/en/) design system — the exact VitePress theme, layout and behavior — with every text and image replaced by my own content, in **four languages**: English, Persian, Arabic and Spanish.

## Why clone a course site?

Because it is honest about what good engineering is: find something excellent, understand it completely, then adapt it with respect. The theme's Apple-style home, its glass navigation, the typing tagline, the MacBook-framed story carousel — all of it was studied, ported and re-anchored to a new engine version, then filled with a life it was never written for.

## What made it non-trivial

- **Four locales with RTL** — Persian and Arabic flip typography, padding, icons and carousel direction; only code blocks stay LTR.
- **Custom wordmark** — the script "Usf" logo is generated from a real font into SVG paths so the animated welcome screen could keep its draw-on effect.
- **Fourteen new illustrations** — every card and story cover generated to match the theme's pastel aesthetic.
- **Agent-team assembly** — theme port, content, translations and deployment ran as parallel agent workstreams, coordinated the [Hermes way](/en/agentic/hermes/).

The source of truth lives at [github.com/Godde3s/Usf](https://github.com/Godde3s/Usf) — public, naturally. If you are reading this on the live site, the deploy pipeline worked; if you are reading it on GitHub, the pipeline is one `vitepress build` away.
