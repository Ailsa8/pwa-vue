<template>
  <div>
    <div v-screenfull.icon>全屏</div>
    <el-select v-model="value" v-selectOptionLazy="loadmore" placeholder="请选择">
      <el-option
        v-for="(val, key, index) in options"
        :key="index"
        :label="val"
        :value="key">
      </el-option>
    </el-select>
    <div>当前时间：{{ time | dateFilter }}</div>
  </div>
</template>
<script>
export default {
  name: "Directie",
  data() {
    return {
      options: this.$allData.common.loginOption,
      value: "",
      time: 120
    };
  },
  methods: {
    loadmore() {
      console.log("loadmore");
    }
  }
};
</script>