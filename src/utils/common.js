import Vue from "vue";
import { Message } from "element-ui";
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
  },

  // 二进制流导出文件
  exportExcel: (content, fileName) => {
    const blob = new Blob([content]);
    if ("download" in document.createElement("a")) { // 非IE下载
      const elink = document.createElement("a");
      elink.download = fileName;
      elink.style.display = "none";
      elink.href = URL.createObjectURL(blob);
      document.body.appendChild(elink);
      elink.click();
      URL.revokeObjectURL(elink.href); // 释放URL 对象
      document.body.removeChild(elink);
      Message.success("导出成功");
    } else { // IE10+下载
      navigator.msSaveBlob(blob, fileName);
      Message.success("导出成功");
    }
  },
  /**
 *
 * @param {*} data 需要截取的字符串
 * @param {*} num 需要截取的长度, 为正整数
 * @returns value 为显示的值，type为是否需要tooltip
 */
  dataSplit: (data, num = 10) => {
    if (data && data.length > num) {
      return {
        oldData: data,
        value: data.slice(0, num) + "...",
        type: true
      };
    } else {
      return {
        oldData: data,
        value: data,
        type: false
      };
    }
  },
  /**
 * 全局替换json中的字段
 * dataJson  Json数据
 * field  需要替换的数据 使用格式为：${field}
 * fieldNew 替换的新数据
 * 返回替换后的新json
 */
  matchJsonField: (dataJson, field, fieldNew) => {
    var regtext = new RegExp("\\$\\{" + field + "\\}", "g");
    const dataJsonStr = JSON.stringify(dataJson).replace(regtext, fieldNew);
    return JSON.parse(dataJsonStr);
  }
};
Vue.prototype.$func = func;
