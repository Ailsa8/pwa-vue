<template>
  <div class="titleStyle">
    <h3>{{ title }}</h3>
    <span v-for="(item, index) in subTip" :key="index">{{ item }}</span>
  </div>
</template>
<script>
export default {
  props: {
    subTip: {
      type: Array,
      default: () => {
        return [];
      }
    },
    title: {
      type: String
    }
  }
};
</script>
<style lang="less" scoped>
.titleStyle{
  width: 100%;
  h3{
    display:inline-block;
  }
  span{
    margin: 0 15px;
  }
}
</style>