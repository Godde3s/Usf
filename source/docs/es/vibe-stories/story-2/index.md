---
title: "OmniRouter: domando el caos de modelos"
description: "Por qué construí OmniRouter — la historia de convertir la rotación de modelos en un archivo de config, con balanceo y failover en un binario Go."
---

# OmniRouter: domando el caos de modelos

El ecosistema de IA avanza a velocidad de scroll. El modelo que impulsó mi semana queda obsoleto el viernes, los precios giran, los tiers gratuitos aparecen y desaparecen. Mis apps se rompían por razones que no tenían nada que ver con mi código — así que convertí ese caos en problema de otro. Ese otro es **[OmniRouter](https://github.com/Godde3s/omnirouter)**.

## La idea clave

El formato chat-completions de OpenAI ganó. Es la interfaz que todo cliente ya habla. OmniRouter presenta exactamente esa interfaz a tu app, y habla cualquier dialecto que cada upstream necesite del otro lado — GLM, Qwen, DeepSeek, endpoints propios. Tu código **nunca** cambia; el archivo de config cambia semanalmente.

## Las partes difíciles

- **Honestidad del streaming** — retransmitir SSE token por token sin sorpresas de buffering exigió plomería cuidadosa.
- **Detección de fallos** — distinguir "el modelo va lento" de "el modelo se está muriendo" necesita ventanas de salud móviles, no sondeos de un tiro.
- **Rotación justa** — round-robin ponderado con cuotas, para gastar la capacidad barata antes que los tokens premium.

OmniRouter junto a los [puentes free-api](/es/projects/glm-free-api/) me da algo absurdo en papel y esencial en la práctica: un stack de IA multi-modelo con **costo mensual cero** y un archivo de config que manda sobre todos.
