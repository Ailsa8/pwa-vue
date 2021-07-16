<template>
  <div>
    <search-com :search-com-data="searchComData" @handleQuery="handleQuery" @handleAdd="handleAdd"></search-com>
    <el-table
      :data="tableData">
      <el-table-column
        v-for="(item, index) in tableHeader"
        :key="index"
        :prop="item.prop"
        :label="item.label"></el-table-column>
    </el-table>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="账号名">
          <el-input v-model="form.user_name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-input v-model="form.gender"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input v-model="form.age"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleSure">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { searchComData, tableHeader } from "./data/option";
export default {
  data() {
    return {
      searchComData,
      tableHeader,
      tableData: [],
      dialogVisible: false,
      form: {}
    };
  },
  provide() {
    return {
      handleQuery: this.handleQuery,
      handleAdd: this.handleAdd
    };
  },
  created() {
    this.handleQuery();
  },
  methods: {
    handleQuery(params) {
      this.Http.get("user.userList").then(data => {
        this.tableData = [...data.data];
        console.log(data);
      });
    },
    handleAdd() {
      console.log(11111111111111);
      this.dialogVisible = true;
    },
    handleSure() {
      this.Http.post("user.userAdd", this.form).then(data => {
        console.log(data);
      });
    }
  }
};
</script>