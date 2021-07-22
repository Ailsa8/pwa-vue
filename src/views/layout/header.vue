<template>
  <div class="page-header">
    <span class="user">当前账号：{{ userName }}</span>
    <el-button type="text" @click="logOut">登出</el-button>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import { logOut } from "@/http/axios";
import { getlocation } from "@/utils/storage.js";
export default {
  computed: {
    ...mapGetters({
      userName: "getUserName"
    })
  },
  created() {
    if (!this.userName) {
      this.setUserName(getlocation("userName"));
    }
  },
  methods: {
    ...mapMutations({
      setUserName: "USERNAME"
    }),
    logOut() {
      logOut();
    }
  }
};
</script>
<style lang="less" scoped>
.page-header{
  width: 100%;
  height: 40px;
  line-height: 40px;
  background-color: #8896B3;
  text-align: right;
  color: white;
  .user{
    margin-right: 20px;
  }
}
</style>