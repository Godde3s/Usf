---
title: "GLM Free API — Single File Bridge"
description: "A complete OpenAI- and Anthropic-compatible API for GLM in a single Go file. No browser, no headless Chrome, account pool included."
---

# GLM Free API — Single File Bridge

**[GLM Free API](https://github.com/Godde3s/glm-free-api)** is my most-starred repository, and the premise is almost rude in its simplicity: a complete API bridge to GLM in **one Go file**, with **zero browser automation**. No headless Chrome eating RAM, no puppeteer flakiness — just HTTP done properly.

## The problem it solves

GLM's web chat is free but locked to a browser. Existing bridges wrapped that browser in automation, which meant memory blowups, captcha churn and crashes under load. I went the opposite way: reverse-engineered the web session flow, then implemented the protocol natively in Go. The result starts in milliseconds and scales to concurrent requests without a single browser process.

## Features

- **OpenAI-compatible** `/v1/chat/completions` — drop-in for any existing client.
- **Anthropic-compatible** `/v1/messages` — so Claude-flavored tooling works too.
- **Account pool** — rotate multiple sessions, mark dead ones, stay under rate limits.
- **Streaming** — real SSE, not fake chunked responses.
- **One file** — `go build`, run, done. Read the whole implementation in one sitting.

> One file is not a stunt. It is a statement that infrastructure should be readable — you can audit every line in ten minutes.

The same architecture spawned siblings: [GhostBrain](/en/projects/ghost-brain/) (Gemini), qwen-free-api and deepseek-free-api. Together with [OmniRouter](/en/projects/omnirouter/), they form a complete free-tier AI infrastructure that costs nothing to run.
