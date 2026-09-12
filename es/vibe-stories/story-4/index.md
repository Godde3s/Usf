---
title: "Este portafolio: un diseño, dos idiomas"
description: "La metahistoria: cómo este sitio fue especificado, clonado del sistema de diseño de easy-vibe, traducido a dos idiomas y enviado por un equipo de agentes."
---

# Este portafolio: un diseño, dos idiomas

Estás viendo el proyecto más autorreferencial de mi portafolio: **este sitio web**. Es una reconstrucción fiel del sistema de diseño de [easy-vibe](https://datawhalechina.github.io/easy-vibe/en/) — el mismo tema VitePress, layout y comportamiento — con cada texto e imagen reemplazados por mi propio contenido, en **dos idiomas**: English y Español.

## Por qué clonar el sitio de un curso

Porque es honesto sobre lo que es la buena ingeniería: encuentra algo excelente, entiéndelo por completo, y luego adáptalo con respeto. La portada estilo Apple, la navegación de cristal, el tagline tecleado, el carrusel de historias con marco de MacBook — todo fue estudiado, portado y anclado a una versión más nueva del motor, y luego llenado con una vida para la que nunca fue escrito.

## Lo que lo hizo no trivial

- **Una capa i18n real** — el selector de idioma, las rutas por locale y el chrome de UI localizado (panel de ajustes, diapositivas, toggles de código) funcionan de punta a punta.
- **Wordmark personalizado** — el logo caligráfico "Usf" se generó de una fuente real a paths SVG para que la pantalla de bienvenida conservara su efecto de dibujo animado.
- **Catorce ilustraciones nuevas** — cada portada de tarjeta e historia se generó para coincidir con la estética pastel del tema.
- **Ensamblado por equipo de agentes** — el porte del tema, el contenido, las traducciones y el despliegue corrieron como flujos de trabajo de agentes paralelos, coordinados a la manera [Hermes](/es/agentic/hermes/).

La fuente de la verdad vive en [github.com/Godde3s/Usf](https://github.com/Godde3s/Usf) — pública, naturalmente. Si estás leyendo esto en el sitio en vivo, el pipeline funcionó; si lo lees en GitHub, el pipeline está a un `vitepress build` de distancia.
