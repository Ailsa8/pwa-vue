/* 状态管理
state使用时需要带文件名，如store.state.login.count
其他getters,mutations,actions可直接使用，如store.getters.getcount*/
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
const files = require.context("./modules/", false, /\.js$/);
const allStore = {};
files.keys().forEach(key => {
  if (files(key).default) {
    const name = key.match(Vue.prototype.$RegExp.fileName)[0];
    allStore[name] = files(key).default;
  }
});
export default new Vuex.Store({
  modules: allStore
});