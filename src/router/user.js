export default [{
  path: "/addUser",
  name: "Adduser",
  component: () => import("@/views/user/userlist.vue"),
  meta: {
    title: "用户管理",
    activeMenu: "/user"
  }
}, {
  path: "/addUser2",
  name: "Adduser2",
  component: () => import("@/views/user/userList2.vue"),
  meta: {
    title: "用户管理2",
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