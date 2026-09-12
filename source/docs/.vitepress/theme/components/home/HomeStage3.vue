<script setup>
import { inject } from 'vue'
import { withBase } from 'vitepress'
import { stage3Cards } from './HomeData'
import './HomeSection.css'

const t = inject('t')
</script>

<template>
  <section
    id="senior"
    class="section-container section-senior"
  >
    <div class="section-header">
      <h2 class="section-category">
        {{ t.stage3.cat }}
      </h2>
      <h3
        class="section-headline"
        v-html="t.stage3.title"
      />
      <p class="section-sub">
        {{ t.stage3.sub }}
      </p>
    </div>

    <div class="scroll-container">
      <div class="scroll-track">
        <a
          v-for="(card, index) in stage3Cards"
          :key="index"
          :href="withBase(t.stage3.cards[index].link)"
          class="prod-card glass"
        >
          <div class="prod-tag">{{ card.tag }}</div>
          <h4>{{ t.stage3.cards[index].title }}</h4>
          <p>{{ t.stage3.cards[index].desc }}</p>
          <div class="prod-visual">
            <img
              :src="card.image"
              :alt="card.imageAlt"
              :class="card.imageClass"
              width="1672"
              height="941"
              loading="lazy"
              decoding="async"
              fetchpriority="low"
            >
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.scroll-container {
  overflow-x: auto;
  padding-bottom: 40px;
  margin: 0 -20px;
  padding: 12px 20px 40px;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x mandatory;
  overscroll-behavior-x: contain;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.scroll-container::-webkit-scrollbar {
  display: none;
}

.scroll-track {
  display: flex;
  gap: 24px;
  width: max-content;
}

.prod-card {
  width: 300px;
  height: 400px;
  border-radius: 32px;
  background: #f7f7f9;
  padding: 30px;
  scroll-snap-align: center;
  text-decoration: none !important;
  color: inherit !important;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s;
  transform-origin: center top;
  border: 1px solid rgba(0, 0, 0, 0.025);
  box-shadow: none;
}

.dark .prod-card {
  background: var(--vp-c-bg-soft);
  border-color: var(--vp-c-divider);
}

.prod-card:hover {
  transform: scale(1.015);
}

.prod-tag {
  font-size: 12px;
  font-weight: 600;
  color: #6e6e73;
  margin-bottom: 10px;
  text-transform: uppercase;
}

.prod-card h4 {
  font-size: 34px;
  font-weight: 700;
  margin-bottom: 10px;
  color: #1d1d1f;
  letter-spacing: -0.025em;
  font-family:
    -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'PingFang SC',
    sans-serif;
}

.prod-card p {
  color: #6e6e73;
  font-size: 16px;
  line-height: 1.5;
}

.dark .prod-tag,
.dark .prod-card p {
  color: var(--vp-c-text-2);
}

.dark .prod-card h4 {
  color: var(--vp-c-text-1);
}

.prod-visual {
  margin-top: auto;
  width: 100%;
  height: auto;
  aspect-ratio: 1672 / 941;
  border-radius: 20px;
  overflow: hidden;
  background: linear-gradient(135deg, #dbeafe 0%, #e5e7eb 100%);
}

.prod-visual img {
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  display: block;
  object-fit: cover;
  object-position: center;
}

</style>
