<template>
  <div>
    <el-card class="loginClass">
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
import { setlocation } from "@/utils/storage.js";
import { mapActions, mapMutations } from "vuex";
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
    },
    ...mapActions({
      addcount: "addCount"
    })
  },
  created() {
    console.log(this.$store);
  },
  methods: {
    ...mapMutations({
      setUserName: "USERNAME"
    }),
    async login() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.Http.post("login.login", this.loginData).then(data => {
            setlocation(data.token);
            setlocation(this.loginData.name, "userName");
            this.setUserName(this.loginData.name);
            this.$router.push("/home");
          });
        } else {
          return false;
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
.loginClass{
  width: 300px;
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}
</style>