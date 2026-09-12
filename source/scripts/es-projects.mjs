// ES content — sección Proyectos (6 páginas)
export const pages = [
  {
    path: 'projects/netpilot.md',
    title: 'NetPilot — Kit de red en Go',
    description: 'Un kit de herramientas de red en un solo binario, en Go puro: escáner de puertos, TCP ping, comprobaciones HTTP y DNS. Sin dependencias, multiplataforma.',
    blocks: [
      { t: 'p', x: '**[NetPilot](https://github.com/Godde3s/netpilot)** es mi respuesta a una molestia simple: verificar la conectividad de red no debería requerir instalar cinco herramientas distintas ni memorizar los flags de `nmap`. NetPilot compila a **un único binario estático en Go puro** — sin runtime, sin dependencias, sin scripts — y responde las preguntas que le hago a las redes todos los días.' },
      { t: 'h2', x: 'Lo que hace' },
      { t: 'table', x: [
        ['Comando', 'Trabajo'],
        ['`scan`', 'Escaneo rápido de puertos TCP con pools de workers y timeouts.'],
        ['`tping`', 'Ping a nivel TCP que funciona donde ICMP está bloqueado.'],
        ['`http`', 'Comprobaciones de salud HTTP con estado, latencia e info TLS.'],
        ['`dns`', 'Consultas A/AAAA/MX/TXT contra cualquier resolver.'],
        ['`info`', 'Resumen de interfaces y rutas para triage rápido.']
      ] },
      { t: 'h2', x: 'Por qué Go puro' },
      { t: 'p', x: 'Porque el despliegue es todo el punto. Una herramienta de red que necesita Python, Node o una docena de librerías del sistema falla exactamente donde más la necesitas: un VPS mínimo, un contenedor en un clúster roto, o la laptop Windows de un amigo a las 2 AM. `go build` produce un binario por plataforma; `CGO_ENABLED=0` lo mantiene portable. El modelo de concurrencia (goroutines + channels) hace rápido al escáner sin dolores de threads.' },
      { t: 'code', lang: 'bash', x: `# escanear el rango de puertos conocidos de un host\n./netpilot scan example.com --ports 1-1024 --workers 200\n\n# tcp-ping a un servicio inestable\n./netpilot tping db.internal:5432 --count 10\n\n# health-check con salida JSON para scripts\n./netpilot http https://api.example.com/health --json` },
      { t: 'h2', x: 'Lo que aprendí construyéndolo' },
      { t: 'p', x: 'La ingeniería interesante no fue el escaneo — fueron los casos límite: limitar tu propia tasa para no tumbar tu gateway, manejar conexiones medio abiertas, honrar timeouts que de verdad significan algo, y hacer que la salida JSON sea lo bastante estable para escribir scripts sobre ella. También se convirtió en mi proyecto de referencia para entender hasta dónde puede llegar un equipo de agentes con un CLI bien especificado.' },
      { t: 'tip', title: 'Pruébalo', x: 'Clona, `go build`, listo: [github.com/Godde3s/netpilot](https://github.com/Godde3s/netpilot) — licencia MIT.' }
    ]
  },
  {
    path: 'projects/omnirouter.md',
    title: 'OmniRouter — Un endpoint para cada modelo',
    description: 'Un router en Go que pone GLM, Qwen, DeepSeek y APIs propias tras un endpoint compatible con OpenAI, con balanceo de carga y failover.',
    blocks: [
      { t: 'p', x: '**[OmniRouter](https://github.com/Godde3s/omnirouter)** existe porque la rotación de modelos es real. Una semana GLM tiene la mejor relación valor, la siguiente Qwen gana en contexto, y DeepSeek siempre está para el código. Recablear tu app cada vez que se mueve la tabla no es ingeniería — así que construí un router que convierte la tabla en un archivo de configuración.' },
      { t: 'h2', x: 'La idea' },
      { t: 'p', x: 'Tu aplicación habla **un solo protocolo** — la API de chat completions de OpenAI, que se volvió la lengua franca de los LLM. OmniRouter habla todos los dialectos upstream del otro lado: GLM, Qwen, DeepSeek y cualquier API HTTP personalizada que registres. En medio proporciona balanceo round-robin, failover automático cuando un proveedor se degrada, cuotas por ruta y streaming unificado.' },
      { t: 'code', lang: 'yaml', x: `upstreams:\n  - name: glm\n    base_url: https://api.zhipuai.example/v1\n    weight: 3\n  - name: qwen\n    base_url: https://dashscope.example/compatible-mode/v1\n    weight: 2\n  - name: deepseek\n    base_url: https://api.deepseek.example/v1\n    weight: 1\nstrategy: round-robin\nfailover: auto` },
      { t: 'h2', x: 'Detalles de ingeniería dignos de robar' },
      { t: 'list', x: [
        '**Seguimiento de salud por upstream** — un proveedor que empieza a devolver 500 queda en el banquillo automáticamente y se sondea en segundo plano.',
        '**Passthrough de streaming** — los trozos de SSE se retransmiten al llegar, así la latencia token a token sigue siendo honesta.',
        '**Cuotas y pesos** — los proveedores baratos absorben más tráfico; los premium se reservan para prompts difíciles.',
        '**Un solo binario Go** — la misma filosofía que [NetPilot](/es/projects/netpilot/): el router jamás debe ser lo que está caído.'
      ] },
      { t: 'p', x: 'OmniRouter también ancla mi flujo agéntico: OpenCode y otros agentes enrutan a través de él, lo que significa que cambiar el cerebro de toda mi cadena de herramientas es un cambio de una línea en la config. Hace pareja natural con [Hermes Stack](/es/projects/hermes-stack/), que lo aloja gratis.' }
    ]
  },
  {
    path: 'projects/glm-free-api.md',
    title: 'GLM Free API — Puente de un solo archivo',
    description: 'Una API completa compatible con OpenAI y Anthropic para GLM en un solo archivo Go. Sin navegador, sin Chrome headless, con pool de cuentas.',
    blocks: [
      { t: 'p', x: '**[GLM Free API](https://github.com/Godde3s/glm-free-api)** es mi repositorio con más estrellas, y la premisa es casi descortés de simple: un puente API completo hacia GLM en **un solo archivo Go**, con **cero automatización de navegador**. Sin Chrome headless devorando RAM, sin caprichos de puppeteer — solo HTTP bien hecho.' },
      { t: 'h2', x: 'El problema que resuelve' },
      { t: 'p', x: 'El chat web de GLM es gratis pero está encerrado en un navegador. Los puentes existentes envuelven ese navegador en automatización, lo que significa explosiones de memoria, captchas a cada rato y caídas bajo carga. Yo fui por el camino contrario: hice ingeniería inversa del flujo de sesión web y implementé el protocolo nativamente en Go. El resultado arranca en milisegundos y aguanta peticiones concurrentes sin un solo proceso de navegador.' },
      { t: 'h2', x: 'Características' },
      { t: 'list', x: [
        '**Compatible con OpenAI** vía `/v1/chat/completions` — drop-in para cualquier cliente existente.',
        '**Compatible con Anthropic** vía `/v1/messages` — para que las herramientas estilo Claude también funcionen.',
        '**Pool de cuentas** — rota varias sesiones, marca las muertas, quédate bajo los límites de tasa.',
        '**Streaming** — SSE real, no respuestas troceadas falsas.',
        '**Un archivo** — `go build`, ejecuta, listo. Puedes leer toda la implementación de una sentada.'
      ] },
      { t: 'quote', x: 'Un solo archivo no es un alarde. Es una declaración: la infraestructura debería ser legible — puedes auditar cada línea en diez minutos.' },
      { t: 'p', x: 'La misma arquitectura tuvo hermanos: [GhostBrain](/es/projects/ghost-brain/) (Gemini), qwen-free-api y deepseek-free-api. Junto con [OmniRouter](/es/projects/omnirouter/), forman una infraestructura de IA completa en tier gratuito que cuesta exactamente cero en ejecutarse.' }
    ]
  },
  {
    path: 'projects/ghost-brain.md',
    title: 'GhostBrain — De Gemini a API',
    description: 'Convierte una cuenta gratuita de Gemini en una API real compatible con OpenAI y Anthropic: sesiones seguras, pools multi-cuenta, streaming SSE.',
    blocks: [
      { t: 'p', x: '**[GhostBrain](https://github.com/Godde3s/GhostBrain)** resucita una cuenta web gratuita de Gemini como infraestructura real. La app web te da un modelo potente detrás de una página de chat; GhostBrain lo saca de ahí y lo sirve como una API de verdad — con todo lo que eso implica: vinculación segura de sesiones, pools multi-cuenta, streaming SSE y persistencia.' },
      { t: 'h2', x: 'Decisiones de diseño' },
      { t: 'p', x: 'La parte frágil de cualquier puente de cuenta web es la sesión. GhostBrain la trata como ciudadano de primera clase: las cookies se guardan cifradas, las sesiones se chequean y rotan antes de morir —no después—, y las cuentas se agrupan en pools para que ninguna identidad absorba todo el tráfico. Cuando una sesión muere, el pool la marca en silencio y sigue sirviendo — tu cliente nunca ve un 401.' },
      { t: 'table', x: [
        ['Preocupación', 'Enfoque'],
        ['Seguridad de sesión', 'Bóveda de cookies cifrada, sin secretos en texto plano en disco.'],
        ['Fiabilidad', 'Sondeos de salud en segundo plano + rotación automática.'],
        ['Compatibilidad', '`/v1/chat/completions` de OpenAI y `/v1/messages` de Anthropic.'],
        ['Streaming', 'Retransmisión SSE nativa, token por token.'],
        ['Lenguaje', 'Python — I/O asíncrono de punta a punta.']
      ] },
      { t: 'h2', x: 'Dónde encaja en mi stack' },
      { t: 'p', x: 'GhostBrain es el hermano en Python de [GLM Free API](/es/projects/glm-free-api/), y ambos son upstreams que mi [OmniRouter](/es/projects/omnirouter/) balancea con gusto. Desplegados juntos en tiers gratuitos — Hugging Face Spaces, Railway, Render — me dan una flota de APIs multi-modelo cuya factura mensual es exactamente cero. Esa combinación es la que [Hermes Stack](/es/projects/hermes-stack/) empaqueta como despliegue de un clic.' },
      { t: 'tip', title: 'Uso responsable', x: 'Los puentes de tiers gratuitos viven de la generosidad de otros. GhostBrain se auto-limita y rota cuentas precisamente para seguir siendo educado — úsalo como invitado, no como saqueador.' }
    ]
  },
  {
    path: 'projects/hermes-stack.md',
    title: 'Hermes Stack — Cerebro de IA autoalojado',
    description: 'Hermes Agent + 9Router + OmniRouter empaquetados en un Hugging Face Space gratuito — un cerebro de IA desplegable en minutos.',
    blocks: [
      { t: 'p', x: '**[Hermes Stack](https://github.com/Godde3s/hermes-stack)** es el proyecto que ata toda mi infraestructura de IA. Empaqueta **Hermes Agent**, **9Router** y **OmniRouter** en un solo Hugging Face Space que se despliega en minutos y no cuesta nada. Un clic, y tienes un cerebro de IA en la nube que te pertenece: runtime de agentes, router de modelos y consola para manejar ambos.' },
      { t: 'h2', x: 'Qué hay dentro' },
      { t: 'table', x: [
        ['Componente', 'Rol'],
        ['Hermes Agent', 'El cerebro — planifica tareas, llama herramientas, corre automatizaciones, recuerda contexto.'],
        ['9Router', 'Enrutamiento multi-proveedor para nueve familias de upstreams.'],
        ['OmniRouter', 'Mi router en Go; añade pesos, cuotas y failover encima.'],
        ['HF Space', 'Alojamiento gratuito sin dolores de arranque en frío para esta clase de carga.']
      ] },
      { t: 'h2', x: 'Por qué importa' },
      { t: 'p', x: 'La mayoría de los montajes de "asistente de IA" son o bien un SaaS alojado que no controlas, o un equipo local que no alcanzas desde el teléfono. Hermes Stack es la tercera opción: **autoalojado, alcanzable desde la nube y gratis**. Lo uso como coordinador de mis otros agentes — guarda las rutas de API, funciona como cerebro de webhooks para automatizaciones y da a cada herramienta de mi cadena un endpoint estable.' },
      { t: 'olist', x: [
        'Haz fork del Space (o despliega desde el repo con un comando).',
        'Pega tus claves upstream — o apúntalo a puentes gratuitos como [GLM Free API](/es/projects/glm-free-api/).',
        'Háblale desde Telegram, curl o cualquier cliente compatible con OpenAI.'
      ] },
      { t: 'p', x: 'La sección de [Codificación agéntica](/es/agentic/hermes/) cubre cómo Hermes dirige el resto de mi cadena día a día. Este mismo portafolio se coordinó a través de él — briefs, revisiones y despliegues pasaron todos por un stack que cuesta menos que un café. O sea: exactamente nada.' }
    ]
  },
  {
    path: 'projects/usf-panel.md',
    title: 'Usf Panel — Gestor VLESS',
    description: 'Panel premium de túneles VLESS y suscripciones: multiusuario, sincronización Clash/v2ray/sing-box, despliegue con un comando en HF, Railway, Render, Fly y Koyeb.',
    blocks: [
      { t: 'p', x: '**Usf Panel** es el buque insignia de mi trabajo de redes: un **gestor premium de túneles VLESS y suscripciones** construido como una aplicación FastAPI de un solo archivo. Gestiona acceso multiusuario, genera enlaces de suscripción que Clash, v2ray y sing-box consumen nativamente, y se despliega en cinco plataformas con un comando cada una.' },
      { t: 'h2', x: 'Por qué otro panel' },
      { t: 'p', x: 'Los paneles existentes son o pesados de nivel empresarial (una granja de servidores para correr un túnel) o de calidad de juguete (sin gestión de usuarios, sin estadísticas, sin resiliencia). Usf Panel se toma en serio el camino intermedio: un archivo Python que puedes leer, un panel admin real con token + 2FA, contabilidad de tráfico por usuario, y objetivos de despliegue que siguen cómo evoluciona realmente la censura — cuando una plataforma se vuelve agresiva, te mudas en minutos, no días.' },
      { t: 'table', x: [
        ['Capacidad', 'Detalle'],
        ['Protocolos', 'VLESS sobre WS/TLS, configs listos para Reality.'],
        ['Suscripciones', 'Enlaces auto-generados; compatibles con Clash / v2ray / sing-box.'],
        ['Usuarios', 'Multiusuario con cuotas, expiración y estadísticas de tráfico.'],
        ['Admin', 'Panel endurecido con token + 2FA y registro de auditoría.'],
        ['Despliegue', 'Hugging Face · Railway · Render · Fly.io · Koyeb — un comando cada uno.']
      ] },
      { t: 'h2', x: 'La familia' },
      { t: 'p', x: 'Usf Panel no está solo — es el centro de una familia que cubre cada filosofía de alojamiento: **usf-edge** corre la misma idea enteramente en Cloudflare Workers con estado KV en más de 300 PoPs; **edge-pp** extiende edgetunnel con un panel completo de gestión de usuarios; **Render-usf** apunta a Render con medidas antibloqueo; **Usf-Pnl-pro** empaqueta el despliegue multiplataforma. La sección de [redes](/es/about/networking/) explica por qué la redundancia entre plataformas es un requisito de diseño, no una opción.' },
      { t: 'warning', title: 'Nota de responsabilidad', x: 'Estas herramientas existen para restaurar el acceso a la información, no para entrar en nada. Se publican endurecidas — no con exploits — y espero que los usuarios respeten las leyes de sus propias jurisdicciones.' }
    ]
  }
]
