---
title: "Snaplink — enlaces cortos, analítica real"
description: "Acortador de URLs autoalojado con analítica por clic: Next.js 14 App Router, TypeScript, Prisma, SQLite y Tailwind CSS."
---

# Snaplink — enlaces cortos, analítica real

**[Snaplink](https://github.com/Godde3s/snaplink)** es una alternativa completa y autoalojada a los acortadores comerciales — la misma base de código sirve la API, el borde de redirección y el panel de analítica. Es lo bastante pequeño para entenderlo de una sentada y lo bastante real para servir a una comunidad.

## Qué hace

- **Acorta cualquier URL** — slugs de 7 caracteres de un alfabeto sin ambigüedades (sin `0/O/1/l`), con reintento automático ante colisiones.
- **Analítica de clics** — totales por enlace, referrers principales e histograma de 14 días vía `groupBy` de Prisma.
- **Redirección rápida** — `/r/:slug` registra la visita *como pueda* y redirige al instante; la analítica nunca rompe un redirect.
- **SQLite por defecto** — cero configuración; pasar a Postgres es cambiar una línea.

```bash
curl -X POST localhost:3000/api/links \\
  -H 'content-type: application/json' \\
  -d '{"url":"https://github.com/Godde3s"}'
# {"link":{"slug":"k7mp2ax", ...}}
```

## Notas de ingeniería

El handler de redirección es deliberadamente aburrido: buscar el slug, aislar la analítica en su propio try/catch y redirigir. La validación rechaza todo lo que no sea una URL absoluta `http(s)` con hostname real — `javascript:` muere en la puerta. **Tests unitarios** cubren validación, generación de slugs y bucketing de referrers; CI ejecuta `vitest` + `tsc --noEmit`. Licencia MIT.

