import Vue from "vue";
const files = require.context("./", true, /\.js$/);
const allApi = {};
files.keys().forEach(key => {
  if (files(key).default) {
    const name = key.match(Vue.prototype.$RegExp.fileName)[0];
    allApi[name] = files(key).default;
  }
});
Vue.prototype.$HTTP = allApi;
export default allApi;
