import Vue from 'vue'
import Vuex from 'vuex'
import { board } from '../api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isAddBoard: false,
    boards: []
  },
  mutations: {
    SET_IS_ADD_BOARD(state, toggle) {
      state.isAddBoard = toggle
    },
    SET_BOARDS(state, boards) {
      state.boards = boards
    }
  },
  actions: {
    ADD_BOARD(_, { title }) {
      console.log('ADD_BOARD: ' + title)
      return board.create(title)
    },
    FETCH_BOARDS({ commit }) {
      return board.fetch().then(data => commit('SET_BOARDS', data.list))
    }
  }
})

export default store
