// Usf portfolio — theme entry (slimmed easy-vibe theme).
// Registers the global components used across the docs and reproduces
// the original runtime behaviors: image viewer, collapsible code blocks
// and responsive image geometry.
import DefaultTheme from 'vitepress/theme'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Viewer from 'viewerjs'
import 'viewerjs/dist/viewer.css'
import { nextTick, onBeforeUnmount, onMounted, watch } from 'vue'
import { useRoute, useData } from 'vitepress'
import './style.css'
import Layout from './Layout.vue'
import HomeFeatures from './components/HomeFeatures.vue'
import WelcomeScreen from './components/WelcomeScreen.vue'
import NavGrid from './components/NavGrid.vue'
import NavCard from './components/NavCard.vue'
import RelatedArticlesSection from './components/RelatedArticlesSection.vue'
import StepBar from './components/StepBar.vue'
import ChapterIntroduction from './components/ChapterIntroduction.vue'
import ReadingProgress from './components/ReadingProgress.vue'
import SummaryCard from './components/SummaryCard.vue'
import Tabs from './components/Tabs.vue'
import TabItem from './components/TabItem.vue'
import VibeStories from './components/VibeStories.vue'
import CopyOrDownloadAsMarkdownButtons from './components/CopyOrDownloadAsMarkdownButtons/index.vue'
import TextType from './components/TextType.vue'

export default {
  ...DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.use(ElementPlus)
    app.component('HomeFeatures', HomeFeatures)
    app.component('WelcomeScreen', WelcomeScreen)
    app.component('NavGrid', NavGrid)
    app.component('NavCard', NavCard)
    app.component('RelatedArticlesSection', RelatedArticlesSection)
    app.component('RelatedArticles', RelatedArticlesSection)
    app.component('StepBar', StepBar)
    app.component('ChapterIntroduction', ChapterIntroduction)
    app.component('ReadingProgress', ReadingProgress)
    app.component('SummaryCard', SummaryCard)
    app.component('Tabs', Tabs)
    app.component('TabItem', TabItem)
    app.component('VibeStories', VibeStories)
    app.component('TextType', TextType)
    app.component('CopyOrDownloadAsMarkdownButtons', CopyOrDownloadAsMarkdownButtons)
  },
  setup() {
    const route = useRoute()
    let viewer = null
    const COLLAPSIBLE_CODE_MIN_LINES = 14

    if (import.meta.env.SSR) {
      return
    }

    const getCodeToggleLabels = () => {
      const isSpanishRoute = route.path.startsWith('/es/')

      if (isSpanishRoute) {
        return { expand: 'Expandir código', collapse: 'Contraer código' }
      }
      return {
        expand: 'Expand code',
        collapse: 'Collapse code'
      }
    }

    const getCodeLineCount = (source) => {
      const normalized = source.replace(/\s+$/, '')
      if (!normalized) return 0
      return normalized.split('\n').length
    }

    const updateCodeToggleButton = (block, button, lineCount) => {
      const labels = getCodeToggleLabels()
      const isCollapsed = block.classList.contains('is-code-collapsed')
      const nextLabel = isCollapsed ? labels.expand : labels.collapse

      button.textContent = `${nextLabel} (${lineCount})`
      button.setAttribute('aria-expanded', String(!isCollapsed))
      button.setAttribute('title', nextLabel)
    }

    const initCollapsibleCodeBlocks = () => {
      const codeBlocks = document.querySelectorAll(
        '.vp-doc div[class*="language-"]:not(.language-mermaid)'
      )

      codeBlocks.forEach((block) => {
        const pre = block.querySelector('pre')
        const code = pre?.querySelector('code')
        if (!pre || !code) return

        const lineCount = getCodeLineCount(code.textContent ?? '')
        const existingToggle = block.querySelector('.code-collapse-toggle')

        if (lineCount < COLLAPSIBLE_CODE_MIN_LINES) {
          block.classList.remove('is-collapsible-code', 'is-code-collapsed')
          existingToggle?.remove()
          return
        }

        block.classList.add('is-collapsible-code')

        let toggle = existingToggle
        if (!toggle) {
          toggle = document.createElement('button')
          toggle.type = 'button'
          toggle.className = 'code-collapse-toggle'
          toggle.addEventListener('click', () => {
            block.classList.toggle('is-code-collapsed')
            updateCodeToggleButton(block, toggle, lineCount)
          })
          block.append(toggle)
        }

        block.classList.add('is-code-collapsed')
        updateCodeToggleButton(block, toggle, lineCount)
      })
    }

    const initViewer = () => {
      if (viewer) {
        viewer.destroy()
        viewer = null
      }

      const doc = document.querySelector('.vp-doc')
      if (doc) {
        viewer = new Viewer(doc, {
          button: true,
          navbar: true,
          title: true,
          toolbar: true,
          tooltip: true,
          movable: true,
          zoomable: true,
          rotatable: true,
          scalable: true,
          transition: false,
          fullscreen: true,
          shown() {
            document.body.classList.add('viewer-ready')
          },
          hide() {
            document.body.classList.remove('viewer-ready')
          },
          keyboard: true,
          url: 'src',
          filter(image) {
            return (
              !image.classList.contains('no-viewer') &&
              !image.classList.contains('nav-title-logo')
            )
          }
        })
      }
    }

    const optimizeImages = () => {
      const images = document.querySelectorAll('.vp-doc img')
      images.forEach((img) => {
        if (img.complete) {
          applyImageStyle(img)
        } else {
          img.onload = () => applyImageStyle(img)
        }
      })
    }

    const applyImageStyle = (img) => {
      if (
        img.closest('.VPHome') ||
        img.classList.contains('nav-title-logo') ||
        img.classList.contains('no-viewer')
      ) {
        return
      }
      const { naturalWidth, naturalHeight } = img
      if (!naturalWidth || !naturalHeight) return

      const ratio = naturalHeight / naturalWidth
      img.classList.remove(
        'img-tall',
        'img-very-tall',
        'img-ultra-tall',
        'img-limit-width',
        'img-limit-height'
      )

      img.style.maxWidth = ''
      img.style.maxHeight = ''
      img.style.width = ''
      img.style.height = ''

      if (ratio <= 1) {
        img.classList.add('img-limit-width')
        return
      }

      img.classList.add('img-tall')
      if (ratio > 2.2) {
        img.classList.add('img-ultra-tall')
      } else if (ratio > 1.3) {
        img.classList.add('img-very-tall')
      }
    }

    onMounted(() => {
      initViewer()
      optimizeImages()
      initCollapsibleCodeBlocks()
    })

    watch(
      () => route.path,
      () =>
        nextTick(() => {
          initViewer()
          optimizeImages()
          initCollapsibleCodeBlocks()
        })
    )

    onBeforeUnmount(() => {
      if (viewer) {
        viewer.destroy()
        viewer = null
      }
    })
  }
}
