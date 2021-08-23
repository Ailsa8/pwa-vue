<template>
  <div class="comp-field-select">
    <el-select
      ref="fieldSelect"
      :value="value"
      :clearable="!fieldData.noclearable"
      :placeholder="'请选择' + fieldData.label"
      :multiple="fieldData.multiple ? fieldData.multiple : false"
      v-on="$listeners"
      @change="handleChange">
      <el-option
        v-for="item in selectOptions"
        :key="item.id"
        :label="item.label"
        :value="item.id">
      </el-option>
    </el-select>
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
    fieldData: {
      type: Object,
      default: () => ({})
    },
    apiOptions: {
      type: Array,
      default: () => []
    },
    value: [String, Number, Array]
  },
  computed: {
    selectOptions() {
      const { options } = this.fieldData;
      const { length } = this.apiOptions;
      return length
        ? this.formatOptions(this.apiOptions)
        : (options || []);
    }
  },
  created() {},
  methods: {
    formatOptions(list = []) {
      return list.map(item => {
        if (typeof item === "string") {
          return { id: item, label: item };
        } else {
          return { id: item.id, label: item.label };
        }
      });
    },
    handleChange(e) {
      const formatVal = e ? (+e || e) : "";
      this.$emit("change", formatVal);
    }
  }
};
</script>

