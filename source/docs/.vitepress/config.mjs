import { defineConfig } from 'vitepress'
import markdownItKatex from 'markdown-it-katex'
import { createSeo } from './seo.mjs'
import { createBuildHooks } from './build-hooks.mjs'
import { buildSidebar, navFor, docFooterFor, notFoundFor } from './sidebars/index.mjs'

// GitHub Pages deployment under /Usf/
const base = process.env.BASE || '/Usf/'
const siteUrl = process.env.SITE_URL || 'https://godde3s.github.io/Usf'

const localeMap = {
  en: {
    ogLocale: 'en_US',
    twitterSite: '@Godde3s',
    lang: 'en-US',
    hreflang: 'en'
  },
  es: {
    ogLocale: 'es_ES',
    twitterSite: '@Godde3s',
    lang: 'es-ES',
    hreflang: 'es'
  }
}

const supportedLocaleDirs = Object.keys(localeMap)

const { getSeoHead, rewriteMissingLocaleMenuLinks } = createSeo({
  base,
  siteUrl,
  localeMap,
  supportedLocaleDirs
})

const commonThemeConfig = {
  logo: '/assets/usf-logo-hd.svg',
  siteTitle: false,
  search: false,
  outline: {
    level: [1, 6]
  },
  footer: {
    copyright:
      '© 2026 Reza Bazdar (Godde3s) — designed and built with VitePress, agentic coding and a lot of coffee.'
  }
}

const buildHooks = createBuildHooks({
  base,
  siteUrl,
  supportedLocaleDirs,
  activeSupportedBuildLocales: supportedLocaleDirs,
  rewriteMissingLocaleMenuLinks
})

const siteTitles = {
  en: 'Usf — Reza Bazdar',
  es: 'Usf — Reza Bazdar'
}

const siteDescriptions = {
  en: 'Reza Bazdar (Godde3s) — creative full-stack software engineer. Projects, agentic coding with OpenCode, Codex, Claude Code and Hermes, networking, skills.',
  es: 'Reza Bazdar (Godde3s) — ingeniero de software full-stack creativo. Proyectos, codificación agéntica con OpenCode, Codex, Claude Code y Hermes, redes y habilidades.'
}

const localeMeta = {
  en: { label: 'English', dir: 'ltr' },
  es: { label: 'Español', dir: 'ltr' }
}

const locales = {}

for (const loc of supportedLocaleDirs) {
  locales[loc] = {
    label: localeMeta[loc].label,
    lang: localeMap[loc].lang,
    link: `/${loc}/`,
    title: siteTitles[loc],
    description: siteDescriptions[loc],
    head: getSeoHead(loc, siteTitles[loc], siteDescriptions[loc]),
    themeConfig: {
      ...commonThemeConfig,
      notFound: notFoundFor(loc),
      outline: {
        level: [1, 6],
        label: {
          en: 'On this page',
          es: 'En esta página'
        }[loc]
      },
      docFooter: docFooterFor(loc),
      nav: navFor(loc),
      sidebar: buildSidebar(loc)
    }
  }
}

export default defineConfig({
  srcExclude: ['plans/**'],
  markdown: {
    config: (md) => {
      md.use(markdownItKatex)
    }
  },
  base,
  ignoreDeadLinks: true,
  vite: {
    server: {
      watch: {
        ignored: ['**/docs/.vitepress/dist/**']
      }
    },
    build: {
      chunkSizeWarningLimit: 2000
    }
  },
  sitemap: {
    hostname: siteUrl
  },
  ...buildHooks,
  locales: {
    root: {
      label: '',
      lang: 'en-US',
      link: '/en/',
      themeConfig: {
        ...commonThemeConfig,
        notFound: notFoundFor('en')
      }
    },
    ...locales
  }
})
