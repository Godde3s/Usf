---
title: "GLM Free API — Puente de un solo archivo"
description: "Una API completa compatible con OpenAI y Anthropic para GLM en un solo archivo Go. Sin navegador, sin Chrome headless, con pool de cuentas."
---

# GLM Free API — Puente de un solo archivo

**[GLM Free API](https://github.com/Godde3s/glm-free-api)** es mi repositorio con más estrellas, y la premisa es casi descortés de simple: un puente API completo hacia GLM en **un solo archivo Go**, con **cero automatización de navegador**. Sin Chrome headless devorando RAM, sin caprichos de puppeteer — solo HTTP bien hecho.

## El problema que resuelve

El chat web de GLM es gratis pero está encerrado en un navegador. Los puentes existentes envuelven ese navegador en automatización, lo que significa explosiones de memoria, captchas a cada rato y caídas bajo carga. Yo fui por el camino contrario: hice ingeniería inversa del flujo de sesión web y implementé el protocolo nativamente en Go. El resultado arranca en milisegundos y aguanta peticiones concurrentes sin un solo proceso de navegador.

## Características

- **Compatible con OpenAI** vía `/v1/chat/completions` — drop-in para cualquier cliente existente.
- **Compatible con Anthropic** vía `/v1/messages` — para que las herramientas estilo Claude también funcionen.
- **Pool de cuentas** — rota varias sesiones, marca las muertas, quédate bajo los límites de tasa.
- **Streaming** — SSE real, no respuestas troceadas falsas.
- **Un archivo** — `go build`, ejecuta, listo. Puedes leer toda la implementación de una sentada.

> Un solo archivo no es un alarde. Es una declaración: la infraestructura debería ser legible — puedes auditar cada línea en diez minutos.

La misma arquitectura tuvo hermanos: [GhostBrain](/es/projects/ghost-brain/) (Gemini), qwen-free-api y deepseek-free-api. Junto con [OmniRouter](/es/projects/omnirouter/), forman una infraestructura de IA completa en tier gratuito que cuesta exactamente cero en ejecutarse.
