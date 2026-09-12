---
title: "Hermes Agent — Mi propia infraestructura"
description: "Hermes Agent: cerebro de IA autoalojado (hermes-stack) que enruta modelos, corre automatizaciones y mantiene abastecida a mi flota de agentes."
---

# Hermes Agent — Mi propia infraestructura

**Hermes Agent** es la pieza que construí yo mismo: la capa coordinadora de todo mi montaje agéntico, publicada como [hermes-stack](https://github.com/Godde3s/hermes-stack) en un Hugging Face Space gratuito. Las otras herramientas son individuos; Hermes es el *gerente* — enruta modelos, guarda contexto, corre automatizaciones y mantiene a cada agente abastecido con el cerebro correcto a la hora correcta.

## Lo que Hermes realmente hace todo el día

- **Enrutamiento de modelos.** Cada petición de cada herramienta puede fluir por mi [OmniRouter](/es/projects/omnirouter/) — modelos baratos para el trabajo sucio, premium para los juicios difíciles.
- **Cerebro de automatización.** Tareas activadas por webhook: vigilar un repo, avisarme por Telegram cuando un despliegue se rompe, resumir logs nocturnos de CI.
- **Guardián de contexto.** Los proyectos largos guardan sus briefs, decisiones y estado con Hermes, no regados en scrolls de terminales.
- **Endpoint itinerante.** Cualquier cliente compatible con OpenAI puede hablarle — la app del teléfono, un cron job, otro agente.

## ¿Por qué autoalojarlo?

Porque la dependencia es una decisión de diseño. Un "asistente de IA" alojado puede cambiar precios, limitarte por tasa o desaparecer — y en mi región también puede bloquearse por completo. Hermes Stack corre en infraestructura que controlo, detrás de routers que controlo, con fallbacks que configuré yo. Cuando un proveedor muere, nada cambia en mi flujo; el router simplemente deja de preguntarle.

<figure class="concept-illustration">
  <img src="/assets/img/agentic-loop.svg" alt="Hermes coordinando OpenCode, Codex y Claude Code" loading="lazy" />
  <figcaption>Un cerebro, tres especialistas, cero vendor lock-in.</figcaption>
</figure>

::: tip Despliega el tuyo
Todo el stack está a un clic del repo: [github.com/Godde3s/hermes-stack](https://github.com/Godde3s/hermes-stack) — amigable con el tier gratuito, documentado, y mío por derecho a mejorarlo en público.
:::
