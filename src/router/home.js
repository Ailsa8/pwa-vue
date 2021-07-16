export default [{
  path: "/welcom",
  name: "Welcom",
  component: () => import("@/views/home/welcom.vue"),
  meta: {
    title: "欢迎",
    activeMenu: "/home"
  }
}, {
  path: "/home",
  name: "Homeone",
  component: () => import("@/views/home/homeOne.vue"),
  meta: {
    title: "home1",
    activeMenu: "/home"
  }
},
{
  path: "/directive",
  name: "Directive",
  component: () => import("@/views/home/directive.vue"),
  meta: {
    title: "指令",
    activeMenu: "/home"
  }
},
{
  path: "/storetest",
  name: "Storetest",
  component: () => import("@/views/home/storetest.vue"),
  meta: {
    title: "vuex",
    activeMenu: "/home"
  }
}];