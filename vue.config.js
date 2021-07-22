
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
    // 拆包
    config.optimization.splitChunks({
      cacheGroups: {
        common: {
          name: "chunk-common",
          chunks: "initial", // 对于匹配文件，非动态模块打包进该vendor,动态模块优化打包; async:对于匹配文件，动态模块打包进该vendor,非动态模块不进行优化打包
          minChunks: 2,
          maxInitialRequests: 5, // 最大初始化加载次数，入口文件可以并行加载的最大文件数量。
          minSize: 0,
          priority: 1, // 优先级配置，优先匹配优先级更高的规则，不设置的规则优先级默认为0
          reuseExistingChunk: true, // 重复使用已经存在的块，若某个模块在之前已经被打包过了，后面打包时再遇到这个模块就直接使用之前打包的模块
          enforce: true
        },
        vendors: {
          name: "chunk-vendors",
          test: /[\\/]node_modules[\\/]/,
          chunks: "initial",
          priority: 2,
          reuseExistingChunk: true,
          enforce: true
        },
        elementUI: {
          name: "chunk-elementui",
          test: /[\\/]node_modules[\\/]element-ui[\\/]/,
          chunks: "all", // 匹配文件无论是否动态模块，都打包进该vendor
          priority: 3,
          reuseExistingChunk: true,
          enforce: true
        },
        echarts: {
          name: "chunk-echarts",
          test: /[\\/]node_modules[\\/](vue-)?echarts[\\/]/,
          chunks: "all",
          priority: 4,
          reuseExistingChunk: true,
          enforce: true
        }
      }
    });
  }
};


module.exports = configData;