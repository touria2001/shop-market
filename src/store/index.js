import Vue from 'vue'
import Vuex from 'vuex'

import ProductService from '@/services/ProductService'
import CartService from '@/services/CartService'
import UserService from '@/services/UserService'
import VueRouter from "@/router/index";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    users: [],
    categories: [],
    products: [],
    featuredProducts: [],
    cart: [],
    reviews: [],
    product: null,
  },

  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products
    },
    SET_PRODUCT(state, product) {
      state.product = product
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
    ADD_TO_REVIEWS(state, review) {
      state.reviews.push(review)
    },
    SET_REVIEWS(state, reviews) {
      state.reviews = reviews
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
    },
    SET_PRODUCT_TO_CART(state, user, product) {
      state.users = state.users.map((e) => {
        if (e.id === user.id) {
          return { ...e, cart: [...e.cart, product] };
        }
        return e;
      })
    },
    SET_USER(state, user) {
      state.user = user;
    },
    CLEAN_CART(state) {
      state.cart = [];
    },
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
    fetchCart({ commit }, id) {

      UserService.getUserById(id)
        .then((response) => {
          commit('SET_CART', response.data.cart)
        })
        .catch((error) => {
          console.error(error.message)
        })
    },
    setQuantity({ commit }, { product, id }) {

      let cart = [...this.state.cart.map((e) => {
        if (e.id === product.id) {
          return { ...e, quantity: product.quantity };
        }
        return e;
      })]

      UserService.putCartOfUser(id, cart).then((response) => {
        commit('SET_QUANTITY', response.data.cart)
      }).catch((error) => {
        console.error(error.message)
      })


    },


    deleteProduct({ commit }, { product, id }) {

      let cart = this.state.cart.filter(p => p.id !== product.id);

      UserService.deleteProductFromCart(id, cart)

        .then((response) => {

          commit('REMOVE_FROM_CART', product.id);

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
    signIn({ commit }, {email, password}) {
      UserService.getUsers().then((res) => {

        res.data.forEach((user) => {
          if(user.email === email && user.password === password){
            sessionStorage.setItem("user", user.id);
            commit('SET_USER', { id: user.id })
           
            if (user.cart != null && user.cart.length > 0) {
              VueRouter.push({ name: 'cart' })
            } else {
              VueRouter.push({ name: 'home' })
            }
          }
        })
        
      }).catch((error) => { console.error(error.message) })

    },
    getUsers({ commit }, email) {
      UserService.getUsers().then((response) => {
        commit('SET_USERS', response.data)
      }).catch((error) => {
        console.error(error.message)
      })
    },
    setProductInCart({ commit }, { product, id }) {
      UserService.getUserById(id).then((response) => {
        commit('SET_USER', { id: response.data.id });
        product = { ...product, quantity: 1 };
        let cartItem = [product];
        if (response.data.cart != null) {
          cartItem = [...response.data.cart, product];
        }
        let user = {
          id: response.data.id,
          username: response.data.username,
          password: response.data.password, email: response.data.email,
          cart: cartItem
        };


        if ((response.data.cart != null && !response.data.cart.some((p) => p.id === product.id) || response.data.cart == null)) {

          UserService.putUser(user).then((res) => {
            commit('SET_PRODUCT_TO_CART', response.data, product)
            commit('SET_CART', res.data.cart)
          }).catch((error) => {
            console.error(error.message)
          })
        }
      }).catch((error) => {
        console.error(error.message)
      })

    },
    setUser({ commit }, id) {
      UserService.getUserById(id).then((response) => {
        commit('SET_USER', response.data)
      }).catch((error) => {
        console.error(error.message)
      })
    },
    cleanCartAfterConfirm({ commit }, idUser) {
      let cart = [];
      UserService.deleteProductFromCart(idUser, cart)
        .then((response) => {
          commit('CLEAN_CART');
        }).catch((error) => {
          console.error(error.message)
        })
    },
    addReview({ commit }, { id, review }) {
      ProductService.getProduct(id)
        .then((response) => {

          if (response.data.reviews != null) {
            this.state.reviews = [...response.data.reviews, review];
          }
          else {
            this.state.reviews.push(review);
          }
          try {
            ProductService.addReviewAboutProduct(id, this.state.reviews)
              .then(() => {
                commit('ADD_TO_REVIEWS', review);
                ProductService.getProduct(id)
                  .then((response) => {
                    commit('SET_PRODUCT', response.data);
                  })
                  .catch((error) => {
                    console.error(error.message)
                  });

              })
          } catch (error) {
            console.log(error);
          }
        })
        .catch((error) => {
          console.error(error.message)
        });

    },
    getProductById({ commit }, id) {
      ProductService.getProduct(id)
        .then((response) => {

          commit('SET_PRODUCT', response.data)
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
    logout() {
      commit('SET_USER', null)
    }



  },
  modules: {},
})
