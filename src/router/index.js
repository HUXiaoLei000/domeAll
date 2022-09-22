import Vue from "vue";
import VueRouter from "vue-router";
import login from "../views/login/login.vue";
import home from "../views/home/home.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/login",
    name: "login",
    component: login,
  },
  {
    path: "/home",
    name: "home",
    component: home,
  },
  {
    path: "/",
    name: "alays",
    component:()=>import("../views/layd")
  },
];

const router = new VueRouter({
  routes,
});

export default router;