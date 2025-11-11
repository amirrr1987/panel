import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'PanelLayout',
    component: () => import('@/layouts/PanelLayout/PanelLayout.vue'),
    children: [
      {
        path: '/',
        name: 'TheDashboard',
        meta: { label: 'Home', icon: 'mdi:home' },
        component: () => import('@/views/TheDashboard.vue'),
      },
      {
        path: '/page',
        name: 'ThePage',
        meta: { label: 'page', icon: 'mdi:folder' },
        component: () => import('@/views/ThePage.vue'),
      },
    ],
  },
  {
    path: '/auth',
    name: 'AuthLayout',
    component: () => import('@/layouts/AuthLayout/AuthLayout.vue'),
    children: [
      {
        path: 'login',
        name: 'TheLogin',
        component: () => import('@/views/Auth/TheLogin.vue'),
      },
      {
        path: 'register',
        name: 'TheRegister',
        component: () => import('@/views/Auth/TheRegister.vue'),
      },
    ],
  },
]
export default routes
