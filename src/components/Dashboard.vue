<template>
  <aside class="p-2">
    <button class="mx-auto btn btn-lg btn-block btn-custom text-white shadow-none border-0">
      {{ buttonMessage }}
    </button>
    <button class="mx-auto mt-1 mb-3 btn btn-lg btn-block btn-info shadow-none border-0">
      Next Step
    </button>
    <button @click="$emit('chessboard-event', 'clearBoard')" class="mx-auto btn btn-lg btn-block btn-secondary shadow-none border-0">
      Clear Board
    </button>
  </aside>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {
      buttonMessage: "Take a Tour"
    }
  }
}
</script>

<style scoped>
.btn-custom {
  background-color: #40916c;
}
.btn-custom:hover {
  background-color: #2d6a4f;
}
</style>
