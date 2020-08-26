<template>
  <section>
    <strong class="p-2">
      {{ instruction }}
    </strong>
    <article>
      <Chessboard ref="chessboard" />
    </article>
    <article>
      <Dashboard @chessboard-event="e => $refs.chessboard[e]()" />
    </article>
  </section>
</template>

<script>
import { mapGetters } from "vuex"
import Chessboard from "@/components/Chessboard"
import Dashboard from "@/components/Dashboard"

export default {
  name: "Home",
  computed: mapGetters(["instruction"]),
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


strong:nth-of-type(1) {
  flex: .35;
}

article:nth-of-type(1) {
  flex: 3;
}
article:nth-of-type(2) {
  flex: .75;
}


@media screen and (max-width: 815px) {
  section {
    flex-direction: column-reverse;
  }
}
</style>
