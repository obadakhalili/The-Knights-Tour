import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    alias: "/home",
    component: () => import("@/views/Home")
  }
];

export default new VueRouter({ routes });
