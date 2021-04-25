import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";
import Http from "./http/axios";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./utils/auth";

Vue.config.productionTip = false;
Vue.prototype.Http = Http;
Vue.use(ElementUI);
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
