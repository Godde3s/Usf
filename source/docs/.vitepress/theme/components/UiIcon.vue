<template>
  <svg
    class="ui-icon"
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.8"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <template v-for="(el, i) in paths" :key="i">
      <path v-if="el.t === 'p'" :d="el.d" />
      <circle v-else-if="el.t === 'c'" :cx="el.cx" :cy="el.cy" :r="el.r" />
      <rect v-else-if="el.t === 'r'" :x="el.x" :y="el.y" :width="el.w" :height="el.h" :rx="el.rx || 0" />
      <line v-else-if="el.t === 'l'" :x1="el.x1" :y1="el.y1" :x2="el.x2" :y2="el.y2" />
      <ellipse v-else-if="el.t === 'e'" :cx="el.cx" :cy="el.cy" :rx="el.rx" :ry="el.ry" />
      <polyline v-else-if="el.t === 'pl'" :points="el.pts" />
    </template>
  </svg>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  name: { type: String, required: true },
  size: { type: [Number, String], default: 22 }
})

const ICONS = {
  target: [
    { t: 'c', cx: 12, cy: 12, r: 10 },
    { t: 'c', cx: 12, cy: 12, r: 6 },
    { t: 'c', cx: 12, cy: 12, r: 2 }
  ],
  zap: [{ t: 'p', d: 'M13 2 3 14h9l-1 8 10-12h-9l1-8z' }],
  globe: [
    { t: 'c', cx: 12, cy: 12, r: 10 },
    { t: 'l', x1: 2, y1: 12, x2: 22, y2: 12 },
    { t: 'p', d: 'M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z' }
  ],
  code: [
    { t: 'pl', pts: '16 18 22 12 16 6' },
    { t: 'pl', pts: '8 6 2 12 8 18' }
  ],
  layout: [
    { t: 'r', x: 3, y: 3, w: 18, h: 18, rx: 2 },
    { t: 'l', x1: 3, y1: 9, x2: 21, y2: 9 },
    { t: 'l', x1: 9, y1: 21, x2: 9, y2: 9 }
  ],
  server: [
    { t: 'r', x: 2, y: 2, w: 20, h: 8, rx: 2 },
    { t: 'r', x: 2, y: 14, w: 20, h: 8, rx: 2 },
    { t: 'l', x1: 6, y1: 6, x2: 6.01, y2: 6 },
    { t: 'l', x1: 6, y1: 18, x2: 6.01, y2: 18 }
  ],
  network: [
    { t: 'r', x: 16, y: 16, w: 6, h: 6, rx: 1 },
    { t: 'r', x: 2, y: 16, w: 6, h: 6, rx: 1 },
    { t: 'r', x: 9, y: 2, w: 6, h: 6, rx: 1 },
    { t: 'p', d: 'M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3' },
    { t: 'l', x1: 12, y1: 12, x2: 12, y2: 8 }
  ],
  shield: [
    { t: 'p', d: 'M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z' }
  ],
  cpu: [
    { t: 'r', x: 4, y: 4, w: 16, h: 16, rx: 2 },
    { t: 'r', x: 9, y: 9, w: 6, h: 6 },
    { t: 'l', x1: 9, y1: 1, x2: 9, y2: 4 },
    { t: 'l', x1: 15, y1: 1, x2: 15, y2: 4 },
    { t: 'l', x1: 9, y1: 20, x2: 9, y2: 23 },
    { t: 'l', x1: 15, y1: 20, x2: 15, y2: 23 },
    { t: 'l', x1: 20, y1: 9, x2: 23, y2: 9 },
    { t: 'l', x1: 20, y1: 14, x2: 23, y2: 14 },
    { t: 'l', x1: 1, y1: 9, x2: 4, y2: 9 },
    { t: 'l', x1: 1, y1: 14, x2: 4, y2: 14 }
  ],
  rocket: [
    { t: 'p', d: 'M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z' },
    { t: 'p', d: 'M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z' },
    { t: 'p', d: 'M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0' },
    { t: 'p', d: 'M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5' }
  ],
  cog: [
    { t: 'p', d: 'M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z' },
    { t: 'c', cx: 12, cy: 12, r: 3 }
  ],
  database: [
    { t: 'e', cx: 12, cy: 5, rx: 9, ry: 3 },
    { t: 'p', d: 'M3 5v14a9 3 0 0 0 18 0V5' },
    { t: 'p', d: 'M3 12a9 3 0 0 0 18 0' }
  ],
  'git-branch': [
    { t: 'l', x1: 6, y1: 3, x2: 6, y2: 15 },
    { t: 'c', cx: 18, cy: 6, r: 3 },
    { t: 'c', cx: 6, cy: 18, r: 3 },
    { t: 'p', d: 'M18 9a9 9 0 0 1-9 9' }
  ],
  terminal: [
    { t: 'pl', pts: '4 17 10 11 4 5' },
    { t: 'l', x1: 12, y1: 19, x2: 20, y2: 19 }
  ],
  layers: [
    { t: 'p', d: 'M12 2 2 7l10 5 10-5-10-5z' },
    { t: 'p', d: 'M2 17l10 5 10-5' },
    { t: 'p', d: 'M2 12l10 5 10-5' }
  ],
  activity: [{ t: 'p', d: 'M22 12h-4l-3 9L9 3l-3 9H2' }],
  check: [{ t: 'pl', pts: '20 6 9 17 4 12' }]
}

const paths = computed(() => ICONS[props.name] || ICONS.globe)
</script>

<style scoped>
.ui-icon {
  display: inline-block;
  vertical-align: middle;
  flex-shrink: 0;
}
</style>
