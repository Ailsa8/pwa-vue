import Vue from "vue";
/* 全局公用方法*/
const func = {
  /**
   * 时间戳转日期字符串
   * @param {(Object|String|Number)} time
   * @param {String} cFormat
   * @returns {String | null}
   */
  parseTime: (time, cFormat = "{y}-{m}-{d}") => {
    if (!time || time === "0") return null;
    const format = cFormat;
    let date;
    if (typeof time === "object") {
      date = time;
    } else {
      if ((typeof time === "string") && (/^[0-9]+$/.test(time))) {
        time = parseInt(time);
      }
      if ((typeof time === "number") && (time.toString().length === 10)) {
        time = time * 1000;
      }
      if (time.toString().startsWith("-")) { // 1970年之前的时间戳
        time = parseInt(time);
      }
      date = new Date(time);
    }
    const formatObj = {
      y: date.getFullYear(),
      m: date.getMonth() + 1,
      d: date.getDate(),
      h: date.getHours(),
      i: date.getMinutes(),
      s: date.getSeconds(),
      a: date.getDay()
    };
    const time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {
      const value = formatObj[key];
      // Note: getDay() returns 0 on Sunday
      if (key === "a") { return ["日", "一", "二", "三", "四", "五", "六"][value]; }
      return value.toString().padStart(2, "0");
    });
    return time_str;
  }
};
Vue.prototype.$func = func;
