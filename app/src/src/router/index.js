import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Index from '@/views/Index.vue'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import What2Cook from '@/views/What2Cook.vue'
import RandomFood from '@/views/RandomFood.vue'
import ViewDetail from '@/views/ViewDetail.vue'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/what2cook',
    name: 'What2Cook',
    component: What2Cook
  },
  {
    path: '/random',
    name: 'RandomFood',
    component: RandomFood
  },
  {
    path: '/detail/:id?',
    name: 'DishDetail',
    component: ViewDetail,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
