// Sidebar / nav builders for the Usf portfolio (en + es).
// Grouped navigation: named groups with items.

const SECTIONS = {
  about: { en: 'About Me', es: 'Sobre mí' },
  projects: { en: 'Selected Projects', es: 'Proyectos seleccionados' },
  agentic: { en: 'Agentic Coding', es: 'Codificación agéntica' },
  skillsCore: { en: 'Core Skills', es: 'Habilidades principales' },
  skillsMore: { en: 'Platform & Practice', es: 'Plataforma y práctica' },
  stories: { en: 'Project Stories', es: 'Historias de proyectos' }
}

const PAGES = {
  about: [
    ['profile', { en: 'Profile & Mission', es: 'Perfil y misión' }],
    ['how-i-work', { en: 'The Agentic Method', es: 'El método agéntico' }],
    ['networking', { en: 'Networks & Freedom', es: 'Redes y libertad' }],
    ['principles', { en: 'Engineering Principles', es: 'Principios de ingeniería' }]
  ],
  projects: [
    ['taskflow-api', { en: 'TaskFlow API — FastAPI Backend', es: 'TaskFlow API — backend FastAPI' }],
    ['postman-api-testing-toolkit', { en: 'Postman Toolkit — API Testing', es: 'Postman Toolkit — testing de APIs' }],
    ['textsense', { en: 'TextSense — NLP Microservice', es: 'TextSense — microservicio NLP' }],
    ['goftego', { en: 'Goftego — Self-hosted Chat', es: 'Goftego — chat autoalojado' }],
    ['veilchat', { en: 'VeilChat — P2P E2E Messenger', es: 'VeilChat — mensajería P2P E2E' }],
    ['baleforge', { en: 'BaleForge — Bale Bot Framework', es: 'BaleForge — framework para bots' }],
    ['snaplink', { en: 'Snaplink — URL Shortener + Analytics', es: 'Snaplink — acortador + analítica' }],
    ['habitgrid', { en: 'HabitGrid — Expo Habit Tracker', es: 'HabitGrid — hábitos con Expo' }],
    ['bale-php', { en: 'BalePhp — PHP 8.2 SDK', es: 'BalePhp — SDK de PHP 8.2' }],
    ['modbuslite', { en: 'ModbusLite — Modbus TCP for .NET', es: 'ModbusLite — Modbus TCP para .NET' }],
    ['deepseek-free-api', { en: 'DeepSeek Free API — Account Pool', es: 'DeepSeek Free API — pool de cuentas' }],
    ['qwen-free-api', { en: 'Qwen Free API — Go Bridge', es: 'Qwen Free API — puente Go' }],
    ['gemini-free-api', { en: 'Gemini Free API — Guest Bridge', es: 'Gemini Free API — puente invitado' }],
    ['fa-guides', { en: 'Fa Guides — Persian Guides', es: 'Fa Guides — guías en persa' }],
    ['hardwarept', { en: 'HardwarePT — C Hardware Toolkit', es: 'HardwarePT — toolkit en C' }],
    ['netpilot', { en: 'NetPilot — Go Network Toolkit', es: 'NetPilot — Kit de red en Go' }],
    ['omnirouter', { en: 'OmniRouter — One Model Endpoint', es: 'OmniRouter — Un endpoint' }],
    ['glm-free-api', { en: 'GLM Free API — Single File Bridge', es: 'GLM Free API — Puente de un archivo' }],
    ['ghost-brain', { en: 'GhostBrain — Gemini to API', es: 'GhostBrain — de Gemini a API' }],
    ['hermes-stack', { en: 'Hermes Stack — Self-hosted Brain', es: 'Hermes Stack — cerebro autoalojado' }]
  ],
  agentic: [
    ['overview', { en: 'Overview — Directing Agent Teams', es: 'Visión general — Dirigiendo equipos' }],
    ['opencode', { en: 'OpenCode', es: 'OpenCode' }],
    ['codex', { en: 'Codex', es: 'Codex' }],
    ['claude-code', { en: 'Claude Code', es: 'Claude Code' }],
    ['hermes', { en: 'Hermes Agent', es: 'Hermes Agent' }]
  ],
  skills: [
    ['languages', { en: 'Languages', es: 'Lenguajes' }],
    ['web', { en: 'Web Frontend', es: 'Frontend web' }],
    ['backend', { en: 'Backend & APIs', es: 'Backend y APIs' }],
    ['networking', { en: 'Networking', es: 'Redes' }]
  ],
  skillsMore: [
    ['security', { en: 'Security', es: 'Seguridad' }],
    ['ai-llm', { en: 'AI & LLM Infra', es: 'Infra IA y LLM' }],
    ['devops', { en: 'DevOps & Deploy', es: 'DevOps y despliegue' }],
    ['plc', { en: 'Industrial PLC', es: 'PLC industrial' }],
    ['databases', { en: 'Databases', es: 'Bases de datos' }],
    ['git', { en: 'Git & Workflow', es: 'Git y flujo' }],
    ['terminal', { en: 'Terminal & Linux', es: 'Terminal y Linux' }],
    ['architecture', { en: 'Architecture', es: 'Arquitectura' }]
  ],
  stories: [
    ['story-1', { en: 'NetPilot: One Binary, Every Answer', es: 'NetPilot: un binario, todas las respuestas' }],
    ['story-2', { en: 'OmniRouter: Taming Model Chaos', es: 'OmniRouter: domando el caos de modelos' }],
    ['story-3', { en: 'TaskFlow API: Security You Can Test', es: 'TaskFlow API: seguridad comprobable' }],
    ['story-4', { en: 'This Portfolio: One Design, Two Languages', es: 'Este portafolio: un diseño, dos idiomas' }]
  ]
}

const t = (loc, key) => PAGES[key] ? PAGES[key].map(([slug, labels]) => ({
  text: labels[loc] || labels.en,
  link: `/${loc}/${key}/${slug}/`
})) : []

export const buildSidebar = (loc) => ({
  [`/${loc}/about/`]: [
    { text: SECTIONS.about[loc], items: t(loc, 'about') },
    { text: SECTIONS.agentic[loc], items: [{ text: PAGES.agentic[0][1][loc], link: `/${loc}/agentic/overview/` }] }
  ],
  [`/${loc}/projects/`]: [
    { text: SECTIONS.projects[loc], items: t(loc, 'projects') }
  ],
  [`/${loc}/agentic/`]: [
    { text: SECTIONS.agentic[loc], items: t(loc, 'agentic') }
  ],
  [`/${loc}/skills/`]: [
    { text: SECTIONS.skillsCore[loc], items: t(loc, 'skills') },
    { text: SECTIONS.skillsMore[loc], items: t(loc, 'skillsMore') }
  ],
  [`/${loc}/vibe-stories/`]: [
    { text: SECTIONS.stories[loc], items: t(loc, 'stories') }
  ]
})

export const navFor = (loc) => {
  const labels = {
    en: { home: 'Home', about: 'About', projects: 'Projects', agentic: 'Agentic Coding', skills: 'Skills', stories: 'Stories' },
    es: { home: 'Inicio', about: 'Sobre mí', projects: 'Proyectos', agentic: 'Codificación agéntica', skills: 'Habilidades', stories: 'Historias' }
  }[loc]

  return [
    { text: labels.home, link: `/${loc}/` },
    { text: labels.about, link: `/${loc}/about/profile/`, activeMatch: `/${loc}/about/` },
    { text: labels.projects, link: `/${loc}/projects/netpilot/`, activeMatch: `/${loc}/projects/` },
    { text: labels.agentic, link: `/${loc}/agentic/overview/`, activeMatch: `/${loc}/agentic/` },
    { text: labels.skills, link: `/${loc}/skills/languages/`, activeMatch: `/${loc}/skills/` },
    { text: labels.stories, link: `/${loc}/vibe-stories/story-1`, activeMatch: `/${loc}/vibe-stories/` }
  ]
}

export const docFooterFor = (loc) => ({
  en: { prev: 'Previous page', next: 'Next page' },
  es: { prev: 'Página anterior', next: 'Página siguiente' }
})[loc]

export const notFoundFor = (loc) => {
  const copy = {
    en: { title: 'Page Not Found', quote: 'The page you are looking for does not exist or has been moved.', linkText: 'Take me home' },
    es: { title: 'Página no encontrada', quote: 'La página que buscas no existe o ha sido movida.', linkText: 'Llévame al inicio' }
  }[loc]
  return {
    title: copy.title,
    quote: copy.quote,
    linkText: copy.linkText,
    linkUrl: `/${loc}/`
  }
}

// Legacy exports kept for compatibility
export const getVibeStoriesSidebar = buildSidebar
export const getVibeStoriesNavText = () => 'Stories'
