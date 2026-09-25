---
title: "TaskFlow API — Backend FastAPI de grado producción"
description: "Una API REST de gestión de tareas construida como producción: rotación JWT con detección de reuso, RBAC, rate limiting, caché Redis, suite pytest y Docker Compose."
---

# TaskFlow API — Backend FastAPI de grado producción

**[TaskFlow API](https://github.com/Godde3s/taskflow-api)** es mi respuesta de referencia a la pregunta que hacen los entrevistadores: *¿qué significa "grado producción" en tu código backend?* En vez de responder con adjetivos, publiqué el repositorio — una API donde cada afirmación de seguridad está implementada **y** cubierta por pruebas.

## Seguridad probada, no prometida

| Control | Implementación |
| --- | --- |
| Contraseñas | bcrypt, coste 12, salt por usuario |
| Tokens de acceso | TTL de 15 minutos, HS256 firmado |
| Refresh tokens | Rotación de 7 días con **detección de reuso familiar** — reutilizar un token roto mata toda la familia |
| Autorización | Guardias RBAC como dependencias de FastAPI — `require_admin`, verificación de propiedad |
| Anti-abuso | Rate limiter de ventana deslizante → `429` con `Retry-After` |
| Higiene ops | Errores 500 genéricos, `X-Request-ID`, cabeceras de seguridad, imagen Docker non-root |

## Decisiones que vale la pena robar

- **Routers delgados, servicios gordos** — la capa HTTP solo parsea y serializa.
- **SQLAlchemy 2.0 async + Pydantic v2** — configuración 12-factor; SQLite local, PostgreSQL en compose.
- **Docker Compose** con `postgres:16` y `redis:7` con healthchecks — `docker compose up` es toda la guía de instalación.
- **Suite pytest que corre en segundos** — base de datos async en memoria, sin contenedores para CI.

::: tip Pruébalo
`docker compose up --build` y abre `/docs` — [github.com/Godde3s/taskflow-api](https://github.com/Godde3s/taskflow-api)
:::
