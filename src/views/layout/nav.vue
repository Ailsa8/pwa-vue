<template>
  <div id="nav">
    <h5>自定义颜色</h5>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu v-for="(item, index) in OneNav" :key="index" :index="'oneLevel' + index">
        <template slot="title">
          <i :class="item.meta.icon"></i>
          <span>{{ item.meta.title }}</span>
        </template>
        <el-menu-item v-for="(subItem, subIndex) in allRouter[item.name]" :key="subIndex" :index="'twoLevel' + subIndex">
          <router-link :to="subItem.path">{{ subItem.meta.title }}</router-link>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
import { OneNav, allRouter } from "@/router/index";
export default {
  data() {
    return {
      OneNav,
      allRouter
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style lang="less" scoped>
#nav{
  width: 200px;
  a {
    color: inherit;
    text-decoration: none;
    width: 100%;
    height: 100%;
    display: block;
  }
}
</style>