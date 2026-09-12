---
title: "Agentic Coding — Directing Agent Teams"
description: "How I use OpenCode, Codex, Claude Code and Hermes Agent to ship production software — the overview of my agentic workflow."
---

# Agentic Coding — Directing Agent Teams

Agentic coding is the practice of directing autonomous coding agents the way a tech lead directs a team: with clear specs, tight review loops and full accountability. It is my daily method for shipping software, and I consider it the single most important engineering skill I have built in the last three years.

My toolchain is deliberate. **OpenCode** for fast, model-agnostic pair programming in the terminal. **Codex** for parallel execution across isolated sandboxes. **Claude Code** for deep, codebase-wide planning and refactors. **Hermes Agent** — my own stack — routing models and orchestrating the other three. Different tools, different strengths, one workflow.

## The core loop

<StepBar :items='[{"title":"Brief the agents"},{"title":"Generate & iterate"},{"title":"Human review"},{"title":"Deploy & monitor"}]' />

The loop is exactly the four steps described in [The Agentic Method](/en/about/how-i-work/): brief, generate, review, deploy. What changes per tool is *where each step happens* — OpenCode lives in my terminal next to vim, Codex fans work out into sandboxes, Claude Code plans before it touches a file, and Hermes coordinates long-running tasks and keeps everyone supplied with the right model.

## What agents changed about my engineering

- **Specs became a first-class artifact.** A precise brief is worth more than a clever prompt.
- **Review became a superpower.** Reading diffs fast — and suspiciously — is now a core skill.
- **Architecture matters more, not less.** Agents amplify good structure and expose bad structure instantly.
- **Testing got serious.** If the test suite is weak, agents will happily produce confident garbage.

::: info Proof, not promises
This portfolio — two locales, a cloned VitePress theme, custom SVG icon set and 14 generated illustrations — was built through this loop. So were NetPilot, OmniRouter and every panel in the [projects](/en/projects/netpilot/) section.
:::

The following pages document each tool: [OpenCode](/en/agentic/opencode/), [Codex](/en/agentic/codex/), [Claude Code](/en/agentic/claude-code/) and [Hermes Agent](/en/agentic/hermes/).
