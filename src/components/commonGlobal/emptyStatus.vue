<template>
  <div class="dataEmptyStatus">
    <img :src="src">
    <p class="tips">{{ tips }}</p>
  </div>
</template>

<script>
export default {
  props: {
    emptyData: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    src() {
      return this.emptyData?.src || require("@/assets/images/no-contact.png");
    },
    tips() {
      return this.emptyData?.tips || "暂无数据";
    }
  }
};
</script>

<style scoped lang="less">
.dataEmptyStatus {
  text-align: center;
  background: #fff;
  .tips {
    font-size: 14px;
    font-family: "PingFangSC-Regular,PingFang SC";
    font-weight: 400;
    color: #3E3E3E;
    padding: 20px;
  }
  img {
    padding: 20px;
  }
}
</style>
