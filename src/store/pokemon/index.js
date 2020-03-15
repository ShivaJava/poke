import axios from 'axios'

import {
    POKEMON_REQUEST,
    POKEMON_SUCCESS,
    POKEMON_ERROR,
    GET_POKEMON_REQUEST,
    GET_POKEMON,
    SET_PAGE
} from '../constans'

export default {
    state: {
        status: 'listen',
        pokemon: [],
    },
    mutations: {
        [POKEMON_REQUEST](state) {
            state.status = 'request'
        },
        [POKEMON_SUCCESS](state, data) {                      
            state.status = 'succes'
            state.pokemon = data.results // [...state.pokemon, ...data.results]
        },
        [POKEMON_ERROR](state, error) {
            state.status = 'error'
            console.log(error);
        }
    },
    actions: {
        [GET_POKEMON_REQUEST](context, { offset = context.rootState.page.offset, limit = context.rootState.page.limit } ) {
            context.commit(POKEMON_REQUEST)            
            axios.get(`${process.env.VUE_APP_API_HOST}/pokemon/?offset=${offset}&limit=${limit}`)
                .then(({data}) => {
                    const page = {
                        offset: offset, 
                        limit: limit,
                        current: (offset / limit + 1),
                        total: Math.ceil(data.count / limit),
                        dataCount: data.count
                    }
                    context.commit(SET_PAGE, page)
                    context.commit(POKEMON_SUCCESS, data)
                })
                .catch(error => context.commit(POKEMON_ERROR, error))
        }
    },
    getters: {
        [GET_POKEMON]: (state) => state.pokemon,
    }
}