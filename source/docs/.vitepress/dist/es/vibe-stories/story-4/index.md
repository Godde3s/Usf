---
title: "Goftego: Chat en Tiempo Real, a Un Comando de Distancia"
description: "La historia de construir Goftego — una plataforma de chat self-hosted con canales en tiempo real, presencia e indicadores de escritura en un solo archivo SQLite."
---

# Goftego: Chat en Tiempo Real, a Un Comando de Distancia

El SaaS de chat alojado encierra a tu comunidad detrás del almacenamiento, los precios y la jurisdicción de otra persona. Para equipos pequeños que solo quieren una sala, el intercambio es absurdo: tus conversaciones, su base de datos. **Goftego** ([GitHub](https://github.com/Godde3s/goftego)) — *goftego* significa "conversación" — es mi respuesta: una plataforma de chat moderna que hospedas tú, en un solo comando.

## La apuesta del archivo único

Todo el estado de un despliegue vive en **un solo archivo SQLite** con modo WAL. Ni un servidor de base de datos que cuidar, ni servicios externos de los que depender. Backup es `cp`; migración es mover el archivo. Esa única restricción moldeó todo lo demás: forzó consultas eficientes, un diseño cuidadoso de transacciones y una historia de despliegue que es literalmente `docker compose up`.

## El tiempo real es una característica de producto, no un checkbox

- **Fan-out por WebSocket** — los mensajes de canal llegan a cada suscriptor sin polling, con conteos de presencia e indicadores de escritura que hacen que la sala se sienta viva.
- **Auth que respeta los datos** — hashing de contraseñas con bcrypt (coste 12) y sesiones JWT, porque "self-hosted" no puede significar "inseguro".
- **Una UI para humanos** — una SPA en Vue 3, oscura por defecto, bilingüe persa/inglés con RTL correcto. Para un equipo de habla persa, una interfaz que se lee correctamente no es un lujo.

## Lo que demuestra

Goftego es trabajo de producto full-stack: diseño de protocolos en tiempo real en el backend, gestión de estado en el frontend, y un modelo de datos con opiniones debajo. Demuestra que puedo llevar un producto desde "no estaría mal" hasta `docker compose up` — y que aplico a usuarios self-hosted la misma barra de seguridad que a un SaaS público. Los datos de tu comunidad se quedan en tu máquina, donde les corresponde.
