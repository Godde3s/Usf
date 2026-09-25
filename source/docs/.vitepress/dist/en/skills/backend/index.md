---
title: "Backend & APIs — Services Built to Stay Up"
description: "FastAPI, Gin, Laravel, .NET, Express — designing and operating backend services and APIs that survive real traffic."
---

# Backend & APIs — Services Built to Stay Up

My backend philosophy is boring on purpose: clear contracts, explicit failure, and services that restart themselves without drama. The exciting part is what the services enable — free-tier AI infrastructure, proxy panels serving real users, bridges that turn web accounts into APIs.

## Stacks I ship with

| Stack | Sweet spot |
| --- | --- |
| Python — FastAPI / Django | APIs, agents, async I/O bridges (GhostBrain, Hermes). |
| Go — Gin / stdlib | Single-binary services and CLIs (NetPilot, OmniRouter). |
| PHP — Laravel | Full products with auth, queues and admin panels. |
| C# — ASP.NET | Enterprise-style services and desktop backends. |
| Node — Express / Fastify | Edge Workers, real-time glue, rapid prototypes. |

## Non-negotiables

- **Health endpoints** on anything long-running — my own tooling ([NetPilot](/en/projects/netpilot/)) monitors them.
- **Graceful degradation** — a dead upstream must degrade features, never take the process down.
- **Structured logs** from day one, because debugging by vibes does not scale past 2 AM.
- **Contract tests** for anything another system depends on — including agents.

The pattern across my projects: the [free-api bridges](/en/projects/glm-free-api/) handle hostile, rate-limited upstreams; [TaskFlow API](/en/projects/taskflow-api/) handles multi-user state behind auth; the [routers](/en/projects/omnirouter/) handle failure between them. Same principles, different pressure points.
