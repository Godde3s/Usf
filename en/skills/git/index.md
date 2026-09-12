---
title: "Git & Workflow — Discipline That Scales"
description: "Branching strategy, review discipline, conventional commits and CI habits for solo and agent-team development."
---

# Git & Workflow — Discipline That Scales

Git is the contract between past me, future me and the agents working on my behalf. My workflow rules are simple enough to follow at 2 AM and strict enough that agent-generated diffs stay reviewable.

## The rules

- **Small, single-purpose branches.** One idea per branch — human or agent authored.
- **Conventional commits.** `feat:`, `fix:`, `refactor:` — changelogs write themselves.
- **Review everything.** Especially agent code; trust is granted per-diff, never per-tool.
- **Main stays deployable.** If `main` breaks, fixing it outranks everything else.
- **Tags for releases.** Every shipped state is retrievable forever.

With agents in the loop this discipline stops being optional: three sandboxes producing diffs in parallel only works if history stays clean and each change is isolated. The [agentic method](/en/about/how-i-work/) depends on git being boring and predictable — exactly what I want from infrastructure.
