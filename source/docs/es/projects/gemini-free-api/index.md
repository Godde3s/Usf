---
title: "Gemini Free API — puente en modo invitado"
description: "Un puente Go que expone la app web de Gemini en modo invitado tras endpoints compatibles con OpenAI y Anthropic — funciona sin iniciar sesión, con streaming."
---

# Gemini Free API — puente en modo invitado

**[Gemini Free API](https://github.com/Godde3s/gemini-free-api)** es el puente más atrevido de la familia: habla con la **app web de Gemini en modo invitado** — sin cuenta, sin login, sin clave — y lo expone tras **endpoints compatibles con OpenAI y Anthropic**. Ejecutas un binario Go y cualquier cliente LLM funciona contra Gemini gratis.

## Diseño

- **Modo invitado** — arranque de sesión sin credenciales, tokens rotados automáticamente.
- **Protocolo dual** — OpenAI `/v1/chat/completions` *y* Anthropic `/v1/messages`.
- **Streaming + herramientas** — passthrough SSE y emulación de function-calling al estilo [GhostBrain](/es/projects/ghost-brain/).
- **Binario único de Go** — la regla de siempre: el puente nunca debe ser lo que se cae.

```bash
./gemini-free-api --port 8006
curl localhost:8006/v1/chat/completions \
  -d '{"model":"gemini-pro","messages":[{"role":"user","content":"hello"}],"stream":true}'
```

Los puentes de esta familia comparten filosofía: hacer ingeniería inversa de la sesión web una vez y mantener aburrida la capa operativa — reintentos, rotación y errores honestos. Licencia MIT.

