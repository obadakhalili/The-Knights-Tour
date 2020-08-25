<template>
  <aside>
    <chess-board draggable-pieces drop-off-board="snapback"></chess-board>
  </aside>
</template>

<script>
export default {
  name: "Chessboard",
  mounted() {
    const board = document.querySelector("chess-board")
    board.position = { c6: "bN" }
  },
  methods: {
    clearBoard() {
      this.$emit("change-button-message", "Take a Tour")
      console.log("cleared")
    }
  }
}
</script>

<style scoped>
aside {
  width: 550px;
  margin: auto;
  padding: 3rem 0 0 0;
}

@media only screen and (max-width: 816px) {
  aside {
    width: 95%;
    padding: 0;
  }
}
</style>
