<template>
  <div class="comp-region-field">
    <el-cascader
      :value="value"
      :options="options"
      :placeholder="'请输入' + fieldData.label"
      :props="{
        expandTrigger: 'hover'}"
      @change="handleChange"></el-cascader>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  model: {
    prop: "value",
    event: "change"
  },
  props: {
    value: {
      type: Array,
      default: () => []
    },
    fieldData: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      options: []
    };
  },
  created() {
    const list = JSON.parse(localStorage.getItem("cascaderCity")) || [];
    this.options = list;
  },
  methods: {
    handleChange(val) {
      this.$emit("change", val);
    }
  }
};
</script>
