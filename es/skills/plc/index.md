---
title: "PLC industrial — Donde el software toca el acero"
description: "Programación PLC en Ladder y Texto Estructurado (IEC 61131-3), diseño HMI, lógica SCADA — automatización en líneas de producción reales."
---

# PLC industrial — Donde el software toca el acero

Antes de las APIs web estaban los cables. La automatización industrial me enseñó que el software tiene consecuencias que se pueden oír — una mala línea de lógica no lanza una excepción, detiene una línea de producción o pellizca un dedo. Programo PLCs en **Ladder Diagram** y **Texto Estructurado** bajo IEC 61131-3, y diseño los HMIs que los operadores realmente usan.

## Lo que hago en la planta

| Área | Práctica |
| --- | --- |
| Lógica | Ladder (LD) para control discreto; Texto Estructurado (ST) para matemática y secuencias. |
| HMI | Pantallas que los operadores leen de un vistazo, en su idioma, con alarmas honestas. |
| Pensamiento SCADA | Nomenclatura de tags, racionalización de alarmas, registro de datos que sobrevive auditorías. |
| Seguridad | Interlocks primero, conveniencia después — siempre. |

La automatización me hizo mejor ingeniero de software de tres formas específicas: respeto las **máquinas de estados** (una línea de producción es una máquina de estados gigante), escribo **código defensivo** (los sensores mienten, los contactos se sueldan), y documento como si el próximo lector estuviera parado junto a una máquina encendida — porque a veces lo está.

> En control industrial, el uptime se mide en toneladas, no en nueves.
