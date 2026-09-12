---
title: "BaleForge — framework async para bots de Bale"
description: "Framework async moderno para bots del mensajero Bale: filtros declarativos, FSM, middleware y puente de agente de IA compatible con OpenAI."
---

# BaleForge — framework async para bots de Bale

**[BaleForge](https://github.com/Godde3s/baleforge)** nace porque Bale — el mensajero que millones de iraníes usan a diario — merece la experiencia de desarrollo de los frameworks modernos. Construir un bot de Bale a mano significa bucles `getUpdates` artesanales y diccionarios JSON anidados. BaleForge lo sustituye por objetos tipados, filtros declarativos y robustez de producción.

## Qué te da

- **Filtros declarativos** — `command("start")`, `text(contains=...)`, `from_user(...)`, `state(...)`, `callback(...)`; gana el primer handler que coincida.
- **FSM incluida** — asistentes multi-paso y formularios con almacenamiento intercambiable.
- **Pipeline de middleware** — logging, límites de tasa y control de acceso en el orden correcto.
- **Robustez** — reintentos con backoff exponencial, descarte de updates viejos, aislamiento de errores, apagado limpio.
- **Puente de agente IA** — un cerebro en ~10 líneas.

```python
from baleforge import Bot, Router, command

router = Router()

@router.message(command("start"))
async def start(ctx):
    await ctx.reply("¡Hola! Lo hice con BaleForge 🚀")

await Bot(token).include(router).run()
```

## El puente de agente

`AgentBridge` habla con **cualquier endpoint compatible con OpenAI** — OpenAI, DeepSeek, Qwen, GLM o mi propio [OmniRouter](/es/projects/omnirouter/). Mantiene memoria por chat, ejecuta un bucle acotado de tool-calling (el modelo puede llamar a tus funciones async), recorta el historial y nunca deja que una herramienta rota tumbe el bot.

**10 tests, red cero** — filtros, FSM, orden de middleware y el bucle de herramientas corren sobre transportes falsos. Licencia MIT.

