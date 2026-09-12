---
title: "Codificación agéntica — Dirigiendo equipos de agentes"
description: "Cómo uso OpenCode, Codex, Claude Code y Hermes Agent para enviar software de producción — la visión general de mi flujo agéntico."
---

# Codificación agéntica — Dirigiendo equipos de agentes

La codificación agéntica es la práctica de dirigir agentes de código autónomos como un líder técnico dirige un equipo: con especificaciones claras, ciclos de revisión ajustados y responsabilidad total. Es mi método diario para enviar software, y la considero la habilidad de ingeniería más importante que he construido en los últimos tres años.

Mi cadena de herramientas es deliberada. **OpenCode** para programación en pareja rápida y agnóstica del modelo en la terminal. **Codex** para ejecución paralela en sandboxes aisladas. **Claude Code** para planificación profunda y refactors en todo el código. **Hermes Agent** — mi propio stack — enruta modelos y orquesta a los otros tres. Herramientas distintas, fortalezas distintas, un solo flujo.

## El ciclo central

<StepBar :items='[{"title": "Informar a los agentes"}, {"title": "Generar e iterar"}, {"title": "Revisión humana"}, {"title": "Desplegar y monitorear"}]' />

El ciclo es exactamente los cuatro pasos descritos en [El método agéntico](/es/about/how-i-work/): brief, generar, revisar, desplegar. Lo que cambia por herramienta es *dónde ocurre cada paso* — OpenCode vive en mi terminal junto al editor, Codex reparte el trabajo en sandboxes, Claude Code planifica antes de tocar un archivo, y Hermes coordina tareas largas y mantiene a todos alimentados con el modelo correcto.

## Qué cambiaron los agentes en mi ingeniería

- **Las specs se volvieron un artefacto de primera clase.** Un brief preciso vale más que un prompt ingenioso.
- **La revisión se volvió un superpoder.** Leer diffs rápido — y con sospecha — es ahora una habilidad central.
- **La arquitectura importa más, no menos.** Los agentes amplifican la buena estructura y exponen la mala al instante.
- **Los tests se pusieron serios.** Si la suite es débil, los agentes producirán basura confiable con total seguridad.

::: info Pruebas, no promesas
Este portafolio — dos idiomas, un clon del tema VitePress, iconos SVG propios y 14 ilustraciones generadas — se construyó con este ciclo. También NetPilot, OmniRouter y cada panel de la sección de [proyectos](/es/projects/netpilot/).
:::

Las páginas siguientes documentan cada herramienta: [OpenCode](/es/agentic/opencode/), [Codex](/es/agentic/codex/), [Claude Code](/es/agentic/claude-code/) y [Hermes Agent](/es/agentic/hermes/).
