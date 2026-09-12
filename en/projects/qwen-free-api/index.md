---
title: "Qwen Free API — Go Bridge for chat.qwen.ai"
description: "A single-file Go bridge exposing chat.qwen.ai (Qwen3.8-Max) behind OpenAI- and Anthropic-compatible endpoints — no keys, real streaming."
---

# Qwen Free API — Go Bridge for chat.qwen.ai

**[Qwen Free API](https://github.com/Godde3s/qwen-free-api)** is my Go entry in the free-API bridge family: it speaks to **chat.qwen.ai** (Qwen3.8-Max) and exposes it behind **OpenAI- and Anthropic-compatible endpoints**, so any tool that expects those protocols can use Qwen for free.

## Design

- **Single file, zero browser** — like [GLM Free API](/en/projects/glm-free-api/), no headless Chrome; pure HTTP session handling in Go.
- **Dual protocol** — `/v1/chat/completions` (OpenAI) and `/v1/messages` (Anthropic) from one binary.
- **SSE streaming passthrough** — chunks relay as they arrive, keeping token-by-token latency honest.
- **Session hygiene** — guest-token acquisition, rotation and retry baked into the request loop.

```bash
./qwen-free-api --port 8005
curl localhost:8005/v1/chat/completions \
  -d '{"model":"qwen-max","messages":[{"role":"user","content":"سلام"}],"stream":true}'
```

Same philosophy as the rest of the family: **the bridge must never be the thing that is down** — timeouts, retries and actionable errors, not raw tracebacks. Point [OmniRouter](/en/projects/omnirouter/) at it and Qwen becomes one more upstream in the pool. MIT licensed.

