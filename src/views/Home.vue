<template>
  <section>
    <article>
      <Chessboard />
    </article>
    <article>
      <Dashboard />
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
