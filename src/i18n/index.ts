import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import enTranslation from './en'
import faTranslation from './fa'
import I18NextVue from 'i18next-vue'

const resources = {
  en: enTranslation,
  fa: faTranslation,
}

i18n.use(LanguageDetector)
i18n.init({
  resources,
  fallbackLng: 'fa',
  detection: {
    order: ['localStorage', 'navigator'],
    caches: ['localStorage'],
  },
  interpolation: {
    escapeValue: false,
  },
})

export { i18n, I18NextVue }
