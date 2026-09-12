import stage2NetpilotCover from '../../assets/home/cards/stage2-1-netpilot.webp'
import stage2OmnirouterCover from '../../assets/home/cards/stage2-2-omnirouter.webp'
import stage2GlmFreeApiCover from '../../assets/home/cards/stage2-3-glmfreeapi.webp'
import stage2GhostBrainCover from '../../assets/home/cards/stage2-4-ghostbrain.webp'
import stage2HermesStackCover from '../../assets/home/cards/stage2-5-hermesstack.webp'
import stage2UsfPanelCover from '../../assets/home/cards/stage2-6-usfpanel.webp'
import cardGoftego from '../../assets/home/cards/card-goftego.svg'
import cardVeilchat from '../../assets/home/cards/card-veilchat.svg'
import cardBaleforge from '../../assets/home/cards/card-baleforge.svg'
import cardSnaplink from '../../assets/home/cards/card-snaplink.svg'
import cardHabitgrid from '../../assets/home/cards/card-habitgrid.svg'
import cardBalePhp from '../../assets/home/cards/card-bale-php.svg'
import cardModbuslite from '../../assets/home/cards/card-modbuslite.svg'
import cardDeepseek from '../../assets/home/cards/card-deepseek.svg'
import cardQwen from '../../assets/home/cards/card-qwen.svg'
import cardGemini from '../../assets/home/cards/card-gemini.svg'
import cardFaGuides from '../../assets/home/cards/card-fa-guides.svg'
import cardHardwarept from '../../assets/home/cards/card-hardwarept.svg'
import stage3OpencodeCover from '../../assets/home/cards/stage3-1-opencode.webp'
import stage3CodexCover from '../../assets/home/cards/stage3-2-codex.webp'
import stage3ClaudeCodeCover from '../../assets/home/cards/stage3-3-claudecode.webp'
import stage3HermesCover from '../../assets/home/cards/stage3-4-hermes.webp'

export const locales = [
  { code: 'en', text: 'English' },
  { code: 'es', text: 'Español' }
]

export const stage1Cards = [
  {
    title: 'Profile',
    desc: 'Who is Usf — the engineer behind the commits.',
    sub: 'Start here',
    color: 'linear-gradient(135deg, #FF9A9E 0%, #FECFEF 99%, #FECFEF 100%)',
    icon: 'target',
    link: '/en/about/profile/'
  },
  {
    title: 'How I Work',
    desc: 'An agentic-first workflow: brief, generate, review, ship.',
    sub: 'Core method',
    color: 'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)',
    icon: 'zap',
    link: '/en/about/how-i-work/'
  },
  {
    title: 'Networks & Infrastructure',
    desc: 'Proxies, tunnels, edge deployments and the open web.',
    sub: 'Specialty',
    color: 'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)',
    icon: 'globe',
    link: '/en/about/networking/'
  }
]

export const stage2Cards = [
  // flagship trio — the first three cards someone sees must show peak skill
  {
    imageColor: '#4facfe',
    image: cardGoftego,
    imageAlt: 'Self-hosted chat platform concept illustration',
    link: '/en/projects/goftego/'
  },
  {
    imageColor: '#667eea',
    image: cardVeilchat,
    imageAlt: 'P2P encrypted messenger concept illustration',
    link: '/en/projects/veilchat/'
  },
  {
    imageColor: '#f5576c',
    image: cardBaleforge,
    imageAlt: 'Bale bot framework concept illustration',
    link: '/en/projects/baleforge/'
  },
  {
    imageColor: '#30cfd0',
    image: cardSnaplink,
    imageAlt: 'URL shortener analytics concept illustration',
    link: '/en/projects/snaplink/'
  },
  {
    imageColor: '#a8edea',
    image: cardHabitgrid,
    imageAlt: 'Expo habit tracker concept illustration',
    link: '/en/projects/habitgrid/'
  },
  {
    imageColor: '#fcb69f',
    image: cardBalePhp,
    imageAlt: 'PHP SDK concept illustration',
    link: '/en/projects/bale-php/'
  },
  {
    imageColor: '#c3cfe2',
    image: cardModbuslite,
    imageAlt: 'Modbus TCP client concept illustration',
    link: '/en/projects/modbuslite/'
  },
  {
    imageColor: '#E0C3FC',
    image: cardDeepseek,
    imageAlt: 'DeepSeek account pool bridge concept illustration',
    link: '/en/projects/deepseek-free-api/'
  },
  {
    imageColor: '#96E6A1',
    image: cardQwen,
    imageAlt: 'Qwen API bridge concept illustration',
    link: '/en/projects/qwen-free-api/'
  },
  {
    imageColor: '#fbc2eb',
    image: cardGemini,
    imageAlt: 'Gemini guest bridge concept illustration',
    link: '/en/projects/gemini-free-api/'
  },
  {
    imageColor: '#2AF598',
    image: cardFaGuides,
    imageAlt: 'Persian guides concept illustration',
    link: '/en/projects/fa-guides/'
  },
  {
    imageColor: '#4b6cb7',
    image: cardHardwarept,
    imageAlt: 'Hardware toolkit concept illustration',
    link: '/en/projects/hardwarept/'
  },
  {
    imageColor: '#E0C3FC',
    image: stage2NetpilotCover,
    imageAlt: 'Network toolkit concept illustration',
    link: '/en/projects/netpilot/'
  },
  {
    imageColor: '#D8C4F8',
    image: stage2OmnirouterCover,
    imageAlt: 'Model router concept illustration',
    link: '/en/projects/omnirouter/'
  },
  {
    imageColor: '#C7DDFB',
    image: stage2GlmFreeApiCover,
    imageAlt: 'API bridge concept illustration',
    link: '/en/projects/glm-free-api/'
  },
  {
    imageColor: '#8EC5FC',
    image: stage2GhostBrainCover,
    imageAlt: 'Ghost hologram API concept illustration',
    link: '/en/projects/ghost-brain/'
  },
  {
    imageColor: '#96E6A1',
    image: stage2HermesStackCover,
    imageAlt: 'Agent cloud stack concept illustration',
    link: '/en/projects/hermes-stack/'
  },
  {
    imageColor: '#A7F3D0',
    image: stage2UsfPanelCover,
    imageAlt: 'Proxy panel concept illustration',
    link: '/en/projects/usf-panel/'
  }
]

export const stage3Cards = [
  {
    title: 'OpenCode',
    desc: 'Open-source terminal coding agent — fast, model-agnostic pair programming in any repo.',
    tag: 'Terminal',
    visualType: 'phone',
    image: stage3OpencodeCover,
    imageAlt: 'Terminal coding agent concept illustration',
    link: '/en/agentic/opencode/'
  },
  {
    title: 'Codex',
    desc: "OpenAI's agent for parallel task execution across many files in isolated sandboxes.",
    tag: 'Parallel',
    visualType: 'ai',
    image: stage3CodexCover,
    imageAlt: 'Parallel agent execution concept illustration',
    link: '/en/agentic/codex/'
  },
  {
    title: 'Claude Code',
    desc: "Anthropic's agentic CLI — plans like a senior engineer, executes like a team.",
    tag: 'Agentic',
    visualType: 'arch',
    image: stage3ClaudeCodeCover,
    imageAlt: 'Agent conductor concept illustration',
    link: '/en/agentic/claude-code/'
  },
  {
    title: 'Hermes Agent',
    desc: 'My own agent infrastructure — routing models and automations from a self-hosted brain.',
    tag: 'Mine',
    visualType: 'brand',
    image: stage3HermesCover,
    imageAlt: 'Messenger AI brain concept illustration',
    link: '/en/agentic/hermes/'
  }
]

export const appendixCards = [
  {
    title: 'Languages',
    desc: 'Python, JS/TS, Go, PHP, C#, SQL — any language the job needs.',
    tag: 'Core',
    link: '/en/skills/languages/'
  },
  {
    title: 'Web Frontend',
    desc: 'React, Vue, Next.js — interfaces that feel instant.',
    tag: 'Frontend',
    link: '/en/skills/web/'
  },
  {
    title: 'Backend & APIs',
    desc: 'FastAPI, Gin, Laravel, .NET — services built to stay up.',
    tag: 'Backend',
    link: '/en/skills/backend/'
  },
  {
    title: 'Networking',
    desc: 'TCP/IP, VLESS, proxies, tunnels and edge routing.',
    tag: 'Network',
    link: '/en/skills/networking/'
  },
  {
    title: 'Security',
    desc: 'Pentesting, static analysis, hardening agent-written code.',
    tag: 'Security',
    link: '/en/skills/security/'
  },
  {
    title: 'AI & LLM Infra',
    desc: 'API bridges, model routing, agent runtimes, self-hosting.',
    tag: 'AI',
    link: '/en/skills/ai-llm/'
  },
  {
    title: 'DevOps & Deploy',
    desc: 'HF Spaces, Railway, Render, Fly, Koyeb, Cloudflare Workers.',
    tag: 'DevOps',
    link: '/en/skills/devops/'
  },
  {
    title: 'Industrial PLC',
    desc: 'Ladder logic, structured text, HMI and SCADA thinking.',
    tag: 'Industrial',
    link: '/en/skills/plc/'
  },
  {
    title: 'Databases',
    desc: 'PostgreSQL, MySQL, MongoDB, Redis — modeled and tuned.',
    tag: 'Data',
    link: '/en/skills/databases/'
  },
  {
    title: 'Git & Workflow',
    desc: 'Branching, review discipline and CI habits that scale.',
    tag: 'General',
    link: '/en/skills/git/'
  },
  {
    title: 'Terminal & Linux',
    desc: 'WSL2, shell scripting and the Unix toolbox.',
    tag: 'General',
    link: '/en/skills/terminal/'
  },
  {
    title: 'Architecture',
    desc: 'From single file to distributed — designing for change.',
    tag: 'Design',
    link: '/en/skills/architecture/'
  }
]
