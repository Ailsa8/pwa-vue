<template>
  <div class="search-title">
    <el-row :gutter="10">
      <el-col v-for="(item, index) in searchComData" :key="index" :span="item.elrow || 6">
        <component
          :is="EditBox[item.compName]"
          v-model="searchParams[item.code]"
          :keyup-onsubmit="searchComData.keyupOnsubmit"
          :field-data="item"
          @handleQuery="handleQuery">
        </component>
      </el-col>
      <el-col :span="6" class="query-btn-group">
        <el-button type="primary" @click="handleQuery(searchParams)">查询</el-button>
        <el-button v-if="searchInfro.resetShow" @click="handleReset">重置</el-button>
        <el-button v-if="searchInfro.addShow" type="primary" @click="handleUpdata('open')">新增</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import EditBox from "@/components/editBox/index";
export default {
  name: "SearchCom",
  props: {
    searchComData: {
      type: Array,
      require: true
    },
    searchInfro: {
      type: Object,
      default: () => {
        return {
          defultData: {}
        };
      }
    }
  },
  data() {
    return {
      EditBox,
      searchParams: { ...this.searchInfro.defultData }
    };
  },
  inject: ["handleQuery", "handleUpdata"],
  created() {},
  methods: {
    handleReset() {
      Object.keys(this.searchParams).forEach(i => {
        this.searchParams[i] = this.defultData?.[i] || null;
      });
      this.handleQuery(this.searchParams);
    }
  }

};
</script>

<style lang="less">
  .search-title {
    padding: 12px;
    background: #fff;
    .el-col{
      margin-bottom: 16px;
    }

    .el-input,
    .el-select,
    .el-date-editor {
      width: 100%
    }
    .query-btn-group {
      display: flex;
      justify-content: flex-end;
    }
    .el-row:not(:first-child) {
      margin-top: 12px;
    }
  }
</style>