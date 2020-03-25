import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    state: { count: 1 },
    mutations: {
      add (state) {
        state.count += 1
      },
      init (state, count) {
        state.count = count
      }
    },
    actions: {
      getCount ({ commit }) {
        return new Promise(resolve => {
          setTimeout(() => {
            commit('init', Math.random() * 10)
            resolve()
          }, 1000)
        })
      }
    }
  })
}
