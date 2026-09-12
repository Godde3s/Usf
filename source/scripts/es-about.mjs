// ES content — sección Sobre mí (4 páginas)
export const pages = [
  {
    path: 'about/profile.md',
    title: 'Perfil y misión',
    description: 'Reza Bazdar (Godde3s) — ingeniero de software full-stack creativo de Irán. Web, apps, redes, automatización industrial e infraestructura de IA, construidos de punta a punta.',
    blocks: [
      { t: 'p', x: 'Soy **Reza Bazdar** — en internet me conoce la mayoría como **Godde3s** o **Usf**. Soy un ingeniero de software creativo y versátil de Irán, y construyo cosas de punta a punta: sitios web, aplicaciones, APIs, infraestructura de red, automatización industrial y sistemas de IA. Si corre en una computadora — o en un PLC junto a una línea de producción — puedo construirlo, y probablemente ya lo hice.' },
      { t: 'p', x: 'Mi historia no es la ruta clásica de carrera de informática a gran empresa de tecnología. Es la historia de alguien que se negó a aceptar que cualquier sistema sea una caja negra. Paneles proxy, puentes de API, escáneres de puertos, tiendas en línea, lógica ladder — los desarmé todos, los entendí y los reconstruí mejores. Esa curiosidad se convirtió en carrera, y la carrera en una caja de herramientas que cubre todo el stack.' },
      { t: 'h2', x: 'Lo que realmente hago' },
      { t: 'p', x: 'La mayoría de los días me encontrarás haciendo una de cuatro cosas: diseñando y lanzando productos web full-stack, construyendo infraestructura de red y anticensura, orquestando agentes de código para que envíen software de producción, o programando controladores industriales. El hilo común es la propiedad — llevo los problemas desde una idea vaga hasta algo de lo que dependen personas reales, y sigo siendo responsable del resultado.' },
      { t: 'table', x: [
        ['Área', 'Qué significa en la práctica'],
        ['Web y apps full-stack', 'React, Vue, Next.js al frente; FastAPI, Gin, Laravel y .NET detrás; bases de datos modeladas y afinadas.'],
        ['Redes y proxies', 'Túneles VLESS, paneles de suscripción, despliegues de borde en Cloudflare, HF Spaces, Railway, Render, Fly.io y Koyeb.'],
        ['IA y codificación agéntica', 'Puentes compatibles con OpenAI/Anthropic, routers de modelos y desarrollo diario con OpenCode, Codex, Claude Code y mi stack Hermes.'],
        ['Automatización industrial', 'Programación PLC en Ladder y Texto Estructurado (IEC 61131-3), diseño HMI y lógica SCADA.']
      ] },
      { t: 'h2', x: 'Por qué "creativo" no es un adorno' },
      { t: 'p', x: 'Cualquiera puede seguir un tutorial. El trabajo real empieza cuando el tutorial termina — cuando la API no tiene SDK, la red bloquea media internet, el hardware habla un protocolo que nadie documentó y la fecha límite fue ayer. Ahí la creatividad deja de ser un rasgo de personalidad y se convierte en una disciplina de ingeniería: combinar herramientas que nunca debieron funcionar juntas, inventar un plan B cuando el camino principal muere, y entregar de todos modos.' },
      { t: 'tip', title: 'La misión', x: 'Construir software genuinamente útil, honesto sobre lo que hace y libre de inspeccionar. Todo lo que lanzo es público en [GitHub](https://github.com/Godde3s) — puedes leer cada línea.' },
      { t: 'h2', x: 'Números que me describen' },
      { t: 'list', x: [
        '**Más de 9 lenguajes de programación** en producción: Python, JavaScript/TypeScript, Go, PHP, C#, SQL, C/C++, Ladder y Texto Estructurado.',
        '**Más de 30 repositorios públicos** — puentes de API, routers de modelos, paneles proxy, herramientas de seguridad y este mismo portafolio.',
        '**4 idiomas** habla este sitio: English, فارسی, العربية, Español.',
        '**1 regla**: cada proyecto debe ejecutarse, no solo compilar.'
      ] },
      { t: 'p', x: 'Si algo de eso resuena contigo — una idea, un sistema roto, una fecha imposible — mi bandeja está abierta. Las vías más rápidas son Telegram y los datos de contacto al pie de cada página.' }
    ]
  },
  {
    path: 'about/how-i-work.md',
    title: 'El método agéntico',
    description: 'Cómo Reza Bazdar envía software de producción con OpenCode, Codex, Claude Code y el agente Hermes — brief, generar, revisar, desplegar.',
    blocks: [
      { t: 'p', x: 'Practico la **codificación agéntica** como disciplina diaria, no como truco de demostración. Mis herramientas diarias son **OpenCode**, **OpenAI Codex** y **Claude Code**, orquestadas por **Hermes Agent** — mi propia infraestructura de agentes autoalojada. Juntos se comportan como un pequeño equipo de ingeniería que nunca duerme, y yo soy su líder técnico.' },
      { t: 'p', x: 'Esto no es "la IA lo escribe todo mientras yo miro". Delegar en agentes es una habilidad con la misma seriedad que escribir código a mano: aprendes a escribir especificaciones en lugar de funciones, a diseñar puntos de revisión en lugar de sesiones de depuración, y a auditar diffs como un ingeniero senior revisa a un junior — con respeto, pero sin piedad.' },
      { t: 'h2', x: 'El ciclo que entrega funciones' },
      { t: 'olist', x: [
        '**Informar a los agentes.** Convierto la idea en una especificación precisa y comprobable: alcance, casos límite, criterios de aceptación. Un buen brief es el 80% del resultado.',
        '**Generar e iterar.** Los agentes implementan en paralelo — uno refactoriza, otro escribe tests, un tercero prepara el despliegue. Yo dirijo, desbloqueo y reajusto el alcance en tiempo real.',
        '**Revisión humana.** Audito cada diff yo mismo: seguridad, arquitectura, casos límite, rendimiento. El output del agente es una propuesta, nunca una promesa.',
        '**Desplegar y monitorear.** Publicar al borde, vigilar logs y métricas, y devolver cada lección al siguiente brief.'
      ] },
      { t: 'figure', src: '/assets/img/agentic-loop.svg', alt: 'El ciclo agéntico de cuatro pasos: brief, generar, revisar, desplegar', caption: 'El ciclo que ejecuto a diario — con humanos exactamente donde importa el juicio.' },
      { t: 'h2', x: 'Por qué es una habilidad de ingeniería real' },
      { t: 'p', x: 'Dirigir agentes expone debilidades que la velocidad de tecleo nunca revelará. Si tu arquitectura es vaga, los agentes amplifican la vaguedad. Si tus tests son débiles, los agentes los pasan con total confianza. Si tu spec es ambigua, recibes diez interpretaciones creativas que no pediste. Trabajar así me obliga a pensar con más claridad que el desarrollo tradicional — los agentes son espejos, y no tienen piedad.' },
      { t: 'quote', x: 'La habilidad de la próxima década no es teclear más rápido — es dirigir agentes inteligentes con la precisión de un ingeniero senior y el gusto de un diseñador de producto.' },
      { t: 'p', x: 'Cada proyecto de este sitio — desde el kit de red [NetPilot](/es/projects/netpilot/) hasta este mismo portafolio — fue diseñado, revisado y enviado por ese ciclo. La sección de [Codificación agéntica](/es/agentic/overview/) desglosa cada herramienta que uso.' }
    ]
  },
  {
    path: 'about/networking.md',
    title: 'Redes y libertad',
    description: 'Proxies, túneles VLESS, paneles de suscripción y despliegues de borde — Reza Bazdar construye infraestructura para un internet abierto.',
    blocks: [
      { t: 'p', x: 'Crecí detrás de filtros. Donde vivo, partes de internet están fuera de alcance con regularidad — no porque los servidores estén caídos, sino porque alguien decidió que debían estarlo. Esa realidad convirtió las redes de un pasatiempo en una habilidad de supervivencia, y la habilidad de supervivencia en una especialidad: construir infraestructura que mantiene a la gente conectada.' },
      { t: 'p', x: 'Mi trabajo en esta área es práctico, no teórico. Diseño y opero **túneles VLESS y paneles proxy**, gestiono sistemas de suscripción multiusuario compatibles con Clash, v2ray y sing-box, y despliego infraestructura de borde en Cloudflare Workers, Hugging Face Spaces, Railway, Render, Fly.io y Koyeb. Cada uno de mis proyectos de paneles — [Usf Panel](/es/projects/usf-panel/), usf-edge, edge-pp, Render-usf — ataca el mismo problema desde una plataforma distinta, porque el bloqueo es una carrera armamentista y los puntos únicos de fallo dejan a la gente sin acceso.' },
      { t: 'h2', x: 'Lo que realmente construyo' },
      { t: 'list', x: [
        '**Paneles de túnel** — gestión VLESS multiusuario con enlaces de suscripción, estadísticas de tráfico y despliegue con un comando.',
        '**Despliegues de borde** — estado del proxy en Cloudflare KV a través de más de 300 PoPs, sin arranques en frío, sin servidores que confiscar.',
        '**Diagnóstico** — herramientas en Go puro como [NetPilot](/es/projects/netpilot/) para escaneo de puertos, TCP ping y comprobaciones HTTP.',
        '**Patrones de resiliencia** — redundancia multiplataforma para que un bloqueo jamás equivalga a acceso cero.'
      ] },
      { t: 'info', title: 'Por qué importa', x: 'En un entorno donde la conectividad misma está en disputa, un panel proxy no es un juguete — es una línea de vida para el trabajo, la educación y la información libre. Lo trato con la seriedad de la infraestructura crítica.' },
      { t: 'h2', x: 'La mentalidad' },
      { t: 'p', x: 'Las redes me enseñaron cómo mueren los sistemas: con gracia, parcialmente, y siempre en el peor momento. Me enseñaron a leer capturas de paquetes como otros leen mensajes de error, a desconfiar del "bloqueado temporalmente", y a tener siempre un segundo camino, un tercer plan B y una cuarta idea. Esos instintos se filtran en todo lo demás que construyo — APIs redundantes, enrutamiento de modelos con failover, y paneles que asumen que la red es hostil.' },
      { t: 'p', x: 'Si tu proyecto necesita sobrevivir a una red hostil — o simplemente quieres que tu stack no tiemble cuando una región se cae — ese es exactamente el tipo de problema que más disfruto.' }
    ]
  },
  {
    path: 'about/principles.md',
    title: 'Principios de ingeniería',
    description: 'Los principios de trabajo detrás de cada proyecto que lanza Reza Bazdar: ejecútalo, sé dueño, protéjelo, documéntalo, mejóralo.',
    blocks: [
      { t: 'p', x: 'Escribir principios es barato; mantenerlos es caro. Estos son los que realmente mantengo — los mismos contra los que audito el código escrito por agentes antes de que algo salga.' },
      { t: 'h2', x: '1. Debe ejecutarse' },
      { t: 'p', x: 'Un proyecto que compila pero no corre es un boceto, no software. Cada repositorio que publico trae un punto de entrada funcional, configuración real y una ruta de despliegue. [GLM Free API](/es/projects/glm-free-api/) es un archivo Go que sirve tráfico real; [NetPilot](/es/projects/netpilot/) es un único binario que ejecutas en segundos. "Funciona en mi máquina" es donde empiezo, no donde termino.' },
      { t: 'h2', x: '2. Sé dueño de todo el stack' },
      { t: 'p', x: 'Cuando algo se rompe a las 2 AM, quien solo entiende su propia capa señala a los demás. Mantengo deliberadamente mis habilidades afiladas en toda la tubería — frente, atrás, base de datos, red, despliegue — para que la responsabilidad final caiga en alguien que realmente pueda arreglarlo. Full-stack aquí no es una palabra de moda; es una estrategia de respuesta a incidentes.' },
      { t: 'h2', x: '3. La seguridad es un hábito, no una función' },
      { t: 'p', x: 'Escribo herramientas ofensivas — escáneres, analizadores, investigación de exploits — para que el pensamiento defensivo nunca sea teórico. Cada panel sale con acceso admin token + 2FA, cada puente de API con aislamiento de cuentas, cada despliegue con la mínima superficie de ataque que puedo gestionar. Con los agentes esto importa aún más: el código escrito por máquinas debe auditarlo un humano que sabe cómo se ven los ataques.' },
      { t: 'h2', x: '4. Escríbelo' },
      { t: 'p', x: 'Un README es una promesa. Documento la configuración, las decisiones de arquitectura y las limitaciones con honestidad — incluidas las cosas que aún no funcionan. Las [guías en persa](https://github.com/Godde3s/fa-guides) que publico existen porque una buena documentación en tu propio idioma puede ser la diferencia entre aprender y rendirse.' },
      { t: 'h2', x: '5. Mejora el trabajo de otros, con crédito' },
      { t: 'p', x: 'Pararse sobre hombros de gigantes es cómo evoluciona el software. Cuando hago fork o extiendo el proyecto de alguien, primero lo estudio a fondo, lo mejoro de forma significativa y doy crédito en voz alta. Así trato al open source sobre el que construyo, y así espero que traten el mío.' },
      { t: 'tip', title: 'El meta-principio', x: 'Entrega pequeño, entrega honesto, entrega otra vez. El impulso le gana a la perfección — pero la honestidad sobre el estado actual nunca es negociable.' }
    ]
  }
]
