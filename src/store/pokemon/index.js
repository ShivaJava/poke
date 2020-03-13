import axios from 'axios'

import {
    POKEMON_REQUEST,
    POKEMON_SUCCESS,
    POKEMON_ERROR,
    GET_POKEMON_REQUEST,
    GET_POKEMON
} from './constans'

export default {
    state: {
        status: 'listen',
        pokemon: [],
        page: {
            limit: 5,
            offset: 0,
        }
    },
    mutations: {
        [POKEMON_REQUEST](state) {
            state.status = 'request'
        },
        [POKEMON_SUCCESS](state, data) {
            state.status = 'succes'
            state.pokemon = [...state.pokemon, ...data]
        },
        [POKEMON_ERROR](state, error) {
            state.status = 'error'
            console.log(error);
        }
    },
    actions: {
        [GET_POKEMON_REQUEST]({commit, state}, limit = state.page.limit, offset = state.page.offset) {
            commit(POKEMON_REQUEST)            
            axios.get(`${process.env.VUE_APP_API_HOST}/pokemon/?limit=${limit}&offset=${offset}`)
                .then(({data}) => {                   
                    commit(POKEMON_SUCCESS, data.results)
                })
                .catch(error => commit(POKEMON_ERROR, error))
        }
    },
    getters: {
        [GET_POKEMON]: (state) => state.pokemon
    }
}