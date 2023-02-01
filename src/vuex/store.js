import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        products: []
    },
    mutations: {
        SET_PRODUCTS_TO_STATE: (state, products) => {
            state.products = products.result.values
        }
    },
    actions: {
         GET_PRODUCTS_FROM_API({commit}) {
             return axios('http://localhost:37221/getProducts', {
                 method: 'POST'
             })
                 .then((products) => {
                     commit('SET_PRODUCTS_TO_STATE', products.data)
                     return products.data
                 })
                 .catch((error) => {
                     console.log(error)
                     return error
                 })
         }
    },
    getters: {
        PRODUCTS(state) {
            return state.products
        }
    }
})

export default store
