import { createRouter, createWebHistory } from 'vue-router'
import ViewHome from '@/views/ViewHome.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ViewHome
    },
    {
      path: '/destination',
      name: 'destination',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ViewDestination.vue')
    },
    {
      path: '/crew',
      name: 'crew',
      component: () => import('../views/ViewCrew.vue')
    },
    {
      path: '/technology',
      name: 'technology',
      component: () => import('../views/ViewTechnology.vue')
    }
  ]
})

export default router
