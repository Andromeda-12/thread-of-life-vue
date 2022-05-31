import authService from '@/api/authService'

export default {
  namespaced: true,
  state: {
    token: localStorage.getItem('token') || '',
    // refresh: localStorage.getItem('refresh') || '',
  },
  actions: {
    async register(context, credential) {
      await authService.register(credential)
    },

    async obtain({ commit }, credential) {
      const {
        data: { token },
      } = await authService.obtain(credential)
      commit('setToken', token)
      // commit(SET_REFRESH, refresh)
    },

    // async refresh({ commit, state }) {
    //   const data = {
    //     refresh: state.refresh,
    //   }

    //   const {
    //     data: { access, refresh },
    //   } = await refreshToken(data)

    //   commit(SET_ACCESS, access)
    //   commit(SET_REFRESH, refresh)
    // },
  },
  mutations: {
    setToken(state, token) {
      state.token = token      
      localStorage.setItem('token', token)
    },

    // setRefresh(state, refresh) {
    //   state.refresh = refresh
    //   localStorage.setItem('refresh', refresh)
    // },

    logout(state) {
      state.token = ''
      // state.refresh = ''
      localStorage.removeItem('token')
      // localStorage.removeItem('refresh')
    },
  },
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
}
