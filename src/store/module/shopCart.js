/**
 * Created by Jesonhu on 2017/7/13.
 */
import axios from 'axios'

const state = {
  selectedGoods: []
}

const actions = {
  // 请求后台获取shopCart购物车数据
  fetchGet ({ commit }) {
    axios.get('/api/shopcart')
      .then((res) => {
        if (res.status === 200) {
          console.log('init shopCart data')
          // resolve(res.data.data)
          // console.log(res.data.data)
          commit('INIT_GET_SHOPCART', res.data.data)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

const getters = { // 类似利于computed
  // 已经加入购物车商品总数量
  totalCount: state => {
    let total = 0
    const length = state.selectedGoods.length
    if (length > 0) {
      state.selectedGoods.forEach((item) => {
        total += item.count
      })
    }
    return total
  }
}

const mutations = {
  // 初始后台数据到vuex购物车
  INIT_GET_SHOPCART (state, playload) {
    console.log(1)
    state.selectedGoods = playload
    console.log([1, 2])
    console.log(playload)
  }
}

// 模块化写法必须暴露出去
export default {
  state,
  actions,
  getters,
  mutations
}
