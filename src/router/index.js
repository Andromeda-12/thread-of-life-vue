import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // name: 'DefaultLayout',
    component: () => import('@/layouts/DefaultLayout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,
      },
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/Dashboard.vue'),
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
