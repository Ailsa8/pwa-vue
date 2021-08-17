export const oldStrOld = JSON.stringify({
  async queyList() {
    const datai = {
      multiEmail: {
        fieldCode: "multiEmail",
        fieldCodeName: null,
        fieldTypeCode: "doctorDescribe",
        fieldValue: [{ value: "123@qq.com", remark: "111", link: null, attachment: null }, { value: "133@qq.com", remark: "222", link: null, attachment: null }],
        hospitalId: null,
        meetingDateRemark: null,
        productCode: "MDM",
        rowId: 689429,
        submitterId: 2840,
        submitterName: "丁瑞华",
        updateTime: "1618210247000"
      }
    };
    const [err, data] = await to(apiGetTrailBaseInfo({ id: this.trialId }));
    if (!err && data) {
      // this.tableData = this.formatTableData(data.data);
    }
    this.tableData = getFieldsTableData(datai, this.chictr_base_infro);
  }
});
export const newStrOld = JSON.stringify({
  async queyList() {
    const datai = {
      multiEmail: {
        fieldCode: "multiEmail",
        fieldCodeName: null,
        fieldTypeCode: "doctorDescribe",
        fieldValue: [{ value: "123@qq.com", remark: "111", link: null, attachment: null }, { value: "133@qq.com", remark: "222", link: null, attachment: null }],
        hospitalId: null,
        meetingDateRemark: null,
        productCode: "MDM",
        rowId: 689429,
        submitterId: 2840,
        submitterName: "丁瑞华",
        updateTime: "1618210247000"
      }
    };
    console.log("222")
    const [err, data] = await to(apiGetTrailBaseInfo({ id: this.trialId }));
    if (!err && data) {
      // this.tableData = this.formatTableData(data.data);
    }
    this.tableData = getFieldsTableData(datai, this.chictr_base_infro);
  }