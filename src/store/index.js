import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    delayTime: 150,
    boardState: "unready",
    tourBtnMsg: "Take a tour",
    instruction: "Place the knight at an initial position and press I'm ready"
  },
  mutations: {
    UPDATE_DELAY_TIME(state, delay) {
      state.delayTime = delay
    },
    UPDATE_BOARD_STATE(state, payload) {
      state.boardState = payload
      if (payload === "ready") {
        state.instruction =
          "Press the greenish button if you want to take the full tour, the yellowish one if you want the algorithm to figure out the next step for you, or move the knight on your own"
      } else if (payload === "inaction") {
        state.instruction = "Working on it ..."
      } else {
        state.tourBtnMsg = "Take a tour"
        state.instruction = "Place the knight at an initial position and press I'm ready"
      }
    },
    UPDATE_TOUR_BTN_MSG(state, msg) {
      state.tourBtnMsg = msg
    },
    UPDATE_INSTRUCTION(state, instruction) {
      state.instruction = instruction
    }
  },
  actions: {
    updateDelayTime({ commit }, payload) {
      commit("UPDATE_DELAY_TIME", payload)
    },
    updateBoardState({ commit }, payload) {
      commit("UPDATE_BOARD_STATE", payload)
    },
    updateTourBtnMsg({ commit }, msg) {
      commit("UPDATE_TOUR_BTN_MSG", msg)
    },
    updateInstruction({ commit }, instruction) {
      commit("UPDATE_INSTRUCTION", instruction)
    }
  },
  getters: {
    delayTime: ({ delayTime }) => delayTime,
    boardState: ({ boardState }) => boardState,
    tourBtnMsg: ({ tourBtnMsg }) => tourBtnMsg,
    instruction: ({ instruction }) => instruction
  }
})
