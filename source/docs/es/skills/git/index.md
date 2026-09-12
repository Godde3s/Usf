---
title: "Git y flujo de trabajo — Disciplina que escala"
description: "Estrategia de ramas, disciplina de revisión, commits convencionales y hábitos de CI para desarrollo individual y en equipo con agentes."
---

# Git y flujo de trabajo — Disciplina que escala

Git es el contrato entre mi yo pasado, mi yo futuro y los agentes que trabajan en mi nombre. Mis reglas de flujo son lo bastante simples para seguirlas a las 2 AM y lo bastante estrictas para que los diffs generados por agentes sigan siendo revisables.

## Las reglas

- **Ramas pequeñas de propósito único.** Una idea por rama — humana o de agente.
- **Commits convencionales.** `feat:`, `fix:`, `refactor:` — el changelog se escribe solo.
- **Revisa todo.** Especialmente código de agentes; la confianza se concede por diff, nunca por herramienta.
- **main sigue desplegable.** Si main se rompe, arreglarlo supera todo lo demás.
- **Tags para releases.** Cada estado enviado es recuperable para siempre.

Con agentes en el ciclo esta disciplina deja de ser opcional: tres sandboxes produciendo diffs en paralelo solo funciona si el historial se mantiene limpio y cada cambio está aislado. El [método agéntico](/es/about/how-i-work/) depende de que git sea aburrido y predecible — exactamente lo que quiero de la infraestructura.
