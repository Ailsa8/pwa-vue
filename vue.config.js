
const envList = require("./src/envConfig/envlist.js");
console.log("process.env.NODE_ENV==", process.env.NODE_ENV);
const configData = {
  publicPath: "/",
  outputDir: "pwaBuild",
  assetsDir: "static",
  lintOnSave: process.env.NODE_ENV === "dev",
  productionSourceMap: false,
  css: {
    sourceMap: true
  },
  devServer: {
    port: process.env.port || 3003,
    host: "0.0.0.0",
    hot: true,
    open: true,
    proxy: {
      "/api": {
        target: envList[process.env.NODE_ENV].VUE_APP_BASE_API,
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  },
  chainWebpack: config => {
    config
      .plugin("define")
      .tap(args => {
        args[0]["process.env"]["APP_VUE_HIST"] = JSON.stringify({ name: "weeeeeee" });
        return args;
      });
  }
};


module.exports = configData;