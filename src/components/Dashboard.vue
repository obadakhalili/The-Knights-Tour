<template>
  <aside class="p-2">
    <template v-if="boardState === 'ready'">
      <div class="btn-group btn-block">
        <button
          @click="$emit('chessboard-event', 'takeTour')"
          class="btn btn-lg btn-tour text-white shadow-none border-0"
        >
          {{ tourBtnMsg }}
        </button>
        <button
          @click="$emit('chessboard-event', 'nextStep')"
          class="btn btn-lg btn-step shadow-none border-0"
        >
          Next step
        </button>
      </div>
      <button
        @click="$emit('chessboard-event', 'clearBoard')"
        class="my-2 btn btn-lg btn-block btn-secondary shadow-none border-0"
      >
        Clear board
      </button>
    </template>
    <template v-else>
      <h6>Once you ready</h6>
      <button
        @click="$emit('chessboard-event', 'boardReady')"
        class="btn btn-lg btn-block btn-info shadow-none border-0"
      >
        I'm ready
      </button>
    </template>
  </aside>
</template>

<script>
import { mapGetters, mapActions } from "vuex"

export default {
  name: "Dashboard",
  computed: mapGetters(["tourBtnMsg", "boardState"])
}
</script>

<style scoped>
.btn-tour {
  background-color: #40916c;
}
.btn-tour:hover {
  background-color: #2d6a4f;
}

.btn-step {
  background-color: #EEF4BD;
}
.btn-step:hover {
  background-color: #DCE3AC;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .15s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
