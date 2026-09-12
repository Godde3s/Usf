// SEO head generation & locale-aware link utilities.
// Extracted from docs/.vitepress/config.mjs to keep the main config lean.
import fs from 'node:fs'

/**
 * Build the SEO/locale helpers bound to the site-level configuration.
 *
 * @param {object} config
 * @param {string} config.base - VitePress base path ('/' or '/Usf/').
 * @param {string} config.siteUrl - Canonical site URL.
 * @param {object} config.localeMap - Locale metadata (ogLocale, twitterSite, ...).
 * @param {string[]} config.supportedLocaleDirs - Locale directory names.
 */
export const createSeo = ({
  base,
  siteUrl,
  localeMap,
  supportedLocaleDirs
}) => {
  const getMarkdownFileUrl = (locale, relativePath) => {
    if (!relativePath) {
      return new URL(`../${locale}/index.md`, import.meta.url)
    }
    const cleanPath = relativePath.replace(/\/$/, '')
    return new URL(`../${locale}/${cleanPath}.md`, import.meta.url)
  }

  const hasLocalizedPage = (locale, relativePath) => {
    if (!relativePath) return true
    const cleanPath = relativePath.replace(/\/$/, '')
    const candidates = [
      getMarkdownFileUrl(locale, cleanPath),
      new URL(`../${locale}/${cleanPath}/index.md`, import.meta.url)
    ]
    return candidates.some((fileUrl) => fs.existsSync(fileUrl))
  }

  const getLocalizedFallbackPath = (locale, requestedPath = '') => {
    const cleanPath = requestedPath
      .replace(/^\//, '')
      .replace(/\.html$/, '')
      .replace(/\/index$/, '')
      .replace(/\/$/, '')

    if (!cleanPath || hasLocalizedPage(locale, cleanPath)) {
      return cleanPath
    }

    return ''
  }

  const parseLocaleHref = (href) => {
    if (!href) return null
    const decodedHref = href.replace(/&amp;/g, '&')
    let pathname

    if (decodedHref.startsWith(siteUrl)) {
      pathname = decodedHref.slice(siteUrl.length)
    } else if (decodedHref.startsWith(base)) {
      pathname = decodedHref.slice(base.length - 1)
    } else if (decodedHref.startsWith('/')) {
      pathname = decodedHref
    } else {
      return null
    }

    const [pathWithoutQuery] = pathname.split(/[?#]/)
    const locale = supportedLocaleDirs.find(
      (item) =>
        pathWithoutQuery === `/${item}/` ||
        pathWithoutQuery.startsWith(`/${item}/`)
    )

    if (!locale) return null

    return {
      locale,
      relativePath: pathWithoutQuery
        .slice(locale.length + 2)
        .replace(/\.html$/, '')
        .replace(/\/index$/, '')
        .replace(/\/$/, '')
    }
  }

  const toLocaleHtmlHref = (locale, relativePath) => {
    const cleanPath = relativePath.replace(/\/$/, '')
    if (!cleanPath) return `${base}${locale}/`.replace(/\/{2,}/g, '/')
    const suffix = cleanPath.endsWith('.html') ? cleanPath : `${cleanPath}.html`
    return `${base}${locale}/${suffix}`.replace(/\/{2,}/g, '/')
  }

  const rewriteMissingLocaleMenuLinks = (html) =>
    html.replace(
      /(<a\b(?=[^>]*\bclass="[^"]*\bVPLink\b[^"]*\blink\b[^"]*")[^>]*\bhref=")([^"]+)("[^>]*>)/g,
      (match, before, href, after) => {
        const parsed = parseLocaleHref(href)
        if (!parsed) return match

        const fallbackPath = getLocalizedFallbackPath(
          parsed.locale,
          parsed.relativePath
        )
        if (fallbackPath === parsed.relativePath) return match

        return `${before}${toLocaleHtmlHref(parsed.locale, fallbackPath)}${after}`
      }
    )

  // SEO 相关配置
  const getSeoHead = (locale, title, description, path = '') => {
    const seoConfig = localeMap[locale] || localeMap['zh-cn']
    const canonicalUrl = path ? `${siteUrl}${path}` : `${siteUrl}/${locale}/`
    const ogImageUrl = `${siteUrl}${base}logo.png`

    // 从路径中提取页面相对路径（去掉语言前缀）
    const getRelativePath = (fullPath, currentLocale) => {
      if (!fullPath) return ''
      const prefix = `/${currentLocale}/`
      if (fullPath.startsWith(prefix)) {
        return fullPath.slice(prefix.length)
      }
      return fullPath.replace(/^\//, '')
    }

    const relativePath = getRelativePath(path, locale)

    const head = [
      ['link', { rel: 'icon', href: `${base}favicon.png`.replace('//', '/') }],
      ['link', { rel: 'apple-touch-icon', href: `${base}favicon.png`.replace('//', '/') }],
      ['meta', { name: 'theme-color', content: '#0071e3' }],
      [
        'meta',
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
      ],
      ['meta', { name: 'format-detection', content: 'telephone=no' }],
      ['link', { rel: 'canonical', href: canonicalUrl }],
      // Open Graph / Facebook
      ['meta', { property: 'og:type', content: 'website' }],
      ['meta', { property: 'og:locale', content: seoConfig.ogLocale }],
      ['meta', { property: 'og:site_name', content: title }],
      ['meta', { property: 'og:title', content: title }],
      ['meta', { property: 'og:description', content: description }],
      ['meta', { property: 'og:image', content: ogImageUrl }],
      ['meta', { property: 'og:image:alt', content: title }],
      ['meta', { property: 'og:image:width', content: '1200' }],
      ['meta', { property: 'og:image:height', content: '630' }],
      ['meta', { property: 'og:url', content: canonicalUrl }],
      // Twitter Card
      ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
      ['meta', { name: 'twitter:site', content: seoConfig.twitterSite }],
      ['meta', { name: 'twitter:creator', content: seoConfig.twitterSite }],
      ['meta', { name: 'twitter:title', content: title }],
      ['meta', { name: 'twitter:description', content: description }],
      ['meta', { name: 'twitter:image', content: ogImageUrl }],
      ['meta', { name: 'twitter:image:alt', content: title }],
      // Additional SEO
      [
        'meta',
        {
          name: 'keywords',
          content:
            'Reza Bazdar,Godde3s,Usf,full-stack engineer,Iran,agentic coding,OpenCode,Codex,Claude Code,Hermes Agent,VitePress,Go,Python,TypeScript,PHP,C#,.NET,Expo,React Native,Next.js,Vue,Bale bot,VLESS,proxy panel,Modbus TCP,LLM API bridge'
        }
      ],
      ['meta', { name: 'author', content: 'Reza Bazdar (Godde3s)' }],
      ['meta', { name: 'robots', content: 'index,follow' }],
      ['meta', { name: 'googlebot', content: 'index,follow' }],
      ['meta', { name: 'baiduspider', content: 'index,follow' }],
      ['meta', { name: 'bingbot', content: 'index,follow' }],
      ['meta', { name: 'distribution', content: 'global' }],
      ['meta', { name: 'rating', content: 'general' }],
      ['meta', { name: 'revisit-after', content: '7 days' }]
    ]

    // 添加 hreflang 标签 - 指向相同页面的不同语言版本
    Object.keys(localeMap).forEach((lang) => {
      if (!hasLocalizedPage(lang, relativePath)) return
      let alternateUrl = `${siteUrl}/${lang}/`
      if (relativePath) {
        alternateUrl = `${siteUrl}/${lang}/${relativePath}`
      }
      head.push([
        'link',
        {
          rel: 'alternate',
          hreflang: localeMap[lang].hreflang,
          href: alternateUrl
        }
      ])
    })
    head.push([
      'link',
      { rel: 'alternate', hreflang: 'x-default', href: `${siteUrl}/zh-cn/` }
    ])

    // 添加 JSON-LD 结构化数据
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: title,
      description: description,
      url: siteUrl,
      inLanguage: seoConfig.ogLocale,
      potentialAction: {
        '@type': 'SearchAction',
        target: `${siteUrl}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string'
      },
      publisher: {
        '@type': 'Organization',
        name: 'Reza Bazdar (Godde3s)',
        url: 'https://github.com/Godde3s',
        logo: {
          '@type': 'ImageObject',
          url: ogImageUrl
        },
        sameAs: ['https://github.com/Godde3s/Usf']
      },
      mainEntity: {
        '@type': 'Course',
        name: title,
        description: description,
        provider: {
          '@type': 'Organization',
          name: 'Reza Bazdar (Godde3s)',
          sameAs: 'https://github.com/Godde3s/Usf'
        },
        educationalLevel: 'Beginner to Advanced',
        learningResourceType: 'Course'
      }
    }
    head.push([
      'script',
      { type: 'application/ld+json' },
      JSON.stringify(jsonLd)
    ])

    // 生成动态 BreadcrumbList 结构化数据
    const generateBreadcrumbList = () => {
      const items = [
        {
          '@type': 'ListItem',
          position: 1,
          name: locale === 'zh-cn' ? '首页' : 'Home',
          item: `${siteUrl}/${locale}/`
        }
      ]

      if (relativePath) {
        // 解析路径生成面包屑
        const pathParts = relativePath.split('/').filter(Boolean)
        let currentPath = ''

        // 路径分段名称映射
        const segmentNames = {
          'zh-cn': {
            'stage-1': 'AI产品经理',
            'stage-2': '初中级开发工程师',
            'stage-3': '高级开发工程师',
            appendix: '附录',
            guide: '指南',
            frontend: '前端',
            backend: '后端',
            'ai-capabilities': 'AI能力',
            'core-skills': '核心技能',
            'cross-platform': '跨平台开发',
            'personal-brand': '个人品牌',
            'ai-advanced': 'AI进阶'
          },
          en: {
            'stage-1': 'AI Product Manager',
            'stage-2': 'Junior Developer',
            'stage-3': 'Senior Developer',
            appendix: 'Appendix',
            guide: 'Guide',
            frontend: 'Frontend',
            backend: 'Backend',
            'ai-capabilities': 'AI Capabilities',
            'core-skills': 'Core Skills',
            'cross-platform': 'Cross-platform',
            'personal-brand': 'Personal Brand',
            'ai-advanced': 'AI Advanced'
          }
        }

        const names = segmentNames[locale] || segmentNames['zh-cn']

        pathParts.forEach((part, index) => {
          currentPath += `/${part}`
          const name = names[part] || part.replace(/-/g, ' ')
          items.push({
            '@type': 'ListItem',
            position: index + 2,
            name: name,
            item: `${siteUrl}/${locale}${currentPath}/`
          })
        })
      }

      return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items
      }
    }

    const breadcrumbJsonLd = generateBreadcrumbList()
    head.push([
      'script',
      { type: 'application/ld+json', class: 'breadcrumb-jsonld' },
      JSON.stringify(breadcrumbJsonLd)
    ])

    return head
  }

  return { getSeoHead, rewriteMissingLocaleMenuLinks }
}
