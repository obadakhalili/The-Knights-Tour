import Vue from "vue"
import Vuex from "vuex"
import board from "./modules/board"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { board },
  state: {
    instruction: "",
    timeouts: [],
    delayTime: 150
  },
  mutations: {
    UPDATE_INSTRUCTION(state, instruction) {
      state.instruction = instruction
    },
    CLEAR_TIMEOUTS(state) {
      state.timeouts.forEach(clearTimeout)
    },
    RESET_TIMEOUTS(state) {
      state.timeouts = []
    },
    UPDATE_DELAY_TIME(state, delay) {
      state.delayTime = delay
    }
  },
  actions: {
    updateDelayTime({ commit }, payload) {
      commit("UPDATE_DELAY_TIME", payload)
    }
  },
  getters: {
    instruction: ({ instruction }) => instruction,
    timeouts: ({ timeouts }) => timeouts,
    delayTime: ({ delayTime }) => delayTime
  }
})
