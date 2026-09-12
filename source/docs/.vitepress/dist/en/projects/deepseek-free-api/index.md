---
title: "DeepSeek Free API — Account Pool Bridge"
description: "A Python bridge that turns free DeepSeek web accounts into a local OpenAI- and Anthropic-compatible API — multi-account pool, function-calling emulation, Persian dashboard."
---

# DeepSeek Free API — Account Pool Bridge

**[DeepSeek Free API](https://github.com/Godde3s/deepseek-free-api)** turns your free DeepSeek web account into a **local OpenAI-compatible API** — with the parts that matter for real daily use: a **multi-account pool** with round-robin rotation, 429 cooldown with exponential backoff, automatic failover and dead-session detection, so one rate-limited account never stops the pipeline.

## What makes this version different

- **Two protocols** — OpenAI `/v1/chat/completions` *and* Anthropic `/v1/messages` with `tool_use` blocks, so Claude Code and Hermes Agent work out of the box.
- **Function-calling emulation** — send `tools=`, get real `tool_calls` responses, streaming included. Agents that need tools do not need to know the upstream is a web account.
- **Persian RTL dashboard** — account states, a live playground and copy-paste agent snippets at `/`.
- **Humanized errors** — every failure message says what happened *and* the exact command to fix it.

```bash
python server.py          # → http://127.0.0.1:8001
# OpenAI-compatible:
curl localhost:8001/v1/chat/completions -d '{"model":"deepseek-chat","messages":[...]}'
# Anthropic-compatible:
curl localhost:8001/v1/messages -d '{"model":"deepseek-chat","messages":[...]}'
```

**27 automated checks** run without any account. Like my other bridges, this is a single-purpose service with real operational hygiene: retries, cooldowns, failover and self-diagnostics. Unofficial — it automates the consumer web experience for personal use.

