import userService from '@/api/userService'

export default {
  namespaced: true,
  state: {
    userId: '',
    user: [],
  },
  actions: {
    async getUser({ commit }, id) {
      const { data } = await userService.getUser(id)
      console.log(data, id);
      commit('setUser', data)
    },
  },
  mutations: {
    setUser(state, user) {
      state.user = user
      state.userId = user.id
    },
  },
}
