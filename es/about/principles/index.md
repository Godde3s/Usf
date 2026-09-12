---
title: "Principios de ingeniería"
description: "Los principios de trabajo detrás de cada proyecto que lanza Reza Bazdar: ejecútalo, sé dueño, protéjelo, documéntalo, mejóralo."
---

# Principios de ingeniería

Escribir principios es barato; mantenerlos es caro. Estos son los que realmente mantengo — los mismos contra los que audito el código escrito por agentes antes de que algo salga.

## 1. Debe ejecutarse

Un proyecto que compila pero no corre es un boceto, no software. Cada repositorio que publico trae un punto de entrada funcional, configuración real y una ruta de despliegue. [GLM Free API](/es/projects/glm-free-api/) es un archivo Go que sirve tráfico real; [NetPilot](/es/projects/netpilot/) es un único binario que ejecutas en segundos. "Funciona en mi máquina" es donde empiezo, no donde termino.

## 2. Sé dueño de todo el stack

Cuando algo se rompe a las 2 AM, quien solo entiende su propia capa señala a los demás. Mantengo deliberadamente mis habilidades afiladas en toda la tubería — frente, atrás, base de datos, red, despliegue — para que la responsabilidad final caiga en alguien que realmente pueda arreglarlo. Full-stack aquí no es una palabra de moda; es una estrategia de respuesta a incidentes.

## 3. La seguridad es un hábito, no una función

Escribo herramientas ofensivas — escáneres, analizadores, investigación de exploits — para que el pensamiento defensivo nunca sea teórico. Cada panel sale con acceso admin token + 2FA, cada puente de API con aislamiento de cuentas, cada despliegue con la mínima superficie de ataque que puedo gestionar. Con los agentes esto importa aún más: el código escrito por máquinas debe auditarlo un humano que sabe cómo se ven los ataques.

## 4. Escríbelo

Un README es una promesa. Documento la configuración, las decisiones de arquitectura y las limitaciones con honestidad — incluidas las cosas que aún no funcionan. Las [guías en persa](https://github.com/Godde3s/fa-guides) que publico existen porque una buena documentación en tu propio idioma puede ser la diferencia entre aprender y rendirse.

## 5. Mejora el trabajo de otros, con crédito

Pararse sobre hombros de gigantes es cómo evoluciona el software. Cuando hago fork o extiendo el proyecto de alguien, primero lo estudio a fondo, lo mejoro de forma significativa y doy crédito en voz alta. Así trato al open source sobre el que construyo, y así espero que traten el mío.

::: tip El meta-principio
Entrega pequeño, entrega honesto, entrega otra vez. El impulso le gana a la perfección — pero la honestidad sobre el estado actual nunca es negociable.
:::
