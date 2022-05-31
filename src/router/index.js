import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'Home',
    component: Home,
  },
  {
    path: '/',
    // name: 'DefaultLayout',
    component: () => import('@/layouts/DefaultLayout.vue'),
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/Dashboard.vue'),
      },
      {
        path: 'feed',
        name: 'EventsFeed',
        component: () => import('@/views/EventsFeed.vue'),
      },
      {
        path: 'create-memory',
        name: 'CreateMemory',
        component: () => import('@/views/CreateMemory.vue'),
      },
      {
        path: 'memory/:id',
        name: 'Memory',
        component: () => import('@/views/EditMemory.vue'),
      },
    ],
  },
  {
    path: '/auth/',
    // name: 'AuthLayout',
    component: () => import('@/layouts/AuthLayout.vue'),
    children: [
      {
        path: 'signin',
        name: 'Authorization',
        component: () => import('@/views/Authorization.vue'),
      },
      {
        path: 'signup',
        name: 'Registration',
        component: () => import('@/views/Registration.vue'),
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
