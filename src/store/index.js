import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    boardState: "unready",
    tourBtnMsg: "Take a tour",
    instruction: "Place the knight at an initial position and press the yellowish button"
  },
  mutations: {
    UPDATE_BOARD_STATE(state, payload) {
      state.boardState = payload
    },
    UPDATE_TOUR_BTN_MSG(state, msg) {
      state.tourBtnMsg = msg
    },
    UPDATE_INSTRUCTION(state, msg) {
      state.instruction = msg
    }
  },
  actions: {
    updateBoardState({ commit }, payload) {
      commit("UPDATE_BOARD_STATE", payload)
    },
    updateTourBtnMsg({ commit }, msg) {
      commit("UPDATE_TOUR_BTN_MSG", msg)
    },
    updateInstruction({ commit }, msg) {
      commit("UPDATE_INSTRUCTION", msg)
    }
  },
  getters: {
    boardState: ({ boardState }) => boardState,
    tourBtnMsg: ({ tourBtnMsg }) => tourBtnMsg,
    instruction: ({ instruction }) => instruction
  }
})
