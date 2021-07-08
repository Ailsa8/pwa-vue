import Vue from "vue";
/* 指令
规则：1、每个指令放一个js文件中，且export default导出
2、指令文件名必须唯一
3、使用指令时，用v-指令文件名*/
const files = require.context("./", false, /\.js$/);
const allDirective = {};
files.keys().forEach(key => {
  if (files(key).default) {
    const name = key.match(Vue.prototype.$RegExp.fileName)[0];
    allDirective[name] = files(key).default;
  }
});
Object.keys(allDirective).forEach(key => {
  Vue.directive(key, allDirective[key]);
});
