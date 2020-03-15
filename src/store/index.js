import Vue from 'vue'
import Vuex from 'vuex'
import pokemon from './pokemon'

Vue.use(Vuex)

import {
  SET_PAGE,
  GET_PAGE
} from './constans'

export default new Vuex.Store({
  state: {
    page: {
        offset: 0,
        limit: 20,
        current: null,
        total: null,
        dataCount: null,
    }
  },
  mutations: {
    [SET_PAGE](state, page) {
      state.page = page
    }
  },
  actions: {
    
  },
  getters: {
    [GET_PAGE]: (state) => state.page
  },
  modules: {
    pokemon: pokemon
  }
})
