<template>
  <div class="comp-field-radio">
    <el-radio-group v-if="!Array.isArray(radioOptions)" :value="getCheckedRadio">
      <el-radio
        v-for="(value, key) in radioOptions"
        :key="key"
        :label="key"
        @click.native.prevent="handleClickItem(key)">{{ value }}</el-radio>
    </el-radio-group>
    <el-radio-group v-else :value="getCheckedRadio">
      <el-radio
        v-for="item in radioOptions"
        :key="item.id"
        :label="item.id"
        @click.native.prevent="handleClickItem(item.id)">{{ item.label }}</el-radio>
    </el-radio-group>
  </div>
</template>

<script>
export default {
  model: {
    prop: "checked",
    event: "click"
  },
  props: {
    fieldData: {
      type: Object,
      default: () => ({})
    },
    checked: [String, Number]
  },
  data() {
    return {
      getCheckedRadio: this.checked
    };
  },
  computed: {
    radioOptions() {
      const { options } = this.fieldData;
      return options || [];
    }
  },
  methods: {
    handleClickItem(val) {
      if (this.fieldData.notCancelable) {
        this.getCheckedRadio = val;
      } else {
        this.getCheckedRadio = this.checked === val ? "" : val;
      }
      this.$emit("click", this.getCheckedRadio);
    }
  }
};
</script>
<style lang='less' scoped>
.comp-field-radio {
  /deep/ .el-radio-group {
    background: transparent;
  }
}
</style>
