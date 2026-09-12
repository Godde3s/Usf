<script setup>
import { inject, computed } from 'vue'
import { withBase } from 'vitepress'
import { stage2Cards } from './HomeData'
import './HomeSection.css'

const t = inject('t')

const localizedStage2Cards = computed(() => {
  return t.value.stage2.cards.map((card, index) => {
    const visual = stage2Cards.find((item) => item.link === card.link) || stage2Cards[index]
    return {
      ...card,
      ...visual
    }
  })
})
</script>

<template>
  <section
    id="junior"
    class="section-container section-junior"
  >
    <div class="section-header">
      <h2 class="section-category">
        {{ t.stage2.cat }}
      </h2>
      <h3
        class="section-headline"
        v-html="t.stage2.title"
      />
      <p class="section-sub">
        {{ t.stage2.sub }}
      </p>
    </div>

    <div class="comm-grid">
      <a
        v-for="(card, index) in localizedStage2Cards"
        :key="index"
        :href="withBase(card.link)"
        class="comm-card glass"
      >
        <div
          class="comm-visual"
          :style="{ backgroundColor: card.imageColor }"
        >
          <img
            :src="card.image"
            :alt="card.imageAlt || card.title"
            width="1672"
            height="941"
            loading="lazy"
            decoding="async"
            fetchpriority="low"
          >
        </div>
        <div class="comm-text">
          <h4 class="comm-title">{{ card.title }}</h4>
          <p class="comm-desc">{{ card.desc }}</p>
          <span class="comm-note">{{ t.stage2.more }} ›</span>
        </div>
      </a>
    </div>
  </section>
</template>

<style scoped>
.section-junior {
  margin-top: 72px;
}

@media (max-width: 768px) {
  .section-junior {
    margin-top: 56px;
  }
}

.comm-grid {
  display: flex;
  gap: 24px;
  overflow-x: auto;
  width: calc(100% + 40px);
  margin: 0 -20px;
  padding: 12px 20px 16px;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior-x: contain;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.comm-grid::-webkit-scrollbar {
  display: none;
}

.comm-card {
  flex: 0 0 380px;
  border-radius: 32px;
  overflow: hidden;
  background: #fff;
  box-shadow: none;
  border: 1px solid rgba(0, 0, 0, 0.025);
  transition: transform 0.3s;
  transform-origin: center top;
  display: block;
  scroll-snap-align: start;
}

.dark .comm-card {
  background: var(--vp-c-bg-soft);
  border-color: var(--vp-c-divider);
}

.comm-card:hover {
  transform: scale(1.015);
}

.comm-visual {
  width: 100%;
  height: auto;
  aspect-ratio: 1672 / 941;
  position: relative;
  overflow: hidden;
}

.comm-visual img {
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  display: block;
  object-fit: cover;
  object-position: top center;
}

.comm-text {
  padding: 26px 26px 30px;
}

.comm-title {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 8px;
  color: #1d1d1f;
  letter-spacing: -0.02em;
  font-family:
    -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'PingFang SC',
    sans-serif;
}

.comm-desc {
  font-size: 16px;
  color: #6e6e73;
  margin-bottom: 20px;
  line-height: 1.5;
}

.comm-note {
  font-size: 17px;
  color: #0066cc;
  letter-spacing: -0.01em;
}

.dark .comm-title {
  color: var(--vp-c-text-1);
}

.dark .comm-desc {
  color: var(--vp-c-text-2);
}

@media (max-width: 960px) {
  .comm-card {
    flex-basis: 340px;
  }
}

@media (max-width: 640px) {
  .comm-card {
    flex-basis: min(86vw, 340px);
  }
}
</style>
