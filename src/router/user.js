export default [{
  path: "/addUser",
  name: "Adduser",
  component: () => import("@/views/user/userList.vue"),
  meta: {
    title: "用户管理",
    activeMenu: "/user"
  }
}, {
  path: "/solt",
  name: "soltStart",
  component: () => import("@/views/user/father.vue"),
  meta: {
    title: "solt start",
    activeMenu: "/user"
  }
}];