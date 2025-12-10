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
        meta: { label: 'menu.dashboard', icon: 'mdi:home' },
        component: () => import('@/views/TheDashboard.vue'),
      },
      {
        path: '/profile',
        name: 'TheProfile',
        meta: { label: 'menu.profile', icon: 'mdi:user' },
        component: () => import('@/views/TheProfile.vue'),
      },
      {
        path: '/users',
        name: 'UsersList',
        meta: { label: 'menu.users', icon: 'mdi:users' },
        component: () => import('@/views/Users/List.vue'),
      },
      {
        path: '/payments',
        name: 'ThePayments',
        meta: { label: 'menu.payments', icon: 'mdi:credit-card' },
        component: () => import('@/views/Payments/List.vue'),
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
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/TheNotFound.vue'),
  },
]
export default routes
