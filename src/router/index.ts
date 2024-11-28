import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import type { routeItemType } from './router.type'
const routes: routeItemType[] = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },

  {
    path: '/',
    name: 'home',
    component: () => import('./../views/Home.vue')
  },

  {
    path: '/calenar',
    name: 'calendar',
    component: () => import('./../views/calendar.vue')
  },

  {
    path: '/sales',
    name: 'sales',
    component: () => import('../views/sales.vue')
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
