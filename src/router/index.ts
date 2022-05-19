import { createRouter, createWebHistory } from 'vue-router'
import ViewHome from '@/views/ViewHome.vue'
import Moon from '@/components/content/contentDestination/destinations/Moon.vue'
import Mars from '@/components/content/contentDestination/destinations/Mars.vue'
import Europa from '@/components/content/contentDestination/destinations/Europa.vue'
import Titan from '@/components/content/contentDestination/destinations/Titan.vue'

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
      component: () => import('../views/ViewDestination.vue'),
      children: [
        { path: '', name: 'moon', component: Moon },
        { path: 'mars', name: 'mars', component: Mars },
        { path: 'europa', name: 'europa', component: Europa },
        { path: 'titan', name: 'titan', component: Titan }
      ]
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
