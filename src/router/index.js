
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Hobby from '../pages/Hobby.vue'
import Formation from '../pages/Formation.vue'
import Experience from '../pages/Experience.vue'
import Projet from '../pages/Projet.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/hobby', component: Hobby },
    { path: '/formation', component: Formation },
    { path: '/experience', component: Experience },
    { path: '/projet', component: Projet }
  ]
})

export default router
