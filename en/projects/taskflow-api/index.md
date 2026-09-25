---
title: "TaskFlow API — Production-grade FastAPI Backend"
description: "A task-management REST API built like production: JWT rotation with reuse detection, RBAC, rate limiting, Redis caching, pytest suite and Docker Compose."
---

# TaskFlow API — Production-grade FastAPI Backend

**[TaskFlow API](https://github.com/Godde3s/taskflow-api)** is my reference answer to a question interviewers actually ask: *what does "production-grade" mean in your backend code?* Instead of answering with adjectives, I shipped the repository — a task-management API where every security claim is implemented **and** covered by tests.

## Security that is tested, not promised

Most repos mention JWT and move on. TaskFlow implements the parts that actually matter:

| Control | Implementation |
| --- | --- |
| Password storage | bcrypt, cost 12, per-user salt |
| Access tokens | 15-minute TTL, signed HS256 |
| Refresh tokens | 7-day rotation with **family reuse detection** — replaying an old refresh token kills the whole token family |
| Authorization | RBAC guards as FastAPI dependencies — `require_admin`, ownership checks on every task operation |
| Abuse resistance | Sliding-window login rate limiter → `429` with `Retry-After` |
| Ops hygiene | Generic 500s (no stack traces), `X-Request-ID` correlation, security headers, non-root Docker image |

The refresh-rotation test is my favorite: it logs in, rotates, replays the old token expecting `401`, then verifies the *new* token is dead too — because a replayed token means theft, and theft means revoke everything.

## Engineering decisions worth stealing

- **Routers thin, services fat** — the HTTP layer parses and serializes; business rules live where they are unit-testable.
- **Async SQLAlchemy 2.0 + Pydantic v2 settings** — 12-factor config; SQLite locally, PostgreSQL in compose.
- **Docker Compose** with health-checked `postgres:16` and `redis:7` — `docker compose up` is the whole install guide.
- **A pytest suite that runs in seconds** — in-memory async database, no containers needed for CI.

::: tip Try it
`docker compose up --build` then open `/docs` — the interactive OpenAPI playground: [github.com/Godde3s/taskflow-api](https://github.com/Godde3s/taskflow-api)
:::

## What I learned building it

The subtle part was not FastAPI — it was deciding what "done" means: migration path, rate-limit semantics under multi-instance deployment (swap the in-process buckets for Redis), and documentation that explains *why* the trade-offs exist rather than hiding them. That philosophy is written down in the repository's `SECURITY.md`.
