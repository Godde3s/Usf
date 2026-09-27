---
title: "OmniRouter: Taming Model Chaos"
description: "Why I built OmniRouter — turning model churn into a config file, with load balancing, failover and real streaming in one Go binary."
---

# OmniRouter: Taming Model Chaos

The AI ecosystem moves at scroll speed. The model that powered my app on Monday is deprecated by Friday, prices flip overnight, free tiers appear and vanish. My projects kept breaking for reasons that had nothing to do with my code — so I made the churn someone else's problem. That someone is **[OmniRouter](https://github.com/Godde3s/omnirouter)**.

## One endpoint, many brains

OmniRouter sits between your app and every model provider you use. Your code speaks plain OpenAI — one base URL, one API key, standard `/v1/chat/completions` — and the router decides which brain actually answers: GLM, Qwen, DeepSeek or any custom OpenAI-compatible endpoint you register. Switching a model becomes a **config change, not a refactor**.

## The parts that took real engineering

- **Load balancing that understands health** — weighted routing with health checks; a provider that fails its probe is cooled down and routed around in milliseconds.
- **Failover without lying to the client** — if a request dies mid-flight on provider A, the router retries on provider B, and the caller just sees a slightly slower 200.
- **Real streaming, end to end** — SSE tokens flow through the router untouched, because a proxy that buffers streams is not a proxy, it is a bottleneck.
- **One static binary** — pure Go, stdlib-first, cross-compiled: `./omnirouter` is the whole deployment story.

## What it proves

OmniRouter is the backbone of my own AI stack — it fronts every model my agent tooling touches, and it ships inside [Hermes Stack](/en/projects/hermes-stack/) as part of a one-click AI server. It shows I can design API infrastructure the way production systems need it: stateless cores, observable request paths, and failure treated as a first-class case — not an afterthought.
