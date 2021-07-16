<template>
  <div class="comp-field-select">
    <el-select
      ref="fieldSelect"
      :value="value"
      :placeholder="fieldData.label"
      filterable
      remote
      :remote-method="searchSearcherList"
      :loading="searchLoading"
      inline-message
      class="query-item"
      clearable
      @clear="handleClearSearcher"
      v-on="$listeners">
      <el-option
        v-for="item in dataList"
        :key="item.id"
        :label="item.name"
        :value="item.id">
        <span style="color: #8492a6; font-size: 12px">{{ item.name }}</span>
      </el-option>
    </el-select>
  </div>
</template>

<script>
// import { to } from "await-to-js";
// import api from "@/api/editBox";
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
  data() {
    return {
      dataList: [],
      searchLoading: false
    };
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
    },
    searchSearcherList(key) {
      if (key) {
        this.searchSeacher(key);
      }
    },
    async searchSeacher(key) {
      this.searchLoading = true;
      // const [err, { data } = {}] = await to(api[this.fieldData.apiName](key));
      // this.searchLoading = false;
      // if (!err && data) {
      //   data.map(item => {
      //     item.id = item[this.fieldData.idValue];
      //     item.name = item[this.fieldData.nameLabel];
      //   });
      //   this.dataList = data;
      // }
    },
    handleClearSearcher() {
      this.dataList = [];
    }
  }
};
</script>

