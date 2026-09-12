---
title: "DeepSeek Free API — puente con pool de cuentas"
description: "Un puente en Python que convierte cuentas web gratuitas de DeepSeek en una API local compatible con OpenAI y Anthropic — pool multi-cuenta, emulación de function-calling, dashboard persa."
---

# DeepSeek Free API — puente con pool de cuentas

**[DeepSeek Free API](https://github.com/Godde3s/deepseek-free-api)** convierte tu cuenta web gratuita de DeepSeek en una **API local compatible con OpenAI** — con lo que importa para uso diario real: un **pool multi-cuenta** con rotación round-robin, cooldown 429 con backoff exponencial, failover automático y detección de sesiones muertas.

## Qué hace distinta a esta versión

- **Dos protocolos** — OpenAI `/v1/chat/completions` *y* Anthropic `/v1/messages` con bloques `tool_use`: Claude Code y Hermes Agent funcionan de fábrica.
- **Emulación de function-calling** — envías `tools=`, recibes `tool_calls` reales, streaming incluido.
- **Dashboard persa RTL** — estados de cuentas, playground en vivo y snippets listos en `/`.
- **Errores humanizados** — cada mensaje dice qué pasó *y* el comando exacto para arreglarlo.

```bash
python server.py          # → http://127.0.0.1:8001
curl localhost:8001/v1/chat/completions -d '{"model":"deepseek-chat","messages":[...]}'
```

**27 comprobaciones automatizadas** corren sin ninguna cuenta. Como mis otros puentes, es un servicio de propósito único con higiene operativa real: reintentos, cooldowns, failover y autodiagnóstico.

