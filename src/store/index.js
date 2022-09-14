import Vue from 'vue'
import Vuex from 'vuex'
import users from './users'
import message from './message'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    users,message
  }
})
