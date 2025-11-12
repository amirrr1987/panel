import { createRouter, createWebHistory } from 'vue-router'
import routes from '../config/routes.config'
import { start, done, configure } from 'nprogress'
import { useLoading } from '@/composable/useLoading'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})
configure({
  easing: 'easeInOut',
})

const { setLoading } = useLoading()

router.beforeEach((to, from, next) => {
  start()
  setLoading(true)
  if (to.name === 'TheLogin' || to.name === 'TheRegister') {
    next()
    return
  }
  if (!localStorage.getItem('token')) {
    next({ name: 'TheLogin' })
    return
  }
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
