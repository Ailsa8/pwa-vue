import Vue from "vue";
/* 正则集
规则：1、在RegExpList对象中增加正则
2、正则名必须唯一
3、使用正则时，用ue.prototype.$RegExp或this.$RegExp*/
const RegExpList = {
  fileName: /(?<=\.\/).*?(?=\.js)/, // 获取文件名，以./开始，.js 结束
  Number_Rep: /^[0-9]+$/, // 纯数字
  No_CN_Letter_Rep: /^[^\u4E00-\u9FA5]+$/, // 非中文字符
  Stock_Code_Rep: /^[0-9a-zA-z]+$/, // 英文|数字
  Phone_Rep: /^1[2-9]\d{9}$/, // 手机号
  Letters_Rep: /^[a-z\u4e00-\u9fa5]+$/i, // 中英文
  NamefromUrl_Rep: /(?<=\/)(?!.*\/).*?(?=\?)/, // 从url中获取文件名http://XXX/111_2674_6258624285_958123274.docx?Expires=2571815942
  SubFilterName_Rep: /_\d{4}(_\d+)+/ // _及其后所有（111_2674_6258624285_958123274.docx =》111.docx  _2674_6258624285_958123274）
};
Vue.prototype.$RegExp = RegExpList;