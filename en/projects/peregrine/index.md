---
title: "Peregrine — Expo AI Console"
description: "A native-feeling AI chat console for iOS and Android — bring your own OpenAI-compatible endpoint, streaming SSE, Keychain-stored keys and a documented design-law compliance matrix."
---

# Peregrine — Expo AI Console

**[Peregrine](https://github.com/Godde3s/peregrine)** is the mobile chapter of my AI infrastructure story: a **native-feeling chat console** that talks to any OpenAI-compatible `/v1` endpoint — Ollama on your own machine, a self-hosted [OmniRouter](/en/projects/omnirouter/) gateway, or the cloud. There is no Peregrine server: the API key lives in the Keychain, conversations live in MMKV on device.

## What it does

- ⚡ **Streaming chat** — SSE deltas parsed with a hand-rolled async generator over plain `fetch`, abortable mid-flight, non-streaming fallback.
- 🔌 **Bring your own endpoint** — any `/v1`-speaking API; onboarding validates the endpoint with a live connection test.
- 🧠 **Model browser** — `/v1/models` via TanStack Query: shape-matched skeletons, inline errors, pull-to-refresh, native search bar.
- 🔐 **Zero-account security** — key in the Keychain (`expo-secure-store`), transcripts in MMKV, no analytics, no telemetry.
- 🎨 **Native by default** — SF Symbols on iOS / Material on Android, system Switch & Slider, large-title collapse, haptics as punctuation, light + dark from day one.

## The stack

```
Expo SDK 57 · React Native 0.86 · expo-router · TypeScript strict
Reanimated 4 (UI-thread motion) · FlashList · TanStack Query
Zustand (two narrow stores) · MMKV · react-native-keyboard-controller
```

**State is deliberately boring:** server state in TanStack Query, client state in two narrow Zustand stores persisted to MMKV, ephemeral UI state local to components. The composer is an **uncontrolled input** — keystrokes never re-render the conversation list.

## Built to a design bar, not to taste

The screens are built against the [appllama app-design skill](https://github.com/Appllama/appllama-skills): navigation semantics (push vs replace, modal vs sheet, one-way doors guarded with `Stack.Protected`), anti-slop discipline (one accent, one grey family, a stated radius scale) and a motion budget that lives entirely on the UI thread. The repo ships a **law-by-law compliance matrix** in [docs/DESIGN.md](https://github.com/Godde3s/peregrine/blob/main/docs/DESIGN.md) — review becomes mechanical instead of vibes-based.

```bash
npm install
npx expo prebuild     # dev build — MMKV needs native code
npx expo run:ios      # or: npx expo run:android
```

MIT licensed.
