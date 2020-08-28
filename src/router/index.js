import Vue from "vue"
import VueRouter from "vue-router"
import store from "@/store"

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

const router = new VueRouter({ routes });

router.beforeEach((_1, _2, next) => {
  store.dispatch("reset")
  next()
})

export default router
