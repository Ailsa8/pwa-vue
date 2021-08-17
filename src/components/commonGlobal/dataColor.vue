<template>
  <div>
    <span :style="colorName">{{ value }}</span>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: Number,
      default: 0
    },
    dataColorInfro: {
      type: Object,
      default: () => {
        return {
          rules: []
        };
      }
    }
  },
  computed: {
    colorName() {
      if (this.dataColorInfro.rules.length <= 0) {
        return "";
      }
      let colorRgb = "";
      this.dataColorInfro.rules.some(item => {
        const result = this.rulesCheck(item.range);
        if (result) {
          colorRgb = item.color;
        }
        return result;
      });
      return `color: ${colorRgb};`;
    }
  },
  methods: {
    rulesCheck(data = []) {
      return data.every(item => {
        return this.ruleAnalysis(item);
      });
    },
    ruleAnalysis(data) {
      switch (data.symbol) {
        case "<" :
          return this.value < data.limt;
        case "<=" :
          return this.value <= data.limt;
        case ">" :
          return this.value > data.limt;
        case ">=" :
          return this.value >= data.limt;
      }
    }
  }
};
</script>