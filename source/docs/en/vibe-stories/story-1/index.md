---
title: "TaskFlow API: Security You Can Test"
description: "Building a backend where every security claim has a test — the story behind TaskFlow API's refresh rotation, RBAC and rate limiting."
---

# TaskFlow API: Security You Can Test

Every backend portfolio has "JWT authentication" in the README. Very few can show you the test that replays a rotated refresh token and asserts the **whole token family dies**. That difference — between mentioning security and proving it — is why I built [TaskFlow API](/en/projects/taskflow-api/).

## Start from the threat model

I wrote the threat model before the first route: stolen credentials, replayed tokens, brute-force login bursts, curious neighbors reading each other's tasks, and — the classic — a 500 page leaking a stack trace. Each threat maps to a specific, testable control in the codebase:

- **Stolen refresh token?** Rotation with family reuse detection. One replay revokes everything the attacker holds.
- **Brute force?** A sliding-window limiter answers the sixth burst attempt with `429` and `Retry-After`.
- **Neighbor snooping?** Ownership checks sit in one place — `_owned_task` — so a forgotten guard is a bug you fix once, not a habit you audit forever.
- **Info leaks?** Exception handlers return generic 500s; the details go to structured JSON logs with a request id you can grep.

## The test that sells the design

```python
async def test_refresh_rotation_and_reuse_detection(client, user_tokens):
    old = user_tokens["refresh_token"]
    r1 = await client.post("/api/v1/auth/refresh", json={"refresh_token": old})
    assert r1.status_code == 200                      # rotated
    r2 = await client.post("/api/v1/auth/refresh", json={"refresh_token": old})
    assert r2.status_code == 401                      # replay refused
    new = r1.json()["refresh_token"]
    r3 = await client.post("/api/v1/auth/refresh", json={"refresh_token": new})
    assert r3.status_code == 401                      # family revoked
```

Thirteen tests, zero containers, a few seconds of wall time. CI runs them on every push, which means the security story stays true by construction instead of by documentation.

## What it proves

TaskFlow is the reference backend for my API work — it pairs with the [Postman toolkit](/en/projects/postman-api-testing-toolkit/) that contract-tests it in CI. FastAPI, PostgreSQL 16 and Redis 7 behind Docker Compose; SQLAlchemy 2.0 async with Alembic migrations; caching with invalidation on writes; structured logs ready for Loki or ELK. It is the answer to a simple interview question: *show me how you ship a backend in 2026.* This is how — hardened, tested, observable, and running.
