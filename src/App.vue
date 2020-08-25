<template>
  <div id="app">
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="@/assets/favicon.png" width="30" height="30" class="d-inline-block align-top" alt="" loading="lazy">
          The Knight's Tour
        </a>
      </div>
    </nav>
    <div class="container-fluid">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
}
</script>
