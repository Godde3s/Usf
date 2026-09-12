---
title: "HabitGrid — tracker de hábitos con Expo"
description: "Tracker de hábitos offline-first para Android, iOS y web con Expo y React Native — rachas, cuadrículas de 14 días y lógica de dominio pura y testeada."
---

# HabitGrid — tracker de hábitos con Expo

**[HabitGrid](https://github.com/Godde3s/habitgrid)** es la app de hábitos que quería de verdad: **una pantalla, cero cuentas, cero red**. Cada byte se queda en el dispositivo. Duplica como proyecto de referencia de un stack Expo moderno — routing tipado con expo-router, separación dominio/UI limpia y CI que ejecuta los tests reales sin un dispositivo.

## Qué hace

- ✅ **Seguimiento a un toque** — marcar un hábito hoy; tocar de nuevo para deshacer.
- 🔥 **Rachas** — conteo de días consecutivos con un día de gracia, así una racha sobrevive hasta *ayer* en vez de morir a medianoche.
- 🟦 **Cuadrícula de 14 días** — historial estilo GitHub por hábito.
- 📊 **Barras de 30 días** — ratio de cumplimento de un vistazo.
- 📴 **Totalmente offline** — persistencia con AsyncStorage, sin servidor, tema oscuro.

## La arquitectura que importa

```
lib/habits.ts      ← dominio puro: matemática de rachas (sin imports de React)
lib/storage.ts     ← adaptador AsyncStorage
app/index.tsx      ← pantalla expo-router: lista, FAB, modal
components/HabitCard.tsx
```

La capa de dominio es deliberadamente libre de React: los días son strings UTC `YYYY-MM-DD`, `toggleToday` es inmutable y los casos borde de rachas corren en **Jest plano — 10 tests, 1 segundo, sin emulador**.

```bash
npm install --legacy-peer-deps
npx expo start
```

Licencia MIT.

