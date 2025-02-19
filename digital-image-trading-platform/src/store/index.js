import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    cart: [],
    purchaseHistory: []
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    ADD_TO_CART(state, image) {
      state.cart.push(image);
    },
    REMOVE_FROM_CART(state, imageId) {
      state.cart = state.cart.filter(image => image.id !== imageId);
    },
    CLEAR_CART(state) {
      state.cart = [];
    },
    ADD_TO_PURCHASE_HISTORY(state, purchase) {
      state.purchaseHistory.push(purchase);
    }
  },
  actions: {
    login({ commit }, user) {
      commit('SET_USER', user);
    },
    logout({ commit }) {
      commit('SET_USER', null);
    },
    addToCart({ commit }, image) {
      commit('ADD_TO_CART', image);
    },
    removeFromCart({ commit }, imageId) {
      commit('REMOVE_FROM_CART', imageId);
    },
    clearCart({ commit }) {
      commit('CLEAR_CART');
    },
    addToPurchaseHistory({ commit }, purchase) {
      commit('ADD_TO_PURCHASE_HISTORY', purchase);
    }
  },
  getters: {
    isAuthenticated: state => !!state.user,
    cartItems: state => state.cart,
    purchaseHistory: state => state.purchaseHistory
  }
});