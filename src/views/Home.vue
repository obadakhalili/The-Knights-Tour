<template>
  <div class="row">
    <div class="col-md-9">
      <Chessboard @change-button-message="msg => $refs.dashboard.buttonMessage = msg" ref="chessboard" />
    </div>
    <div class="col-md-3">
      <Dashboard @chessboard-event="e => $refs.chessboard[e]()" ref="dashboard" />
    </div>
  </div>
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
