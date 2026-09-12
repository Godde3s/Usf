---
title: "OmniRouter — One Endpoint for Every Model"
description: "A Go router that puts GLM, Qwen, DeepSeek and custom APIs behind one OpenAI-compatible endpoint with load balancing and failover."
---

# OmniRouter — One Endpoint for Every Model

**[OmniRouter](https://github.com/Godde3s/omnirouter)** exists because model churn is real. One week GLM is the best value, the next week Qwen wins on context, and DeepSeek is always there for code. Rewiring your app every time the leaderboard moves is not engineering — so I built a router that makes the leaderboard a config file.

## The idea

Your application speaks **one protocol** — the OpenAI chat completions API, which has become the lingua franca of LLMs. OmniRouter speaks every upstream dialect on the other side: GLM, Qwen, DeepSeek, and any custom HTTP API you register. Between the two it provides round-robin load balancing, automatic failover when a provider degrades, per-route quotas and unified streaming.

```yaml
upstreams:
  - name: glm
    base_url: https://api.zhipuai.example/v1
    weight: 3
  - name: qwen
    base_url: https://dashscope.example/compatible-mode/v1
    weight: 2
  - name: deepseek
    base_url: https://api.deepseek.example/v1
    weight: 1
strategy: round-robin
failover: auto
```

## Engineering details worth stealing

- **Health tracking per upstream** — a provider that starts 500-ing gets benched automatically and re-probed in the background.
- **Streaming passthrough** — SSE chunks are relayed as they arrive, so token-by-token latency stays honest.
- **Quotas and weights** — cheap providers take more traffic; premium ones are reserved for hard prompts.
- **Single Go binary** — same philosophy as [NetPilot](/en/projects/netpilot/): the router must never be the thing that is down.

OmniRouter also anchors my agentic workflow: OpenCode and other agents route through it, which means switching the brain behind my whole toolchain is a one-line config change. It pairs naturally with [Hermes Stack](/en/projects/hermes-stack/), which hosts it for free.
