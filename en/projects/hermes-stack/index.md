---
title: "Hermes Stack — Self-hosted AI Brain"
description: "Hermes Agent + 9Router + OmniRouter packed into one free Hugging Face Space — a self-hosted AI brain deployable in minutes."
---

# Hermes Stack — Self-hosted AI Brain

**[Hermes Stack](https://github.com/Godde3s/hermes-stack)** is the project that ties my whole AI infrastructure together. It packages **Hermes Agent**, **9Router** and **OmniRouter** into a single Hugging Face Space that deploys in minutes and costs nothing. One click, and you own a cloud-hosted AI brain: an agent runtime, a model router and a console to drive both.

## What is inside

| Component | Role |
| --- | --- |
| Hermes Agent | The brain — plans tasks, calls tools, runs automations, remembers context. |
| 9Router | Multi-provider model routing for nine upstream families. |
| OmniRouter | My Go router adding weights, quotas and failover on top. |
| HF Space | Free hosting with zero cold-start pain for this class of workload. |

## Why it matters

Most "AI assistant" setups are either a hosted SaaS you don't control or a local rig you can't reach from your phone. Hermes Stack is the third option: **self-hosted, cloud-reachable, and free**. I use it as the coordinator for my other agents — it holds API routes, serves as a webhook brain for automations, and gives every tool in my chain a stable, roammable endpoint.

1. Fork the Space (or deploy from the repo with one command).
2. Paste your upstream keys — or point it at free bridges like [GLM Free API](/en/projects/glm-free-api/).
3. Talk to it from Telegram, curl, or any OpenAI-compatible client.

The [Agentic Coding](/en/agentic/hermes/) section covers how Hermes drives the rest of my toolchain day to day. This portfolio itself was coordinated through it — briefs, reviews and deploys all routed through a stack that costs less than a coffee. Which is to say: exactly nothing.
