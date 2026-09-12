---
title: "Infra IA y LLM — El arquitecto del tier gratuito"
description: "Puentes de API, routers de modelos, runtimes de agentes y autoalojamiento — infraestructura de IA que cuesta cero en correr."
---

# Infra IA y LLM — El arquitecto del tier gratuito

Cualquiera puede llamar a una API de pago. La ingeniería interesante es construir **infraestructura sobre tiers gratuitos que se comporta como una de pago** — y eso es exactamente lo que hacen mis proyectos de IA, por capas.

## Las capas

| Capa | Proyecto | Trabajo |
| --- | --- | --- |
| Acceso | [GLM Free API](/es/projects/glm-free-api/), [GhostBrain](/es/projects/ghost-brain/), puentes qwen/deepseek | Convertir modelos web gratuitos en APIs reales compatibles con OpenAI/Anthropic. |
| Enrutamiento | [OmniRouter](/es/projects/omnirouter/) | Balanceo, pesos, cuotas y failover entre proveedores. |
| Coordinación | [Hermes Stack](/es/projects/hermes-stack/) | Runtime de agentes + automatizaciones + consola; autoalojado y gratis. |
| Consumo | [OpenCode · Codex · Claude Code](/es/agentic/overview/) | Flota de agentes haciendo trabajo de ingeniería real sobre el stack. |

Las reglas de diseño son consistentes: nunca depender de un solo proveedor, nunca confiar en que un tier gratuito siga siendo gratuito, y tener siempre una salida de emergencia. Cuando un puente muere, el router lo banca; cuando una plataforma se vuelve hostil, aplica el [disciplinamiento de paneles](/es/about/networking/) — migrar en minutos. El resultado es un stack de IA multi-modelo con factura mensual de exactamente cero.

En el ML en sí trabajo con TensorFlow, PyTorch, OpenCV y las herramientas de Hugging Face — con la profundidad suficiente para afinar, incrustar y evaluar, que suele ser todo lo que un producto realmente necesita.
