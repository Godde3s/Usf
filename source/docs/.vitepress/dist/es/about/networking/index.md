---
title: "Redes y libertad"
description: "Proxies, túneles VLESS, paneles de suscripción y despliegues de borde — Reza Bazdar construye infraestructura para un internet abierto."
---

# Redes y libertad

Crecí detrás de filtros. Donde vivo, partes de internet están fuera de alcance con regularidad — no porque los servidores estén caídos, sino porque alguien decidió que debían estarlo. Esa realidad convirtió las redes de un pasatiempo en una habilidad de supervivencia, y la habilidad de supervivencia en una especialidad: construir infraestructura que mantiene a la gente conectada.

Mi trabajo en esta área es práctico, no teórico. Diseño y opero **túneles VLESS y paneles proxy**, gestiono sistemas de suscripción multiusuario compatibles con Clash, v2ray y sing-box, y despliego infraestructura de borde en Cloudflare Workers, Hugging Face Spaces, Railway, Render, Fly.io y Koyeb. Mis despliegues de infraestructura edge abarcan Cloudflare Workers, Hugging Face Spaces, Railway, Render, Fly.io y Koyeb — porque el bloqueo es una carrera armamentista y los puntos únicos de fallo dejan a la gente sin acceso.

## Lo que realmente construyo

- **Paneles de túnel** — gestión VLESS multiusuario con enlaces de suscripción, estadísticas de tráfico y despliegue con un comando.
- **Despliegues de borde** — estado del proxy en Cloudflare KV a través de más de 300 PoPs, sin arranques en frío, sin servidores que confiscar.
- **Diagnóstico** — herramientas en Go puro como [NetPilot](/es/projects/netpilot/) para escaneo de puertos, TCP ping y comprobaciones HTTP.
- **Patrones de resiliencia** — redundancia multiplataforma para que un bloqueo jamás equivalga a acceso cero.

::: info Por qué importa
En un entorno donde la conectividad misma está en disputa, un panel proxy no es un juguete — es una línea de vida para el trabajo, la educación y la información libre. Lo trato con la seriedad de la infraestructura crítica.
:::

## La mentalidad

Las redes me enseñaron cómo mueren los sistemas: con gracia, parcialmente, y siempre en el peor momento. Me enseñaron a leer capturas de paquetes como otros leen mensajes de error, a desconfiar del "bloqueado temporalmente", y a tener siempre un segundo camino, un tercer plan B y una cuarta idea. Esos instintos se filtran en todo lo demás que construyo — APIs redundantes, enrutamiento de modelos con failover, y paneles que asumen que la red es hostil.

Si tu proyecto necesita sobrevivir a una red hostil — o simplemente quieres que tu stack no tiemble cuando una región se cae — ese es exactamente el tipo de problema que más disfruto.
