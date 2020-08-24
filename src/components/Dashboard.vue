<template>
  <aside class="p-2">
    <button class="mx-auto btn btn-lg btn-block btn-custom text-white shadow-none border-0">
      Take a Tour
    </button>
    <button class="mx-auto mt-1 mb-3 btn btn-lg btn-block btn-info shadow-none border-0">
      Take a Step
    </button>
    <button class="mx-auto btn btn-lg btn-block btn-secondary shadow-none border-0">
      Clear Board
    </button>
  </aside>
</template>

<script>
export default {
  name: "Dashboard"
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
