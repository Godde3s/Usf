---
title: "Goftego: Realtime Chat, One Command Away"
description: "The story of building Goftego — a self-hosted chat platform with realtime channels, presence and typing indicators in one SQLite file."
---

# Goftego: Realtime Chat, One Command Away

Hosted chat SaaS locks your community behind someone else's storage, pricing and jurisdiction. For small teams that just want a room, the trade is absurd: your conversations, their database. **Goftego** ([GitHub](https://github.com/Godde3s/goftego)) — *goftego* means "conversation" — is my answer: a modern chat platform you host yourself, in one command.

## The one-file bet

The whole state of a deployment lives in **one SQLite file** with WAL mode. No database server to babysit, no external services to trust. Backup is `cp`; migration is moving the file. That single constraint shaped everything else: it forced efficient queries, careful transaction design, and a deploy story that is literally `docker compose up`.

## Realtime is a product feature, not a checkbox

- **WebSocket fan-out** — channel messages land on every subscriber without polling, with presence counts and typing indicators that make the room feel alive.
- **Auth that respects the data** — bcrypt (cost 12) password hashing and JWT sessions, because "self-hosted" must not mean "insecure".
- **A UI for humans** — a Vue 3 SPA, dark by default, bilingual Persian/English with proper RTL. For a Persian-speaking team, an interface that reads right is not a nice-to-have.

## What it proves

Goftego is full-stack product work: realtime protocol design on the backend, state management on the frontend, and an opinionated data model underneath. It shows I can take a product from "wouldn't it be nice" to `docker compose up` — and that I treat self-hosted users with the same security bar as a public SaaS. Your community's data stays on your box, where it belongs.
