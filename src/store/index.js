import Vue from 'vue'
import Vuex from 'vuex'

import authModule from './modules/authModule'
import userModule from './modules/userModule'
import memoryModule from './modules/memoryModule'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    authModule,
    userModule,
    memoryModule,
  },
})
