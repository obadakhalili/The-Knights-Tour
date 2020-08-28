<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">The Knight's Tour</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link :class="{ active: $route.path === '/' }" class="nav-link"  href="/home" to="/">
              Visualization
            </router-link>
            <router-link :class="{ active: $route.path === '/about' }" class="nav-link"  href="/about" to="/about">
              About
            </router-link>
            <a class="nav-link" href="https://github.com/obadakhalili/The-Knights-Tour/" target="_blank">Source Code on GitHub</a>
          </div>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
}
</script>
