---
title: "HabitGrid — Expo Habit Tracker"
description: "An offline-first habit tracker for Android, iOS and web built with Expo and React Native — streaks, 14-day dot grids and pure, tested domain logic."
---

# HabitGrid — Expo Habit Tracker

**[HabitGrid](https://github.com/Godde3s/habitgrid)** is the habit app I actually wanted: **one screen, zero accounts, zero network**. Every byte stays on the device. It doubles as my reference project for a modern Expo stack — typed routing with expo-router, a clean domain/UI split, and CI that runs the real logic tests without a device.

## What it does

- ✅ **One-tap tracking** — mark a habit done today; tap again to undo.
- 🔥 **Streaks** — consecutive-day counting with a one-day grace rule, so a run survives until *yesterday* instead of dying at midnight.
- 🟦 **14-day dot grid** — GitHub-style history per habit.
- 📊 **30-day progress bars** — completion ratio at a glance.
- 📴 **Fully offline** — AsyncStorage persistence, no server, no tracking, dark UI.

## The architecture that matters

```
lib/habits.ts      ← pure domain: streak math, grid helpers (no React imports)
lib/storage.ts     ← AsyncStorage adapter
app/index.tsx      ← expo-router screen: list, FAB, add modal
components/HabitCard.tsx
```

The domain layer is deliberately React-free: habit days are UTC `YYYY-MM-DD` strings, `toggleToday` is immutable, and streak edge cases (gaps, grace days, DST-proof day keys) run in **plain Jest — 10 tests, 1 second, no emulator**. That is the discipline I want in every mobile codebase: the interesting logic testable anywhere.

```bash
npm install --legacy-peer-deps
npx expo start          # scan the QR with Expo Go
```

MIT licensed.

