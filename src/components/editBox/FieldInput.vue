<template>
  <div class="comp-field-input">
    <el-input
      ref="fieldInput"
      :type="isTextArea ? 'textarea' : 'text'"
      :show-word-limit="!!fieldData.maxLen"
      :value="value"
      :autosize="autosize"
      clearable
      :maxlength="fieldData.maxLen"
      :placeholder="'请输入' + fieldData.label"
      @keyup.enter.native="onSubmit"
      @input="handleInput" />
  </div>
</template>

<script>
export default {
  props: {
    fieldData: {
      type: Object,
      default: () => ({})
    },
    value: {
      type: String,
      default: ""
    },
    keyupOnsubmit: {
      type: Boolean,
      dafault: false
    }
  },
  computed: {
    isTextArea() {
      const { longText } = this.fieldData;
      return longText;
    },
    autosize() {
      return this.isTextArea ? { minRows: 2, maxRows: 5 } : false;
    }
  },
  mounted() {
    if (this.fieldData.focus) {
      this.$refs.fieldInput.focus();
    }
  },
  methods: {
    handleInput(val) {
      this.$emit("input", val);
    },
    onSubmit() {
      if (this.keyupOnsubmit) {
        this.$emit("handleQuery");
      }
    }
  }
};
</script>

