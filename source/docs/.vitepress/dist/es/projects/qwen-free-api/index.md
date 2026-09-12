---
title: "Qwen Free API — puente Go para chat.qwen.ai"
description: "Un puente Go de un solo archivo que expone chat.qwen.ai (Qwen3.8-Max) tras endpoints compatibles con OpenAI y Anthropic — sin claves, streaming real."
---

# Qwen Free API — puente Go para chat.qwen.ai

**[Qwen Free API](https://github.com/Godde3s/qwen-free-api)** es mi entrada en Go a la familia de puentes de API gratuitas: habla con **chat.qwen.ai** (Qwen3.8-Max) y lo expone tras **endpoints compatibles con OpenAI y Anthropic**, de modo que cualquier herramienta que espere esos protocolos puede usar Qwen gratis.

## Diseño

- **Un archivo, cero navegador** — como [GLM Free API](/es/projects/glm-free-api/): sin headless Chrome, HTTP puro en Go.
- **Protocolo dual** — `/v1/chat/completions` (OpenAI) y `/v1/messages` (Anthropic) desde un binario.
- **Streaming SSE** — los chunks se retransmiten al llegar, con latencia honesta.
- **Higiene de sesiones** — obtención y rotación de tokens de invitado integrada.

```bash
./qwen-free-api --port 8005
curl localhost:8005/v1/chat/completions \
  -d '{"model":"qwen-max","messages":[{"role":"user","content":"سلام"}],"stream":true}'
```

La misma filosofía de la familia: **el puente nunca debe ser lo que se cae** — timeouts, reintentos y errores accionables. Apunta [OmniRouter](/es/projects/omnirouter/) hacia él y Qwen se suma al pool. Licencia MIT.

