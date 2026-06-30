import { createRouter, createWebHistory } from 'vue-router'
import { authRoutes } from '@/modules/auth/routes/auth.route'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...authRoutes,
    {
      path: '/',
      component: () => import('@core/layout/PanelLayout.vue'),
      meta: { requiresAuth: true },
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@core/views/HomeView.vue'),
        },
      ],
    },
  ],
})

router.beforeEach(async (to) => {
  const authStore = await import('@/modules/auth/stores/auth.store').then(m => m.useAuthStore())

  if (to.meta.guest && authStore.isAuthenticated) {
    return { name: 'home' }
  }

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    return {
      name: 'auth.login',
      query: { redirect: to.fullPath },
    }
  }
})

export default router
