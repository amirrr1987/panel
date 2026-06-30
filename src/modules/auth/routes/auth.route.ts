import type { RouteRecordRaw } from 'vue-router'
import { AUTH_ROUTE_NAME } from '../models/auth.const.ts'

export const authRoutes: RouteRecordRaw[] = [
  {
    path: '/auth',
    name: AUTH_ROUTE_NAME.AUTH,
    component: () => import('../layouts/AuthLayout.vue'),
    meta: { guest: true },
    redirect: { name: AUTH_ROUTE_NAME.AUTH_LOGIN },
    children: [
      {
        path: 'login',
        name: AUTH_ROUTE_NAME.AUTH_LOGIN,
        component: () => import('../views/LoginView.vue'),
        meta: { title: 'auth.login.title', guest: true },
      },

    ],
  },
  {
    path: '/login',
    redirect: { name: AUTH_ROUTE_NAME.AUTH_LOGIN },
  },
  {
    path: '/auth:pathMatch(.*)*',
    redirect: { name: AUTH_ROUTE_NAME.AUTH_LOGIN },
  }
]
