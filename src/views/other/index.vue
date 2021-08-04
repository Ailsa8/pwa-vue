<template>
  <div>
    <!-- 以下为绘图 -->
    <canvas id="canvas"></canvas>
    <!-- 以下画简图 -->
    <pre id="canvas_small"></pre>
    <!-- 以下为原图 -->
    <img :src="imgSrc">
  </div>
</template>
<script>
import { canvasImage } from "./data/canvas";
export default {
  data() {
    return {
      imgSrc: require("@/assets/images/long.png")
    };
  },
  mounted() {
    canvasImage();
  }
};
</script>