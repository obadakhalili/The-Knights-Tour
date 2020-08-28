<template>
  <aside class="p-2">
    <template v-if="boardIsUnReady">
      <h6>Once you ready</h6>
      <button
        @click="chessboardEvent('boardReady')"
        class="btn btn-lg btn-block btn-move shadow-none border-0"
      >
        I'm ready
      </button>
    </template>
    <template v-else>
      <div class="btn-group btn-block">
        <button
          @click="chessboardEvent('takeTour')"
          :class="{ 'disabled': disableButton }"
          class="btn btn-lg btn-tour text-white shadow-none border-0"
        >
          {{ tourBtnMsg }}
        </button>
        <button
          @click="chessboardEvent('nextMove')"
          :class="{ 'disabled': disableButton }"
          class="btn btn-lg btn-move shadow-none border-0"
        >
          Next move
        </button>
      </div>
      <div class="my-2">
        <label>Delay between moves (ms)</label>
        <input v-model="delayTime" :disabled="boardIsVisualizing" type="number" class="form-control form-control-sm">
      </div>
      <button
        @click="chessboardEvent('clearBoard')"
        class="my-2 btn btn-lg btn-block btn-secondary shadow-none border-0"
      >
        Clear board
      </button>
    </template>
  </aside>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  name: "Dashboard",
  computed: {
    ...mapGetters(["tourBtnMsg"]),
    boardIsUnReady() {
      return this.$store.getters.boardState === "unready"
    },
    boardIsVisualizing() {
      return this.$store.getters.boardState === "inaction"
    },
    disableButton() {
      return this.$store.getters.boardState === "solved" || this.boardIsVisualizing
    },
    delayTime: {
      get() {
        return this.$store.getters.delayTime
      },
      set(delay) {
        this.$store.dispatch("updateDelayTime", delay)
      }
    }
  },
  methods: {
    chessboardEvent(e) {
      if (["boardReady", "clearBoard"].includes(e) || !this.disableButton) {
        this.$emit("chessboard-event", e)
      }
    }
  }
}
</script>

<style scoped>
.btn-tour {
  background-color: #40916c;
}
.btn-tour:hover {
  background-color: #2d6a4f;
}

.btn-move {
  background-color: #EEF4BD;
}
.btn-move:hover {
  background-color: #DCE3AC;
}
</style>
