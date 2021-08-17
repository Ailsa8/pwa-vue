const searchJson = {
  show: true,
  searchComData: [{
    code: "userName",
    label: "请输入账号名",
    compName: "FieldInput"
  }],
  searchInfro: {
    defultData: {},
    addShow: true,
    resetShow: true
  }
};
const tableJson = {
  show: true,
  paginationShow: true,
  total: 0,
  tableLoading: false,
  tableData: [],
  columns: [{
    label: "账号名",
    prop: "userName"
  }, {
    label: "年龄",
    prop: "age"
  }, {
    label: "性别",
    prop: "gender",
    slot: true
  }, {
    label: "操作",
    prop: "active",
    fixed: "right",
    width: "100",
    slot: true
  }],
  selectTypeColumns: true,
  indexTypeColumns: true,
  emptyData: {
    description: "暂无用户数据，请去新增！"
  }
};
const dialogJson = {
  title: "新增",
  visible: false
};
export { searchJson, tableJson, dialogJson };