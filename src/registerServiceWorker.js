/* eslint-disable no-console */
/** registerServiceWorker.js用于注册service worker。service worker通俗来讲就是在浏览器后台独立于网页运行的一段脚本，
 * service worker可以完成一些特殊的功能，比如：消息推送、后台同步、拦截和处理网络请求、管理网络缓存等。
 * Service worker之于pwa的意义在于能够为用户提供离线体验，即掉线状态下用户依旧能够访问网站并获取已被缓存的数据。
 * 使用service worker需要HTTPS，并且考虑 浏览器兼容性。 */

import { register } from "register-service-worker";

if (process.env.NODE_ENV === "production") {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready() {
      console.log(
        "App is being served from cache by a service worker.\n" +
        "For more details, visit https://goo.gl/AFskqB"
      );
    },
    registered() {
      console.log("Service worker has been registered.");
    },
    cached() {
      console.log("Content has been cached for offline use.");
    },
    updatefound() {
      console.log("New content is downloading.");
    },
    updated() {
      console.log("New content is available; please refresh.");
    },
    offline() {
      console.log("No internet connection found. App is running in offline mode.");
    },
    error(error) {
      console.error("Error during service worker registration:", error);
    }
  });
}
