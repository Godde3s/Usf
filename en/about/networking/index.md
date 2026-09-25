---
title: "Networks & Freedom"
description: "Proxies, VLESS tunnels, subscription panels and edge deployments — Reza Bazdar builds infrastructure for an open internet."
---

# Networks & Freedom

I grew up behind filters. Where I live, parts of the internet are routinely unreachable — not because servers are down, but because someone decided they should be. That reality turned networking from a hobby into a survival skill, and the survival skill into a specialty: building infrastructure that keeps people connected.

My work in this area is practical rather than theoretical. I design and operate **VLESS tunnels and proxy panels**, manage multi-user subscription systems with Clash, v2ray and sing-box compatibility, and deploy edge infrastructure across Cloudflare Workers, Hugging Face Spaces, Railway, Render, Fly.io and Koyeb. My edge deployments span Cloudflare Workers, Hugging Face Spaces, Railway, Render, Fly.io and Koyeb — because blocking is an arms race and single points of failure get people cut off.

## What I actually build

- **Tunnel panels** — multi-user VLESS management with subscription links, traffic stats and one-command deploys.
- **Edge deployments** — proxy state on Cloudflare KV across 300+ PoPs, zero cold starts, no servers to seize.
- **Diagnostics** — pure-Go tooling like [NetPilot](/en/projects/netpilot/) for port scanning, TCP ping and HTTP health checks.
- **Resilience patterns** — multi-platform redundancy so one takedown never equals zero access.

::: info Why this matters
In an environment where connectivity itself is contested, a proxy panel is not a gadget — it is a lifeline for work, education and free information. I treat it with the seriousness of critical infrastructure.
:::

## The mindset

Networking taught me how systems fail: gracefully, partially, and always at the worst moment. It taught me to read packet captures the way other people read error messages, to distrust "temporarily blocked", and to always have a second path, a third fallback and a fourth idea. Those instincts bleed into everything else I build — redundant APIs, failover model routing, and panels that assume the network is hostile.

If your project needs to survive a hostile network — or you just want your stack to stop falling over when a region goes dark — that is exactly the kind of problem I enjoy most.
