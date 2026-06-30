export { authRoutes } from './routes/auth.route'
export { useAuthStore } from './stores/auth.store'
export { useAuthService } from './services/auth.service'
export { useAuthLogin } from './composables/useAuthLogin'
export type { AuthUser } from './models/auth.model'
export type { ILoginRequestDTO, } from '@/api/data-contracts'
export { AUTH_ROUTE_NAME, AUTH_STORAGE_KEY, AUTH_API_VERSION } from './models/auth.const'
import { VueQueryPlugin, QueryClient } from '@tanstack/vue-query'
import { createHead } from '@vueuse/head'
import type { App } from 'vue'

import { authI18n } from './i18n'

export const authQueryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      retry: false,
    },
  },
})

export function installAuthModule(app: App) {
  app.use(authI18n)
  app.use(createHead({
    title: 'Auth',
    titleTemplate: '%s - Auth',
    meta: [
      { name: 'description', content: 'Auth' },
    ],
  }))
  app.use(VueQueryPlugin, { queryClient: authQueryClient })
}
