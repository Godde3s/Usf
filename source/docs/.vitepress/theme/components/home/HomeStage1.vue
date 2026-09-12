<script setup>
import { inject } from 'vue'
import { withBase } from 'vitepress'
import { stage1Cards } from './HomeData'
import UiIcon from '../UiIcon.vue'
import './HomeSection.css'

const t = inject('t')
</script>

<template>
  <section id="pm" class="section-container section-pm">
    <div class="section-header">
      <h2 class="section-category">
        {{ t.stage1.cat }}
      </h2>
      <h3
        class="section-headline"
        v-html="t.stage1.title"
      />
      <p class="section-sub">
        {{ t.stage1.sub }}
      </p>
    </div>

    <div class="feature-grid">
      <a
        v-for="(card, i) in stage1Cards"
        :key="i"
        :href="withBase(t.stage1.cards[i].link)"
        class="feature-card glass"
      >
        <div
          class="feature-icon"
          :style="{ background: card.color }"
        >
          <UiIcon
            :name="card.icon"
            :size="24"
          />
        </div>
        <div class="feature-content">
          <h4>{{ t.stage1.cards[i].title }}</h4>
          <p>{{ t.stage1.cards[i].desc }}</p>
        </div>
      </a>
    </div>
  </section>
</template>

<style scoped>
.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.feature-card {
  background: #fff;
  border-radius: 32px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  transition: all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
  box-shadow: none;
  height: 100%;
  position: relative;
  overflow: hidden;
  text-decoration: none !important;
  border: 1px solid rgba(0, 0, 0, 0.025);
}

.dark .feature-card {
  border: 1px solid rgba(255, 255, 255, 0.06);
  background: var(--vp-c-bg-soft);
}

.feature-card:hover {
  transform: scale(1.015);
  box-shadow: none;
}

.feature-icon {
  width: 64px;
  height: 64px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  margin-bottom: 24px;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.45);
}

.feature-content {
  display: flex;
  flex-direction: column;
}

.feature-content h4 {
  font-size: 34px;
  font-weight: 700;
  margin-bottom: 10px;
  color: #1d1d1f;
  line-height: 1.3;
  letter-spacing: -0.024em;
  font-family:
    -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'PingFang SC',
    sans-serif;
}

.feature-content p {
  font-size: 17px;
  color: #6e6e73;
  line-height: 1.6;
  margin-top: 4px;
  margin-bottom: 0;
}

.dark .feature-content h4 {
  color: var(--vp-c-text-1);
}

.dark .feature-content p {
  color: var(--vp-c-text-2);
}

@media (max-width: 960px) {
  .feature-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .feature-grid {
    grid-template-columns: 1fr;
  }
  .feature-card {
    padding: 24px;
  }
}
</style>
