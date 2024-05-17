import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/DigitalEducationVue.vue'
import AboutView from '../views/AboutView.vue'
import ExamplesView from '../views/ExamplesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutView
    },
    {
      path: '/examples',
      name: 'examples',
      component: ExamplesView
    }
  ]
})

export default router
