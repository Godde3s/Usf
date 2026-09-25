<script setup>
import { computed, inject, onMounted, onUnmounted, ref } from 'vue'
import { withBase } from 'vitepress'
import UiIcon from './UiIcon.vue'
import macbookImage from '../assets/home/stories/macbook-frame.webp'
import story1Cover from '../assets/home/stories/story-1.webp'
import story1CoverSmall from '../assets/home/stories/story-1-640.webp'
import story2Cover from '../assets/home/stories/story-2.webp'
import story2CoverSmall from '../assets/home/stories/story-2-640.webp'
import story3Cover from '../assets/home/stories/story-3.webp'
import story3CoverSmall from '../assets/home/stories/story-3-640.webp'
import story4Cover from '../assets/home/stories/story-4.webp'
import story4CoverSmall from '../assets/home/stories/story-4-640.webp'

// Try to inject translation context from parent or provide a default fallback
const t = inject('t', {
  value: {
    stories: {
      cat: 'Project Stories',
      title: 'Real projects,<br><span class="highlight">built in public.</span>',
      sub: 'Every card leads to a working repository — no mockups, no vaporware.',
      authorPrefix: 'Built with:',
      ui: {
        prevLabel: 'Previous story',
        nextLabel: 'Next story',
        selectLabel: 'View this story',
        imageAlt: 'Story cover'
      }
    }
  }
})

const storyLocale = computed(() => {
  const code = t.value?._locale
  return ['en', 'es'].includes(code) ? code : 'en'
})
const storyLink = (id) => `/${storyLocale.value}/vibe-stories/story-${id}`

const tStories = computed(() => [
  {
    id: 1,
    title: t.value?.stories?.s1?.title || 'A backend where every security claim has a test',
    author: t.value?.stories?.s1?.author || 'taskflow-api · Python',
    avatar: 'shield',
    image: story1Cover,
    imageSrcset: `${story1CoverSmall} 640w, ${story1Cover} 1280w`,
    imageHeight: 959,
    imageStyle: {
      objectPosition: 'center center'
    },
    link: storyLink(1)
  },
  {
    id: 2,
    title: t.value?.stories?.s2?.title || 'A messenger with no server to breach',
    author: t.value?.stories?.s2?.author || 'veilchat · Python',
    avatar: 'network',
    image: story2Cover,
    imageSrcset: `${story2CoverSmall} 640w, ${story2Cover} 1280w`,
    imageHeight: 959,
    imageStyle: {
      objectPosition: 'center center'
    },
    link: storyLink(2)
  },
  {
    id: 3,
    title: t.value?.stories?.s3?.title || 'NLP that ships like a real service',
    author: t.value?.stories?.s3?.author || 'textsense · Python',
    avatar: 'activity',
    image: story3Cover,
    imageSrcset: `${story3CoverSmall} 640w, ${story3Cover} 1280w`,
    imageHeight: 959,
    imageStyle: {
      objectPosition: 'center center'
    },
    link: storyLink(3)
  },
  {
    id: 4,
    title: t.value?.stories?.s4?.title || 'Realtime chat you self-host in one command',
    author: t.value?.stories?.s4?.author || 'goftego · Node.js',
    avatar: 'layout',
    image: story4Cover,
    imageSrcset: `${story4CoverSmall} 640w, ${story4Cover} 1280w`,
    imageHeight: 959,
    imageStyle: {
      objectPosition: 'center center'
    },
    link: storyLink(4)
  }
])

const defaultScreenViewport = Object.freeze({
  // Let the screenshot bleed slightly under the black bezel. The frame is
  // rendered above it and masks the excess, avoiding sub-pixel seams at any
  // browser zoom level.
  left: 10,
  top: 1.5,
  width: 80,
  height: 87.5
})

const currentIndex = ref(0)
let autoplayTimer = null
const isPaginating = ref(false)
const containerRef = ref(null)
let wheelHandler = null

// Visible image container geometry relative to `.laptop-container`.
// Adjust these values directly to control the screen viewport.
const screenViewport = ref({ ...defaultScreenViewport })

const formatPercent = (value) => `${value}%`

// The percentages below are always resolved against `.laptop-container`.
const screenViewportStyle = computed(() => ({
  '--screen-left': formatPercent(screenViewport.value.left),
  '--screen-top': formatPercent(screenViewport.value.top),
  '--screen-width': formatPercent(screenViewport.value.width),
  '--screen-height': formatPercent(screenViewport.value.height)
}))

const currentStory = computed(() => tStories.value[currentIndex.value] ?? tStories.value[0])

const currentImageStyle = computed(() => currentStory.value?.imageStyle || {})

const transitionName = ref('slide-left')

const next = () => {
  if (isPaginating.value) return
  isPaginating.value = true
  transitionName.value = 'slide-left'
  currentIndex.value = (currentIndex.value + 1) % tStories.value.length
  setTimeout(() => {
    isPaginating.value = false
  }, 800)
}

const prev = () => {
  if (isPaginating.value) return
  isPaginating.value = true
  transitionName.value = 'slide-right'
  currentIndex.value = (currentIndex.value - 1 + tStories.value.length) % tStories.value.length
  setTimeout(() => {
    isPaginating.value = false
  }, 800)
}

const setIndex = (index) => {
  if (index === currentIndex.value) return
  transitionName.value = index > currentIndex.value ? 'slide-left' : 'slide-right'
  currentIndex.value = index
}

const startAutoplay = () => {
  autoplayTimer = setInterval(() => {
    if (!isPaginating.value) {
      transitionName.value = 'slide-left'
      currentIndex.value = (currentIndex.value + 1) % tStories.value.length
    }
  }, 4000)
}

const stopAutoplay = () => {
  if (autoplayTimer) {
    clearInterval(autoplayTimer)
  }
}

onMounted(() => {
  startAutoplay()
  const container = containerRef.value
  if (!container) return

  wheelHandler = (e) => {
    if (Math.abs(e.deltaX) > 20 && Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      e.preventDefault()
      if (e.deltaX > 0) {
        next()
      } else {
        prev()
      }
    }
  }

  container.addEventListener('wheel', wheelHandler, { passive: false })
})

onUnmounted(() => {
  stopAutoplay()
  const container = containerRef.value
  if (container && wheelHandler) {
    container.removeEventListener('wheel', wheelHandler)
  }
})
</script>

<template>
  <div ref="containerRef" class="vibe-stories-container">
    <div class="section-header">
      <h3 class="section-headline" v-html="t.stories?.title || 'Real projects,<br><span class=\'highlight\'>built in public.</span>'"></h3>
      <p class="section-sub">{{ t.stories?.sub || 'Every card leads to a working repository — no mockups, no vaporware.' }}</p>
    </div>

    <div class="laptop-wrapper" @mouseenter="stopAutoplay" @mouseleave="startAutoplay">
      <div class="laptop-container">
        <!-- Navigation Controls -->
        <button class="nav-btn prev" :aria-label="t.stories?.ui?.prevLabel || 'Previous story'" @click="prev">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6" /></svg>
        </button>
        <button class="nav-btn next" :aria-label="t.stories?.ui?.nextLabel || 'Next story'" @click="next">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
        </button>

        <div class="screen-content" :style="screenViewportStyle">
          <a :href="withBase(currentStory.link)" class="screen-link">
            <transition :name="transitionName">
              <div :key="currentStory.id" class="screen-image-wrapper">
                <img
                  :src="currentStory.image"
                  :srcset="currentStory.imageSrcset"
                  sizes="(max-width: 760px) 62vw, 440px"
                  class="screen-image" 
                  :style="currentImageStyle"
                  :alt="t.stories?.ui?.imageAlt || 'Story cover'"
                  width="1280"
                  :height="currentStory.imageHeight"
                  loading="lazy"
                  decoding="async"
                  fetchpriority="low"
                />
              </div>
            </transition>
          </a>
        </div>
        <!-- Laptop Frame -->
        <img
          :src="macbookImage"
          class="laptop-frame"
          alt="MacBook Frame"
          width="1400"
          height="813"
          loading="lazy"
          decoding="async"
          fetchpriority="low"
        />
      </div>

      <!-- Story Info & Avatar -->
      <div class="story-info">
        <div class="story-avatar"><UiIcon
          :name="currentStory.avatar"
          :size="26"
        /></div>
        <div class="story-text">
          <a :href="withBase(currentStory.link)" class="story-title">
            {{ currentStory.title }}
          </a>
          <div class="story-author">{{ t.stories?.authorPrefix || 'by' }} {{ currentStory.author }}</div>
        </div>
      </div>
      
      <!-- Indicators -->
      <div class="indicators">
        <button 
          v-for="(_, index) in tStories" 
          :key="index"
          class="indicator-dot"
          :class="{ active: index === currentIndex }"
          :aria-label="t.stories?.ui?.selectLabel || 'Select story'"
          @click="setIndex(index)"
        ></button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.vibe-stories-container {
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 20px 28px;
  text-align: center;
}

.section-header {
  margin-bottom: 24px;
}

.section-headline {
  font-size: 60px;
  line-height: 1.08;
  font-weight: 700;
  letter-spacing: -0.034em;
  margin-bottom: 10px;
  color: #1d1d1f;
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'PingFang SC', sans-serif;
}

.dark .section-headline {
  color: #f5f5f7;
}

.highlight {
  background: linear-gradient(120deg, #0066cc, #3399ff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.dark .highlight {
  background: linear-gradient(120deg, #2997ff, #66b3ff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.section-sub {
  font-size: 19px;
  line-height: 1.4;
  font-weight: 400;
  letter-spacing: -0.01em;
  color: #6e6e73;
  max-width: 760px;
  margin: 0 auto;
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'PingFang SC', sans-serif;
}

.dark .section-sub {
  color: #a1a1a6;
}

.laptop-wrapper {
  position: relative;
  width: 100%;
  margin-top: 0;
}

.laptop-container {
  position: relative;
  isolation: isolate;
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  aspect-ratio: 1400 / 813;
}

.laptop-frame {
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: 100%;
  height: auto;
  aspect-ratio: 1400 / 813;
  display: block;
  object-fit: contain;
  pointer-events: none;
  filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.15));
}

.dark .laptop-frame {
  filter: drop-shadow(0 25px 25px rgb(255 255 255 / 0.05));
}

.screen-content {
  position: absolute;
  z-index: 1;
  top: var(--screen-top);
  left: var(--screen-left);
  width: var(--screen-width);
  height: var(--screen-height);
  background: #0b0b0f;
  overflow: hidden;
  perspective: 1000px;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
}

.screen-link {
  position: absolute;
  inset: 0;
  display: block;
  background: transparent;
  overflow: hidden;
  border-radius: inherit;
}

.screen-link:focus,
.screen-link:focus-visible {
  outline: none;
}

.screen-image-wrapper {
  position: absolute;
  inset: 0;
  overflow: hidden;
  border-radius: inherit;
}

.screen-image {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  min-width: 100%;
  min-height: 100%;
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  object-position: center;
}

/* Transitions */
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
  will-change: transform;
}

.slide-left-enter-from {
  transform: translateX(100%);
}
.slide-left-leave-to {
  transform: translateX(-100%);
}

.slide-right-enter-from {
  transform: translateX(-100%);
}
.slide-right-leave-to {
  transform: translateX(100%);
}

/* Nav Buttons */
.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 20;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(8px);
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #333;
  opacity: 0;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.laptop-wrapper:hover .nav-btn {
  opacity: 1;
}

.nav-btn:hover {
  background: rgba(255, 255, 255, 0.9);
  transform: translateY(-50%) scale(1.1);
}

.nav-btn.prev {
  left: 20px;
}

.nav-btn.next {
  right: 20px;
}

@media (max-width: 768px) {
  .nav-btn {
    opacity: 1;
    width: 36px;
    height: 36px;
  }
  .nav-btn.prev { left: 10px; }
  .nav-btn.next { right: 10px; }

  .section-headline { font-size: 42px; }
  .section-sub { font-size: 17px; }
  .laptop-container { max-width: 100%; }
  .story-info {
    margin-top: 18px;
    gap: 12px;
  }
}

/* Story Info */
.story-info {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 22px;
}

.story-avatar {
  font-size: 48px;
  line-height: 1;
  background: #f5f5f7;
  border-radius: 50%;
  width: 72px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.dark .story-avatar {
  background: #2c2c2e;
}

.story-text {
  text-align: left;
}

.story-title {
  display: block;
  font-size: 20px;
  font-weight: 600;
  color: #1d1d1f;
  text-decoration: none;
  margin-bottom: 4px;
  transition: color 0.2s;
}

.dark .story-title {
  color: #f5f5f7;
}

.story-title:hover {
  color: #0066cc;
}

.dark .story-title:hover {
  color: #2997ff;
}

.story-author {
  font-size: 15px;
  color: #86868b;
}

/* Indicators */
.indicators {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 24px;
}

.indicator-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #d2d2d7;
  border: none;
  padding: 0;
  cursor: pointer;
  transition: all 0.3s ease;
}

.dark .indicator-dot {
  background: #424245;
}

.indicator-dot:hover {
  background: #86868b;
}

.indicator-dot.active {
  width: 24px;
  border-radius: 4px;
  background: #1d1d1f;
}

.dark .indicator-dot.active {
  background: #f5f5f7;
}

</style>
