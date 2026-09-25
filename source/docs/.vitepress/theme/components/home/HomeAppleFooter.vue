<script setup>
import { computed, inject } from 'vue'
import { withBase } from 'vitepress'

const props = defineProps({
  isCjkLocale: Boolean
})

const t = inject('t')

const appleFooterInfo = computed(() => {
  const locale = t.value._locale || 'en'
  const content = {
    en: {
      notes: [
        '1. Every project linked here is a working public repository — no mockups, no vaporware.',
        '2. The site ships in English and Spanish; all projects are documented on GitHub.',
        '3. Built and deployed with agentic coding — OpenCode, Codex, Claude Code and Hermes.'
      ],
      breadcrumbPrefix: 'Usf',
      breadcrumbCurrent: 'Portfolio',
      columns: [
        {
          title: 'Explore',
          links: ['Profile & Mission', 'Projects', 'Agentic Coding', 'Core Skills', 'Project Stories']
        },
        {
          title: 'Flagship Builds',
          links: ['Goftego', 'VeilChat', 'BaleForge', 'Snaplink', 'HabitGrid']
        },
        {
          title: 'More Projects',
          links: ['BalePhp', 'ModbusLite', 'NetPilot', 'OmniRouter', 'TaskFlow API']
        },
        {
          title: 'Resources',
          links: ['GitHub Repository', 'License (MIT)', 'Releases', 'Sitemap']
        },
        {
          title: 'About',
          links: ['GitHub Profile', 'Report Issue', 'Contact']
        }
      ],
      more: 'Everything here is open source: visit',
      moreLink: 'GitHub Repository',
      moreTail: 'and read every line.',
      copyright: 'Copyright © 2026 Reza Bazdar (Godde3s). All rights reserved.',
      policies: ['Privacy Policy', 'Terms of Use', 'Sitemap']
    },
    es: {
      notes: [
        '1. Cada proyecto enlazado aquí es un repositorio público funcional — sin maquetas, sin vaporware.',
        '2. El sitio se publica en inglés y español; todos los proyectos están documentados en GitHub.',
        '3. Construido y desplegado con codificación agéntica — OpenCode, Codex, Claude Code y Hermes.'
      ],
      breadcrumbPrefix: 'Usf',
      breadcrumbCurrent: 'Portafolio',
      columns: [
        {
          title: 'Explorar',
          links: ['Perfil y misión', 'Proyectos', 'Codificación agéntica', 'Habilidades', 'Historias']
        },
        {
          title: 'Builds principales',
          links: ['Goftego', 'VeilChat', 'BaleForge', 'Snaplink', 'HabitGrid']
        },
        {
          title: 'Más proyectos',
          links: ['BalePhp', 'ModbusLite', 'NetPilot', 'OmniRouter', 'TaskFlow API']
        },
        {
          title: 'Recursos',
          links: ['GitHub Repository', 'Licencia (MIT)', 'Releases', 'Sitemap']
        },
        {
          title: 'Acerca de',
          links: ['GitHub Profile', 'Report Issue', 'Contact']
        }
      ],
      more: 'Todo aquí es código abierto: visita',
      moreLink: 'GitHub Repository',
      moreTail: 'y lee cada línea.',
      copyright: 'Copyright © 2026 Reza Bazdar (Godde3s). Todos los derechos reservados.',
      policies: ['Política de privacidad', 'Términos de uso', 'Sitemap']
    }
  }
  return content[locale] || content.en
})

const footerBtnLink = computed(() => {
  const locale = t.value._locale || 'en'
  return withBase(`/${locale}/projects/goftego/`)
})

const footerRepositoryLink = 'https://github.com/Godde3s/Usf'

const footerPolicyLinkMap = {
  '隐私政策': '#',
  '使用条款': '#',
  '网站地图': '/sitemap.xml',
  'Privacy Policy': '#',
  'Terms of Use': '#',
  'Sitemap': '/sitemap.xml',
  'Política de privacidad': '#',
  'Términos de uso': '#'
}

const footerColumnLinkMap = {
  'Profile & Mission': '/en/about/profile/',
  'Projects': '/en/projects/goftego/',
  'Agentic Coding': '/en/agentic/overview/',
  'Core Skills': '/en/skills/languages/',
  'Project Stories': '/en/vibe-stories/story-1/',
  'Perfil y misión': '/es/about/profile/',
  'Proyectos': '/es/projects/goftego/',
  'Codificación agéntica': '/es/agentic/overview/',
  'Habilidades': '/es/skills/languages/',
  'Historias': '/es/vibe-stories/story-1/',
  'Goftego': '/en/projects/goftego/',
  'VeilChat': '/en/projects/veilchat/',
  'BaleForge': '/en/projects/baleforge/',
  'Snaplink': '/en/projects/snaplink/',
  'HabitGrid': '/en/projects/habitgrid/',
  'BalePhp': '/en/projects/bale-php/',
  'ModbusLite': '/en/projects/modbuslite/',
  'NetPilot': '/en/projects/netpilot/',
  'OmniRouter': '/en/projects/omnirouter/',
  'TaskFlow API': '/en/projects/taskflow-api/',
  'Sitemap': '/sitemap.xml'
}

const footerExternalLinks = {
  'GitHub Repository': 'https://github.com/Godde3s/Usf',
  'GitHub Profile': 'https://github.com/Godde3s',
  'License (MIT)': 'https://github.com/Godde3s/Usf#license',
  'Licencia (MIT)': 'https://github.com/Godde3s/Usf#license',
  'Releases': 'https://github.com/Godde3s/Usf/releases',
  'Report Issue': 'https://github.com/Godde3s/Usf/issues',
  'Contact': 'https://github.com/Godde3s/Usf/issues'
}

const getFooterLink = (label) => {
  const external = footerExternalLinks[label]
  if (external) return external
  const basePath = footerColumnLinkMap[label]
  if (!basePath) return '#'
  return withBase(basePath)
}

const getPolicyLink = (label) => {
  return footerPolicyLinkMap[label] || '#'
}

const resolveFooterHref = (link) => {
  if (link.startsWith('http://') || link.startsWith('https://')) {
    return link
  }
  return withBase(link)
}
</script>

<template>
  <div class="footer-callout">
    <h2 v-html="t.footer.title" />
    <p>{{ t.footer.desc }}</p>
    <a
      class="buy-btn large"
      :href="footerBtnLink"
    >{{ t.footer.btn }}</a>
  </div>

  <div
    class="apple-site-footer"
    :class="{ 'is-cjk-locale': isCjkLocale }"
  >
    <div class="apple-site-footer-inner">
      <div class="apple-footer-breadcrumb">
        <span>⌘</span>
        <span>›</span>
        <span>{{ appleFooterInfo.breadcrumbPrefix }}</span>
        <span>›</span>
        <span>{{ appleFooterInfo.breadcrumbCurrent }}</span>
      </div>

      <div class="apple-footer-notes">
        <p
          v-for="(item, idx) in appleFooterInfo.notes"
          :key="idx"
        >
          {{ item }}
        </p>
      </div>

      <div class="apple-footer-grid">
        <div
          v-for="(column, index) in appleFooterInfo.columns"
          :key="index"
          class="apple-footer-column"
        >
          <h4>{{ column.title }}</h4>
          <a
            v-for="(link, linkIndex) in column.links"
            :key="linkIndex"
            :href="resolveFooterHref(getFooterLink(link))"
          >
            {{ link }}
          </a>
        </div>
      </div>

      <div class="apple-footer-more">
        {{ appleFooterInfo.more }}
        <a :href="footerRepositoryLink">{{ appleFooterInfo.moreLink }}</a>
        {{ appleFooterInfo.moreTail }}
      </div>

      <div class="apple-footer-bottom">
        <p>{{ appleFooterInfo.copyright }}</p>
        <div class="apple-footer-policy">
          <a
            v-for="(policy, policyIndex) in appleFooterInfo.policies"
            :key="policyIndex"
            :href="resolveFooterHref(getPolicyLink(policy))"
          >
            {{ policy }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer-callout {
  text-align: center;
  padding: 92px 20px;
  background: #fff;
  margin: 0 40px 64px;
  border-radius: 40px;
}

.dark .footer-callout {
  background: var(--vp-c-bg-soft);
}

.footer-callout h2 {
  font-size: 62px;
  font-weight: 700;
  margin-bottom: 20px;
  line-height: 1.08;
  letter-spacing: -0.03em;
  color: #1d1d1f;
  font-family:
    -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'PingFang SC',
    sans-serif;
}

.footer-callout p {
  color: #6e6e73;
  font-size: 20px;
  margin-bottom: 18px;
}

.dark .footer-callout h2 {
  color: var(--vp-c-text-1);
}

.dark .footer-callout p {
  color: var(--vp-c-text-2);
}

.apple-site-footer {
  max-width: 1060px;
  margin: 0 auto 56px;
  padding: 0 40px;
}

.apple-site-footer-inner {
  border-top: 1px solid #d2d2d7;
  color: #6e6e73;
  font-size: 12px;
}

.apple-footer-breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #6e6e73;
  font-size: 12px;
  padding-top: 12px;
}

.apple-site-footer.is-cjk-locale .apple-footer-breadcrumb {
  font-family:
    'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Noto Sans CJK SC',
    sans-serif;
  font-size: 13px;
  letter-spacing: 0.02em;
}

.apple-footer-notes {
  padding-top: 18px;
}

.apple-footer-notes p {
  margin: 0 0 8px;
  line-height: 1.45;
  color: #86868b;
}

.apple-site-footer.is-cjk-locale .apple-footer-notes p {
  font-family:
    'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Noto Sans CJK SC',
    sans-serif;
  font-size: 13px;
  line-height: 1.88;
  letter-spacing: 0.03em;
  font-weight: 400;
  color: #7d7d83;
}

.apple-footer-grid {
  margin-top: 18px;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 22px;
}

.apple-footer-column h4 {
  margin: 0 0 10px;
  color: #1d1d1f;
  font-size: 12px;
  font-weight: 600;
}

.apple-site-footer.is-cjk-locale .apple-footer-column h4 {
  font-family:
    'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Noto Sans CJK SC',
    sans-serif;
  font-size: 13px;
  line-height: 1.45;
  letter-spacing: 0.025em;
}

.apple-footer-column a {
  display: block;
  color: #424245;
  margin-bottom: 8px;
  font-size: 12px;
  line-height: 1.25;
}

.apple-site-footer.is-cjk-locale .apple-footer-column a {
  font-family:
    'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Noto Sans CJK SC',
    sans-serif;
  font-size: 13px;
  line-height: 1.72;
  letter-spacing: 0.02em;
  margin-bottom: 9px;
}

.apple-footer-column a:hover {
  color: #0066cc;
}

.apple-footer-more {
  margin-top: 18px;
  border-top: 1px solid #d2d2d7;
  padding-top: 14px;
  color: #6e6e73;
}

.apple-site-footer.is-cjk-locale .apple-footer-more {
  font-family:
    'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Noto Sans CJK SC',
    sans-serif;
  font-size: 13px;
  line-height: 1.72;
  letter-spacing: 0.02em;
}

.apple-footer-more a {
  color: #0066cc;
}

.apple-footer-bottom {
  margin-top: 14px;
  padding-top: 14px;
  border-top: 1px solid #d2d2d7;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.apple-footer-bottom p {
  margin: 0;
  color: #86868b;
}

.apple-site-footer.is-cjk-locale .apple-footer-bottom p {
  font-family:
    'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Noto Sans CJK SC',
    sans-serif;
  font-size: 13px;
  line-height: 1.55;
  letter-spacing: 0.02em;
}

.apple-footer-policy {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.apple-footer-policy a {
  color: #424245;
}

.apple-footer-policy a:hover {
  color: #0066cc;
}

.apple-site-footer.is-cjk-locale .apple-footer-policy a {
  font-family:
    'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Noto Sans CJK SC',
    sans-serif;
  font-size: 13px;
  line-height: 1.55;
  letter-spacing: 0.02em;
}

@media (min-width: 1024px) {
  .apple-site-footer {
    max-width: 996px;
    padding: 0 24px;
  }

  .apple-site-footer-inner {
    font-size: 11px;
  }

  .apple-footer-notes p {
    font-size: 11px;
    line-height: 1.38;
    margin-bottom: 6px;
  }

  .apple-footer-grid {
    grid-template-columns: 1.2fr repeat(4, minmax(0, 1fr));
    gap: 24px;
  }

  .apple-footer-column h4 {
    font-size: 11px;
    margin-bottom: 8px;
  }

  .apple-footer-column a {
    font-size: 11px;
    margin-bottom: 7px;
  }

  .apple-site-footer.is-cjk-locale .site-footer-inner {
    font-size: 13px;
  }

  .apple-site-footer.is-cjk-locale .apple-footer-notes p {
    font-size: 13px;
    margin-bottom: 7px;
  }

  .apple-site-footer.is-cjk-locale .apple-footer-column h4 {
    font-size: 13px;
  }

  .apple-site-footer.is-cjk-locale .apple-footer-column a {
    font-size: 13px;
    margin-bottom: 8px;
  }
}

@media (max-width: 768px) {
  .footer-callout {
    margin: 0 16px 40px;
    border-radius: 28px;
  }

  .footer-callout h2 {
    font-size: 38px;
  }

  .footer-callout p {
    font-size: 17px;
  }

  .apple-site-footer {
    padding: 0 16px;
  }

  .apple-footer-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px 14px;
  }

  .apple-footer-bottom {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
