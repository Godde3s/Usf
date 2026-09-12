// Emits the docs/{en,fa,ar,es} tree from structured content definitions.
// Usage: node emit.mjs
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DOCS = path.resolve(__dirname, '../../usf-vitepress/docs')

const esc = (s) => String(s)

function renderBlock(b) {
  switch (b.t) {
    case 'h2': return `## ${b.x}\n`
    case 'h3': return `### ${b.x}\n`
    case 'p': return `${b.x}\n`
    case 'list': return b.x.map((i) => `- ${i}`).join('\n') + '\n'
    case 'olist': return b.x.map((i, n) => `${n + 1}. ${i}`).join('\n') + '\n'
    case 'quote': return `> ${b.x}\n`
    case 'info': return `::: info ${b.title || ''}\n${b.x}\n:::\n`
    case 'tip': return `::: tip ${b.title || ''}\n${b.x}\n:::\n`
    case 'warning': return `::: warning ${b.title || ''}\n${b.x}\n:::\n`
    case 'details': return `::: details ${b.title}\n${b.x}\n:::\n`
    case 'table': {
      const [head, ...rows] = b.x
      const line = (cells) => `| ${cells.join(' | ')} |`
      return [
        line(head),
        '|' + head.map(() => ' --- ').join('|') + '|',
        ...rows.map(line)
      ].join('\n') + '\n'
    }
    case 'code': return '```' + (b.lang || '') + '\n' + b.x + '\n```\n'
    case 'stepbar': return `<StepBar :items='${JSON.stringify(b.x.map((s) => (typeof s === 'string' ? { title: s } : s))).replace(/'/g, '&#39;')}' />\n`
    case 'figure': return b.caption
      ? `<figure class="concept-illustration">\n  <img src="${b.src}" alt="${b.alt}" loading="lazy" />\n  <figcaption>${b.caption}</figcaption>\n</figure>\n`
      : `<figure class="concept-illustration">\n  <img src="${b.src}" alt="${b.alt}" loading="lazy" />\n</figure>\n`
    case 'html': return b.x + '\n'
    default: throw new Error('unknown block type: ' + b.t)
  }
}

function renderPage(page) {
  const fm = [
    '---',
    `title: ${JSON.stringify(page.title)}`,
    `description: ${JSON.stringify(page.description)}`
  ]
  if (page.layout) fm.push(`layout: ${page.layout}`)
  fm.push('---')
  // Usf pages open with an explicit H1
  const h1 = page.layout ? '' : `# ${page.title}\n`
  const body = page.blocks.map(renderBlock).join('\n')
  return fm.join('\n') + '\n\n' + h1 + '\n' + body
}

function emit(locale, pages) {
  for (const page of pages) {
    // Usf style: every page is a directory with index.md so that
    // /locale/section/page/ URLs resolve on GitHub Pages.
    let rel = page.path
    if (rel.endsWith('.md') && !rel.endsWith('index.md')) {
      rel = rel.slice(0, -3) + '/index.md'
    }
    const dir = path.join(DOCS, locale, path.dirname(rel))
    fs.mkdirSync(dir, { recursive: true })
    const file = path.join(DOCS, locale, rel)
    fs.writeFileSync(file, renderPage(page))
  }
  console.log(`emitted ${pages.length} pages for /${locale}/`)
}

async function main() {
  const { pages: en } = await import('./content-en.mjs')
  const { pages: es } = await import('./content-es.mjs')
  emit('en', en)
  emit('es', es)
  // Home pages (hero + HomeFeatures) live as static files under homes/
  for (const loc of ['en', 'es']) {
    const home = path.join(__dirname, `homes/${loc}/index.md`)
    fs.copyFileSync(home, path.join(DOCS, loc, 'index.md'))
  }
  console.log('copied 4 home pages')
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
