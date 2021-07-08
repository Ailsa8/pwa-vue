import { fileName } from "@/utils/RegExpList";
const files = require.context("./", true, /\.js$/);
const allApi = {};
files.keys().forEach(key => {
  if (files(key).default) {
    const name = key.match(fileName)[0];
    allApi[name] = files(key).default;
  }
});
export default allApi;
