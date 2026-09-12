---
title: "NetPilot: un binario, todas las respuestas"
description: "La historia de construir NetPilot — un kit de red en Go puro que comprime cinco herramientas de admin en un solo binario estático."
---

# NetPilot: un binario, todas las respuestas

Todo sysadmin tiene esa carpeta de herramientas a medio instalar: una para escanear puertos, otra para ping, otra para health checks, todas con flags y formatos de salida distintos. **NetPilot** ([GitHub](https://github.com/Godde3s/netpilot)) empezó cuando me cansé de ser ese sysadmin.

## La restricción que le dio forma

Me di una sola regla: **el entregable es un único binario estático**. Sin runtime, sin dependencias, sin instalador. Esa única restricción decidió el lenguaje (Go), la arquitectura (stdlib primero) y la UX (subcomandos que se leen como frases). También convirtió al proyecto en el banco de pruebas perfecto para el desarrollo con equipo de agentes — la spec era lo bastante nítida para que los [agentes](/es/agentic/overview/) implementaran comandos en paralelo mientras yo revisaba.

## Lo que me enseñó construirlo

- **El diseño de concurrencia le gana al folclore de concurrencia** — un pool de workers con timeouts reales superó a tres borradores "optimizados".
- **El output es una API** — una salida JSON estable convirtió el CLI en un bloque que otros scripts (y agentes) pueden consumir.
- **La contención escala** — cinco comandos bien hechos valen más que treinta a medias.

Hoy NetPilot es lo primero que despliego en cualquier máquina nueva, y el estándar con el que juzgo cada CLI que construyo — incluidos los que los agentes construyen para mí.
