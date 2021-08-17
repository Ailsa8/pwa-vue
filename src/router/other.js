export default [{
  path: "/canvas",
  name: "Canvas",
  component: () => import("@/views/other/index.vue"),
  meta: {
    title: "canvas",
    activeMenu: "/other"
  }
}, {
  path: "/compartion",
  name: "Compartion",
  component: () => import("@/views/other/compartion.vue"),
  meta: {
    title: "compartion",
    activeMenu: "/other"
  }
}];