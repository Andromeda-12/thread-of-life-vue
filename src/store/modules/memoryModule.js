import memoryService from '@/api/memoryService'

export default {
  namespaced: true,
  state: {
    memories: [],
    currentMemory: null,
  },
  actions: {
    async getUserMemories({ commit }, useId) {
      const { data } = await memoryService.getMemories(useId)
      commit('setUserMemories', data)
    },
    async getMemory({ commit }, memoryId) {
      const { data } = await memoryService.getMemory(memoryId)
      console.log(data);
      commit('setCurrentMemory', data)
    },
    async createUserMemoryAction({ commit }, memory) {
      const { data } = await memoryService.createMemory(memory)
      commit('addUserMemory', data)
    },
    async deleteMemory({commit}, memoryId) {
      await memoryService.deleteMemory(memoryId)
    },
    async editMemory({commit}, memory) {
      await memoryService.editMemory(memory)
    }
  },
  mutations: {
    setUserMemories(state, memories) {
      state.memories = memories
    },
    addUserMemory(state, newMemory) {
      state.memories = [newMemory, ...state.memories]
    },
    setCurrentMemory(state, memory) {
      state.currentMemory = memory
    },
  },
}
