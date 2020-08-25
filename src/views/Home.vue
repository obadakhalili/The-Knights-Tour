<template>
  <section>
    <article>
      <Chessboard @change-button-message="msg => $refs.dashboard.buttonMessage = msg" ref="chessboard" />
    </article>
    <article>
      <Dashboard @chessboard-event="e => $refs.chessboard[e]()" ref="dashboard" />
    </article>
  </section>
</template>

<script>
import Chessboard from "@/components/Chessboard"
import Dashboard from "@/components/Dashboard"

export default {
  name: "Home",
  components: {
    Chessboard,
    Dashboard
  }
}
</script>

<style scoped>
section {
  display: flex;
}
article:nth-child(1) {
  flex: 3.5;
}
article:nth-child(2) {
  flex: 1;
}

@media screen and (max-width: 815px) {
  section {
    flex-direction: column;
  }
  article:nth-child(1) {
    order: 1;
  }
}
</style>
