<template>
  <div>
    <search-com
      v-if="searchJson.show"
      :search-com-data="searchJson.searchComData"
      :search-infro="searchJson.searchInfro"></search-com>
    <el-table
      v-if="tableJson.show && tableJson.total > 0"
      v-loading="tableJson.tableLoading"
      :data="tableJson.tableData"
      :height="tableJson.tableHeight"
      border
      :row-class-name="tableRowClassName"
      :cell-class-name="tableCellStyleName"
      :cell-style="tableCellStyle"
      @cell-click="cellclick"
      @row-click="handleClickCurrentRow"
      @selection-change="handleSelectionChange">
      <el-table-column v-if="tableJson.selectTypeColumns" type="selection" width="55"></el-table-column>
      <el-table-column v-if="tableJson.indexTypeColumns" type="index" label="序号" width="50"></el-table-column>
      <el-table-column
        v-for="(item, index) in tableJson.columns"
        :key="index" :type="item.type?item.type:''"
        :label="item.label?item.label:''"
        :prop="item.prop?item.prop:''"
        :align="item.align?item.align:'left'"
        :width="columWith(item)"
        :min-width="item.minWidth?item.minWidth:''"
        :fixed="item.fixed?item.fixed:false"
        :show-overflow-tooltip="item.showoverflowtooltip?item.showoverflowtooltip:false">
        <template v-if="item.slot" #default="{row}">
          <slot :name="item.prop" :row="row"></slot>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      v-if="tableJson.paginationShow && tableJson.total > 0"
      style="text-align:right"
      layout="total, sizes, prev, pager, next, jumper"
      :total="tableJson.total"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="query.pageSize"
      :current-page.sync="query.pageNumber"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange">
    </el-pagination>
    <empty-status v-if="tableJson.total <= 0" :empty-data="tableJson.emptyData"></empty-status>
    <el-dialog :title="dialogJson.title" :visible.sync="dialogJson.visible">
      <slot name="dialogEdit"></slot>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogJson.visible = false">取 消</el-button>
        <el-button type="primary" @click="handleUpdata">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  props: {
    searchJson: {
      type: Object,
      default: () => {
        return {};
      }
    },
    tableJson: {
      type: Object,
      default: () => {
        return {};
      }
    },
    dialogJson: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data() {
    return {
      query: {
        pageSize: 10,
        pageNumber: 1
      },
      checkedRows: [],
      row: "",
      column: ""
    };
  },
  inject: ["handleQuery", "handleUpdata"],
  methods: {
    // 单无格点击
    cellclick(row, column, cell, event) {
      const nobg = [...this.tableJson.nobg];
      if (nobg.includes(column.property)) {
        return;
      }
      this.row = row;
      this.column = column;
      this.$emit("cellclick", row, column);
    },
    // 单无格点击后的样式
    tableCellStyleName(row, rowIndex, column) {
      const flag = this.tableJson.rowFlag || "id";
      if (this.row[flag] === row.row[flag] && this.column === row.column) {
        return "activeCell";
      } else {
        return "";
      }
    },
    // 单元格样式
    tableCellStyle(row, rowIndex, column) {
      const nobg = this.tableJson?.nobg || [];
      if (nobg.includes(row.column.property)) {
        return "";
      }
      return "cursor: pointer;";
    },
    // 单行点击
    handleClickCurrentRow(row) {
      this.$emit("handleClickCurrentRow", row);
    },
    // 多选
    handleSelectionChange(rows) {
      this.checkedRows = [...rows];
    },
    // 表格颜色样式
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    },
    // 表格宽度
    columWith(row) {
      let currentwidth = null;
      switch (row.type) {
        case "selection":
          currentwidth = "55";
          break;
        case "index":
          currentwidth = "50";
          break;
        case "expand":
          currentwidth = "30";
          break;
        default :
          currentwidth = row.width;
      }
      return currentwidth;
    },
    // 切换页码
    handleCurrentChange(page) {
      console.log("切换页码", page);
      this.query.pageNumber = page;
      const params = {
        pageNumber: this.query.pageNumber
      };
      this.handleQuery(params);
    },
    // 改变每页显示条数
    handleSizeChange(size) {
      this.query.pageSize = size;
      this.query.pageNumber = 1;
      const params = {
        pageSize: this.query.pageSize,
        pageNumber: this.query.pageNumber
      };
      this.handleQuery(params);
    },
    // 改变当前页码显示
    handleCurrentPageChange(size = this.query.pageNumber) {
      console.log("改变当前页码显示", size);
      this.query.pageNumber = size;
    }
  }
};
</script>
<style lang="less" scoped>

</style>