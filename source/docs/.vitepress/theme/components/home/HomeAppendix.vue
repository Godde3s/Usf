<script setup>
import { inject, ref, onMounted, onUnmounted } from 'vue'
import { withBase } from 'vitepress'
import UiIcon from '../UiIcon.vue'
import './HomeSection.css'

const t = inject('t')

// 每个附录页面（按链接最后一段 slug）对应一个贴合词意的唯一图标
// Stroke SVG icon names (rendered by UiIcon) keyed by skill slug
const appendixIcons = {
  languages: 'code',
  web: 'layout',
  backend: 'server',
  networking: 'network',
  security: 'shield',
  'ai-llm': 'cpu',
  devops: 'rocket',
  plc: 'cog',
  databases: 'database',
  git: 'git-branch',
  terminal: 'terminal',
  architecture: 'layers'
}

const appendixIcon = (card) => {
  const segments = (card.link || '').split('/').filter(Boolean)
  const slug = (segments[segments.length - 1] || '').replace(/\.html$/, '')
  return appendixIcons[slug] || 'layers'
}

const appendixWrapper = ref(null)
const totalPages = ref(1)
const currentPage = ref(0)

const updatePagination = () => {
  if (appendixWrapper.value) {
    const { scrollLeft, clientWidth, scrollWidth } = appendixWrapper.value
    if (scrollWidth <= clientWidth + 5) {
      totalPages.value = 1
      currentPage.value = 0
    } else {
      totalPages.value = Math.ceil(scrollWidth / clientWidth)
      currentPage.value = Math.round(scrollLeft / clientWidth)
    }
  }
}

const onAppendixScroll = () => {
  if (!appendixWrapper.value) return
  const { scrollLeft, clientWidth } = appendixWrapper.value
  const newPage = Math.round(scrollLeft / clientWidth)
  if (currentPage.value !== newPage) {
    currentPage.value = newPage
  }
}

const scrollToPage = (pageIndex) => {
  if (appendixWrapper.value) {
    const width = appendixWrapper.value.clientWidth
    appendixWrapper.value.scrollTo({
      left: pageIndex * width,
      behavior: 'smooth'
    })
  }
}

const scrollAppendixByPage = (direction) => {
  const nextPage = Math.min(
    totalPages.value - 1,
    Math.max(0, currentPage.value + direction)
  )
  scrollToPage(nextPage)
}

onMounted(() => {
  if (appendixWrapper.value) {
    appendixWrapper.value.addEventListener('scroll', onAppendixScroll)
    updatePagination()
    window.addEventListener('resize', updatePagination)
  }
})

onUnmounted(() => {
  if (appendixWrapper.value) {
    appendixWrapper.value.removeEventListener('scroll', onAppendixScroll)
  }
  window.removeEventListener('resize', updatePagination)
})
</script>

<template>
  <section
    id="appendix"
    class="section-container section-appendix"
  >
    <div class="section-header">
      <h2 class="section-category">
        {{ t.appendix.cat }}
      </h2>
      <h3
        class="section-headline"
        v-html="t.appendix.title"
      />
      <p class="section-sub">
        {{ t.appendix.sub }}
      </p>
    </div>

    <div
      ref="appendixWrapper"
      class="appendix-scroll-wrapper"
    >
      <div class="appendix-track">
        <a
          v-for="(card, index) in t.appendix.cards"
          :key="index"
          :href="withBase(card.link)"
          class="appendix-card"
        >
          <span class="appendix-emoji"><UiIcon
            :name="appendixIcon(card)"
            :size="26"
          /></span>
          <span class="appendix-title">{{ card.title }}</span>
        </a>
      </div>
    </div>

    <div
      v-if="totalPages > 1"
      class="appendix-scroll-hint"
    >
      <div class="appendix-progress-track">
        <div
          class="appendix-progress-thumb"
          :style="{
            width: `${100 / totalPages}%`,
            transform: `translateX(${currentPage * 100}%)`
          }"
        />
      </div>
      <div class="appendix-scroll-actions">
        <button
          class="appendix-arrow-btn"
          :class="{ disabled: currentPage === 0 }"
          :disabled="currentPage === 0"
          :aria-label="t.appendix.ui.previous"
          @click="scrollAppendixByPage(-1)"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M11.5 5.5L7 10L11.5 14.5"
              stroke="currentColor"
              stroke-width="2.4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button
          class="appendix-arrow-btn"
          :class="{ disabled: currentPage >= totalPages - 1 }"
          :disabled="currentPage >= totalPages - 1"
          :aria-label="t.appendix.ui.next"
          @click="scrollAppendixByPage(1)"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M8.5 5.5L13 10L8.5 14.5"
              stroke="currentColor"
              stroke-width="2.4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.appendix-scroll-wrapper {
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  margin: 0 -20px;
  padding: 0 20px 12px;
  scrollbar-width: none;
  -ms-overflow-style: none;
  overscroll-behavior-x: contain;
}

.appendix-scroll-wrapper::-webkit-scrollbar {
  display: none;
}

.appendix-track {
  display: flex;
  align-items: flex-start;
  gap: 40px;
  width: max-content;
}

.appendix-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  text-decoration: none !important;
  color: inherit !important;
  background: transparent;
  padding: 0;
  border: 0;
  box-shadow: none;
  scroll-snap-align: start;
  width: 120px;
  min-height: 120px;
  transition: transform 0.25s ease;
  text-align: center;
}

.appendix-card:hover {
  transform: scale(1.03);
}

.appendix-emoji {
  font-size: 52px;
  line-height: 1;
  display: block;
}

.appendix-title {
  font-weight: 600;
  color: #3c3c43;
  margin: 0;
  font-size: 14px;
  line-height: 1.35;
  letter-spacing: -0.01em;
  white-space: normal;
}

.dark .appendix-title {
  color: var(--vp-c-text-1);
}

.appendix-scroll-hint {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 18px;
  margin-top: 20px;
  min-height: 40px;
}

.appendix-progress-track {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 160px;
  height: 4px;
  border-radius: 999px;
  background: rgba(60, 60, 67, 0.08);
  overflow: hidden;
}

.appendix-progress-thumb {
  height: 100%;
  border-radius: inherit;
  background: rgba(60, 60, 67, 0.28);
  transition: transform 0.25s ease;
}

.appendix-scroll-actions {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: auto;
  margin-right: 56px;
}

.appendix-arrow-btn {
  width: 38px;
  height: 38px;
  border-radius: 999px;
  border: 1px solid rgba(60, 60, 67, 0.05);
  background: rgba(60, 60, 67, 0.05);
  color: rgba(60, 60, 67, 0.62);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    color 0.2s ease,
    transform 0.2s ease;
}

.appendix-arrow-btn:hover {
  background: rgba(255, 255, 255, 0.78);
  border-color: rgba(60, 60, 67, 0.08);
  color: rgba(60, 60, 67, 0.74);
  transform: scale(1.04);
}

.appendix-arrow-btn.disabled,
.appendix-arrow-btn:disabled {
  opacity: 0.42;
  cursor: default;
  transform: none;
}

.appendix-arrow-btn.disabled:hover,
.appendix-arrow-btn:disabled:hover {
  background: rgba(60, 60, 67, 0.05);
  color: rgba(60, 60, 67, 0.62);
}

.section-appendix {
  background: transparent;
  border-radius: 0;
  padding-top: 64px;
  padding-bottom: 64px;
}

.dark .section-appendix {
  background: transparent;
}

@media (max-width: 768px) {
  .section-appendix {
    padding-top: 42px;
    padding-bottom: 42px;
  }
}
</style>
