---
title: "Hermes Stack: Un Clic, Todo un Servidor de IA"
description: "La historia de Hermes Stack — convertir un Space gratuito de Hugging Face en un servidor de IA personal con agente, routers, dashboard y control por Telegram."
---

# Hermes Stack: Un Clic, Todo un Servidor de IA

Un servidor de IA personal normalmente significa factura de VPS, dominio, reverse proxy y un fin de semana perdido. Yo quería la misma potencia por **$0** — así que construí **[Hermes Stack](https://github.com/Godde3s/hermes-stack)**: un kit de despliegue que convierte un Space gratuito de Hugging Face en un nodo de IA completo y siempre encendido.

## Qué aterriza en el Space

Un asistente — CLI, prompts guiados o un botón de GitHub Actions — provisiona un Space con tres piezas cooperando: el [agente Hermes](https://github.com/NousResearch/hermes-agent) para ejecución multi-paso, [9Router](https://github.com/decolua/9router) para agregación de proveedores y mi propio [OmniRouter](https://github.com/Godde3s/omnirouter) para enrutamiento de modelos — todo detrás de un dashboard web y una API compatible con OpenAI.

## Las partes de las que nadie te habla

- **Keep-alive que respeta la plataforma** — un bucle de ping amable evita que el Space gratuito se duerma, sin martillearlo.
- **Backups horarios con restore real** — el estado se guarda donde tú mandas; una reconstrucción se rehidrata en vez de empezar de cero.
- **Telegram como plano de control** — reiniciar, redesplegar, ver estado y seguir logs desde el móvil.
- **Honestidad de dry-run** — el asistente previsualiza cada paso antes de tocar tu cuenta y funciona con placeholders hasta que conectas secretos reales.

## Qué demuestra

Hermes Stack es empatía de DevOps codificada en Python: aprovisionamiento idempotente, runtime observable, fallos aburridos y recuperables. Es el proyecto que mis amigos me piden explicar — y la forma más rápida de entender cómo pienso el despliegue: **si no es reproducible desde cero, no está desplegado.**
