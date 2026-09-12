---
title: "Claude Code — El planificador ejecutor"
description: "Claude Code: planificación multipaso, uso de herramientas y ediciones en todo el código con precisión quirúrgica. El agente detrás de este mismo sitio."
---

# Claude Code — El planificador ejecutor

**Claude Code** es la CLI agéntica de Anthropic, y ocupa un asiento específico en mi flujo: el **planificador ejecutor**. Mientras otros agentes brillan por velocidad o escala, Claude Code brilla por *profundidad* — mantiene una base de código entera en la cabeza, planifica cambios multipaso y los ejecuta con precisión quirúrgica en docenas de archivos.

## Qué lo hace diferente

- **Planifica antes de tocar código.** Para cualquier tarea no trivial produce un plan explícito que puedo corregir — el lugar más barato posible para arreglar un error.
- **Ediciones en toda la base.** Busca, entiende y luego edita coherentemente — no parches ciegos archivo por archivo.
- **Disciplina de herramientas.** Muestra su trabajo: comandos ejecutados, tests corridos, diffs preparados.
- **Buen gusto.** En la práctica, sus refactors se leen como de un senior cuidadoso, lo que minimiza mi superficie de revisión.

> Este portafolio es una obra de Claude Code: un clon completo del tema VitePress adaptado a cuatro idiomas con soporte RTL — planificado una vez, revisado por mí, enviado en esta forma.

## Cómo le paso el brief

Cuanto mejor sea el plan que puedo criticar, mejor el resultado. Así que mis briefs para Claude Code declaran el objetivo, las restricciones y la definición de hecho — e invitan explícitamente a un plan antes de ejecutar. Luego hago lo mío: leo el plan, ataco los puntos débiles, y solo entonces lo dejo correr. El patrón está descrito en [El método agéntico](/es/about/how-i-work/).

Claude Code también juega el rol de integrador después de los abanicos de [Codex](/es/agentic/codex/): reconcilia diffs, resuelve solapamientos y corre la suite completa antes de que algo llegue a una rama que me importa.
