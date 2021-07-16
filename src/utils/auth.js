import Vue from "vue";
import router from "../router";
import { getlocation } from "../utils/storage";
import { pendingRequests } from "@/http/axios";

const whitePage = ["/login"];
// 路由守卫 token过期 返回登陆
router.beforeEach(async(to, from, next) => {
  pendingRequests.clear();
  if (getlocation() || whitePage.includes(to.path)) {
    next();
  } else {
    next("/login");
  }
});

// 全局异常捕获
window.addEventListener(
  "error",
  (e) => {
    console.log("windowError异常捕获", e);
    // TODO:上报逻辑
    return true;
  },
  true
);
// 处理未捕获的异常，主要是promise内部异常，统一抛给 onerror
window.addEventListener("unhandledrejection", (e) => {
  throw e.reason;
});
// 框架异常统一捕获--vue文件
Vue.config.errorHandler = function(err, vm, info) {
  // TODO:上报逻辑
  console.log("框架异常统一捕获errorHandler====");
  console.log(err, vm, info);
};