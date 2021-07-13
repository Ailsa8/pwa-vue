/* 错误日志上报*/
const fs = require("fs");
const http = require("http");
const path = require("path");
class SourceMapUploader {
  constructor(options) {
    this.options = options;
  }
  /**
   * 用到了hooks，done表示在打包完成之后
   * status.compilation.outputOptions就是打包的dist文件
   */
  apply(compiler) {
    if (process.env.NODE_ENV === "dev") {
      compiler.hooks.done.tap("sourcemap-uploader", async(status) => {
        // console.log(status.compilation.outputOptions.path);
        // 读取目录下的map后缀的文件
        const dir = path.join(status.compilation.outputOptions.path, "/static/js/");
        const chunks = fs.readdirSync(dir);
        const map_file = chunks.filter((item) => {
          return item.match(/\.js\.map$/) !== null;
        });
        console.log("source-map-upload==map_file==", map_file);
        // 上传sourcemap
        while (map_file.length > 0) {
          const file = map_file.shift();
          await this.upload(this.options.url, path.join(dir, file));
        }
      });
    }
  }

  // 调用upload接口，上传文件
  upload(url, file) {
    console.log("source-map-upload====", url, file);
    return new Promise((resolve) => {
      const req = http.request(`${url}?name=${path.basename(file)}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/octet-stream",
          Connection: "keep-alive"
        }
      });

      const fileStream = fs.createReadStream(file);
      fileStream.pipe(req, { end: false });
      fileStream.on("end", function() {
        req.end();
        resolve();
      });
    });
  }
}
module.exports = SourceMapUploader;
