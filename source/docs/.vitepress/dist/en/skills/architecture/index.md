---
title: "Architecture — Designing for Change"
description: "From single-file services to distributed systems — modularity, failure domains and evolution as first-class concerns."
---

# Architecture — Designing for Change

Architecture is the set of decisions that are expensive to change later. My bias: start as small as possible — sometimes a [single file](/en/projects/glm-free-api/) — but with seams in the right places, so growth means replacing modules instead of rewriting systems.

## Principles I design by

- **Failure domains.** Anything that can die should die alone — routers isolate providers, panels isolate users.
- **Boring technology first.** Innovation budget spent on the one thing that is actually new.
- **Interfaces over implementations.** The OpenAI API shape became a standard precisely because contracts outlive products.
- **State is the hard part.** Keep it small, keep it explicit, back it up, and know where every byte lives.
- **Evolution paths.** Every design gets a "when this outgrows itself" note — written while the trade-offs are fresh.

The portfolio of projects itself follows this arc: bridges ([one file](/en/projects/glm-free-api/)) grew into routers ([OmniRouter](/en/projects/omnirouter/)), routers grew into stacks ([Hermes](/en/projects/hermes-stack/)) — each step replacing a module, not rewriting a system. That, to me, is what "versatile engineer" actually means: not knowing everything, but building so that you can learn anything next.
