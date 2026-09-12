// ES content — Historias de proyectos (4 páginas)
export const pages = [
  {
    path: 'vibe-stories/story-1.md',
    title: 'NetPilot: un binario, todas las respuestas',
    description: 'La historia de construir NetPilot — un kit de red en Go puro que comprime cinco herramientas de admin en un solo binario estático.',
    blocks: [
      { t: 'p', x: 'Todo sysadmin tiene esa carpeta de herramientas a medio instalar: una para escanear puertos, otra para ping, otra para health checks, todas con flags y formatos de salida distintos. **NetPilot** ([GitHub](https://github.com/Godde3s/netpilot)) empezó cuando me cansé de ser ese sysadmin.' },
      { t: 'h2', x: 'La restricción que le dio forma' },
      { t: 'p', x: 'Me di una sola regla: **el entregable es un único binario estático**. Sin runtime, sin dependencias, sin instalador. Esa única restricción decidió el lenguaje (Go), la arquitectura (stdlib primero) y la UX (subcomandos que se leen como frases). También convirtió al proyecto en el banco de pruebas perfecto para el desarrollo con equipo de agentes — la spec era lo bastante nítida para que los [agentes](/es/agentic/overview/) implementaran comandos en paralelo mientras yo revisaba.' },
      { t: 'h2', x: 'Lo que me enseñó construirlo' },
      { t: 'list', x: [
        '**El diseño de concurrencia le gana al folclore de concurrencia** — un pool de workers con timeouts reales superó a tres borradores "optimizados".',
        '**El output es una API** — una salida JSON estable convirtió el CLI en un bloque que otros scripts (y agentes) pueden consumir.',
        '**La contención escala** — cinco comandos bien hechos valen más que treinta a medias.'
      ] },
      { t: 'p', x: 'Hoy NetPilot es lo primero que despliego en cualquier máquina nueva, y el estándar con el que juzgo cada CLI que construyo — incluidos los que los agentes construyen para mí.' }
    ]
  },
  {
    path: 'vibe-stories/story-2.md',
    title: 'OmniRouter: domando el caos de modelos',
    description: 'Por qué construí OmniRouter — la historia de convertir la rotación de modelos en un archivo de config, con balanceo y failover en un binario Go.',
    blocks: [
      { t: 'p', x: 'El ecosistema de IA avanza a velocidad de scroll. El modelo que impulsó mi semana queda obsoleto el viernes, los precios giran, los tiers gratuitos aparecen y desaparecen. Mis apps se rompían por razones que no tenían nada que ver con mi código — así que convertí ese caos en problema de otro. Ese otro es **[OmniRouter](https://github.com/Godde3s/omnirouter)**.' },
      { t: 'h2', x: 'La idea clave' },
      { t: 'p', x: 'El formato chat-completions de OpenAI ganó. Es la interfaz que todo cliente ya habla. OmniRouter presenta exactamente esa interfaz a tu app, y habla cualquier dialecto que cada upstream necesite del otro lado — GLM, Qwen, DeepSeek, endpoints propios. Tu código **nunca** cambia; el archivo de config cambia semanalmente.' },
      { t: 'h2', x: 'Las partes difíciles' },
      { t: 'list', x: [
        '**Honestidad del streaming** — retransmitir SSE token por token sin sorpresas de buffering exigió plomería cuidadosa.',
        '**Detección de fallos** — distinguir "el modelo va lento" de "el modelo se está muriendo" necesita ventanas de salud móviles, no sondeos de un tiro.',
        '**Rotación justa** — round-robin ponderado con cuotas, para gastar la capacidad barata antes que los tokens premium.'
      ] },
      { t: 'p', x: 'OmniRouter junto a los [puentes free-api](/es/projects/glm-free-api/) me da algo absurdo en papel y esencial en la práctica: un stack de IA multi-modelo con **costo mensual cero** y un archivo de config que manda sobre todos.' }
    ]
  },
  {
    path: 'vibe-stories/story-3.md',
    title: 'Usf Panel: túneles contra la censura',
    description: 'Construir paneles proxy para un entorno donde el bloqueo es una carrera armamentista — la historia y filosofía detrás de Usf Panel y su familia.',
    blocks: [
      { t: 'p', x: 'Algunos programas son una conveniencia; otros son una línea de vida. Mi familia de paneles — **Usf Panel**, usf-edge, edge-pp, Render-usf — es del segundo tipo. Gestionan túneles y suscripciones VLESS para personas cuyo internet se filtra con regularidad, incluida la mía.' },
      { t: 'h2', x: 'El modelo de amenaza es real' },
      { t: 'p', x: 'Construir para redes censuradas cambia cada decisión de diseño. Las plataformas mismas se vuelven superficies de ataque: cuando un proveedor empieza a banear en masa cargas de proxy, tus usuarios quedan a oscuras — por eso cada panel que envío se despliega en **cinco plataformas con un comando**, y las variantes de borde guardan estado en Cloudflare KV a través de 300+ PoPs donde no hay servidor que confiscar.' },
      { t: 'h2', x: 'Ingeniería bajo fuego' },
      { t: 'list', x: [
        '**Los enlaces de suscripción** deben regenerarse limpiamente en Clash, v2ray y sing-box — un formato roto significa un usuario varado.',
        '**Las cuotas multiusuario** evitan que un usuario pesado exponga a todos.',
        '**El endurecimiento del admin** — token + 2FA — porque el panel mismo es el blanco más jugoso.',
        '**Simulacros de migración** — practico los movimientos de plataforma a plataforma antes de necesitarlos, no durante una caída.'
      ] },
      { t: 'p', x: 'La filosofía completa está en la sección de [redes](/es/about/networking/); los detalles del buque insignia en [Usf Panel](/es/projects/usf-panel/). La historia se resume en: trata el acceso a la información como infraestructura crítica, e ingeniérselo con ese respeto.' }
    ]
  },
  {
    path: 'vibe-stories/story-4.md',
    title: 'Este portafolio: un diseño, dos idiomas',
    description: 'La metahistoria: cómo este sitio fue especificado, clonado del sistema de diseño de Usf, traducido a dos idiomas y enviado por un equipo de agentes.',
    blocks: [
      { t: 'p', x: 'Estás viendo el proyecto más autorreferencial de mi portafolio: **este sitio web**. Es una reconstrucción fiel del sistema de diseño de [Usf](https://Godde3schina.github.io/Usf/en/) — el mismo tema VitePress, layout y comportamiento — con cada texto e imagen reemplazados por mi propio contenido, en **dos idiomas**: English y Español.' },
      { t: 'h2', x: 'Por qué clonar el sitio de un curso' },
      { t: 'p', x: 'Porque es honesto sobre lo que es la buena ingeniería: encuentra algo excelente, entiéndelo por completo, y luego adáptalo con respeto. La portada estilo Apple, la navegación de cristal, el tagline tecleado, el carrusel de historias con marco de MacBook — todo fue estudiado, portado y anclado a una versión más nueva del motor, y luego llenado con una vida para la que nunca fue escrito.' },
      { t: 'h2', x: 'Lo que lo hizo no trivial' },
      { t: 'list', x: [
        '**Una capa i18n real** — el selector de idioma, las rutas por locale y el chrome de UI localizado (panel de ajustes, diapositivas, toggles de código) funcionan de punta a punta.',
        '**Wordmark personalizado** — el logo caligráfico "Usf" se generó de una fuente real a paths SVG para que la pantalla de bienvenida conservara su efecto de dibujo animado.',
        '**Catorce ilustraciones nuevas** — cada portada de tarjeta e historia se generó para coincidir con la estética pastel del tema.',
        '**Ensamblado por equipo de agentes** — el porte del tema, el contenido, las traducciones y el despliegue corrieron como flujos de trabajo de agentes paralelos, coordinados a la manera [Hermes](/es/agentic/hermes/).'
      ] },
      { t: 'p', x: 'La fuente de la verdad vive en [github.com/Godde3s/Usf](https://github.com/Godde3s/Usf) — pública, naturalmente. Si estás leyendo esto en el sitio en vivo, el pipeline funcionó; si lo lees en GitHub, el pipeline está a un `vitepress build` de distancia.' }
    ]
  }
]
