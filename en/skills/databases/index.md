---
title: "Databases — Modeled and Tuned"
description: "PostgreSQL, MySQL, MongoDB, Redis, Firebase — schema design, query tuning and honest trade-offs."
---

# Databases — Modeled and Tuned

Most performance problems I meet are database problems wearing a frontend costume. I design schemas deliberately, measure before optimizing, and pick engines by workload instead of fashion.

## Engine choices I actually make

| Engine | When I choose it |
| --- | --- |
| PostgreSQL | Default OLTP: panels, APIs, anything with relations and constraints. |
| MySQL / MariaDB | Shared-hosting realities and legacy stacks. |
| MongoDB | Document-shaped, rapidly evolving data — session vaults, logs. |
| Redis | Caching, queues, rate limiting, session state. |
| Firebase / Supabase | Zero-ops products and prototypes that still need auth + data. |

- **Schema design** — normalization where integrity matters, deliberate denormalization where reads dominate.
- **Query tuning** — EXPLAIN plans, index strategy, N+1 hunting.
- **Migrations** — versioned, reversible, rehearsed on staging.
- **Backups** — automated, tested, and actually restorable (the only kind that count).
