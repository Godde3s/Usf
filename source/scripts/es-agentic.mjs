// ES content — sección Codificación agéntica (5 páginas)
export const pages = [
  {
    path: 'agentic/overview.md',
    title: 'Codificación agéntica — Dirigiendo equipos de agentes',
    description: 'Cómo uso OpenCode, Codex, Claude Code y Hermes Agent para enviar software de producción — la visión general de mi flujo agéntico.',
    blocks: [
      { t: 'p', x: 'La codificación agéntica es la práctica de dirigir agentes de código autónomos como un líder técnico dirige un equipo: con especificaciones claras, ciclos de revisión ajustados y responsabilidad total. Es mi método diario para enviar software, y la considero la habilidad de ingeniería más importante que he construido en los últimos tres años.' },
      { t: 'p', x: 'Mi cadena de herramientas es deliberada. **OpenCode** para programación en pareja rápida y agnóstica del modelo en la terminal. **Codex** para ejecución paralela en sandboxes aisladas. **Claude Code** para planificación profunda y refactors en todo el código. **Hermes Agent** — mi propio stack — enruta modelos y orquesta a los otros tres. Herramientas distintas, fortalezas distintas, un solo flujo.' },
      { t: 'h2', x: 'El ciclo central' },
      { t: 'html', x: '<StepBar :items=\'[{"title": "Informar a los agentes"}, {"title": "Generar e iterar"}, {"title": "Revisión humana"}, {"title": "Desplegar y monitorear"}]\' />' },
      { t: 'p', x: 'El ciclo es exactamente los cuatro pasos descritos en [El método agéntico](/es/about/how-i-work/): brief, generar, revisar, desplegar. Lo que cambia por herramienta es *dónde ocurre cada paso* — OpenCode vive en mi terminal junto al editor, Codex reparte el trabajo en sandboxes, Claude Code planifica antes de tocar un archivo, y Hermes coordina tareas largas y mantiene a todos alimentados con el modelo correcto.' },
      { t: 'h2', x: 'Qué cambiaron los agentes en mi ingeniería' },
      { t: 'list', x: [
        '**Las specs se volvieron un artefacto de primera clase.** Un brief preciso vale más que un prompt ingenioso.',
        '**La revisión se volvió un superpoder.** Leer diffs rápido — y con sospecha — es ahora una habilidad central.',
        '**La arquitectura importa más, no menos.** Los agentes amplifican la buena estructura y exponen la mala al instante.',
        '**Los tests se pusieron serios.** Si la suite es débil, los agentes producirán basura confiable con total seguridad.'
      ] },
      { t: 'info', title: 'Pruebas, no promesas', x: 'Este portafolio — cuatro idiomas, un clon del tema VitePress, componentes personalizados y soporte RTL — se construyó con este ciclo. También NetPilot, OmniRouter y cada panel de la sección de [proyectos](/es/projects/netpilot/).' },
      { t: 'p', x: 'Las páginas siguientes documentan cada herramienta: [OpenCode](/es/agentic/opencode/), [Codex](/es/agentic/codex/), [Claude Code](/es/agentic/claude-code/) y [Hermes Agent](/es/agentic/hermes/).' }
    ]
  },
  {
    path: 'agentic/opencode.md',
    title: 'OpenCode — Mi compañero de terminal',
    description: 'OpenCode: agente de código terminal open source. Agnóstico del modelo, conmutable a mitad de tarea, pareja perfecta para enrutar vía omnirouter.',
    blocks: [
      { t: 'p', x: '**OpenCode** es el agente de terminal open source al que recurro primero. Hace pareja conmigo dentro de la terminal — lee archivos, edita código, ejecuta comandos — y, crucialmente, es **agnóstico del modelo**: el proveedor se puede cambiar a mitad de tarea sin perder la conversación.' },
      { t: 'h2', x: 'Por qué gana el primer puesto' },
      { t: 'list', x: [
        '**Nativo de terminal.** Vive donde ya trabajo; sin salto de contexto a una GUI.',
        '**Libertad de modelo.** GLM para iteración barata, Claude para razonamiento difícil, DeepSeek para código — al vuelo.',
        '**Sinergia con omnirouter.** Apuntando OpenCode a mi propio endpoint de [OmniRouter](/es/projects/omnirouter/), el "proveedor" es en realidad una flota balanceada con failover.',
        '**Ciclo rápido.** Ediciones pequeñas, preguntas rápidas, corridas de tests — las tareas de 30 segundos que pasan cincuenta veces al día.'
      ] },
      { t: 'code', lang: 'bash', x: `# apuntar opencode a mi propio router\nexport OPENAI_BASE_URL=http://localhost:8787/v1\nopencode\n\n> refactor src/scan.go: extrae el pool de workers,\n> añade tests para el manejo de timeout, el CLI queda igual` },
      { t: 'h2', x: 'Cómo lo uso en el ciclo' },
      { t: 'p', x: 'OpenCode es dueño del **ciclo interno**: refactors rápidos, subidas de dependencias, "explícame este stack trace", borrador de una función con tests. Cuando una tarea crece más allá de una sesión — features multi-archivo, movimientos de arquitectura — la promuevo a [Claude Code](/es/agentic/claude-code/) para planificar, o la reparto a [Codex](/es/agentic/codex/) si se paraleliza. Saber *a qué agente informar* es la mitad del [método](/es/agentic/overview/).' }
    ]
  },
  {
    path: 'agentic/codex.md',
    title: 'Codex — Motor de ejecución paralela',
    description: 'OpenAI Codex como mi motor de tareas paralelas: sandboxes aisladas, refactors en abanico, tareas largas con diffs revisables.',
    blocks: [
      { t: 'p', x: '**Codex** es donde mi trabajo se abanica. El agente de OpenAI corre tareas en **sandboxes aisladas** — cada una con su propia copia del repositorio — lo que lo hace la herramienta correcta siempre que un cambio se descompone en piezas independientes: subir dependencias en varios paquetes, aplicar un refactor mecánico a cuarenta archivos, o generar variantes de una feature para comparar.' },
      { t: 'h2', x: 'El patrón abanico' },
      { t: 'olist', x: [
        'Descompón la tarea en piezas que no puedan chocar — una sandbox por pieza.',
        'Escribe el brief para que cada pieza tenga criterios de aceptación idénticos.',
        'Déjalas correr en paralelo; recolecta los diffs.',
        'Revisa como un maestro de merges: acepta, rechaza, o devuelve con un brief más afilado.'
      ] },
      { t: 'p', x: 'La disciplina que hace esto seguro es la misma que en cualquier sistema paralelo: **aísla lo que puede chocar, secuencia lo que no.** Dos agentes editando el mismo módulo no es paralelismo; es un conflicto de merge con pasos extra. Por eso mis briefs declaran explícitamente los límites de archivos.' },
      { t: 'h2', x: 'Dónde Codex le gana a todo' },
      { t: 'list', x: [
        '**Escala mecánica.** "Renombra X a Y en todas partes y arregla los imports" — tortura para un humano, trivial para una granja de sandboxes.',
        '**Generación de opciones.** Tres implementaciones de una función, comparadas lado a lado, superan al atormentarse por una.',
        '**Paciencia de fondo.** Instalaciones largas, suites de tests enormes, generación de datasets — tareas que no quiero babysitear.'
      ] },
      { t: 'tip', title: 'Combinado con el resto', x: 'Codex produce las piezas; [Claude Code](/es/agentic/claude-code/) las integra; [Hermes](/es/agentic/hermes/) mantiene a la flota alimentada con modelos vía [OmniRouter](/es/projects/omnirouter/).' }
    ]
  },
  {
    path: 'agentic/claude-code.md',
    title: 'Claude Code — El planificador ejecutor',
    description: 'Claude Code: planificación multipaso, uso de herramientas y ediciones en todo el código con precisión quirúrgica. El agente detrás de este mismo sitio.',
    blocks: [
      { t: 'p', x: '**Claude Code** es la CLI agéntica de Anthropic, y ocupa un asiento específico en mi flujo: el **planificador ejecutor**. Mientras otros agentes brillan por velocidad o escala, Claude Code brilla por *profundidad* — mantiene una base de código entera en la cabeza, planifica cambios multipaso y los ejecuta con precisión quirúrgica en docenas de archivos.' },
      { t: 'h2', x: 'Qué lo hace diferente' },
      { t: 'list', x: [
        '**Planifica antes de tocar código.** Para cualquier tarea no trivial produce un plan explícito que puedo corregir — el lugar más barato posible para arreglar un error.',
        '**Ediciones en toda la base.** Busca, entiende y luego edita coherentemente — no parches ciegos archivo por archivo.',
        '**Disciplina de herramientas.** Muestra su trabajo: comandos ejecutados, tests corridos, diffs preparados.',
        '**Buen gusto.** En la práctica, sus refactors se leen como de un senior cuidadoso, lo que minimiza mi superficie de revisión.'
      ] },
      { t: 'quote', x: 'Este portafolio es una obra de Claude Code: un clon completo del tema VitePress adaptado a cuatro idiomas con soporte RTL — planificado una vez, revisado por mí, enviado en esta forma.' },
      { t: 'h2', x: 'Cómo le paso el brief' },
      { t: 'p', x: 'Cuanto mejor sea el plan que puedo criticar, mejor el resultado. Así que mis briefs para Claude Code declaran el objetivo, las restricciones y la definición de hecho — e invitan explícitamente a un plan antes de ejecutar. Luego hago lo mío: leo el plan, ataco los puntos débiles, y solo entonces lo dejo correr. El patrón está descrito en [El método agéntico](/es/about/how-i-work/).' },
      { t: 'p', x: 'Claude Code también juega el rol de integrador después de los abanicos de [Codex](/es/agentic/codex/): reconcilia diffs, resuelve solapamientos y corre la suite completa antes de que algo llegue a una rama que me importa.' }
    ]
  },
  {
    path: 'agentic/hermes.md',
    title: 'Hermes Agent — Mi propia infraestructura',
    description: 'Hermes Agent: cerebro de IA autoalojado (hermes-stack) que enruta modelos, corre automatizaciones y mantiene abastecida a mi flota de agentes.',
    blocks: [
      { t: 'p', x: '**Hermes Agent** es la pieza que construí yo mismo: la capa coordinadora de todo mi montaje agéntico, publicada como [hermes-stack](https://github.com/Godde3s/hermes-stack) en un Hugging Face Space gratuito. Las otras herramientas son individuos; Hermes es el *gerente* — enruta modelos, guarda contexto, corre automatizaciones y mantiene a cada agente abastecido con el cerebro correcto a la hora correcta.' },
      { t: 'h2', x: 'Lo que Hermes realmente hace todo el día' },
      { t: 'list', x: [
        '**Enrutamiento de modelos.** Cada petición de cada herramienta puede fluir por mi [OmniRouter](/es/projects/omnirouter/) — modelos baratos para el trabajo sucio, premium para los juicios difíciles.',
        '**Cerebro de automatización.** Tareas activadas por webhook: vigilar un repo, avisarme por Telegram cuando un despliegue se rompe, resumir logs nocturnos de CI.',
        '**Guardián de contexto.** Los proyectos largos guardan sus briefs, decisiones y estado con Hermes, no regados en scrolls de terminales.',
        '**Endpoint itinerante.** Cualquier cliente compatible con OpenAI puede hablarle — la app del teléfono, un cron job, otro agente.'
      ] },
      { t: 'h2', x: '¿Por qué autoalojarlo?' },
      { t: 'p', x: 'Porque la dependencia es una decisión de diseño. Un "asistente de IA" alojado puede cambiar precios, limitarte por tasa o desaparecer — y en mi región también puede bloquearse por completo. Hermes Stack corre en infraestructura que controlo, detrás de routers que controlo, con fallbacks que configuré yo. Cuando un proveedor muere, nada cambia en mi flujo; el router simplemente deja de preguntarle.' },
      { t: 'figure', src: '/assets/img/agentic-loop.svg', alt: 'Hermes coordinando OpenCode, Codex y Claude Code', caption: 'Un cerebro, tres especialistas, cero vendor lock-in.' },
      { t: 'tip', title: 'Despliega el tuyo', x: 'Todo el stack está a un clic del repo: [github.com/Godde3s/hermes-stack](https://github.com/Godde3s/hermes-stack) — amigable con el tier gratuito, documentado, y mío por derecho a mejorarlo en público.' }
    ]
  }
]
