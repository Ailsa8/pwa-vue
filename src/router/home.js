export default [{
  path: "/home",
  name: "Home",
  component: () => import("@/views/home/homeOne.vue")
},
{
  path: "/welcom",
  name: "Welcom",
  component: () => import("@/views/home/welcom.vue")
}];