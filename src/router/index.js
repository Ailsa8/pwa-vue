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
    children: allRouter.home,
    redirect: "/welcom"
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];
console.log(routes);
const router = new VueRouter({
  routes
});

export default router;
