import axios from 'axios'

import {
    ABILITIES_REQUEST,
    ABILITIES_SUCCESS,
    ABILITIES_ERROR,
    GET_ABILITIES_REQUEST,
    GET_ABILITIES,
    SET_PAGE
} from '../constans'

export default {
    state: {
        status: 'listen',
        abilities: [],
    },
    mutations: {
        [ABILITIES_REQUEST](state) {
            state.status = 'request'
        },
        [ABILITIES_SUCCESS](state, data) {                      
            state.status = 'succes'
            state.abilities = data.results // [...state.pokemon, ...data.results]
        },
        [ABILITIES_ERROR](state, error) {
            state.status = 'error'
            console.log(error);
        }
    },
    actions: {
        [GET_ABILITIES_REQUEST](context, { offset = context.rootState.page.offset, limit = context.rootState.page.limit } ) {
            context.commit(ABILITIES_REQUEST)            
            axios.get(`${process.env.VUE_APP_API_HOST}/ability/?offset=${offset}&limit=${limit}`)
                .then(({data}) => {
                    const page = {
                        offset: offset, 
                        limit: limit,
                        current: (offset / limit + 1),
                        total: Math.ceil(data.count / limit),
                        dataCount: data.count
                    }
                    context.commit(SET_PAGE, page)
                    context.commit(ABILITIES_SUCCESS, data)
                })
                .catch(error => context.commit(ABILITIES_ERROR, error))
        }
    },
    getters: {
        [GET_ABILITIES]: (state) => state.abilities,
    }
}