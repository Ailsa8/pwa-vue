import Vue from "vue";
const files = require.context("./", false, /\.js$/);
const allData = {};
files.keys().forEach(key => {
  if (files(key).default) {
    const name = key.match(Vue.prototype.$RegExp.fileName)[0];
    allData[name] = files(key).default;
  }
});
Vue.prototype.$allData = allData;