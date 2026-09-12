---
title: "Claude Code — The Planner-Executor"
description: "Claude Code: multi-step planning, tool use and codebase-wide edits with surgical precision. The agent behind this very site."
---

# Claude Code — The Planner-Executor

**Claude Code** is Anthropic's agentic CLI, and it occupies a specific seat in my workflow: the **planner-executor**. Where other agents shine at speed or scale, Claude Code shines at *depth* — holding a whole codebase in mind, planning multi-step changes, and executing them with surgical precision across dozens of files.

## What makes it different

- **Plans before it touches code.** For any non-trivial task it produces an explicit plan I can correct — the cheapest possible place to fix a mistake.
- **Whole-codebase edits.** Search, understand, then edit coherently — not file-by-file blind patches.
- **Tool discipline.** It shows its work: commands run, tests executed, diffs staged.
- **Taste.** In practice, its refactors read like a careful senior engineer wrote them, which minimizes my review surface.

> This portfolio is a Claude Code build: a full VitePress theme clone adapted to two locales — planned once, reviewed by me, shipped in this shape.

## How I brief it

The better the plan I can critique, the better the result. So my briefs for Claude Code state the goal, the constraints, the definition of done — and explicitly invite a plan before execution. Then I do what the human is for: I read the plan, attack the weak points, and only then let it run. The pattern is described in [The Agentic Method](/en/about/how-i-work/).

Claude Code also plays the integrator role after [Codex](/en/agentic/codex/) fan-outs: reconciling diffs, resolving the overlaps, and running the full suite before anything reaches a branch I care about.
