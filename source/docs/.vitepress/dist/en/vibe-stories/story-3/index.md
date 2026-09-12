---
title: "Usf Panel: Tunnels vs. Censorship"
description: "Building proxy panels for an environment where blocking is an arms race — the story and philosophy behind Usf Panel and its family."
---

# Usf Panel: Tunnels vs. Censorship

Some software is a convenience; some is a lifeline. My panel family — **Usf Panel**, usf-edge, edge-pp, Render-usf — belongs to the second kind. They manage VLESS tunnels and subscriptions for people whose internet is routinely filtered, including mine.

## The threat model is real

Building for censored networks changes every design decision. Platforms themselves become attack surfaces: when one provider starts mass-banning proxy workloads, your users go dark — so every panel I ship deploys to **five platforms with one command**, and edge variants keep state in Cloudflare KV across 300+ PoPs where there is no server to seize.

## Engineering under fire

- **Subscription links** must regenerate cleanly across Clash, v2ray and sing-box — one broken format means one stranded user.
- **Multi-user quotas** keep one heavy user from exposing everyone.
- **Admin hardening** — token + 2FA — because the panel itself is the juiciest target.
- **Migration drills** — I practice platform-to-platform moves before I need them, not during an outage.

The full design philosophy is in the [networking section](/en/about/networking/); the flagship's details are in [Usf Panel](/en/projects/usf-panel/). What the story boils down to: treat access to information as critical infrastructure, and engineer it with that respect.
