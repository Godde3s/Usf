---
title: "Usf Panel — Gestor VLESS"
description: "Panel premium de túneles VLESS y suscripciones: multiusuario, sincronización Clash/v2ray/sing-box, despliegue con un comando en HF, Railway, Render, Fly y Koyeb."
---

# Usf Panel — Gestor VLESS

**Usf Panel** es el buque insignia de mi trabajo de redes: un **gestor premium de túneles VLESS y suscripciones** construido como una aplicación FastAPI de un solo archivo. Gestiona acceso multiusuario, genera enlaces de suscripción que Clash, v2ray y sing-box consumen nativamente, y se despliega en cinco plataformas con un comando cada una.

## Por qué otro panel

Los paneles existentes son o pesados de nivel empresarial (una granja de servidores para correr un túnel) o de calidad de juguete (sin gestión de usuarios, sin estadísticas, sin resiliencia). Usf Panel se toma en serio el camino intermedio: un archivo Python que puedes leer, un panel admin real con token + 2FA, contabilidad de tráfico por usuario, y objetivos de despliegue que siguen cómo evoluciona realmente la censura — cuando una plataforma se vuelve agresiva, te mudas en minutos, no días.

| Capacidad | Detalle |
| --- | --- |
| Protocolos | VLESS sobre WS/TLS, configs listos para Reality. |
| Suscripciones | Enlaces auto-generados; compatibles con Clash / v2ray / sing-box. |
| Usuarios | Multiusuario con cuotas, expiración y estadísticas de tráfico. |
| Admin | Panel endurecido con token + 2FA y registro de auditoría. |
| Despliegue | Hugging Face · Railway · Render · Fly.io · Koyeb — un comando cada uno. |

## La familia

Usf Panel no está solo — es el centro de una familia que cubre cada filosofía de alojamiento: **usf-edge** corre la misma idea enteramente en Cloudflare Workers con estado KV en más de 300 PoPs; **edge-pp** extiende edgetunnel con un panel completo de gestión de usuarios; **Render-usf** apunta a Render con medidas antibloqueo; **Usf-Pnl-pro** empaqueta el despliegue multiplataforma. La sección de [redes](/es/about/networking/) explica por qué la redundancia entre plataformas es un requisito de diseño, no una opción.

::: warning Nota de responsabilidad
Estas herramientas existen para restaurar el acceso a la información, no para entrar en nada. Se publican endurecidas — no con exploits — y espero que los usuarios respeten las leyes de sus propias jurisdicciones.
:::
