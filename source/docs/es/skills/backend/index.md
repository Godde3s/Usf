---
title: "Backend y APIs — Servicios hechos para permanecer"
description: "FastAPI, Gin, Laravel, .NET, Express — diseño y operación de servicios y APIs que sobreviven tráfico real."
---

# Backend y APIs — Servicios hechos para permanecer

Mi filosofía de backend es aburrida a propósito: contratos claros, fallos explícitos, y servicios que se reinician solos sin drama. La parte emocionante es lo que los servicios permiten — infraestructura de IA gratuita, paneles que sirven a usuarios reales, puentes que convierten cuentas web en APIs.

## Stacks con los que entrego

| Stack | Punto dulce |
| --- | --- |
| Python — FastAPI / Django | APIs, agentes, puentes async I/O (GhostBrain, Hermes). |
| Go — Gin / stdlib | Servicios y CLIs de binario único (NetPilot, OmniRouter). |
| PHP — Laravel | Productos completos con auth, colas y paneles admin. |
| C# — ASP.NET | Servicios de nivel empresarial y backends de escritorio. |
| Node — Express / Fastify | Workers de borde, pegamento en tiempo real, prototipos rápidos. |

## No negociables

- **Endpoint de salud** en todo lo longevo — mi propia herramienta ([NetPilot](/es/projects/netpilot/)) los monitorea.
- **Degradación elegante** — un upstream muerto debe degradar funciones, jamás derribar el proceso.
- **Logs estructurados** desde el día uno, porque depurar por vibras no escala más allá de las 2 AM.
- **Tests de contrato** para todo lo que otros sistemas dependen — incluidos los agentes.

El patrón se repite en mis proyectos: los [puentes free-api](/es/projects/glm-free-api/) lidiar con upstreams hostiles y limitados; los [paneles](/es/projects/usf-panel/) con estado multiusuario; los [routers](/es/projects/omnirouter/) con el fallo entre ellos. Mismos principios, distintos puntos de presión.
