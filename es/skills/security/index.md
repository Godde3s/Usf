---
title: "Seguridad — Formado en el ataque, mentalizado en la defensa"
description: "Kit de pentesting, investigación XSS, análisis estático — encontrar agujeros antes que los demás."
---

# Seguridad — Formado en el ataque, mentalizado en la defensa

Aprendí seguridad desde el lado ofensivo — construyendo escáneres, estudiando XSS, auditando código en busca de patrones inseguros — porque no puedes defender un sistema que no puedes atacar. Esa lente ahora corre sobre todo lo que envío, especialmente el código escrito por agentes.

## El arsenal

- **Análisis estático** — mi proyecto [explorer](https://github.com/Godde3s/explorer) caza patrones vulnerables y rutas de código inseguras en árboles de fuente.
- **Investigación de exploits web** — flujos XSS, patrones de acceso inverso ([access](https://github.com/Godde3s/access)), utilidades de caza de bugs ([thehunter](https://github.com/Godde3s/thehunter)).
- **Alfabetización de herramientas** — la colección clásica ([Collection-](https://github.com/Godde3s/Collection-)) que todo practicante debería saber leer.
- **Práctica de endurecimiento** — paneles admin con token + 2FA, bóvedas de sesión cifradas, despliegues de superficie mínima.

## Seguridad en la era agéntica

Los agentes escriben más código que nunca, y lo escriben *con confianza* — incluido el tipo inseguro. Mi checklist de revisión por eso trata cada diff generado como entrada no confiable: superficies de inyección, bypasses de autenticación, manejo de secretos, procedencia de dependencias. La [página del método](/es/about/how-i-work/) llama a esto el paso de revisión humana; en términos de seguridad, es el único paso que importa.

::: warning Cláusula ética
Mi trabajo ofensivo apunta a sistemas que poseo o estoy autorizado a probar. Cualquier otra cosa es un crimen, no una habilidad.
:::
