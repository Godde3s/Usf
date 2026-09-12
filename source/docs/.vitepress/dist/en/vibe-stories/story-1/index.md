---
title: "NetPilot: One Binary, Every Answer"
description: "The story of building NetPilot — a pure-Go network toolkit that compresses five admin tools into one static binary."
---

# NetPilot: One Binary, Every Answer

Every sysadmin has that folder of half-installed tools: one for port scanning, one for pinging, one for health checks, all with different flags and output formats. **NetPilot** ([GitHub](https://github.com/Godde3s/netpilot)) started when I got tired of being that sysadmin.

## The constraint that shaped it

I gave myself one rule: **the deliverable is a single static binary**. No runtime, no dependencies, no installer. That single constraint decided the language (Go), the architecture (stdlib first), and the UX (subcommands that read like sentences). It also made the project the perfect testbed for agent-team development — the spec was crisp enough that [agents](/en/agentic/overview/) could implement commands in parallel while I reviewed.

## What building it taught me

- **Concurrency design beats concurrency folklore** — a worker pool with real timeouts outperformed three "optimized" drafts.
- **Output is an API** — stable JSON output turned the CLI into a building block other scripts (and agents) can consume.
- **Restraint scales** — five well-made commands beat thirty half-made ones.

Today NetPilot is the first thing I deploy on any new box, and the standard by which I judge every CLI I build — including the ones agents build for me.
