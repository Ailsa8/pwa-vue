export function canvasImage() {
// 加载龙的图片
  const img = new Image();
  img.onload = function() {
    draw();
  };
  img.src = "http://172.20.9.246:3003/static/img/long.7f86f33f.png"; // 注意跨域问题--可将图片放入项目内引用并打包，此处地址为打包后的地址，项目启动也需要用IP
  // img.src = "./logo.png";  // 无法触发onload方法
  // 把图片绘制到canvas里
  const draw = () => {
    const canvas = document.getElementById("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    console.log(canvas);
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, img.width, img.height);
    // 获取像素数据
    const imgData = ctx.getImageData(0, 0, img.width, img.height).data;
    // 拼接字符
    join(imgData);
  };
  // 把像素数据拼接成字符
  const join = (data) => {
    const gap = 10;
    let str = "";
    for (let h = 0; h < img.height; h += gap) {
      str += "\n";
      for (let w = 0; w < img.width; w += gap) {
        str += " ";// 因为字符的高度普遍都比其宽度大，所以额外添加一个空字符平衡一下，否则最终的图形会感觉被拉高了
        const pos = (h * img.width + w) * 4;
        const r = data[pos];
        const g = data[pos + 1];
        const b = data[pos + 2];
        // rgb转换成yuv格式，根据y（亮度）来判断显示什么字符
        const y = r * 0.299 + g * 0.578 + b * 0.114;
        if (y >= 190) {
        // 浅色
          str += " ";
        } else {
        // 深色
          str += "#";
        }
      }
    }
    const htmlW = document.getElementById("canvas_small");
    htmlW.innerHTML = str;
    console.log(str);
  };
}

