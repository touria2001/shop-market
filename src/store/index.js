import Vue from 'vue'
import Vuex from 'vuex'

import ProductService from '@/services/ProductService'
import CartService from '@/services/CartService'
import UserService from '@/services/UserService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: { id: 'abc', name: 'hicham maaqoul' },
    users: [],
    categories: [

    ],
    products: [],
    featuredProducts: [],
    cart: []
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
    SET_CART(state, cart) {
      state.cart = cart
    },
    SET_QUANTITY(state, product) {
      state.cart = state.cart.map((e) => {
        if (e.id === product.id) {
          e.quantity = product.quantity;
        }
        return e;
      })
    },
    DELETE_PRODUCT_FROM_CART(state, id) {
      index = state.cart.findIndex(car => car.id == id);
      state.cart.splice(index, 1);
    },
    SIGN_UP(state, user) {
      state.users.push(user);
    },
    SET_USERS(state, users) {
      state.users = users;
    }

  },
  actions: {
    fetchProducts({ commit }) {
      ProductService.getProducts()
        .then((response) => {
          commit('SET_PRODUCTS', response.data)
        })
        .catch((error) => {
          console.error(error.message)
        })
    },
    fetchFeatruedProducts({ commit }) {
      ProductService.getProducts()
        .then((response) => {
          let res = response.data.filter((p) => p.category === "Featured Products")
          commit('SET_FEATURED_PRODUCTS', res)
        })
        .catch((error) => {
          console.error(error.message)
        })
    },
    fetchCategories({ commit }) {
      ProductService.getProducts()
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
    fetchCart({ commit }) {
      CartService.getCart()
        .then((response) => {
          commit('SET_CART', response.data)
        })
        .catch((error) => {
          console.error(error.message)
        })
    },
    setQuantity({ commit }, product) {
      CartService.putProduct(product).then((response) => {
        commit('SET_QUANTITY', response.data)
      }).catch((error) => {
        console.error(error.message)
      })
    },
    deleteProductFromCart({ commit }, id) {
      CartService.deleteProduct(id).then((response) => {

        commit('DELETE_PRODUCT_FROM_CART', id)
      }).catch((error) => {
        console.error(error.message)
      })
    },
    signUp({ commit }, user) {
      let successSignUp = true;
      UserService.postUser(user).then((response) => {
        commit('SIGN_UP', user)
      }).catch((error) => {
        console.error(error.message)
        successSignUp = false;
      })
      return successSignUp;
    },
    getUsers({ commit }, email) {
      UserService.getUsers().then((response) => {
        commit('SET_USERS', response.data)
      }).catch((error) => {
        console.error(error.message)
      })
    }



  },
  modules: {},
})
