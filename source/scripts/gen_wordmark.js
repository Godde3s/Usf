// Generate cursive "Usf" wordmark SVG paths (Pacifico) matching Usf's
// easyVibePaths.json format: array of path strings, viewBox 460x220.
import opentype from 'opentype.js'
import fs from 'node:fs'

const font = opentype.loadSync('/home/z/my-project/usf-vitepress/assets-src/Pacifico-Regular.ttf')

const TEXT = 'Usf'
const FONT_SIZE = 170
const SCALE_UP = 1.55

// First pass: measure
let p1 = font.getPath(TEXT, 0, 0, FONT_SIZE)
const bb1 = p1.getBoundingBox()
console.log('raw bbox', bb1)

// Center into 460x220 with vertical optical centering (script fonts sit low)
const w = bb1.x2 - bb1.x1
const h = bb1.y2 - bb1.y1
const targetW = 300
const s = (targetW / w) * SCALE_UP
const tx = (460 - w * s) / 2 - bb1.x1 * s
const ty = (220 - h * s) / 2 - bb1.y1 * s

const p = font.getPath(TEXT, 0, 0, FONT_SIZE)
const m = new opentype.Matrix()
m.translate(tx, ty)
m.scale(s)
p.transform(m, 0, 0, 0, 0, 0)

// Emit one path string per glyph contour group (opentype gives one combined path;
// split by drawing commands starting new subpaths at each 'M' after a fill boundary).
// Simplest robust approach: output the whole word as ONE path string, but the
// welcome animation staggers by index. We split per-glyph using font.stringToGlyphs.
const glyphs = font.stringToGlyphs(TEXT)
let x = 0
const paths = []
const kerning = font.getKerningTable ? null : null
// re-walk glyphs with advances to compute per-glyph transforms
let cursor = 0
const fontSizeUnits = 1 / FONT_SIZE * FONT_SIZE // noop clarity
// Build each glyph path at same scale/offset as full word
const advanceScale = FONT_SIZE / font.unitsPerEm
for (const g of glyphs) {
  const gPath = font.getPath(String.fromCharCode(0), 0, 0, FONT_SIZE) // placeholder
  void gPath
  const advance = (g.advanceWidth || 0) * advanceScale
  cursor += advance
}

// Per-glyph: use glyph.getPath(x, y, fontSize)
let penX = 0
const glyphPaths = []
for (const g of glyphs) {
  const gp = g.getPath(penX, 0, FONT_SIZE)
  const bb = gp.getBoundingBox()
  void bb
  const t = new opentype.Matrix()
  t.translate(tx, ty)
  t.scale(s)
  gp.transform(t, 0, 0, 0, 0, 0)
  // convert commands to path string
  let d = ''
  for (const cmd of gp.commands) {
    switch (cmd.type) {
      case 'M': d += `M${r(cmd.x)} ${r(cmd.y)}`; break
      case 'L': d += `L${r(cmd.x)} ${r(cmd.y)}`; break
      case 'C': d += `C${r(cmd.x1)} ${r(cmd.y1)} ${r(cmd.x2)} ${r(cmd.y2)} ${r(cmd.x)} ${r(cmd.y)}`; break
      case 'Q': d += `Q${r(cmd.x1)} ${r(cmd.y1)} ${r(cmd.x)} ${r(cmd.y)}`; break
      case 'Z': d += 'Z'; break
    }
  }
  if (d) glyphPaths.push(d)
  penX += (g.advanceWidth || 0) * advanceScale
}

function r(n) { return Math.round(n * 100) / 100 }

console.log('glyph paths:', glyphPaths.length)
for (const d of glyphPaths) {
  // estimate length via commands count + bbox
  const nums = d.match(/-?\d+(\.\d+)?/g) || []
  console.log('  cmds:', (d.match(/[MLQCZ]/g) || []).length, 'len~', d.length, 'bbox', d.slice(0, 40))
}

fs.writeFileSync(
  '/home/z/my-project/usf-vitepress/docs/.vitepress/theme/data/usfPaths.json',
  JSON.stringify(glyphPaths, null, 2) + '\n'
)
console.log('written usfPaths.json')
