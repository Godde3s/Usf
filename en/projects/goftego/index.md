---
title: "Goftego — Self-hosted Chat Platform"
description: "A lightweight self-hosted chat platform: channels, realtime WebSocket fan-out, JWT auth, presence and typing indicators — one SQLite file, bilingual fa/en with RTL."
---

# Goftego — Self-hosted Chat Platform

**[Goftego](https://github.com/Godde3s/goftego)** (گفتگو — *conversation*) is what a small community gets instead of surrendering its conversations to a SaaS: a **one-command, own-your-data chat platform**. Channels, realtime delivery, presence counts, typing indicators, JWT auth with bcrypt-hashed passwords — all stored in **one SQLite file** with WAL mode, zero external services.

## The stack

- **Server** — Node.js (ESM): Express REST API, a WebSocket hub (`join` / `leave` / `typing` / `post` → persist → fan-out), `better-sqlite3` with foreign keys and indexes, bcrypt cost 12, JWT verified on both REST and the WS handshake.
- **Client** — Vue 3 SPA: reactive store without a state library, bilingual **fa (RTL) / en** UI switchable in one click, dark theme, mobile-friendly.
- **Deploy** — multi-stage Dockerfile (build the SPA, serve it from the API server) + `docker compose up`.

```bash
docker compose up --build     # → http://localhost:3000
```

## Details I sweated

Messages posted over REST and over WebSockets flow through **one persistence path**, so the WS broadcast and the SQL insert can never disagree. The realtime hub re-verifies JWTs per connection, presence counts update on leave/disconnect, and the client reconnects its socket per channel switch. The Vue client talks Persian-first: `<html dir="rtl">`, Vazirmatn font, Persian placeholders — English is one toggle away.

**7 vitest tests** cover the auth flow, channel CRUD, message paging and validation. This is my reference full-stack build: database, API, realtime, SPA, i18n, containers — the whole loop. MIT licensed.

