
import { createRouter, createWebHistory } from 'vue-router'

 const Home = () => import('../views/HomeView.vue')
 const About = () => import('../views/AboutView.vue')
 const Movies = () =>import('../views/moviesView.vue')
 const NotFound = () => import('../views/noteFound.vue')
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path:'/movies',
      name:'movies',
      component: Movies
    },
    {
      path:'/:pathMatch(.*)*',
      name:'NotFound',
      component:NotFound
    }
  ]
})

export default router
