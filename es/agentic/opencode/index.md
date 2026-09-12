---
title: "OpenCode — Mi compañero de terminal"
description: "OpenCode: agente de código terminal open source. Agnóstico del modelo, conmutable a mitad de tarea, pareja perfecta para enrutar vía omnirouter."
---

# OpenCode — Mi compañero de terminal

**OpenCode** es el agente de terminal open source al que recurro primero. Hace pareja conmigo dentro de la terminal — lee archivos, edita código, ejecuta comandos — y, crucialmente, es **agnóstico del modelo**: el proveedor se puede cambiar a mitad de tarea sin perder la conversación.

## Por qué gana el primer puesto

- **Nativo de terminal.** Vive donde ya trabajo; sin salto de contexto a una GUI.
- **Libertad de modelo.** GLM para iteración barata, Claude para razonamiento difícil, DeepSeek para código — al vuelo.
- **Sinergia con omnirouter.** Apuntando OpenCode a mi propio endpoint de [OmniRouter](/es/projects/omnirouter/), el "proveedor" es en realidad una flota balanceada con failover.
- **Ciclo rápido.** Ediciones pequeñas, preguntas rápidas, corridas de tests — las tareas de 30 segundos que pasan cincuenta veces al día.

```bash
# apuntar opencode a mi propio router
export OPENAI_BASE_URL=http://localhost:8787/v1
opencode

> refactor src/scan.go: extrae el pool de workers,
> añade tests para el manejo de timeout, el CLI queda igual
```

## Cómo lo uso en el ciclo

OpenCode es dueño del **ciclo interno**: refactors rápidos, subidas de dependencias, "explícame este stack trace", borrador de una función con tests. Cuando una tarea crece más allá de una sesión — features multi-archivo, movimientos de arquitectura — la promuevo a [Claude Code](/es/agentic/claude-code/) para planificar, o la reparto a [Codex](/es/agentic/codex/) si se paraleliza. Saber *a qué agente informar* es la mitad del [método](/es/agentic/overview/).
