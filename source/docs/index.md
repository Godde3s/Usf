---
layout: home
title: Usf
description: Reza Bazdar (Godde3s) — portfolio in English and Spanish.
---

<script setup>
import { onMounted } from 'vue'
import { withBase } from 'vitepress'

const WELCOME_SEEN_KEY = 'easy-vibe-welcome-seen'

onMounted(() => {
  const langMap = {
    'en': '/en/',
    'en-us': '/en/',
    'en-gb': '/en/',
    'es': '/es/',
    'es-es': '/es/'
  }

  const browserLang = navigator.language.toLowerCase()
  const browserLangShort = browserLang.split('-')[0]

  let targetLang = langMap[browserLang] || langMap[browserLangShort]

  if (!targetLang) {
    targetLang = '/en/'
  }

  const targetPath = withBase(targetLang)
  let hasSeenWelcome = false
  try {
    hasSeenWelcome = window.localStorage.getItem(WELCOME_SEEN_KEY) === '1'
  } catch {
    hasSeenWelcome = false
  }

  if (!hasSeenWelcome) {
    window.location.replace(
      withBase(`/welcome?next=${encodeURIComponent(targetPath)}`)
    )
    return
  }

  window.location.replace(targetPath)
})
</script>
