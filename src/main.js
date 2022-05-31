import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import './assets/scss/base.scss'
import store from './store'
import interceptorsSetup from './api/interceptors'

Vue.config.productionTip = false

interceptorsSetup()

new Vue({
  router,
  vuetify,
  store,
  render: (h) => h(App),
}).$mount('#app')
