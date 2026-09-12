// Build hooks (transformHtml / transformHead / buildEnd) for the VitePress site.
// Extracted from docs/.vitepress/config.mjs to keep the main config lean.
import fs from 'node:fs'
import path from 'node:path'

/**
 * Build the build hooks bound to the site-level configuration.
 *
 * @param {object} config
 * @param {string} config.base - VitePress base path ('/' or '/Usf/').
 * @param {string} config.siteUrl - Canonical site URL.
 * @param {string[]} config.supportedLocaleDirs - Locale directory names.
 * @param {string[]} config.activeSupportedBuildLocales - Locales being built.
 * @param {(html: string) => string} config.rewriteMissingLocaleMenuLinks
 */
export const createBuildHooks = ({
  base,
  siteUrl,
  supportedLocaleDirs,
  activeSupportedBuildLocales,
  rewriteMissingLocaleMenuLinks
}) => {
  const transformHtml = (code) => rewriteMissingLocaleMenuLinks(code)

  // The root page only redirects visitors to a localized page. Run that
  // redirect before the large VitePress client bundle loads so a slow or
  // failed asset request cannot leave users staring at an empty home page.
  const transformHead = ({ page }) => {
    if (page !== 'index.md') return

    const redirectScript = `
      (() => {
        const base = ${JSON.stringify(base)}
        const languageMap = {
          en: 'en',
          'en-us': 'en',
          'en-gb': 'en',
          es: 'es',
          'es-es': 'es'
        }
        const browserLanguage = (navigator.language || 'en').toLowerCase()
        const locale =
          languageMap[browserLanguage] ||
          languageMap[browserLanguage.split('-')[0]] ||
          'en'
        const targetPath = base + locale + '/'
        let hasSeenWelcome = false

        try {
          hasSeenWelcome =
            window.localStorage.getItem('usf-welcome-seen') === '1'
        } catch {}

        const destination = hasSeenWelcome
          ? targetPath
          : base + 'welcome?next=' + encodeURIComponent(targetPath)

        window.location.replace(destination)
      })()
    `

    return [
      ['script', {}, redirectScript],
      [
        'noscript',
        {},
        `<meta http-equiv="refresh" content="0;url=${base}en/">`
      ]
    ]
  }

  // 构建结束时动态生成 robots.txt
  const buildEnd = async (siteConfig) => {
    const robotsTxt = `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /

# 禁止搜索引擎抓取旧版内容（已迁移到新目录结构）
Disallow: /extra/
Disallow: /examples/
Disallow: /project/
Disallow: /en/extra/
Disallow: /en/examples/
Disallow: /en/project/

# 禁止抓取 VitePress 缓存和构建文件
Disallow: /.vitepress/
Disallow: /@fs/

# Sitemap 位置
Sitemap: ${siteUrl}/sitemap.xml
`

    const outDir =
      siteConfig.outDir || path.resolve(__dirname, '.vitepress/dist')
    const robotsPath = path.join(outDir, 'robots.txt')

    fs.writeFileSync(robotsPath, robotsTxt, 'utf-8')
    console.log(
      '✓ Generated robots.txt with sitemap URL:',
      `${siteUrl}/sitemap.xml`
    )

    if (process.env.COPY_MD_TO_DIST !== '0') {
      // Copy all .md files to dist for download/copy features.
      const srcDir = siteConfig.srcDir || path.resolve(outDir, '../../')
      function copyMdFiles(src, dest, isRoot = false) {
        if (!fs.existsSync(dest)) {
          fs.mkdirSync(dest, { recursive: true })
        }
        const entries = fs.readdirSync(src, { withFileTypes: true })
        for (const entry of entries) {
          const srcPath = path.join(src, entry.name)
          const destPath = path.join(dest, entry.name)
          if (entry.isDirectory()) {
            if (
              entry.name === '.vitepress' ||
              entry.name === 'public' ||
              entry.name === 'node_modules'
            )
              continue
            if (
              isRoot &&
              activeSupportedBuildLocales.length &&
              supportedLocaleDirs.includes(entry.name) &&
              !activeSupportedBuildLocales.includes(entry.name)
            ) {
              continue
            }
            copyMdFiles(srcPath, destPath)
          } else if (entry.isFile() && entry.name.endsWith('.md')) {
            fs.copyFileSync(srcPath, destPath)
          }
        }
      }
      console.log(
        '✓ Copying markdown files to output directory for download feature...'
      )
      copyMdFiles(srcDir, outDir, true)
    } else {
      console.log(
        '✓ Skipped markdown copy to output directory because COPY_MD_TO_DIST=0.'
      )
    }
  }

  return { transformHtml, transformHead, buildEnd }
}
