<template>
  <aside>
      <table>
      <tr
        v-for="(_, index) in 64"
        :key="index"
        :class="colorSquare(index)"
      ></tr>
    </table>
    <div>Knight</div>
  </aside>
</template>

<script>
export default {
  name: "Chessboard",
  methods: {
    colorSquare(index) {
      const rowIsOdd = Math.floor(index / 8) % 2 === 0
      if (rowIsOdd) {
        return index % 2 === 0 ? "light" : "dark"
      }
      return index % 2 === 0 ? "dark" : "light"
    }
  }
}
</script>

<style scoped>
aside {
  width: 650px;
  margin: auto;
  padding: 3rem;
}

table {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
}
table > tr::before {
  content: "";
  padding-bottom: 100%;
  display: block;
}

.light {
  background-color: #EEEED2;
}
.dark {
  background-color: #61774B;
}

@media screen and (max-width: 815px) {
  aside {
    width: 100%;
    padding: 1.25rem .25rem;
  }
}
</style>
