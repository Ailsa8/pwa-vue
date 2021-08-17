/**
 * searchCom
 */
export const searchComData = [ // 必填
  {
    code: "dataInfro", // 参数字段
    label: "查询", // 搜索框默认显示文字
    compName: "HomeSearch", // 组件名称，也可为注入的自定义组件
    options: "", // 下拉列表
    elrow: 18 // 占位-栅格
  }
];
export const searchInfro = { // 必填，搜索框其他信息
  defultData: { // 搜索框默认值，当搜索框有自定义组件时，默认值也可设置为对象
    dataInfro: { // 些为示例
      type: "0",
      time: new Date()
    }
  }
};
/**
 * dataColor
 * 其中value--必须为Number类型
 */
export const dataColorInfro = {
  isActive: false, // 是否需要cell活动背景色
  rules: [ // 规则
    {
      range: [{ symbol: ">", limt: 1 }], // 必填，具体规则
      color: "#333" // 必填，颜色值
    }
  ]
};