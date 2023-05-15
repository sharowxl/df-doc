import Vue from 'vue'
import Vuex from 'vuex'

import modules from './modules'
import persistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    ...modules
  },
  plugins: [persistedState({storage: window.sessionStorage})]
  // strict: process.env.NODE_ENV !== 'production'
})
