---
title: "TextSense: ML That Ships Like a Real Service"
description: "Why most NLP repos are notebooks — and how TextSense wraps a transformer in the operational scaffolding a real service needs."
---

# TextSense: ML That Ships Like a Real Service

Most "NLP API" repos you find are a notebook behind a Flask `if __name__ == "__main__"`. They die the moment someone asks a production question: what are the metrics? what happens when the model can't load? how do you scale it? **[TextSense](https://github.com/Godde3s/textsense)** is my answer — an ML model wrapped in the operational scaffolding a real service needs.

## The engineering bet

Sentiment and intent analysis over HTTP, with a transformer backend (DistilBERT SST-2). That part is table stakes. The bet was in everything around the model:

- **Graceful degradation** — a `ModelProvider` pattern tries `transformers` first; if weights are unavailable, a deterministic lexicon engine answers with the *identical API contract*. The service never hard-fails because a model didn't download.
- **Latency discipline** — warm-up inference at startup, a batch endpoint with internal micro-batching, and caching so repeated inputs don't recompute.
- **Observability from day one** — Prometheus-format `/metrics` with request counters, latency histograms, cache hits and the active model backend as a label.

## Honest responses

Every response carries the model id that produced it — `distilbert-sst2` or `lexicon-v1` — because a score without provenance is a guess pretending to be data. Optional API-key auth, payload size caps and input sanitization round out the surface.

## What it proves

The 15+ pytest cases run offline in under five seconds against the lexicon backend — no GPU, no gigabytes of downloads, CI green on every push. TextSense is the rare ML repo written from the backend engineer's chair: model choices matter less than the contract, the metrics and the failure story. That is the mindset I bring to any AI-adjacent team — the model is a component, the service is the product.
