---
title: "DevOps y despliegue — Cinco plataformas, un comando"
description: "HF Spaces, Railway, Render, Fly.io, Koyeb, Cloudflare Workers — desplegar servicios resilientes en tiers gratuitos."
---

# DevOps y despliegue — Cinco plataformas, un comando

El despliegue es donde los hobbies se vuelven productos. Mantengo rutas de despliegue en seis plataformas y trato "un comando" como un requisito estricto — porque cuando una plataforma se vuelve hostil o una región se cae, la velocidad de migración *es* el uptime.

## Manual de plataformas

| Plataforma | Lo que corro allí |
| --- | --- |
| Hugging Face Spaces | Hermes Stack, puentes de IA — cómputo gratuito generoso. |
| Cloudflare Workers | Paneles usf-edge — estado KV, 300+ PoPs, sin arranques en frío. |
| Railway / Render / Fly.io / Koyeb | Paneles y APIs — cada uno con sus propias rarezas antibloqueo. |
| VPS (Linux) | Despliegues clásicos, túneles, monitoreo. |

- **Docker** cuando la plataforma lo soporta; **Procfiles y buildpacks** cuando no.
- **Hábitos de CI** — GitHub Actions para tests y builds; los despliegues se mantienen aburridos a propósito.
- **Observabilidad** — logs estructurados, pings de uptime desde mi propia herramienta, alertas a Telegram.
- **Disciplina de secretos** — variables de entorno, bóvedas cifradas, nada en git.

La filosofía coincide con mi [mentalidad de redes](/es/about/networking/): cada despliegue está a un derribo de morir, así que cada despliegue tiene un gemelo documentado en otra plataforma. Mis paneles literalmente traen cinco comandos de despliegue por esta razón.
