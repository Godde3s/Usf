---
title: "Peregrine — consola IA con Expo"
description: "Una consola de chat con sensación nativa para iOS y Android — trae tu propio endpoint compatible con OpenAI, streaming SSE, claves en el Keychain y una matriz de cumplimiento de las leyes de diseño."
---

# Peregrine — consola IA con Expo

**[Peregrine](https://github.com/Godde3s/peregrine)** es el capítulo móvil de mi historia de infraestructura de IA: una **consola de chat con sensación nativa** que habla con cualquier endpoint compatible con `/v1` de OpenAI — Ollama en tu propia máquina, una pasarela self-hosted como [OmniRouter](/es/projects/omnirouter/), o la nube. No existe un servidor de Peregrine: la clave vive en el Keychain y las conversaciones en MMKV, en el dispositivo.

## Qué hace

- ⚡ **Chat en streaming** — deltas SSE parseados con un generador asíncrono hecho a mano sobre `fetch`, abortable en pleno vuelo, con fallback sin streaming.
- 🔌 **Trae tu propio endpoint** — cualquier API que hable `/v1`; el onboarding valida el endpoint con una prueba de conexión real.
- 🧠 **Explorador de modelos** — `/v1/models` con TanStack Query: skeletons que igualan la forma final, errores inline, pull-to-refresh y barra de búsqueda nativa.
- 🔐 **Seguridad sin cuentas** — clave en el Keychain (`expo-secure-store`), transcripciones en MMKV, sin analytics ni telemetría.
- 🎨 **Nativo por defecto** — SF Symbols en iOS / Material en Android, Switch y Slider del sistema, haptics como puntuación, claro y oscuro desde el primer día.

## El stack

```
Expo SDK 57 · React Native 0.86 · expo-router · TypeScript strict
Reanimated 4 (motion en el hilo de UI) · FlashList · TanStack Query
Zustand (dos stores estrechos) · MMKV · react-native-keyboard-controller
```

**El estado es deliberadamente aburrido:** estado de servidor en TanStack Query, estado de cliente en dos stores Zustand estrechos persistidos en MMKV, y estado efímero local a cada componente. El compositor es un input **no controlado** — cada tecla nunca re-renderiza la lista de conversaciones.

## Construido sobre una barra de diseño, no sobre gustos

Las pantallas siguen el [appllama app-design skill](https://github.com/Appllama/appllama-skills): semántica de navegación (push vs replace, modal vs sheet, puertas de un solo sentido con `Stack.Protected`), disciplina anti-slop (un acento, una familia de grises, una escala de radios declarada) y un presupuesto de motion que vive por completo en el hilo de UI. El repositorio incluye una **matriz de cumplimiento ley por ley** en [docs/DESIGN.md](https://github.com/Godde3s/peregrine/blob/main/docs/DESIGN.md).

```bash
npm install
npx expo prebuild     # dev build — MMKV necesita código nativo
npx expo run:ios      # o: npx expo run:android
```

Licencia MIT.
