---
title: "TextSense — Microservicio NLP"
description: "Microservicio de análisis de sentimiento con backend transformer y fallback léxico determinista: inferencia por lotes, caché, métricas Prometheus, pruebas offline."
---

# TextSense — Microservicio NLP

**[TextSense](https://github.com/Godde3s/textsense)** es como se ve un servicio de ML cuando lo construye un ingeniero de backend: el modelo es la parte fácil; todo lo demás — health probes, métricas, degradación elegante, endurecimiento de payloads — es la ingeniería real.

## El fallback es la funcionalidad

La mayoría de las "APIs" de NLP mueren el día que falla la descarga del modelo. TextSense envuelve la inferencia en un **patrón estrategia**: intenta el backend `transformers` (DistilBERT SST-2 en CPU) y, si torch no está disponible o la inferencia falla, degrada a un **motor léxico determinista** en stdlib puro. El contrato HTTP nunca cambia — cada respuesta lleva un `model` id (`distilbert-sst2` o `lexicon-v1`).

El motor léxico es genuinamente útil: manejo de negaciones, intensificadores y énfasis — lo bastante determinista para que toda la suite corra **offline en menos de un segundo**, sin descargas gigantes ni GPU.

## Lo que el servicio entrega

- `POST /api/v1/sentiment` — texto → etiqueta, confianza, latencia, request id
- `POST /api/v1/sentiment/batch` — hasta 64 textos, orden preservado, caché
- `GET /metrics` — formato Prometheus: contadores, latencia, aciertos de caché
- `GET /health` — backend id + uptime para orquestadores
- Auth opcional `X-API-Key`, límites de payload con `413` honestos

::: tip Pruébalo
`docker compose up --build`, y envía una frase a `/api/v1/sentiment` — [github.com/Godde3s/textsense](https://github.com/Godde3s/textsense)
:::
