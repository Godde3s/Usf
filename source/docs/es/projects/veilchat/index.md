---
title: "VeilChat — mensajería P2P sin servidores"
description: "Mensajería P2P con cifrado de extremo a extremo en Python puro: handshake X25519, frames ChaCha20-Poly1305, descubrimiento LAN. Sin servidores, sin cuentas."
---

# VeilChat — mensajería P2P sin servidores

**[VeilChat](https://github.com/Godde3s/veilchat)** responde a una pregunta que escuchaba a menudo: *¿quién sabe que estamos hablando?* Los mensajeros convencionales siguen necesitando infraestructura que puede registrar quién habla con quién. VeilChat elimina esa capa: dos pares abren una **conexión TCP directa**, ejecutan un intercambio de claves autenticado mutuamente y conversan sobre un canal cifrado que nunca toca un tercero.

## La criptografía

Implementé un handshake inspirado en Noise con primitivas estándar, sin matemática casera:

- **Identidad de largo plazo** — clave X25519 en `~/.veilchat/identity.key`, con huella SHA-256 comparable fuera de banda.
- **Secreto hacia adelante** — cada conexión mezcla tres resultados DH (`ee`, `es`, `se`) vía HKDF-SHA256 con claves efímeras frescas.
- **Autenticación mutua** — un MAC de transcrição vincula ambas identidades estáticas; un intermediario no puede computarlo.
- **Frames sellados** — ChaCha20-Poly1305 con claves por dirección, nonces monótonos y AAD, más un límite de 4 MiB contra inundaciones.

```bash
pip install veilchat
veilchat listen --name alice
veilchat lan
veilchat connect 192.168.1.20 --name bob
```

## Notas de ingeniería

Lo difícil no fue la cripto sino hacer que asyncio se comporte: un listener acepta exactamente una sesión, ambos roles comparten un único camino de handshake (con orden de transcripción espejado — la clase de bug que rompe handshakes en silencio), y la capa de sesión multiplexa mensajes, indicadores de escritura y pings hacia callbacks.

**8 tests unitarios y de integración** cubren el acuerdo de claves, la detección de manipulación y un intercambio real entre dos pares en localhost. Licencia MIT.

