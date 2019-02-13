export const increment = state => {
    state.count = state.count + 5
}

export const decrement = state => {
    state.count = state.count - 3
}


// 传参时

// export const increment = (state, param) => {
//     state.count = state.count + param
// }

// export const decrement = (state, param) => {
//     state.count = state.count - param
// }