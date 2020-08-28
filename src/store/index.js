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
      if (payload === "ready") {
        state.instruction =
          "Press the greenish button if you want to take the full tour, the yellowish one if you want the algorithm to figure out the next step for you, or move the knight on your own"
      } else if (payload === "inaction") {
        state.instruction = "Working on it ..."
      } else {
        state.instruction = "Place the knight at an initial position and press the yellowish button"
        state.tourBtnMsg = "Take a tour"
      }
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
