console.log(process.env);
import axios from "axios";
import allApi from "./api/index";
import { getToken, clearInfro } from "@/utils/storage.js";
import { Message } from "element-ui";
import router from "@/router";
axios.create({
  timeout: 5000
});
// 请求拦截
axios.interceptors.request.use(req => {
  req.headers = Object.assign({}, req.headers, getHeaders());
  return req;
}, (err) => {
  return Promise.reject(err);
});
// 响应拦截
axios.interceptors.response.use(res => {
  if (res.data.code === "000000") {
    return res.data.content;
  } else {
    Message(res.data.description);
    return;
  }
}, (err) => {
  handleErr(err.response);
  return;
});

// 获取header头
function getHeaders() {
  return {
    "Authorization": "Bearer " + getToken(),
    sign: "3233333"
  };
}
// 错误码
const handleErr = function(err) {
  const { status } = err;
  switch (status) {
    case 401:
      Message("验证失败，请重新登陆");
      clearInfro();
      router.push("/login");
      break;
    default:
      Message("服务器错误");
  }
};

// 获取url
const getUrl = function(data) {
  let title = ""; let subtitle = "";
  if (data) {
    title = data.substring(0, data.indexOf("."));
    subtitle = data.substring(data.indexOf(".") + 1, data.length);
  }

  return allApi[title][subtitle];
};

class Axios {
  constructor() {
    console.log("2333");
  }
  post(url, params = {}, headers) {
    return axios.post(getUrl(url), params, { headers });
  }
  get(url, params = {}, headers) {
    return axios.get(getUrl(url), { params, headers });
  }
}
const Http = new Axios();
export default Http;
