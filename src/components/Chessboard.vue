<template>
  
</template>

<script>
export default {
  name: "Chessboard",
  methods: {
    clearBoard() {
      this.$emit("change-button-message", "Take a Tour")
      console.log("cleared")
    }
  }
}
</script>
