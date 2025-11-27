import { createRouter, createWebHistory } from 'vue-router'
import routes from '@/config/routes.config'
import { start, done, configure } from 'nprogress'
import { useLoading } from '@/composable/useLoading'
import { useTabStore } from '@/stores/tab.store'
import { useAuthStore } from '@/stores/auth.store'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})
configure({
  easing: 'easeInOut',
  showSpinner: false,
})

const { setLoading } = useLoading()

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()

  // Allow access to login and register pages without authentication checks
  // if (to.name === 'TheLogin' || to.name === 'TheRegister') {
  //   next()
  //   return
  // }

  // Check if token is expired (only for protected routes)
  // if (!authStore.loginData.access_token || authStore.isExpired()) {
  //   next({ name: 'TheLogin' })
  //   return
  // }

  // User is authenticated, proceed with navigation
  start()
  setLoading(true)
  const tabStore = useTabStore()
  tabStore.addTab(to)
  next()
})
let doneTimeout: number | null = null
router.afterEach(() => {
  if (doneTimeout) clearTimeout(doneTimeout)
  doneTimeout = window.setTimeout(() => {
    done()
    setLoading(false)
  }, 400)
})
export default router
