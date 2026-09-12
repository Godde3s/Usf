---
title: "GhostBrain — De Gemini a API"
description: "Convierte una cuenta gratuita de Gemini en una API real compatible con OpenAI y Anthropic: sesiones seguras, pools multi-cuenta, streaming SSE."
---

# GhostBrain — De Gemini a API

**[GhostBrain](https://github.com/Godde3s/GhostBrain)** resucita una cuenta web gratuita de Gemini como infraestructura real. La app web te da un modelo potente detrás de una página de chat; GhostBrain lo saca de ahí y lo sirve como una API de verdad — con todo lo que eso implica: vinculación segura de sesiones, pools multi-cuenta, streaming SSE y persistencia.

## Decisiones de diseño

La parte frágil de cualquier puente de cuenta web es la sesión. GhostBrain la trata como ciudadano de primera clase: las cookies se guardan cifradas, las sesiones se chequean y rotan antes de morir —no después—, y las cuentas se agrupan en pools para que ninguna identidad absorba todo el tráfico. Cuando una sesión muere, el pool la marca en silencio y sigue sirviendo — tu cliente nunca ve un 401.

| Preocupación | Enfoque |
| --- | --- |
| Seguridad de sesión | Bóveda de cookies cifrada, sin secretos en texto plano en disco. |
| Fiabilidad | Sondeos de salud en segundo plano + rotación automática. |
| Compatibilidad | `/v1/chat/completions` de OpenAI y `/v1/messages` de Anthropic. |
| Streaming | Retransmisión SSE nativa, token por token. |
| Lenguaje | Python — I/O asíncrono de punta a punta. |

## Dónde encaja en mi stack

GhostBrain es el hermano en Python de [GLM Free API](/es/projects/glm-free-api/), y ambos son upstreams que mi [OmniRouter](/es/projects/omnirouter/) balancea con gusto. Desplegados juntos en tiers gratuitos — Hugging Face Spaces, Railway, Render — me dan una flota de APIs multi-modelo cuya factura mensual es exactamente cero. Esa combinación es la que [Hermes Stack](/es/projects/hermes-stack/) empaqueta como despliegue de un clic.

::: tip Uso responsable
Los puentes de tiers gratuitos viven de la generosidad de otros. GhostBrain se auto-limita y rota cuentas precisamente para seguir siendo educado — úsalo como invitado, no como saqueador.
:::
