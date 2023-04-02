import Vue from 'vue'
import Vuex from 'vuex'

import MakeUpService from '@/services/MakeUpService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: { id: 'abc', name: 'hicham maaqoul' },
    categories: [

    ],
    products: [],
    featuredProducts: []
  },
  getters: {
    catLength: (state) => state.categories.length,
  },
  mutations: {

    SET_PRODUCTS(state, products) {
      state.products = products
    },
    SET_FEATURED_PRODUCTS(state, products) {
      state.featuredProducts = products
    },
    SET_CATEGORIES(state, categories) {
      state.categories = categories
    },

  },
  actions: {
    fetchProducts({ commit }) {
      MakeUpService.getMakeUpProducts()
        .then((response) => {
          commit('SET_PRODUCTS', response.data)
        })
        .catch((error) => {
          console.error(error.message)
        })
    },
    fetchFeatruedProducts({ commit }) {
      MakeUpService.getMakeUpProducts()
        .then((response) => {
          let res = response.data.filter((p) => p.category === "Featured Products")
          commit('SET_FEATURED_PRODUCTS', res)
        })
        .catch((error) => {
          console.error(error.message)
        })
    },
    fetchCategories({ commit }) {
      MakeUpService.getMakeUpProducts()
        .then((response) => {
          let res = [];
          response.data.forEach((obj) => {
            if (!res.includes(obj.category)) {
              res.push(obj.category);
            }
          })
          commit('SET_CATEGORIES', res)
        })
        .catch((error) => {
          console.error(error.message)
        })
    },
  },
  modules: {},
})
