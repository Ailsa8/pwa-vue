<template>
  <div>
    <h1>新</h1>
    <textarea v-model="newStr" name="new" cols="30" rows="10"></textarea>
    <h1>旧</h1>
    <textarea v-model="oldStr" name="old" cols="30" rows="10"></textarea>
    <code-diff
      :old-string="oldStr"
      :new-string="newStr"
      :context="10"
      output-format="side-by-side"
      :render-nothing-when-empty="false"
      diff-style="char"
      :is-show-no-change="true" />
  </div>
</template>
<script>
import CodeDiff from "vue-code-diff";
// import { oldStrOld, newStrOld } from "./data/compartion";
export default {
  components: { CodeDiff },
  data() {
    return {
      oldStr: "",
      newStr: ""
    };
  }
};
</script>
<style lang="less" scoped>
/deep/.d2h-info{
  >.d2h-code-side-line{
    display: inline-block;
  }
}
</style>