---
title: "OmniRouter: Domando el Caos de los Modelos"
description: "Por qué construí OmniRouter — convertir el caos de modelos en un archivo de configuración, con balanceo de carga, failover y streaming real en un binario Go."
---

# OmniRouter: Domando el Caos de los Modelos

El ecosistema de IA avanza a velocidad de scroll. El modelo que impulsaba mi app el lunes está deprecado el viernes, los precios cambian de la noche a la mañana, los tiers gratuitos aparecen y desaparecen. Mis proyectos seguían rompiéndose por razones que no tenían nada que ver con mi código — así que decidí que el caos fuera problema de otro. Ese otro es **[OmniRouter](https://github.com/Godde3s/omnirouter)**.

## Un endpoint, muchos cerebros

OmniRouter se sitúa entre tu app y cada proveedor de modelos que uses. Tu código habla OpenAI estándar — una base URL, una API key, `/v1/chat/completions` normal — y el router decide qué cerebro responde realmente: GLM, Qwen, DeepSeek o cualquier endpoint personalizado compatible con OpenAI que registres. Cambiar de modelo pasa a ser un **cambio de configuración, no una refactorización**.

## Las partes que exigieron ingeniería de verdad

- **Balanceo de carga que entiende de salud** — enrutamiento ponderado con health checks; un proveedor que falla su sonda se enfría y se esquiva en milisegundos.
- **Failover sin mentirle al cliente** — si una petición muere en el proveedor A, el router reintenta en el B, y el llamador solo ve un 200 ligeramente más lento.
- **Streaming real, de punta a punta** — los tokens SSE cruzan el router sin tocararse, porque un proxy que bufferea streams no es un proxy, es un cuello de botella.
- **Un binario estático** — Go puro, stdlib primero, cross-compilado: `./omnirouter` es toda la historia de despliegue.

## Qué demuestra

OmniRouter es la columna vertebral de mi propio stack de IA — enfrenta a todos los modelos que toca mi tooling de agentes, y viaja dentro de [Hermes Stack](/es/projects/hermes-stack/) como parte de un servidor de IA de un clic. Demuestra que sé diseñar infraestructura de APIs como la producción la necesita: núcleos sin estado, rutas observables y el fallo tratado como caso de primera clase — no como ocurrencia tardía.
