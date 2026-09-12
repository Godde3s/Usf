---
title: "OmniRouter — Un endpoint para cada modelo"
description: "Un router en Go que pone GLM, Qwen, DeepSeek y APIs propias tras un endpoint compatible con OpenAI, con balanceo de carga y failover."
---

# OmniRouter — Un endpoint para cada modelo

**[OmniRouter](https://github.com/Godde3s/omnirouter)** existe porque la rotación de modelos es real. Una semana GLM tiene la mejor relación valor, la siguiente Qwen gana en contexto, y DeepSeek siempre está para el código. Recablear tu app cada vez que se mueve la tabla no es ingeniería — así que construí un router que convierte la tabla en un archivo de configuración.

## La idea

Tu aplicación habla **un solo protocolo** — la API de chat completions de OpenAI, que se volvió la lengua franca de los LLM. OmniRouter habla todos los dialectos upstream del otro lado: GLM, Qwen, DeepSeek y cualquier API HTTP personalizada que registres. En medio proporciona balanceo round-robin, failover automático cuando un proveedor se degrada, cuotas por ruta y streaming unificado.

```yaml
upstreams:
  - name: glm
    base_url: https://api.zhipuai.example/v1
    weight: 3
  - name: qwen
    base_url: https://dashscope.example/compatible-mode/v1
    weight: 2
  - name: deepseek
    base_url: https://api.deepseek.example/v1
    weight: 1
strategy: round-robin
failover: auto
```

## Detalles de ingeniería dignos de robar

- **Seguimiento de salud por upstream** — un proveedor que empieza a devolver 500 queda en el banquillo automáticamente y se sondea en segundo plano.
- **Passthrough de streaming** — los trozos de SSE se retransmiten al llegar, así la latencia token a token sigue siendo honesta.
- **Cuotas y pesos** — los proveedores baratos absorben más tráfico; los premium se reservan para prompts difíciles.
- **Un solo binario Go** — la misma filosofía que [NetPilot](/es/projects/netpilot/): el router jamás debe ser lo que está caído.

OmniRouter también ancla mi flujo agéntico: OpenCode y otros agentes enrutan a través de él, lo que significa que cambiar el cerebro de toda mi cadena de herramientas es un cambio de una línea en la config. Hace pareja natural con [Hermes Stack](/es/projects/hermes-stack/), que lo aloja gratis.
