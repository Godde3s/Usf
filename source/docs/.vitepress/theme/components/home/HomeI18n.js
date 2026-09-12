// Home page UI strings for all four locales of the Usf portfolio.
// Card arrays are authored complete (title/headline/desc/link) so no
// runtime synchronization of content is needed — HomeI18nSync only fills
// shared interaction labels.
import { synchronizeHomeTranslations } from './HomeI18nSync.js'

export const i18n = {
  en: {
    nav: {
      title: 'Usf — Reza Bazdar',
      home: 'Home',
      stories: 'Stories',
      pm: 'About',
      junior: 'Projects',
      senior: 'Agentic Coding',
      appendix: 'Skills',
      start: 'Start'
    },
    stories: {
      cat: 'Project Stories',
      title: 'Real projects,<br><span class="highlight">built in public.</span>',
      sub: 'Every card leads to a working repository — no mockups, no vaporware.',
      s1: {
        title: 'One binary that answers every network question',
        author: 'netpilot · Go'
      },
      s2: {
        title: 'One router in front of every AI model',
        author: 'omnirouter · Go'
      },
      s3: {
        title: 'A VLESS panel that survives real censorship',
        author: 'Usf Panel · Python'
      },
      s4: {
        title: 'This portfolio — four languages, one VitePress',
        author: 'Usf · Vue'
      },
      authorPrefix: 'Built with:',
      ui: {
        prevLabel: 'Previous story',
        nextLabel: 'Next story',
        selectLabel: 'View this story',
        imageAlt: 'Story cover'
      }
    },
    stage1: {
      cat: 'About · Who I Am',
      title: 'Creative by instinct,<br><span class="highlight">engineer by discipline.</span>',
      sub: 'Reza Bazdar — a full-stack software engineer from Iran who builds end-to-end: web, apps, networks, industrial automation and AI infrastructure.',
      cards: [
        {
          title: 'Profile & Mission',
          desc: 'A versatile engineer who codes in any language the job demands — and ships.',
          link: '/en/about/profile/'
        },
        {
          title: 'The Agentic Method',
          desc: 'How OpenCode, Codex, Claude Code and my own Hermes agent ship production software.',
          link: '/en/about/how-i-work/'
        },
        {
          title: 'Networks & Freedom',
          desc: 'Proxies, tunnels and edge infrastructure for an open internet.',
          link: '/en/about/networking/'
        }
      ]
    },
    stage2: {
      cat: 'Projects · Selected Work',
      title: 'One person,<br><span class="highlight">shipping like a team.</span>',
      sub: 'API bridges, model routers, agent stacks and proxy panels — every repo runs.',
      cards: [
        {
          title: 'NetPilot',
          headline: 'One binary, every network answer.',
          desc: 'A pure-Go network toolkit — port scanner, TCP ping and HTTP health checks, cross-compiled into a single static binary.',
          link: '/en/projects/netpilot/'
        },
        {
          title: 'OmniRouter',
          headline: 'Every model, one endpoint.',
          desc: 'GLM, Qwen, DeepSeek and custom APIs behind one OpenAI-compatible router with load balancing and automatic failover.',
          link: '/en/projects/omnirouter/'
        },
        {
          title: 'GLM Free API',
          headline: 'One file, zero browser.',
          desc: 'A complete OpenAI- and Anthropic-compatible API for GLM in a single Go file — account pool, streaming responses, one-command deploy.',
          link: '/en/projects/glm-free-api/'
        },
        {
          title: 'GhostBrain',
          headline: 'A free account becomes an API.',
          desc: 'Turn a free Gemini web account into a real OpenAI + Anthropic-compatible API — secure sessions, multi-account pools, SSE streaming.',
          link: '/en/projects/ghost-brain/'
        },
        {
          title: 'Hermes Stack',
          headline: 'A self-hosted AI brain.',
          desc: 'Hermes Agent + 9Router + OmniRouter packed into one free Hugging Face Space — deployable in minutes, driven from one console.',
          link: '/en/projects/hermes-stack/'
        },
        {
          title: 'Usf Panel',
          headline: 'Tunnels that survive reality.',
          desc: 'Premium VLESS tunnel and subscription manager — multi-user, Clash / v2ray / sing-box sync, one-command deploy anywhere.',
          link: '/en/projects/usf-panel/'
        }
      ],
      more: 'Read the build notes'
    },
    stage3: {
      cat: 'Agentic Coding · My Superpower',
      title: 'I don’t just use AI.<br><span class="highlight">I direct agent teams.</span>',
      sub: 'My daily drivers are OpenCode, Codex and Claude Code — orchestrated by my own Hermes stack.',
      cards: [
        {
          title: 'OpenCode',
          desc: 'My go-to terminal agent — model-agnostic pair programming that routes through my own omnirouter.',
          link: '/en/agentic/opencode/'
        },
        {
          title: 'Codex',
          desc: 'Parallel execution across sandboxes — perfect when a change fans out over many files.',
          link: '/en/agentic/codex/'
        },
        {
          title: 'Claude Code',
          desc: 'Multi-step planning and codebase-wide edits with surgical precision. This site is one of its builds.',
          link: '/en/agentic/claude-code/'
        },
        {
          title: 'Hermes Agent',
          desc: 'My own infrastructure — it routes models and automations so every agent gets the right brain at the right time.',
          link: '/en/agentic/hermes/'
        }
      ]
    },
    appendix: {
      cat: 'Skills · The Toolbox',
      title: 'Deep in the core,<br><span class="highlight">wide at the edges.</span>',
      sub: 'Twelve pages of honest, production-tested skills — from SQL to SCADA.',
      cards: [
        {
          title: 'Languages',
          desc: 'Python, JS/TS, Go, PHP, C#, SQL — whatever the job demands.',
          link: '/en/skills/languages/'
        },
        {
          title: 'Web Frontend',
          desc: 'React, Vue, Next.js — fast, accessible interfaces.',
          link: '/en/skills/web/'
        },
        {
          title: 'Backend & APIs',
          desc: 'FastAPI, Gin, Laravel, .NET — services built to stay up.',
          link: '/en/skills/backend/'
        },
        {
          title: 'Networking',
          desc: 'TCP/IP, VLESS, proxies, tunnels and edge routing.',
          link: '/en/skills/networking/'
        },
        {
          title: 'Security',
          desc: 'Pentesting, static analysis, hardening agent-written code.',
          link: '/en/skills/security/'
        },
        {
          title: 'AI & LLM Infra',
          desc: 'API bridges, model routing, agent runtimes, self-hosting.',
          link: '/en/skills/ai-llm/'
        },
        {
          title: 'DevOps & Deploy',
          desc: 'HF Spaces, Railway, Render, Fly, Koyeb, Cloudflare Workers.',
          link: '/en/skills/devops/'
        },
        {
          title: 'Industrial PLC',
          desc: 'Ladder logic, structured text, HMI and SCADA thinking.',
          link: '/en/skills/plc/'
        },
        {
          title: 'Databases',
          desc: 'PostgreSQL, MySQL, MongoDB, Redis — modeled and tuned.',
          link: '/en/skills/databases/'
        },
        {
          title: 'Git & Workflow',
          desc: 'Branching, review discipline and CI habits that scale.',
          link: '/en/skills/git/'
        },
        {
          title: 'Terminal & Linux',
          desc: 'WSL2, shell scripting and the Unix toolbox.',
          link: '/en/skills/terminal/'
        },
        {
          title: 'Architecture',
          desc: 'From single file to distributed — designing for change.',
          link: '/en/skills/architecture/'
        }
      ]
    },
    footer: {
      title: 'Your idea,<br>live right now.',
      desc: 'From spark to production — why not start today.',
      btn: '>_ Hire Me'
    }
  },

  es: {
    nav: {
      title: 'Usf — Reza Bazdar',
      home: 'Inicio',
      stories: 'Historias',
      pm: 'Sobre mí',
      junior: 'Proyectos',
      senior: 'Codificación agéntica',
      appendix: 'Habilidades',
      start: 'Empezar'
    },
    stories: {
      cat: 'Historias de proyectos',
      title: 'Proyectos reales,<br><span class="highlight">construidos en público.</span>',
      sub: 'Cada tarjeta lleva a un repositorio que funciona — sin maquetas ni promesas vacías.',
      s1: {
        title: 'Un binario que responde cada pregunta de red',
        author: 'netpilot · Go'
      },
      s2: {
        title: 'Un router frente a todos los modelos de IA',
        author: 'omnirouter · Go'
      },
      s3: {
        title: 'Un panel VLESS que sobrevive a la censura real',
        author: 'Usf Panel · Python'
      },
      s4: {
        title: 'Este portafolio — cuatro idiomas, un solo VitePress',
        author: 'Usf · Vue'
      },
      authorPrefix: 'Construido con:',
      ui: {
        prevLabel: 'Historia anterior',
        nextLabel: 'Historia siguiente',
        selectLabel: 'Ver esta historia',
        imageAlt: 'Portada de la historia'
      }
    },
    stage1: {
      cat: 'Sobre mí · Quién soy',
      title: 'Creativo por instinto,<br><span class="highlight">ingeniero por disciplina.</span>',
      sub: 'Reza Bazdar — ingeniero de software full-stack de Irán que construye de punta a punta: web, apps, redes, automatización industrial e infraestructura de IA.',
      cards: [
        {
          title: 'Perfil y misión',
          desc: 'Un ingeniero versátil que escribe en el idioma que el trabajo exija — y entrega.',
          link: '/es/about/profile/'
        },
        {
          title: 'El método agéntico',
          desc: 'Cómo OpenCode, Codex, Claude Code y mi propio agente Hérmes llevan software a producción.',
          link: '/es/about/how-i-work/'
        },
        {
          title: 'Redes y libertad',
          desc: 'Proxies, túneles e infraestructura de borde para un internet abierto.',
          link: '/es/about/networking/'
        }
      ]
    },
    stage2: {
      cat: 'Proyectos · Trabajo seleccionado',
      title: 'Una sola persona,<br><span class="highlight">entregando como un equipo.</span>',
      sub: 'Puentes de API, routers de modelos, stacks de agentes y paneles proxy — cada repo funciona.',
      cards: [
        {
          title: 'NetPilot',
          headline: 'Un binario, todas las respuestas de red.',
          desc: 'Kit de herramientas de red en Go puro — escáner de puertos, TCP ping y comprobaciones HTTP en un solo binario estático.',
          link: '/es/projects/netpilot/'
        },
        {
          title: 'OmniRouter',
          headline: 'Todos los modelos, un solo endpoint.',
          desc: 'GLM, Qwen, DeepSeek y APIs propias tras un router compatible con OpenAI, con balanceo de carga y failover automáticos.',
          link: '/es/projects/omnirouter/'
        },
        {
          title: 'GLM Free API',
          headline: 'Un archivo, cero navegador.',
          desc: 'Una API completa compatible con OpenAI y Anthropic para GLM en un solo archivo Go — pool de cuentas, streaming y despliegue con un comando.',
          link: '/es/projects/glm-free-api/'
        },
        {
          title: 'GhostBrain',
          headline: 'Una cuenta gratis se convierte en API.',
          desc: 'Convierte una cuenta gratuita de Gemini en una API real compatible con OpenAI y Anthropic — sesiones seguras, pools y streaming SSE.',
          link: '/es/projects/ghost-brain/'
        },
        {
          title: 'Hermes Stack',
          headline: 'Un cerebro de IA autoalojado.',
          desc: 'Hermes Agent + 9Router + OmniRouter en un solo Hugging Face Space gratuito — listo en minutos y manejado desde una consola.',
          link: '/es/projects/hermes-stack/'
        },
        {
          title: 'Usf Panel',
          headline: 'Túneles que sobreviven a la realidad.',
          desc: 'Panel premium de túneles VLESS y suscripciones — multiusuario, sincronización Clash / v2ray / sing-box, despliegue con un comando.',
          link: '/es/projects/usf-panel/'
        }
      ],
      more: 'Leer las notas de construcción'
    },
    stage3: {
      cat: 'Codificación agéntica · Mi superpoder',
      title: 'No solo uso la IA.<br><span class="highlight">Dirijo equipos de agentes.</span>',
      sub: 'Mis herramientas diarias son OpenCode, Codex y Claude Code — orquestadas por mi propio stack Hérmes.',
      cards: [
        {
          title: 'OpenCode',
          desc: 'Mi agente de terminal favorito — programación en pareja agnóstica del modelo, enrutada por mi omnirouter.',
          link: '/es/agentic/opencode/'
        },
        {
          title: 'Codex',
          desc: 'Ejecución paralela en sandboxes — perfecto cuando un cambio se ramifica en muchos archivos.',
          link: '/es/agentic/codex/'
        },
        {
          title: 'Claude Code',
          desc: 'Planificación multipaso y ediciones en todo el código con precisión quirúrgica. Este sitio es una de sus obras.',
          link: '/es/agentic/claude-code/'
        },
        {
          title: 'Hermes Agent',
          desc: 'Mi propia infraestructura — enruta modelos y automatizaciones para que cada agente tenga el cerebro correcto.',
          link: '/es/agentic/hermes/'
        }
      ]
    },
    appendix: {
      cat: 'Habilidades · La caja de herramientas',
      title: 'Profundo en el núcleo,<br><span class="highlight">amplio en los bordes.</span>',
      sub: 'Doce páginas de habilidades honestas probadas en producción — de SQL a SCADA.',
      cards: [
        {
          title: 'Lenguajes',
          desc: 'Python, JS/TS, Go, PHP, C#, SQL — el que el trabajo pida.',
          link: '/es/skills/languages/'
        },
        {
          title: 'Frontend web',
          desc: 'React, Vue, Next.js — interfaces rápidas y accesibles.',
          link: '/es/skills/web/'
        },
        {
          title: 'Backend y APIs',
          desc: 'FastAPI, Gin, Laravel, .NET — servicios confiables.',
          link: '/es/skills/backend/'
        },
        {
          title: 'Redes',
          desc: 'TCP/IP, VLESS, proxies, túneles y enrutamiento de borde.',
          link: '/es/skills/networking/'
        },
        {
          title: 'Seguridad',
          desc: 'Pentesting, análisis estático y endurecimiento de código.',
          link: '/es/skills/security/'
        },
        {
          title: 'Infra IA y LLM',
          desc: 'Puentes de API, routers de modelos, runtimes de agentes, autoalojamiento.',
          link: '/es/skills/ai-llm/'
        },
        {
          title: 'DevOps y despliegue',
          desc: 'HF Spaces, Railway, Render, Fly, Koyeb, Cloudflare Workers.',
          link: '/es/skills/devops/'
        },
        {
          title: 'PLC industrial',
          desc: 'Ladder, texto estructurado, lógica HMI y SCADA.',
          link: '/es/skills/plc/'
        },
        {
          title: 'Bases de datos',
          desc: 'PostgreSQL, MySQL, MongoDB, Redis — modeladas y afinadas.',
          link: '/es/skills/databases/'
        },
        {
          title: 'Git y flujo de trabajo',
          desc: 'Ramas, disciplina de revisión y hábitos de CI que escalan.',
          link: '/es/skills/git/'
        },
        {
          title: 'Terminal y Linux',
          desc: 'WSL2, scripting de shell y la caja de herramientas Unix.',
          link: '/es/skills/terminal/'
        },
        {
          title: 'Arquitectura',
          desc: 'De un archivo a sistemas distribuidos — diseñar para el cambio.',
          link: '/es/skills/architecture/'
        }
      ]
    },
    footer: {
      title: 'Tu idea,<br>en línea ahora.',
      desc: 'De la chispa a producción — ¿por qué no empezar hoy?',
      btn: '>_ Contrátame'
    }
  }
}

synchronizeHomeTranslations(i18n)
