---
title: "Codex — Motor de ejecución paralela"
description: "OpenAI Codex como mi motor de tareas paralelas: sandboxes aisladas, refactors en abanico, tareas largas con diffs revisables."
---

# Codex — Motor de ejecución paralela

**Codex** es donde mi trabajo se abanica. El agente de OpenAI corre tareas en **sandboxes aisladas** — cada una con su propia copia del repositorio — lo que lo hace la herramienta correcta siempre que un cambio se descompone en piezas independientes: subir dependencias en varios paquetes, aplicar un refactor mecánico a cuarenta archivos, o generar variantes de una feature para comparar.

## El patrón abanico

1. Descompón la tarea en piezas que no puedan chocar — una sandbox por pieza.
2. Escribe el brief para que cada pieza tenga criterios de aceptación idénticos.
3. Déjalas correr en paralelo; recolecta los diffs.
4. Revisa como un maestro de merges: acepta, rechaza, o devuelve con un brief más afilado.

La disciplina que hace esto seguro es la misma que en cualquier sistema paralelo: **aísla lo que puede chocar, secuencia lo que no.** Dos agentes editando el mismo módulo no es paralelismo; es un conflicto de merge con pasos extra. Por eso mis briefs declaran explícitamente los límites de archivos.

## Dónde Codex le gana a todo

- **Escala mecánica.** "Renombra X a Y en todas partes y arregla los imports" — tortura para un humano, trivial para una granja de sandboxes.
- **Generación de opciones.** Tres implementaciones de una función, comparadas lado a lado, superan al atormentarse por una.
- **Paciencia de fondo.** Instalaciones largas, suites de tests enormes, generación de datasets — tareas que no quiero babysitear.

::: tip Combinado con el resto
Codex produce las piezas; [Claude Code](/es/agentic/claude-code/) las integra; [Hermes](/es/agentic/hermes/) mantiene a la flota alimentada con modelos vía [OmniRouter](/es/projects/omnirouter/).
:::
