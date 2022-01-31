import { createStore } from 'vuex'

export default createStore({
  state: {
    searchTerm: ''
  },
  mutations: {
    updateSearchTerm(state, searchTerm: string) {
      state.searchTerm = searchTerm;
    }
  },
  actions: {
  },
  modules: {
  }
})
