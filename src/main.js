import "chessboard-element"
import Vue from "vue"
import router from "./router"
import store from "./store"
import App from "./App"

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
