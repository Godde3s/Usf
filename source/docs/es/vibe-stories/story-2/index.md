---
title: "VeilChat: Un Mensajero Sin Servidores Que Vulnerar"
description: "La historia de construir VeilChat — un mensajero P2P serverless con cifrado de extremo a extremo, conexiones TCP directas y cero metadatos."
---

# VeilChat: Un Mensajero Sin Servidores Que Vulnerar

Todos los mensajeros convencionales dependen en silencio de una infraestructura que sabe *quién* habla con *quién*, incluso cuando no puede leer el contenido. Los metadatos son el modelo de negocio. Quise saber hasta dónde podía empujar en la dirección contraria — así nació **[VeilChat](https://github.com/Godde3s/veilchat)**: dos pares, una conexión TCP directa y un canal cifrado que nunca toca a un tercero.

## La restricción de diseño

Sin cuentas. Sin servidores. Sin números de teléfono. Sin metadatos. Esa restricción lo decidió todo. No hay flujo de registro porque no hay nada en qué registrarse; no hay relay de mensajes porque no existe una empresa de relays. Dos pares se descubren — por LAN o marcado directo — ejecutan un intercambio de claves con autenticación mutua, y desde ese momento cada byte en el cable es una trama AEAD cifrada.

## Las partes difíciles

- **Intercambio de claves bien hecho** — handshake X25519 con autenticación mutua, claves de sesión derivadas con HKDF y verificación de transcript, para que ni un escuchador pasivo ni un impostor activo aprendan nada.
- **El protocolo de cable** — una cabecera de nonce de 24 bytes más tramas ChaCha20-Poly1305: protección contra replay e integridad sin un solo byte de metadatos en claro.
- **Entrega NAT-friendly** — descubrimiento por LAN para el caso común, marcado directo para todo lo demás, con el handshake reintentado hasta que ambos lados confirman.

## Lo que demuestra

VeilChat son aproximadamente 1.000 líneas de Python legible y auditable — CLI y librería importable. Construí desde cero las partes difíciles de un mensajero: gestión de claves, diseño del handshake, protocolo de cable, entrega cifrada. Es la diferencia entre *usar* librerías de criptografía y *diseñar con* ellas, y es el proyecto al que recurro cuando alguien pregunta si entiendo la seguridad como ingeniería y no como una lista de verificación.
