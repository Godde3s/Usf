---
title: "GhostBrain — Gemini to API"
description: "Turn a free Gemini web account into a real OpenAI + Anthropic-compatible API: secure session binding, multi-account pools, SSE streaming."
---

# GhostBrain — Gemini to API

**[GhostBrain](https://github.com/Godde3s/GhostBrain)** resurrects a free Gemini web account as real infrastructure. The web app gives you a powerful model behind a chat page; GhostBrain lifts it out and serves it as a proper API — with the polish that implies: secure session binding, multi-account pools, SSE streaming and persistence.

## Design decisions

The fragile part of any web-account bridge is the session. GhostBrain treats it as a first-class citizen: cookies are stored encrypted, sessions are health-checked and rotated before they die instead of after, and accounts are pooled so no single identity absorbs all the traffic. When a session does die, the pool quietly marks it and keeps serving — your client never sees a 401.

| Concern | Approach |
| --- | --- |
| Session security | Encrypted cookie vault, no plaintext secrets on disk. |
| Reliability | Background health probes + automatic rotation. |
| Compatibility | OpenAI `/v1/chat/completions` and Anthropic `/v1/messages`. |
| Streaming | Native SSE relay, token-for-token. |
| Language | Python — async I/O end to end. |

## Where it fits my stack

GhostBrain is the Python sibling of [GLM Free API](/en/projects/glm-free-api/), and both are upstreams my [OmniRouter](/en/projects/omnirouter/) happily load-balances. Deployed together on free tiers — Hugging Face Spaces, Railway, Render — they give me a multi-model API fleet whose monthly bill is exactly zero. That combination is what my [Hermes Stack](/en/projects/hermes-stack/) ships as a one-click package.

::: tip Responsible use
Free-tier bridges live on someone else's generosity. GhostBrain rate-limits itself and rotates accounts precisely so it stays polite — use it like a guest, not a looter.
:::
