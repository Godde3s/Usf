---
title: "BaleForge — Async Bale Bot Framework"
description: "A modern async Python framework for Bale messenger bots: declarative filters, FSM, middleware and an AI agent bridge for any OpenAI-compatible endpoint."
---

# BaleForge — Async Bale Bot Framework

**[BaleForge](https://github.com/Godde3s/baleforge)** exists because Bale — the messenger millions of Iranians actually use — deserves the developer experience modern bot frameworks offer. Building a Bale bot by hand means hand-rolled `getUpdates` loops and nested JSON dicts. BaleForge replaces that with typed objects, declarative filters and production hardening.

## What it gives you

- **Declarative filters** — `command("start")`, `text(contains=...)`, `from_user(...)`, `chat_type(...)`, `state(...)`, `callback(...)`; the first matching handler wins.
- **FSM included** — multi-step wizards and forms with pluggable storage.
- **Middleware pipeline** — logging, rate limits and access control in the right order, wrapping every dispatch.
- **Production hardening** — retry with exponential backoff, stale-update dropping, per-update error isolation, graceful SIGINT shutdown.
- **AI agent bridge** — attach a brain in ~10 lines (below).

```python
from baleforge import Bot, Router, command

router = Router()

@router.message(command("start"))
async def start(ctx):
    await ctx.reply("سلام! من با BaleForge ساخته شدم 🚀")

await Bot(token).include(router).run()
```

## The agent bridge

`AgentBridge` speaks to **any OpenAI-compatible endpoint** — OpenAI, DeepSeek, Qwen, GLM, or my own [OmniRouter](/en/projects/omnirouter/). It keeps per-chat conversation memory, runs a bounded tool-calling loop (the model can call your async Python functions), trims history to a configurable budget, and never lets a failing tool crash the bot. Persian prompts and fallbacks are first-class citizens.

**10 tests, zero network** — filters, FSM transitions, middleware ordering, the tool loop and history trimming all run against fake transports. MIT licensed.

