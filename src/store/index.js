import Vue from 'vue'
import Vuex from 'vuex'
import pokemon from './pokemon'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    API_HOST: 'https://pokeapi.co/api/v2/'
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    pokemon: pokemon
  }
})
