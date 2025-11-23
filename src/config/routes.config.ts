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
      {
        path: '/profile',
        name: 'TheProfile',
        meta: { label: 'profile', icon: 'mdi:user' },
        component: () => import('@/views/TheProfile.vue'),
      },
      {
        path: '/users',
        name: 'UsersList',
        meta: { label: 'users', icon: 'mdi:users' },
        component: () => import('@/views/Users/List.vue'),
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
