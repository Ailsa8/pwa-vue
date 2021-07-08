import Vue from "vue";
/* 过滤器
规则：1、新过滤器写入allFilters对象中
2、属性名必须唯一
3、使用时过滤器名称为 属性名+Filter*/
const allFilters = {
  date: (value, cFormat) => {
    if (!value) return "";
    return Vue.prototype.$func.parseTime(value, cFormat);
  }
};
Object.keys(allFilters).forEach(key => {
  Vue.filter(key + "Filter", allFilters[key]);
});