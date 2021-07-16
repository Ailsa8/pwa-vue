import Vue from "vue";
const allComponent = {};
const files = require.context("./commonGlobal", false, /\.vue$/);
files.keys().forEach(key => {
  const name = key.substring(2, key.length - 4);
  allComponent[name] = files(key).default || files(key);
});
Object.keys(allComponent).forEach(name => {
  Vue.component(name, allComponent[name]);
});

