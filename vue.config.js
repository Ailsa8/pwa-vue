
const envList = require("./src/envConfig/envlist.js");
// const SourceMapUploader = require("./src/utils/source-map-upload.js"); // map文件上传
const path = require("path"); // 可用来设置别名时
const resolve = dir => path.resolve(__dirname, dir); // 获取路径
console.log("process.env.NODE_ENV==", process.env.NODE_ENV);
const configData = {
  publicPath: "/",
  outputDir: "dist",
  assetsDir: "static",
  lintOnSave: process.env.NODE_ENV === "dev",
  productionSourceMap: false,
  css: {
    sourceMap: true,
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
          globalVars: {
            primary: "#333"
          }
        }
      }
    }
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
  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      // 生产打包时删除debugger及console.log
      const compress = config.optimization.minimizer[0].options.terserOptions.compress;
      compress.warnings = false;
      compress.drop_console = true;
      compress.drop_debugger = true;
      compress.pure_funcs = ["console.log"];
      // 打包文件大小配置
      config["performance"] = {
        "maxEntrypointSize": 10000000,
        "maxAssetSize": 30000000
      };
    }
    // config.plugins.push(new SourceMapUploader({ url: "http://localhost:3001/upload" }));  // map文件上传
  },
  chainWebpack: config => {
    // 设置全局常量
    config
      .plugin("define")
      .tap(args => {
        args[0]["process.env"]["APP_VUE_HIST"] = JSON.stringify({ name: "weeeeeee" });
        return args;
      });
    // 添加别名
    config.resolve.alias.set("@c", resolve("src/components"));
  }
};


module.exports = configData;