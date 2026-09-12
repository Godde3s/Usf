---
title: "El método agéntico"
description: "Cómo Reza Bazdar envía software de producción con OpenCode, Codex, Claude Code y el agente Hermes — brief, generar, revisar, desplegar."
---

# El método agéntico

Practico la **codificación agéntica** como disciplina diaria, no como truco de demostración. Mis herramientas diarias son **OpenCode**, **OpenAI Codex** y **Claude Code**, orquestadas por **Hermes Agent** — mi propia infraestructura de agentes autoalojada. Juntos se comportan como un pequeño equipo de ingeniería que nunca duerme, y yo soy su líder técnico.

Esto no es "la IA lo escribe todo mientras yo miro". Delegar en agentes es una habilidad con la misma seriedad que escribir código a mano: aprendes a escribir especificaciones en lugar de funciones, a diseñar puntos de revisión en lugar de sesiones de depuración, y a auditar diffs como un ingeniero senior revisa a un junior — con respeto, pero sin piedad.

## El ciclo que entrega funciones

1. **Informar a los agentes.** Convierto la idea en una especificación precisa y comprobable: alcance, casos límite, criterios de aceptación. Un buen brief es el 80% del resultado.
2. **Generar e iterar.** Los agentes implementan en paralelo — uno refactoriza, otro escribe tests, un tercero prepara el despliegue. Yo dirijo, desbloqueo y reajusto el alcance en tiempo real.
3. **Revisión humana.** Audito cada diff yo mismo: seguridad, arquitectura, casos límite, rendimiento. El output del agente es una propuesta, nunca una promesa.
4. **Desplegar y monitorear.** Publicar al borde, vigilar logs y métricas, y devolver cada lección al siguiente brief.

<figure class="concept-illustration">
  <img src="/assets/img/agentic-loop.svg" alt="El ciclo agéntico de cuatro pasos: brief, generar, revisar, desplegar" loading="lazy" />
  <figcaption>El ciclo que ejecuto a diario — con humanos exactamente donde importa el juicio.</figcaption>
</figure>

## Por qué es una habilidad de ingeniería real

Dirigir agentes expone debilidades que la velocidad de tecleo nunca revelará. Si tu arquitectura es vaga, los agentes amplifican la vaguedad. Si tus tests son débiles, los agentes los pasan con total confianza. Si tu spec es ambigua, recibes diez interpretaciones creativas que no pediste. Trabajar así me obliga a pensar con más claridad que el desarrollo tradicional — los agentes son espejos, y no tienen piedad.

> La habilidad de la próxima década no es teclear más rápido — es dirigir agentes inteligentes con la precisión de un ingeniero senior y el gusto de un diseñador de producto.

Cada proyecto de este sitio — desde el kit de red [NetPilot](/es/projects/netpilot/) hasta este mismo portafolio — fue diseñado, revisado y enviado por ese ciclo. La sección de [Codificación agéntica](/es/agentic/overview/) desglosa cada herramienta que uso.
