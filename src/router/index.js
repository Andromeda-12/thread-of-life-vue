import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Authorization from '../views/Authorization.vue'
import AuthLayout from '../layouts/AuthLayout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },

  {
    path: '/auth/',
    name: 'AuthLayout',
    component: AuthLayout,
    children: [
      {
        path: 'signin',
        name: 'Authorization',
        component: Authorization,
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
