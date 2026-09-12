---
title: "Bases de datos — Modeladas y afinadas"
description: "PostgreSQL, MySQL, MongoDB, Redis, Firebase — diseño de esquemas, afinado de consultas y trade-offs honestos."
---

# Bases de datos — Modeladas y afinadas

La mayoría de los problemas de rendimiento que encuentro son problemas de base de datos disfrazados de frontend. Diseño esquemas con intención, mido antes de optimizar, y elijo motores por carga de trabajo, no por moda.

## Elecciones de motor que realmente hago

| Motor | Cuándo lo elijo |
| --- | --- |
| PostgreSQL | OLTP por defecto: paneles, APIs, todo lo que tiene relaciones y restricciones. |
| MySQL / MariaDB | Realidades de hosting compartido y stacks heredados. |
| MongoDB | Datos documentales de evolución rápida — bóvedas de sesión, logs. |
| Redis | Caché, colas, rate limiting, estado de sesión. |
| Firebase / Supabase | Productos sin operaciones y prototipos que aún necesitan auth + datos. |

- **Diseño de esquemas** — normalización donde importa la integridad, desnormalización deliberada donde dominan las lecturas.
- **Afinado de consultas** — planes EXPLAIN, estrategia de índices, cacería de N+1.
- **Migraciones** — versionadas, reversibles, ensayadas en staging.
- **Backups** — automatizados, probados y realmente restaurables (el único tipo que cuenta).
