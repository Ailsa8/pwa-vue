<template>
  <div>
    <el-button @click="getChecked">获取选择项</el-button>
    <table-page ref="userList" :search-json="searchJson" :table-json="tableJson" :dialog-json="dialogJson" @handleClickCurrentRow="handleClickCurrentRow">
      <template #gender="{row}">
        {{ $allData.common.gender[row.gender] }}
      </template>
      <template #active="{row}">
        <el-button type="text" size="small" @click="handleUpdata('open', row)">编辑</el-button>
        <el-button v-if="row.userName !=='admin'" type="text" size="small" @click="handleDelete(row._id)">删除</el-button>
      </template>
      <template #dialogEdit>
        <el-form ref="form" :model="form" :rules="rules" label-width="80px">
          <el-form-item label="账号名：" prop="userName">
            <el-input v-model="form.userName"></el-input>
          </el-form-item>
          <el-form-item label="密码：" prop="password">
            <el-input v-model="form.password"></el-input>
          </el-form-item>
          <el-form-item label="性别：">
            <el-radio-group v-model="form.gender">
              <el-radio
                v-for="(value,key) in $allData.common.gender"
                :key="key"
                :label="key">{{ value }}</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="邮箱：" prop="email">
            <el-input v-model="form.email"></el-input>
          </el-form-item>
          <el-form-item label="年龄：">
            <el-input v-model="form.age" type="number"></el-input>
          </el-form-item>
        </el-form>
      </template>
    </table-page>
  </div>
</template>
<script>
import TablePage from "@/components/HOC/tablePage.vue";
import { searchJson, tableJson, dialogJson } from "./data/pageData";
export default {
  components: {
    TablePage
  },
  data() {
    var validatePassword = (rule, value, callback) => {
      if (!this.$RegExp.Stock_Code_Rep.test(value)) {
        callback(new Error("密码为英文或者数字"));
      } else {
        callback();
      }
    };
    var validateEmail = (rule, value, callback) => {
      if (!this.$RegExp.email_Rep.test(value)) {
        callback(new Error("邮箱格式不正确"));
      } else {
        callback();
      }
    };
    return {
      searchJson,
      tableJson,
      dialogJson,
      searchParams: {
        pageSize: 10,
        pageNumber: 1
      },
      form: {},
      rules: {
        userName: [
          { required: true, message: "请输入账号名称", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入账号密码", trigger: "blur" },
          { validator: validatePassword, trigger: "blur" }
        ],
        email: [
          { validator: validateEmail, trigger: "blur" }
        ]
      }
    };
  },
  provide() {
    return {
      handleQuery: this.handleQuery,
      handleUpdata: this.handleUpdata
    };
  },
  methods: {
    handleQuery(params) {
      Object.assign(this.searchParams, params);
      Object.keys(this.searchParams).forEach(key => {
        if (!this.searchParams[key]) {
          delete this.searchParams[key];
        }
      });
      this.Http.post("user.userList", this.searchParams).then(data => {
        this.$set(this.tableJson, "tableData", [...data.data]);
        this.tableJson.total = data.count;
      });
    },
    handleUpdata(type, data = undefined) {
      if (type === "open") {
        this.form = { ...data };
        if (data) {
          this.form.gender = this.form.gender.toString();
          this.dialogJson.title = "编辑";
        } else {
          this.dialogJson.title = "新增";
        }
        this.dialogJson.visible = true;
        return;
      }
      this.Http.post("user.userAdd", this.form).then(data => {
        this.dialogJson.visible = false;
        const params = {
          pageNumber: 1
        };
        this.handleQuery(params);
      });
    },
    handleDelete(id) {
      this.Http.get("user.userRemove", { id }).then(data => {
        const params = {
          pageNumber: 1
        };
        this.handleQuery(params);
      });
    },
    handleClickCurrentRow(data) {
      console.log(data);
    },
    getChecked() {
      const data = this.$refs.userList.checkedRows;
      console.log(data);
    }
  }
};
</script>