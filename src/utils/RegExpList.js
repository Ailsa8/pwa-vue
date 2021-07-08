import Vue from "vue";
/* 正则集
规则：1、在RegExpList对象中增加正则
2、正则名必须唯一
3、使用正则时，用ue.prototype.$RegExp或this.$RegExp*/
const RegExpList = {
  fileName: /(?<=\.\/).*?(?=\.js)/ // 获取文件名，以./开始，.js 结束
};
Vue.prototype.$RegExp = RegExpList;