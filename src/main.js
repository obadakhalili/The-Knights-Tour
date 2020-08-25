import Vue from "vue"
import router from "./router"
import "chessboard-element"
import App from "./App"

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount("#app")
