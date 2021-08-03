export default [{
  path: "/canvas",
  name: "Canvas",
  component: () => import("@/views/other/index.vue"),
  meta: {
    title: "canvas",
    activeMenu: "/other"
  }
}];