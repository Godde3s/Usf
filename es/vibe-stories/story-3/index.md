---
title: "Usf Panel: túneles contra la censura"
description: "Construir paneles proxy para un entorno donde el bloqueo es una carrera armamentista — la historia y filosofía detrás de Usf Panel y su familia."
---

# Usf Panel: túneles contra la censura

Algunos programas son una conveniencia; otros son una línea de vida. Mi familia de paneles — **Usf Panel**, usf-edge, edge-pp, Render-usf — es del segundo tipo. Gestionan túneles y suscripciones VLESS para personas cuyo internet se filtra con regularidad, incluida la mía.

## El modelo de amenaza es real

Construir para redes censuradas cambia cada decisión de diseño. Las plataformas mismas se vuelven superficies de ataque: cuando un proveedor empieza a banear en masa cargas de proxy, tus usuarios quedan a oscuras — por eso cada panel que envío se despliega en **cinco plataformas con un comando**, y las variantes de borde guardan estado en Cloudflare KV a través de 300+ PoPs donde no hay servidor que confiscar.

## Ingeniería bajo fuego

- **Los enlaces de suscripción** deben regenerarse limpiamente en Clash, v2ray y sing-box — un formato roto significa un usuario varado.
- **Las cuotas multiusuario** evitan que un usuario pesado exponga a todos.
- **El endurecimiento del admin** — token + 2FA — porque el panel mismo es el blanco más jugoso.
- **Simulacros de migración** — practico los movimientos de plataforma a plataforma antes de necesitarlos, no durante una caída.

La filosofía completa está en la sección de [redes](/es/about/networking/); los detalles del buque insignia en [Usf Panel](/es/projects/usf-panel/). La historia se resume en: trata el acceso a la información como infraestructura crítica, e ingeniérselo con ese respeto.
