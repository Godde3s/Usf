---
title: "OmniRouter: Taming Model Chaos"
description: "Why I built OmniRouter — the story of turning model churn into a config file, with load balancing and failover in one Go binary."
---

# OmniRouter: Taming Model Chaos

The AI ecosystem moves at scroll speed. The model that powered my week is deprecated by Friday, prices flip, free tiers appear and vanish. My apps kept breaking for reasons that had nothing to do with my code — so I made the churn someone else's problem. That someone is **[OmniRouter](https://github.com/Godde3s/omnirouter)**.

## The insight

The OpenAI chat-completions format won. It is the interface every client already speaks. So OmniRouter presents exactly that interface to your app, and speaks whatever each upstream needs on the other side — GLM, Qwen, DeepSeek, custom endpoints. Your code changes **never**; the config file changes weekly.

## The hard parts

- **Streaming honesty** — relaying SSE token-for-token without buffering surprises took careful plumbing.
- **Failure detection** — distinguishing "model is slow" from "model is dying" needs rolling health windows, not single-shot probes.
- **Fair rotation** — weighted round-robin with quotas, so cheap capacity gets used before premium tokens.

Together with the [free-api bridges](/en/projects/glm-free-api/), OmniRouter gives me something absurd on paper and essential in practice: a multi-model AI stack with **zero monthly cost** and one config file to rule them all.
