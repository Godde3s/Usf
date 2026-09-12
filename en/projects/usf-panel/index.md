---
title: "Usf Panel — VLESS Manager"
description: "Premium VLESS tunnel and subscription manager: multi-user, Clash/v2ray/sing-box sync, one-command deploys to HF, Railway, Render, Fly, Koyeb."
---

# Usf Panel — VLESS Manager

**Usf Panel** is the flagship of my networking work: a premium **VLESS tunnel and subscription manager** built as a single-file FastAPI application. It manages multi-user access, generates subscription links that Clash, v2ray and sing-box consume natively, and deploys to five platforms with one command each.

## Why another panel

Existing panels are either enterprise-heavy (a full server farm to run one tunnel) or toy-grade (no user management, no stats, no resilience). Usf Panel takes the middle path seriously: one Python file you can read, a real admin panel with token + 2FA, per-user traffic accounting, and deploy targets matched to how censorship actually evolves — when one platform gets aggressive, you move in minutes, not days.

| Capability | Detail |
| --- | --- |
| Protocols | VLESS over WS/TLS, Reality-ready configs. |
| Subscriptions | Auto-generated links; Clash / v2ray / sing-box compatible. |
| Users | Multi-user with quotas, expiry and traffic stats. |
| Admin | Token + 2FA hardened panel, audit log. |
| Deploy | Hugging Face · Railway · Render · Fly.io · Koyeb — one command each. |

## The family

Usf Panel is not alone — it is the center of a family that covers every hosting philosophy: **usf-edge** runs the same idea entirely on Cloudflare Workers with KV state across 300+ PoPs; **edge-pp** extends edgetunnel with a full user-management panel; **Render-usf** targets Render with anti-blocking measures; **Usf-Pnl-pro** packages multi-platform deployment. The [networking section](/en/about/networking/) explains why redundancy across platforms is a design requirement, not an option.

::: warning A note on responsibility
These tools exist to restore access to information, not to break into anything. They ship with hardening — not exploits — and I expect users to respect the laws of their own jurisdictions.
:::
