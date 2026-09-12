---
title: "Gemini Free API — Guest Mode Bridge"
description: "A Go bridge exposing the Gemini web app in guest mode behind OpenAI- and Anthropic-compatible endpoints — works without logging in, streaming included."
---

# Gemini Free API — Guest Mode Bridge

**[Gemini Free API](https://github.com/Godde3s/gemini-free-api)** is the boldest bridge of the family: it talks to the **Gemini web app in guest mode** — no account, no login, no key — and exposes it behind **OpenAI- and Anthropic-compatible endpoints**. You run one Go binary and any LLM client works against Gemini for free.

## Design

- **Guest mode** — session bootstrapping without credentials, tokens rotated automatically.
- **Dual protocol** — OpenAI `/v1/chat/completions` *and* Anthropic `/v1/messages`, so Claude Code and agent frameworks plug in unchanged.
- **Streaming + tools** — SSE passthrough and [GhostBrain](/en/projects/ghost-brain/)-style function-calling emulation where the upstream allows it.
- **Single Go binary** — same rule as always: the bridge must never be the thing that is down.

```bash
./gemini-free-api --port 8006
curl localhost:8006/v1/chat/completions \
  -d '{"model":"gemini-pro","messages":[{"role":"user","content":"hello"}],"stream":true}'
```

Bridges like this one, [DeepSeek Free API](/en/projects/deepseek-free-api/) and [Qwen Free API](/en/projects/qwen-free-api/) share one codebase philosophy: reverse-engineer the web session once, then keep the operational layer boring — retries, rotation, honest errors. MIT licensed.

