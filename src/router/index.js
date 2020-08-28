import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("@/views/Home")
  },
  {
    path: "/about",
    component: () => import("@/views/About")
  },
  {
    path: "*",
    redirect: "/"
  }
];

export default new VueRouter({ routes });
