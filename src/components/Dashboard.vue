<template>
  <aside class="p-2">
    <button
      @click="chessboardEvent('takeTour')"
      class="btn btn-lg btn-block btn-custom shadow-none border-0"
    >
      {{ tourBtnMsg }}
    </button>
    <button
      @click="chessboardEvent('nextStep')"
      class="btn btn-lg btn-block btn-info shadow-none border-0"
    >
      Next step
    </button>
    <transition name="fade">
      <article v-if="!boardIsReady" class="mt-3 mb-2">
        <h6>Once you ready</h6>
        <button
          @click="$emit('chessboard-event', 'boardReady')"
          class="btn btn-lg btn-block btn-danger shadow-none border-0"
        >
          I'm ready
        </button>
      </article>
    </transition>
    <button
      @click="$emit('chessboard-event', 'clearBoard')"
      class="mb-3 btn btn-lg btn-block btn-secondary shadow-none border-0"
    >
      Clear board
    </button>
  </aside>
</template>

<script>
import { mapGetters, mapActions } from "vuex"

export default {
  name: "Dashboard",
  computed: {
    ...mapGetters(["tourBtnMsg", "boardState"]),
    boardIsReady() { return this.boardState === "ready" }
  },
  methods: {
    chessboardEvent(e) {
      if (this.boardIsReady) {
        return this.$emit("chessboard-event", e)
      }
      this.$store.dispatch("updateInstruction", "Press the \"I'm ready\" button first")
    }
  }
}
</script>

<style scoped>
.btn-custom {
  background-color: #40916c;
  color: white;
}
.btn-custom:hover {
  background-color: #2d6a4f;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .15s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
