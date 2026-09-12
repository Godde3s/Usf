---
title: "OpenCode — My Terminal Pair Programmer"
description: "OpenCode: open-source terminal coding agent. Model-agnostic, provider-switchable mid-task, perfect pair for omnirouter routing."
---

# OpenCode — My Terminal Pair Programmer

**OpenCode** is the open-source terminal coding agent I reach for first. It pairs with me inside the terminal — reading files, editing code, running commands — and, crucially, it is **model-agnostic**: the provider can be switched mid-task without losing the conversation.

## Why it earns the first slot

- **Terminal-native.** It lives where I already work; no context switch to a GUI.
- **Model freedom.** GLM for cheap iteration, Claude for hard reasoning, DeepSeek for code — switched on the fly.
- **Omnirouter synergy.** Pointing OpenCode at my own [OmniRouter](/en/projects/omnirouter/) endpoint means the "provider" is actually a load-balanced fleet with failover.
- **Fast loop.** Small edits, quick questions, test runs — the 30-second tasks that happen fifty times a day.

```bash
# point opencode at my own router
export OPENAI_BASE_URL=http://localhost:8787/v1
opencode

> refactor src/scan.go: extract the worker pool,
> add tests for timeout handling, keep the CLI identical
```

## How I use it in the loop

OpenCode owns the **inner loop**: quick refactors, dependency bumps, "explain this stack trace", draft a function with tests. When a task grows beyond a single sitting — multi-file features, architecture moves — I graduate it to [Claude Code](/en/agentic/claude-code/) for planning, or fan it out to [Codex](/en/agentic/codex/) if it parallelizes. Knowing *which agent to brief* is half of the [method](/en/agentic/overview/).
