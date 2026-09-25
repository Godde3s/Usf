---
title: "TextSense — NLP Microservice"
description: "Sentiment analysis microservice with a transformer backend and a deterministic lexicon fallback: batch inference, caching, Prometheus metrics, offline tests."
---

# TextSense — NLP Microservice

**[TextSense](https://github.com/Godde3s/textsense)** is what an ML service looks like when a backend engineer builds it: the model is the easy part, and everything around it — health probes, metrics, graceful degradation, payload hardening — is the actual engineering.

## The fallback is the feature

Most NLP "APIs" die the day the model download fails. TextSense wraps inference in a **strategy pattern**: it tries the `transformers` backend (DistilBERT SST-2 on CPU) and, if torch is unavailable or inference throws, degrades to a **deterministic lexicon engine** written in pure stdlib. The HTTP contract never changes — every response carries a `model` id (`distilbert-sst2` or `lexicon-v1`) so callers know who answered and can decide what the reduced confidence means for them.

The lexicon engine is genuinely useful too: negation handling, intensifiers, punctuation emphasis — deterministic enough that the entire test suite runs **offline in under a second**, no gigabyte downloads, no GPU.

## What the service ships

- `POST /api/v1/sentiment` — single text → label, confidence, latency, request id
- `POST /api/v1/sentiment/batch` — up to 64 texts, order preserved, cache-aware
- `GET /metrics` — Prometheus format: request counters, latency, cache hits
- `GET /health` — backend id + uptime for orchestrators
- Optional `X-API-Key` auth, payload caps with honest `413`s

## Why this belongs in my portfolio

Because "AI Specialist" claims are cheap and running services are not. TextSense shows the full path: model choice, fallback strategy, batch coalescing, response caching, metrics exposition and a test suite that treats determinism as a feature. It pairs with [TaskFlow API](/en/projects/taskflow-api/) as the ML sibling of my backend stack.

::: tip Try it
`docker compose up --build`, then post a sentence to `/api/v1/sentiment` — [github.com/Godde3s/textsense](https://github.com/Godde3s/textsense)
:::
