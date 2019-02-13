import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'

Vue.use(Vuex)

// 首先声明一个状态 state

const state = {
    count: 0
}

// // 然后给actions注册事件处理函数，当这个函数被触发时，将状态提交到mutaions中处理

// const actions = {
//     increment: ({ commit }) => commit('increment'), // 提交到mutations中处理
//     decrement: ({ commit }) => commit('decrement')
//   }
//   // 更新状态
//   const mutations = {
//     increment (state) {
//       state.count = state.count + 5
//     },
//     decrement (state) {
//       state.count = state.count - 3
//     }
//   }
//   // 获取状态信息
//   const getters = {
//   }

// 关键：所有模块，注册才能使用

const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})

export default store