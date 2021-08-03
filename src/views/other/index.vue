<template>
  <div>
    <canvas id="canvas"></canvas>
    <!-- 以下画简图 -->
    <pre id="canvas_small"></pre>
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