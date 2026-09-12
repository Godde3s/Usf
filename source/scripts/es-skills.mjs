// ES content — sección Habilidades (12 páginas)
const mk = (path, title, description, blocks) => ({ path: `skills/${path}`, title, description, blocks })

export const pages = [
  mk('languages.md', 'Lenguajes — el que el trabajo pida',
    'Python, JavaScript/TypeScript, Go, PHP, C#, SQL, C/C++ y lenguajes PLC — preparación de producción honesta en nueve lenguajes.',
    [
      { t: 'p', x: 'Rechazo la religión del "único lenguaje verdadero". Los lenguajes son herramientas con formas, y el trabajo decide cuál encaja. Estos porcentajes son autoevaluaciones honestas de preparación de producción — no certificados de cursos.' },
      { t: 'table', x: [
        ['Lenguaje', 'Preparación', 'Dónde lo uso'],
        ['Python', '99%', 'Puentes de API, agentes, automatización, scraping — GhostBrain, Hermes, paneles.'],
        ['JavaScript / TypeScript', '98%', 'Web full-stack, Workers de borde, paneles, este portafolio.'],
        ['PHP', '98%', 'Servicios Laravel, despliegues clásicos, productos rápidos para clientes.'],
        ['SQL', '100%', 'Diseño de esquemas, afinado, reporting sobre Postgres/MySQL.'],
        ['Ladder (LD)', '96%', 'Lógica PLC en líneas de producción reales.'],
        ['Texto Estructurado (ST)', '96%', 'Programas de control industrial IEC 61131-3.'],
        ['Go', '94%', 'NetPilot, OmniRouter, glm-free-api — CLIs y servicios.'],
        ['C#', '93%', 'Backends .NET, herramientas de escritorio, WPF/MAUI.'],
        ['C / C++', '78%', 'HardwarePT, experimentos embebidos, núcleos de rendimiento.']
      ] },
      { t: 'p', x: 'El patrón tras la lista: lenguajes de alto nivel para velocidad, lenguajes de sistemas para control, y lenguajes industriales porque alguien tiene que hacer que el mundo físico se comporte. Un lenguaje nuevo es un problema de fin de semana, no una decisión de carrera — el [flujo agéntico](/es/agentic/overview/) abarata aún más el ramp-up, ya que los agentes escriben scaffolding idiomático en cualquier ecosistema mientras yo aportó el juicio.' }
    ]),
  mk('web.md', 'Frontend web — Interfaces que se sienten al instante',
    'React, Vue, Next.js, Tailwind, gestión de estado y accesibilidad — construyendo interfaces web rápidas y modernas.',
    [
      { t: 'p', x: 'El frontend es donde los usuarios juzgan todo lo que nunca verán. Construyo interfaces que cargan rápido, degradan con gracia y se sienten inmediatas — porque un backend hermoso detrás de una UI torpe es un árbol cayendo en un bosque vacío.' },
      { t: 'h2', x: 'La caja de herramientas' },
      { t: 'table', x: [
        ['Preocupación', 'Herramientas'],
        ['Frameworks', 'React, Vue, Angular, Next.js, Nuxt'],
        ['Estilos', 'Tailwind CSS, arquitectura CSS, design tokens, RTL'],
        ['Estado', 'Pinia, Zustand, Redux Toolkit, cachés de query'],
        ['Móvil y escritorio', 'React Native, Expo, Flutter, Ionic, Electron, Tauri'],
        ['Rendimiento', 'Code splitting, presupuesto de imágenes, Core Web Vitals']
      ] },
      { t: 'p', x: 'Este mismo sitio es una demostración en funcionamiento: un clon del tema VitePress adaptado a cuatro idiomas con soporte RTL completo para persa y árabe — tipografía, padding y dirección de iconos se voltean limpiamente. Mis paneles de administración para [Usf Panel](/es/projects/usf-panel/) siguen las mismas reglas bajo restricciones mucho más duras: backends de un solo archivo con frontends pulidos y responsivos.' },
      { t: 'tip', title: 'RTL es una función', x: 'La mitad de mis usuarios lee de derecha a izquierda. Tratar RTL como una ocurrencia tardía es enviarles un producto roto — así que diseño para ello desde el primer commit.' }
    ]),
  mk('backend.md', 'Backend y APIs — Servicios hechos para permanecer',
    'FastAPI, Gin, Laravel, .NET, Express — diseño y operación de servicios y APIs que sobreviven tráfico real.',
    [
      { t: 'p', x: 'Mi filosofía de backend es aburrida a propósito: contratos claros, fallos explícitos, y servicios que se reinician solos sin drama. La parte emocionante es lo que los servicios permiten — infraestructura de IA gratuita, paneles que sirven a usuarios reales, puentes que convierten cuentas web en APIs.' },
      { t: 'h2', x: 'Stacks con los que entrego' },
      { t: 'table', x: [
        ['Stack', 'Punto dulce'],
        ['Python — FastAPI / Django', 'APIs, agentes, puentes async I/O (GhostBrain, Hermes).'],
        ['Go — Gin / stdlib', 'Servicios y CLIs de binario único (NetPilot, OmniRouter).'],
        ['PHP — Laravel', 'Productos completos con auth, colas y paneles admin.'],
        ['C# — ASP.NET', 'Servicios de nivel empresarial y backends de escritorio.'],
        ['Node — Express / Fastify', 'Workers de borde, pegamento en tiempo real, prototipos rápidos.']
      ] },
      { t: 'h2', x: 'No negociables' },
      { t: 'list', x: [
        '**Endpoint de salud** en todo lo longevo — mi propia herramienta ([NetPilot](/es/projects/netpilot/)) los monitorea.',
        '**Degradación elegante** — un upstream muerto debe degradar funciones, jamás derribar el proceso.',
        '**Logs estructurados** desde el día uno, porque depurar por vibras no escala más allá de las 2 AM.',
        '**Tests de contrato** para todo lo que otros sistemas dependen — incluidos los agentes.'
      ] },
      { t: 'p', x: 'El patrón se repite en mis proyectos: los [puentes free-api](/es/projects/glm-free-api/) lidiar con upstreams hostiles y limitados; los [paneles](/es/projects/usf-panel/) con estado multiusuario; los [routers](/es/projects/omnirouter/) con el fallo entre ellos. Mismos principios, distintos puntos de presión.' }
    ]),
  mk('networking.md', 'Redes — La caja de herramientas del internet abierto',
    'TCP/IP, DNS, proxies, túneles VLESS, redes de borde — redes prácticas y profundas para entornos hostiles.',
    [
      { t: 'p', x: 'Las redes son mi especialidad bajo presión: construyo para redes que resisten activamente. Eso significa fluidez desde los paquetes hasta las plataformas — cómo muere un handshake TLS, por qué se rompe un enlace de suscripción, dónde filtra DNS un túnel.' },
      { t: 'h2', x: 'Mapa de competencias' },
      { t: 'table', x: [
        ['Capa', 'Habilidades'],
        ['Fundamentos', 'TCP/IP, DNS, HTTP/2–3, TLS, enrutamiento, NAT, análisis de capturas'],
        ['Tecnología proxy', 'VLESS, VMess, Trojan, Reality; configs de Clash, v2ray, sing-box'],
        ['Borde y CDN', 'Cloudflare Workers, KV, distribución en 300+ PoPs, reglas WAF'],
        ['Diagnóstico', 'Escaneo de puertos, TCP ping, inspección TLS ([NetPilot](/es/projects/netpilot/))'],
        ['Operaciones', 'Redundancia multiplataforma, migraciones sin downtime']
      ] },
      { t: 'p', x: 'Este es el dominio donde vive mi [familia de paneles](/es/projects/usf-panel/), y moldea todo lo demás: mis puentes de API asumen throttling, mis routers asumen la muerte de upstreams, y mis despliegues asumen que cualquier plataforma puede desaparecer de la noche a la mañana. La redundancia no es paranoia — es el SLA mínimo de una conexión libre y abierta.' },
      { t: 'quote', x: 'Una red de la que puedes fiarte se construye, no se espera.' }
    ]),
  mk('security.md', 'Seguridad — Formado en el ataque, mentalizado en la defensa',
    'Kit de pentesting, investigación XSS, análisis estático — encontrar agujeros antes que los demás.',
    [
      { t: 'p', x: 'Aprendí seguridad desde el lado ofensivo — construyendo escáneres, estudiando XSS, auditando código en busca de patrones inseguros — porque no puedes defender un sistema que no puedes atacar. Esa lente ahora corre sobre todo lo que envío, especialmente el código escrito por agentes.' },
      { t: 'h2', x: 'El arsenal' },
      { t: 'list', x: [
        '**Análisis estático** — mi proyecto [explorer](https://github.com/Godde3s/explorer) caza patrones vulnerables y rutas de código inseguras en árboles de fuente.',
        '**Investigación de exploits web** — flujos XSS, patrones de acceso inverso ([access](https://github.com/Godde3s/access)), utilidades de caza de bugs ([thehunter](https://github.com/Godde3s/thehunter)).',
        '**Alfabetización de herramientas** — la colección clásica ([Collection-](https://github.com/Godde3s/Collection-)) que todo practicante debería saber leer.',
        '**Práctica de endurecimiento** — paneles admin con token + 2FA, bóvedas de sesión cifradas, despliegues de superficie mínima.'
      ] },
      { t: 'h2', x: 'Seguridad en la era agéntica' },
      { t: 'p', x: 'Los agentes escriben más código que nunca, y lo escriben *con confianza* — incluido el tipo inseguro. Mi checklist de revisión por eso trata cada diff generado como entrada no confiable: superficies de inyección, bypasses de autenticación, manejo de secretos, procedencia de dependencias. La [página del método](/es/about/how-i-work/) llama a esto el paso de revisión humana; en términos de seguridad, es el único paso que importa.' },
      { t: 'warning', title: 'Cláusula ética', x: 'Mi trabajo ofensivo apunta a sistemas que poseo o estoy autorizado a probar. Cualquier otra cosa es un crimen, no una habilidad.' }
    ]),
  mk('ai-llm.md', 'Infra IA y LLM — El arquitecto del tier gratuito',
    'Puentes de API, routers de modelos, runtimes de agentes y autoalojamiento — infraestructura de IA que cuesta cero en correr.',
    [
      { t: 'p', x: 'Cualquiera puede llamar a una API de pago. La ingeniería interesante es construir **infraestructura sobre tiers gratuitos que se comporta como una de pago** — y eso es exactamente lo que hacen mis proyectos de IA, por capas.' },
      { t: 'h2', x: 'Las capas' },
      { t: 'table', x: [
        ['Capa', 'Proyecto', 'Trabajo'],
        ['Acceso', '[GLM Free API](/es/projects/glm-free-api/), [GhostBrain](/es/projects/ghost-brain/), puentes qwen/deepseek', 'Convertir modelos web gratuitos en APIs reales compatibles con OpenAI/Anthropic.'],
        ['Enrutamiento', '[OmniRouter](/es/projects/omnirouter/)', 'Balanceo, pesos, cuotas y failover entre proveedores.'],
        ['Coordinación', '[Hermes Stack](/es/projects/hermes-stack/)', 'Runtime de agentes + automatizaciones + consola; autoalojado y gratis.'],
        ['Consumo', '[OpenCode · Codex · Claude Code](/es/agentic/overview/)', 'Flota de agentes haciendo trabajo de ingeniería real sobre el stack.']
      ] },
      { t: 'p', x: 'Las reglas de diseño son consistentes: nunca depender de un solo proveedor, nunca confiar en que un tier gratuito siga siendo gratuito, y tener siempre una salida de emergencia. Cuando un puente muere, el router lo banca; cuando una plataforma se vuelve hostil, aplica el [disciplinamiento de paneles](/es/about/networking/) — migrar en minutos. El resultado es un stack de IA multi-modelo con factura mensual de exactamente cero.' },
      { t: 'p', x: 'En el ML en sí trabajo con TensorFlow, PyTorch, OpenCV y las herramientas de Hugging Face — con la profundidad suficiente para afinar, incrustar y evaluar, que suele ser todo lo que un producto realmente necesita.' }
    ]),
  mk('devops.md', 'DevOps y despliegue — Cinco plataformas, un comando',
    'HF Spaces, Railway, Render, Fly.io, Koyeb, Cloudflare Workers — desplegar servicios resilientes en tiers gratuitos.',
    [
      { t: 'p', x: 'El despliegue es donde los hobbies se vuelven productos. Mantengo rutas de despliegue en seis plataformas y trato "un comando" como un requisito estricto — porque cuando una plataforma se vuelve hostil o una región se cae, la velocidad de migración *es* el uptime.' },
      { t: 'h2', x: 'Manual de plataformas' },
      { t: 'table', x: [
        ['Plataforma', 'Lo que corro allí'],
        ['Hugging Face Spaces', 'Hermes Stack, puentes de IA — cómputo gratuito generoso.'],
        ['Cloudflare Workers', 'Paneles usf-edge — estado KV, 300+ PoPs, sin arranques en frío.'],
        ['Railway / Render / Fly.io / Koyeb', 'Paneles y APIs — cada uno con sus propias rarezas antibloqueo.'],
        ['VPS (Linux)', 'Despliegues clásicos, túneles, monitoreo.']
      ] },
      { t: 'list', x: [
        '**Docker** cuando la plataforma lo soporta; **Procfiles y buildpacks** cuando no.',
        '**Hábitos de CI** — GitHub Actions para tests y builds; los despliegues se mantienen aburridos a propósito.',
        '**Observabilidad** — logs estructurados, pings de uptime desde mi propia herramienta, alertas a Telegram.',
        '**Disciplina de secretos** — variables de entorno, bóvedas cifradas, nada en git.'
      ] },
      { t: 'p', x: 'La filosofía coincide con mi [mentalidad de redes](/es/about/networking/): cada despliegue está a un derribo de morir, así que cada despliegue tiene un gemelo documentado en otra plataforma. Mis paneles literalmente traen cinco comandos de despliegue por esta razón.' }
    ]),
  mk('plc.md', 'PLC industrial — Donde el software toca el acero',
    'Programación PLC en Ladder y Texto Estructurado (IEC 61131-3), diseño HMI, lógica SCADA — automatización en líneas de producción reales.',
    [
      { t: 'p', x: 'Antes de las APIs web estaban los cables. La automatización industrial me enseñó que el software tiene consecuencias que se pueden oír — una mala línea de lógica no lanza una excepción, detiene una línea de producción o pellizca un dedo. Programo PLCs en **Ladder Diagram** y **Texto Estructurado** bajo IEC 61131-3, y diseño los HMIs que los operadores realmente usan.' },
      { t: 'h2', x: 'Lo que hago en la planta' },
      { t: 'table', x: [
        ['Área', 'Práctica'],
        ['Lógica', 'Ladder (LD) para control discreto; Texto Estructurado (ST) para matemática y secuencias.'],
        ['HMI', 'Pantallas que los operadores leen de un vistazo, en su idioma, con alarmas honestas.'],
        ['Pensamiento SCADA', 'Nomenclatura de tags, racionalización de alarmas, registro de datos que sobrevive auditorías.'],
        ['Seguridad', 'Interlocks primero, conveniencia después — siempre.']
      ] },
      { t: 'p', x: 'La automatización me hizo mejor ingeniero de software de tres formas específicas: respeto las **máquinas de estados** (una línea de producción es una máquina de estados gigante), escribo **código defensivo** (los sensores mienten, los contactos se sueldan), y documento como si el próximo lector estuviera parado junto a una máquina encendida — porque a veces lo está.' },
      { t: 'quote', x: 'En control industrial, el uptime se mide en toneladas, no en nueves.' }
    ]),
  mk('databases.md', 'Bases de datos — Modeladas y afinadas',
    'PostgreSQL, MySQL, MongoDB, Redis, Firebase — diseño de esquemas, afinado de consultas y trade-offs honestos.',
    [
      { t: 'p', x: 'La mayoría de los problemas de rendimiento que encuentro son problemas de base de datos disfrazados de frontend. Diseño esquemas con intención, mido antes de optimizar, y elijo motores por carga de trabajo, no por moda.' },
      { t: 'h2', x: 'Elecciones de motor que realmente hago' },
      { t: 'table', x: [
        ['Motor', 'Cuándo lo elijo'],
        ['PostgreSQL', 'OLTP por defecto: paneles, APIs, todo lo que tiene relaciones y restricciones.'],
        ['MySQL / MariaDB', 'Realidades de hosting compartido y stacks heredados.'],
        ['MongoDB', 'Datos documentales de evolución rápida — bóvedas de sesión, logs.'],
        ['Redis', 'Caché, colas, rate limiting, estado de sesión.'],
        ['Firebase / Supabase', 'Productos sin operaciones y prototipos que aún necesitan auth + datos.']
      ] },
      { t: 'list', x: [
        '**Diseño de esquemas** — normalización donde importa la integridad, desnormalización deliberada donde dominan las lecturas.',
        '**Afinado de consultas** — planes EXPLAIN, estrategia de índices, cacería de N+1.',
        '**Migraciones** — versionadas, reversibles, ensayadas en staging.',
        '**Backups** — automatizados, probados y realmente restaurables (el único tipo que cuenta).'
      ] }
    ]),
  mk('git.md', 'Git y flujo de trabajo — Disciplina que escala',
    'Estrategia de ramas, disciplina de revisión, commits convencionales y hábitos de CI para desarrollo individual y en equipo con agentes.',
    [
      { t: 'p', x: 'Git es el contrato entre mi yo pasado, mi yo futuro y los agentes que trabajan en mi nombre. Mis reglas de flujo son lo bastante simples para seguirlas a las 2 AM y lo bastante estrictas para que los diffs generados por agentes sigan siendo revisables.' },
      { t: 'h2', x: 'Las reglas' },
      { t: 'list', x: [
        '**Ramas pequeñas de propósito único.** Una idea por rama — humana o de agente.',
        '**Commits convencionales.** `feat:`, `fix:`, `refactor:` — el changelog se escribe solo.',
        '**Revisa todo.** Especialmente código de agentes; la confianza se concede por diff, nunca por herramienta.',
        '**main sigue desplegable.** Si main se rompe, arreglarlo supera todo lo demás.',
        '**Tags para releases.** Cada estado enviado es recuperable para siempre.'
      ] },
      { t: 'p', x: 'Con agentes en el ciclo esta disciplina deja de ser opcional: tres sandboxes produciendo diffs en paralelo solo funciona si el historial se mantiene limpio y cada cambio está aislado. El [método agéntico](/es/about/how-i-work/) depende de que git sea aburrido y predecible — exactamente lo que quiero de la infraestructura.' }
    ]),
  mk('terminal.md', 'Terminal y Linux — La caja de herramientas Unix',
    'WSL2, scripting de shell, SSH, systemd y la caja de herramientas Unix — el entorno donde realmente ocurre todo mi trabajo.',
    [
      { t: 'p', x: 'Mi entorno de trabajo principal es la terminal — normalmente WSL2 en Windows, que me da ambos mundos, o una máquina Linux pelada para servicios. La fluidez aquí no es nostalgia; es palanca. Cada herramienta que uso, incluido cada agente, termina moviendo los mismos primitivos Unix.' },
      { t: 'h2', x: 'Uso diario' },
      { t: 'table', x: [
        ['Área', 'Herramientas'],
        ['Shell', 'bash/zsh, pipes, jq, one-liners de awk/sed, fzf'],
        ['Remoto', 'Claves y agentes SSH, sesiones tmux, port forwarding'],
        ['Servicios', 'unidades systemd, cron, rotación de logs'],
        ['Contenedores', 'Docker, compose, imágenes mínimas'],
        ['Inspección', 'htop, ss/netstat, strace, journalctl']
      ] },
      { t: 'p', x: 'De aquí vino la filosofía de [NetPilot](/es/projects/netpilot/): las mejores herramientas de terminal hacen un trabajo, siguen siendo rápidas y se componen entre sí. Sostengo mis propias herramientas — y el output de mis agentes — al mismo estándar. Un comando que no puede pasarse por pipe es un comando que reescribiré.' }
    ]),
  mk('architecture.md', 'Arquitectura — Diseñar para el cambio',
    'De servicios de un archivo a sistemas distribuidos — modularidad, dominios de fallo y la evolución como preocupación de primera clase.',
    [
      { t: 'p', x: 'La arquitectura es el conjunto de decisiones caras de cambiar después. Mi sesgo: empezar tan pequeño como sea posible — a veces [un solo archivo](/es/projects/glm-free-api/) — pero con costuras en los lugares correctos, para que crecer signifique reemplazar módulos en vez de reescribir sistemas.' },
      { t: 'h2', x: 'Principios con los que diseño' },
      { t: 'list', x: [
        '**Dominios de fallo.** Lo que puede morir debe morir solo — los routers aíslan proveedores, los paneles aíslan usuarios.',
        '**Tecnología aburrida primero.** El presupuesto de innovación se gasta en la única cosa que es realmente nueva.',
        '**Interfaces sobre implementaciones.** La forma de la API de OpenAI se volvió estándar precisamente porque los contratos viven más que los productos.',
        '**El estado es la parte difícil.** Mantenlo pequeño, explícito, con backup, y sabe dónde vive cada byte.',
        '**Rutas de evolución.** Cada diseño lleva una nota de "cuando esto se le quede pequeño" — escrita mientras los trade-offs están frescos.'
      ] },
      { t: 'p', x: 'La cartera de proyectos sigue este mismo arco: los puentes ([un archivo](/es/projects/glm-free-api/)) maduraron a routers ([OmniRouter](/es/projects/omnirouter/)), los routers a stacks ([Hermes](/es/projects/hermes-stack/)) — cada paso reemplazó un módulo, no reescribió un sistema. Eso es para mí lo que significa "ingeniero versátil": no saberlo todo, sino construir de forma que puedas aprender lo siguiente.' }
    ])
]
