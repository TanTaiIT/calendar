import { createRouter, createWebHistory } from 'vue-router'
import Login from './../views/Login.vue'
import type { routeItemType } from './router.type'
const routes: routeItemType[] = [
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
