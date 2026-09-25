---
title: "TextSense: ML Que Se Despliega Como un Servicio Real"
description: "Por qué la mayoría de repos de NLP son notebooks — y cómo TextSense envuelve un transformer en el andamiaje operativo que un servicio real necesita."
---

# TextSense: ML Que Se Despliega Como un Servicio Real

La mayoría de los repos de "NLP API" son un notebook detrás de un Flask `if __name__ == "__main__"`. Mueren en cuanto alguien hace una pregunta de producción: ¿dónde están las métricas? ¿qué pasa si el modelo no carga? ¿cómo escalas? **[TextSense](https://github.com/Godde3s/textsense)** es mi respuesta — un modelo de ML envuelto en el andamiaje operativo que un servicio real necesita.

## La apuesta de ingeniería

Análisis de sentimiento e intención sobre HTTP, con backend transformer (DistilBERT SST-2). Eso es lo básico. La apuesta estaba en todo lo que rodea al modelo:

- **Degradación elegante** — un patrón `ModelProvider` prueba `transformers` primero; si los pesos no están disponibles, un motor léxico determinista responde con el *mismo contrato de API*. El servicio nunca falla en seco porque un modelo no se descargó.
- **Disciplina de latencia** — inferencia de calentamiento al arrancar, un endpoint batch con micro-batching interno, y caché para que las entradas repetidas no se recalculen.
- **Observabilidad desde el día uno** — `/metrics` en formato Prometheus con contadores de peticiones, histogramas de latencia, aciertos de caché y el backend de modelo activo como etiqueta.

## Respuestas honestas

Cada respuesta lleva el id del modelo que la produjo — `distilbert-sst2` o `lexicon-v1` — porque un score sin procedencia es una suposición que finge ser dato. Autenticación opcional por API-key, límites de tamaño de payload y sanitización de entrada completan la superficie.

## Lo que demuestra

Los 15+ tests de pytest corren offline en menos de cinco segundos contra el backend léxico — sin GPU, sin gigas de descargas, CI en verde en cada push. TextSense es el raro repo de ML escrito desde la silla de un ingeniero de backend: la elección del modelo importa menos que el contrato, las métricas y la historia de fallos. Esa es la mentalidad que aporto a cualquier equipo cercano a la IA — el modelo es un componente, el servicio es el producto.
