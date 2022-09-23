import Vue from "vue";
import VueRouter from "vue-router";
import login from "../views/login/login.vue";
import home from "../views/home/home.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/login",
    name: "login",
    // component: () => import("../views/login/login"),
    component: login
  },
  {
    path: "/home",
    name: "home",
    component: home,
  },
  {
    path: "/",
    name: "layd",
    redirect: "/index",
    component: () => import("../views/layd"),
    children: [{
        path: "index",
        name: "index",
        component: () => import("../views/index"),
        meta: {
          title: "首页"
        }
      }, {
        path: "/goods",
        name: "goods",
        component: () => import("../views/goods"),
        meta: {
          title: "商品管理"
        }
      },
      {
        path: "/stasff",
        name: "stasff",
        component: () => import("../views/stasff"),
        meta: {
          title: "员工管理"
        }
      },
      {
        path: "/member",
        name: "member",
        component: () => import("../views/member"),
        meta: {
          title: "会员管理"
        }
      },
      {
        path: "/supplier",
        name: "supplier",
        component: () => import("../views/supplier"),
        meta: {
          title: "供应商管理"
        }
      },
    ]
  },
];

const router = new VueRouter({
  routes,
});

export default router;