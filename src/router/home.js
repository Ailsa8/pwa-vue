export default [{
  path: "/welcom",
  name: "Welcom",
  component: () => import("@/views/home/welcom.vue")
}, {
  path: "/home",
  name: "Home",
  component: () => import("@/views/home/homeOne.vue")
},
{
  path: "/directive",
  name: "Directive",
  component: () => import("@/views/home/directive.vue")
},
{
  path: "/storetest",
  name: "Storetest",
  component: () => import("@/views/home/storetest.vue")
}];