<template>
  <div id="nav">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      @select="handleSelect">
      <div v-for="(item, index) in OneNav" :key="index" :index="'oneLevel' + index">
        <el-submenu v-if="allRouter[item.name] && allRouter[item.name].length>0" :index="item.name">
          <template slot="title">{{ item.meta.title }}</template>
          <el-menu-item v-for="(subItem, subIndex) in allRouter[item.name]" :key="subIndex" :index="'twoLevel' + subItem.path">
            <router-link :to="subItem.path">{{ subItem.meta.title }}</router-link>
          </el-menu-item>
        </el-submenu>
        <el-menu-item v-else :index="item.name">
          <router-link :to="item.path">{{ item.meta.title }}</router-link>
        </el-menu-item>
      </div>
    </el-menu>
  </div>
</template>
<script>
import { setlocation, getlocation } from "@/utils/storage.js";
import { OneNav, allRouter } from "@/router/index";
export default {
  data() {
    return {
      OneNav,
      allRouter,
      activeIndex: ""
    };
  },
  mounted() {
    this.activeIndex = getlocation("activeIndex");
  },
  methods: {
    handleSelect(key, keyPath) {
      setlocation(key, "activeIndex");
    }
  }
};
</script>
<style lang="less" scoped>
#nav{
  width: 200px;
  height: 100vh;
  background-color: #545c64;
  overflow: hidden;
  a {
    color: inherit;
    text-decoration: none;
    width: 100%;
    height: 100%;
    display: block;
  }
  .oneleveLink{
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 9999;
    background-color: aqua;
  }
}
</style>