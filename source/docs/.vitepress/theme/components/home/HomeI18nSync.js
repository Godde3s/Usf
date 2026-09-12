// Synchronizes cross-locale interaction labels for the home page.
// All card content is authored complete per locale in HomeI18n.js —
// this pass only fills the shared UI vocabulary (stage2 "more" link text
// and appendix carousel controls) so nothing can go missing at runtime.

const interactionLabels = {
  en: {
    more: 'Read the build notes',
    ui: ['Previous project', 'Next project', 'Open this skill', 'Skill illustration']
  },
  es: {
    more: 'Leer las notas de construcción',
    ui: ['Proyecto anterior', 'Proyecto siguiente', 'Abrir esta habilidad', 'Ilustración de la habilidad']
  }
}

export const synchronizeHomeTranslations = (messages) => {
  for (const [locale, { more, ui }] of Object.entries(interactionLabels)) {
    if (!messages[locale]) continue
    messages[locale].stage2.more = more
    messages[locale].appendix.ui = { previous: ui[0], next: ui[1], selectLabel: ui[2], imageAlt: ui[3] }
  }
}
