---
title: "Hermes Stack: One Click, a Whole AI Server"
description: "The story of Hermes Stack — turning one free Hugging Face Space into a personal AI server with an agent, routers, a dashboard and Telegram control."
---

# Hermes Stack: One Click, a Whole AI Server

A personal AI server usually means a VPS bill, a domain, a reverse proxy and a lost weekend. I wanted the same power for **$0** — so I built **[Hermes Stack](https://github.com/Godde3s/hermes-stack)**: a deploy kit that turns one free Hugging Face Space into a complete, always-on AI node.

## What lands on the Space

One wizard — CLI, guided prompts or a GitHub Actions button — provisions a Space running three cooperating pieces: the [Hermes agent](https://github.com/NousResearch/hermes-agent) for multi-step task execution, [9Router](https://github.com/decolua/9router) for provider aggregation and my own [OmniRouter](https://github.com/Godde3s/omnirouter) for model routing — behind a web dashboard and an OpenAI-compatible API.

## The parts nobody tells you about

- **Keep-alive that respects the platform** — a gentle ping loop keeps the free Space awake without hammering it.
- **Hourly backups with real restore** — state is snapshotted somewhere you own; a rebuild rehydrates instead of starting over.
- **Telegram as a control plane** — restart, redeploy, check status and tail logs from your phone.
- **Dry-run honesty** — the wizard previews every step before touching your account, and works with placeholders until you wire real secrets.

## What it proves

Hermes Stack is DevOps empathy encoded in Python: idempotent provisioning, observable runtime, boring, recoverable failure. It is the project friends ask me to walk them through — and the fastest way to understand how I think about deployment: **if it is not reproducible from scratch, it is not deployed.**
