export const increment = ({ commit }) => commit('increment')
export const decrement = ({ commit }) => commit('decrement')

// 传参时
// export const increment = ({ commit }, param) => commit('increment', param)
// export const decrement = ({ commit }, param) => commit('defcrement', param)