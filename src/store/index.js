import Vue from 'vue'
import Vuex from 'vuex'

import shopCart from './module/shopCart'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    shopCart
  }
})
