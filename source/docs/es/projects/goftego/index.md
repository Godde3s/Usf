---
title: "Goftego — plataforma de chat autoalojada"
description: "Plataforma de chat ligera autoalojada: canales, fan-out WebSocket en tiempo real, auth JWT, presencia e indicadores de escritura — un archivo SQLite, interfaz bilingüe fa/en con RTL."
---

# Goftego — plataforma de chat autoalojada

**[Goftego](https://github.com/Godde3s/goftego)** (گفتگو — *conversación*) es lo que una comunidad pequeña tiene en vez de entregar sus conversaciones a un SaaS: **chat autoalojado con un solo comando y datos propios**. Canales, entrega en tiempo real, recuentos de presencia, indicadores de escritura, auth JWT con contraseñas bcrypt — todo en **un archivo SQLite** con WAL, sin servicios externos.

## El stack

- **Servidor** — Node.js (ESM): API REST con Express, hub WebSocket (`join` / `leave` / `typing` / `post` → persistir → fan-out), `better-sqlite3`, bcrypt cost 12, JWT verificado en REST y en el handshake WS.
- **Cliente** — SPA en Vue 3: store reactivo sin librería de estado, UI bilingüe **fa (RTL) / en**, tema oscuro, móvil incluido.
- **Despliegue** — Dockerfile multi-etapa + `docker compose up`.

```bash
docker compose up --build     # → http://localhost:3000
```

## Detalles que me costaron

Los mensajes que llegan por REST y por WebSocket fluyen por **una sola ruta de persistencia**, así que el broadcast y el INSERT nunca discrepan. El hub re-verifica JWTs por conexión, la presencia se actualiza al salir o caerse, y el cliente Vue es persa-first: `<html dir="rtl">`, fuente Vazirmatn — el inglés está a un clic.

**7 tests con vitest** cubren auth, CRUD de canales, paginación y validación. Es mi build full-stack de referencia: base de datos, API, tiempo real, SPA, i18n y contenedores — el ciclo completo. Licencia MIT.

