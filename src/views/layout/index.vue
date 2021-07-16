<template>
  <div>
    <header-com></header-com>
    <div class="main">
      <nav-com></nav-com>
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
import HeaderCom from "./header.vue";
import NavCom from "./nav.vue";
export default {
  components: {
    HeaderCom,
    NavCom
  }
};
</script>
<style lang="less" scoped>
.main{
  width: 100%;
  display: flex;
  .content{
    flex: 1;
  }
}
</style>