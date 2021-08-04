import Vue from "vue";
import App from "./App.vue";
import "@/utils/RegExpList";
import "@/utils/common";
import router from "./router";
import store from "@/store";
import "./registerServiceWorker";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./utils/auth";
import "@/directive";
import "@/data";
import "@/utils/filters";
import "@/components/index";
import "@/assets/styles/base.css";
import to from "await-to-js";

Vue.config.productionTip = false;
Vue.prototype.to = to;
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
