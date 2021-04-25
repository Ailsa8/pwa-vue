<template>
  <div>
    <el-card>
      <h5>账号登陆</h5>
      <el-form ref="loginForm" :model="loginData" :rules="loginForm" label-width="80px">
        <el-form-item label="账号名" prop="name">
          <el-input v-model="loginData.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="loginData.password" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login">登陆</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      loginData: {
        name: "",
        password: ""
      }
    };
  },
  computed: {
    loginForm() {
      return {
        name: [
          { required: true, message: "请输入账号" }
        ],
        password: [
          { required: true, message: "请输入密码" }
        ]
      };
    }
  },
  methods: {
    async login() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.Http.post("login.login").then(data => {
            console.log(data);
          });
        } else {
          return false;
        }
      });
    }
  }
};
</script>