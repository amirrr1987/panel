import { VueQueryPlugin, QueryClient } from '@tanstack/vue-query'
import { createHead } from '@vueuse/head'
import type { App } from 'vue'

import { authI18n } from '../i18n'

export const authQueryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      retry: false,
    },
  },
})

export function installAuthModule(app: App) {
  app.use(authI18n)
  app.use(createHead())
  app.use(VueQueryPlugin, { queryClient: authQueryClient })
}
