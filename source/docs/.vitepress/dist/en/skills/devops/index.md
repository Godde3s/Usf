---
title: "DevOps & Deploy — Five Platforms, One Command"
description: "HF Spaces, Railway, Render, Fly.io, Koyeb, Cloudflare Workers — deploying resilient services on free tiers."
---

# DevOps & Deploy — Five Platforms, One Command

Deployment is where hobbies become products. I maintain deploy paths on six platforms and treat "one command" as a hard requirement — because when a platform turns hostile or a region goes down, migration speed *is* uptime.

## Platform playbook

| Platform | What I run there |
| --- | --- |
| Hugging Face Spaces | Hermes Stack, AI bridges — generous free compute. |
| Cloudflare Workers | usf-edge panels — KV state, 300+ PoPs, no cold starts. |
| Railway / Render / Fly.io / Koyeb | Panels and APIs — each with its own anti-blocking quirks. |
| VPS (Linux) | Classic deployments, tunnels, monitoring. |

- **Docker** when the platform supports it; **Procfiles and buildpacks** when it does not.
- **CI habits** — GitHub Actions for tests and builds; deploys stay boring on purpose.
- **Observability** — structured logs, uptime pings from my own tooling, alerting to Telegram.
- **Secrets discipline** — environment variables, encrypted vaults, nothing in git.

The philosophy matches my [networking mindset](/en/about/networking/): every deploy is one takedown away from dying, so every deploy has a documented twin on another platform. My panels literally ship five deploy commands for this reason.
