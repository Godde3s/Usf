---
title: "Snaplink — Short Links, Real Analytics"
description: "A self-hosted URL shortener with per-click analytics: Next.js 14 App Router, TypeScript, Prisma, SQLite and Tailwind CSS."
---

# Snaplink — Short Links, Real Analytics

**[Snaplink](https://github.com/Godde3s/snaplink)** is a complete, self-hosted alternative to commercial link shorteners — the same codebase serves the API, the redirect edge and the analytics dashboard. It is small enough to understand in one sitting and real enough to run for a community.

## What it does

- **Shorten any URL** — 7-character slugs drawn from an ambiguity-free alphabet (no `0/O/1/l`), collision-safe creation with automatic retry.
- **Click analytics** — per-link totals, top referrers, and a 14-day per-day histogram via a Prisma `groupBy`.
- **Fast redirect path** — `/r/:slug` records the visit *best-effort* and 302s immediately; analytics can never break a redirect.
- **SQLite by default** — zero setup; moving to Postgres is a one-line provider change.

```bash
curl -X POST localhost:3000/api/links \\
  -H 'content-type: application/json' \\
  -d '{"url":"https://github.com/Godde3s"}'
# {"link":{"slug":"k7mp2ax", ...}}

curl -I localhost:3000/r/k7mp2ax              # 302 + visit recorded
curl localhost:3000/api/links/k7mp2ax/stats   # totals, byDay, topReferrers
```

## Engineering notes

The redirect handler is deliberately boring: look up the slug, wrap analytics in its own try/catch, redirect. URL validation rejects anything that is not an absolute `http(s)` URL with a real hostname before the database ever sees it — `javascript:` and friends die at the door. The UI is Tailwind, dark, keyboard-friendly. **Unit tests** cover validation, slug generation (200-sample alphabet check) and referrer bucketing; CI runs `vitest` + `tsc --noEmit` on every push. MIT licensed.

