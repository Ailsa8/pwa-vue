<template>
  <div class="comp-modify-filed">
    <el-date-picker
      ref="datePicker"
      :type="fieldData.type"
      :value-format="fieldData.format || 'timestamp'"
      :range-separator="fieldData.rangeSeparator"
      :start-placeholder="fieldData.startPlaceholder"
      :end-placeholder="fieldData.endPlaceholder"
      :value="value"
      :placeholder="'请选择' + fieldData.label" @input="handleChange" />
  </div>
</template>

<script>
export default {
  props: {
    fieldData: {
      type: Object,
      default: () => ({})
    },
    value: [String, Number, Array]
  },
  mounted() {
    if (this.fieldData.focus) {
      this.$refs.datePicker.focus();
    }
  },
  methods: {
    handleChange(val) {
      val = val || "";
      this.$emit("input", val);
    }
  }
};
</script>

