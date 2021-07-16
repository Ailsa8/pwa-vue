const searchJson = {
  show: true, // 必须 是否显示搜索栏
  searchComData: [{
    code: "firstSearchKey",
    label: "请输入名称",
    compName: "FieldInput"
  }],
  searchInfro: {
    defultData: {}, // 必须 搜索栏默认值
    addShow: true // 必须 搜索栏新增按钮
  } // 必须 搜索栏其他信息
};
const tableJson = {
  show: true, // 必须 是否显示表格
  paginationShow: true, // 必须 是否显示翻页
  total: 1, // 必须 表格总数据条数
  tableLoading: false, // 必须 表格loading
  tableData: [{}], // 必须 表格list数据
  columns: [{
    label: "名称", // 必须
    prop: "user_name", // 条件必须
    slot: true // 选填，使用slot时，prop为必填
  }], // 必须 表格列数据
  selectTypeColumns: true, // 必须 表格选择列
  indexTypeColumns: true, // 必须 表格序号列
  emptyData: {
    src: null, // 无数据时的展示图片
    tips: "" // 无数据时的展示文字
  }
};
const dialogJson = {
  title: "新增", // 必须 dialog标题
  visible: false // 必须 显示隐藏
};
export { searchJson, tableJson, dialogJson };