---
title: "HardwarePT — toolkit de pentest de hardware"
description: "Toolkit de bajo nivel en C para sondeo y pentest de hardware — puertos, dispositivos, superficies de firmware y pruebas de estrés."
---

# HardwarePT — toolkit de pentest de hardware

**[HardwarePT](https://github.com/Godde3s/HardwarePT)** es mi proyecto de bajo nivel en C: un toolkit de sondeo y pentest centrado en hardware que habla con la máquina por debajo del sistema operativo. Nació de la misma curiosidad que me llevó a la automatización industrial — saber qué hace un dispositivo *antes* de fiarme de lo que dice.

## Qué cubre

- **Enumeración de hardware** — buses, dispositivos e interfaces desde espacio de usuario.
- **Sondeo de superficie de ataque** — interfaces de depuración expuestas, configuraciones por defecto débiles y estados inseguros.
- **Pruebas de estrés** — generación controlada de carga para observar el comportamiento del firmware en los límites.
- **C puro, sin frameworks** — syscalls e interfaces directas: el código que te enseña qué hace tu tooling de verdad.

Ocupa el carril de seguridad de mi portafolio junto a mis herramientas de análisis estático: entender sistemas desmontándolos — hardware esta vez — y anotar lo que encuentro de forma reutilizable.

