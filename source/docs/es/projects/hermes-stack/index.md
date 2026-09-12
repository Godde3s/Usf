---
title: "Hermes Stack — Cerebro de IA autoalojado"
description: "Hermes Agent + 9Router + OmniRouter empaquetados en un Hugging Face Space gratuito — un cerebro de IA desplegable en minutos."
---

# Hermes Stack — Cerebro de IA autoalojado

**[Hermes Stack](https://github.com/Godde3s/hermes-stack)** es el proyecto que ata toda mi infraestructura de IA. Empaqueta **Hermes Agent**, **9Router** y **OmniRouter** en un solo Hugging Face Space que se despliega en minutos y no cuesta nada. Un clic, y tienes un cerebro de IA en la nube que te pertenece: runtime de agentes, router de modelos y consola para manejar ambos.

## Qué hay dentro

| Componente | Rol |
| --- | --- |
| Hermes Agent | El cerebro — planifica tareas, llama herramientas, corre automatizaciones, recuerda contexto. |
| 9Router | Enrutamiento multi-proveedor para nueve familias de upstreams. |
| OmniRouter | Mi router en Go; añade pesos, cuotas y failover encima. |
| HF Space | Alojamiento gratuito sin dolores de arranque en frío para esta clase de carga. |

## Por qué importa

La mayoría de los montajes de "asistente de IA" son o bien un SaaS alojado que no controlas, o un equipo local que no alcanzas desde el teléfono. Hermes Stack es la tercera opción: **autoalojado, alcanzable desde la nube y gratis**. Lo uso como coordinador de mis otros agentes — guarda las rutas de API, funciona como cerebro de webhooks para automatizaciones y da a cada herramienta de mi cadena un endpoint estable.

1. Haz fork del Space (o despliega desde el repo con un comando).
2. Pega tus claves upstream — o apúntalo a puentes gratuitos como [GLM Free API](/es/projects/glm-free-api/).
3. Háblale desde Telegram, curl o cualquier cliente compatible con OpenAI.

La sección de [Codificación agéntica](/es/agentic/hermes/) cubre cómo Hermes dirige el resto de mi cadena día a día. Este mismo portafolio se coordinó a través de él — briefs, revisiones y despliegues pasaron todos por un stack que cuesta menos que un café. O sea: exactamente nada.
