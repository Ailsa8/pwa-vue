import Vue from "vue";
import VueRouter from "vue-router";
const files = require.context("./", false, /\.js$/);
const allRouter = {};
files.keys().forEach(key => {
  if (files(key).default) {
    const name = key.match(Vue.prototype.$RegExp.fileName)[0];
    allRouter[name] = files(key).default;
  }
});
const childrenRoute = Object.values(allRouter).flat();
console.log(childrenRoute);
Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/login.vue")
  },
  {
    path: "/",
    name: "",
    component: () => import("@/views/layout/index.vue"),
    children: childrenRoute
  }
];
console.log(routes);
const router = new VueRouter({
  routes
});
const OneNav = [
  {
    path: "",
    name: "home",
    component: null,
    meta: {
      title: "home",
      activeMenu: "/home",
      icon: "el-icon-location"
    }
  },
  {
    path: "",
    name: "user",
    component: null,
    meta: {
      title: "用户管理",
      icon: "el-icon-menu"
    }
  }
];
export { allRouter, OneNav };
export default router;
