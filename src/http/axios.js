console.log(process.env);
import axios from "axios";
import allApi from "./api/index";
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
  if (res.status === 200) {
    return res.data;
  }
}, (err) => {
  handleErr(err.response);
  return Promise.reject(err);
});

// 获取header头
function getHeaders() {
  return {
    tokenPwa: "weieiekkiiii22222",
    sign: "3233333"
  };
}
// 错误码
const handleErr = function(err) {
  // const { message, errorMessage, subMessage } = err.data || {};
  // const errMessage = subMessage || message || errorMessage;
  // if (err) {
  //   // const status = err.status;
  //   alert(errMessage);
  // } else {
  //   alert("连接服务器失败");
  // }
  console.log(err);
  alert("连接服务器失败");
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
