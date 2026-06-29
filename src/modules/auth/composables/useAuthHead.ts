import { useHead } from '@vueuse/head'
import { useI18n } from 'vue-i18n'

export function useAuthHead(translationKey = 'auth.login.title') {
  const { t } = useI18n()

  useHead({
    title: () => t(translationKey),
  })
}
