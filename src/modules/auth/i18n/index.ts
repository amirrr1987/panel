import { createI18n } from 'vue-i18n'

import en from './locales/en'
import fa from './locales/fa'

export const authI18n = createI18n({
  legacy: false,
  locale: 'fa',
  fallbackLocale: 'en',
  messages: { en, fa },
})
