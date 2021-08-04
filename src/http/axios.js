console.log(process.env);
import axios from "axios";
import allApi from "./api/index";
import { getlocation, clearInfro } from "@/utils/storage.js";
import { Message } from "element-ui";
import router from "@/router";
axios.create({
  timeout: 5000
});
// 解决并发
const pendingRequests = new Map();
// 请求拦截
axios.interceptors.request.use(config => {
  const requestKey = `${config.url}/${JSON.stringify(config.params)}/${JSON.stringify(config.data)}&request_type=${config.method}`;
  if (pendingRequests.has(requestKey)) {
    config.cancelToken = new axios.CancelToken((cancel) => {
      // cancel 函数的参数会作为 promise 的 error 被捕获
      cancel(`重复的请求被主动拦截: ${requestKey}`);
    });
  } else {
    pendingRequests.set(requestKey, config);
    config.requestKey = requestKey;
  }
  config.headers = Object.assign({}, config.headers, getHeaders());
  return config;
}, (err) => {
  pendingRequests.clear();
  return Promise.reject(err);
});
// 响应拦截
axios.interceptors.response.use(res => {
  const requestKey = res.config.requestKey;
  pendingRequests.delete(requestKey);
  if (res.data.code === "000000") {
    return res.data.content;
  } else {
    Message(res.data.description);
    return;
  }
}, (err) => {
  if (axios.isCancel(err)) {
    console.warn(err);
    return Promise.reject(err);
  }
  pendingRequests.clear();
  handleErr(err.response);
  return;
});

// 获取header头
function getHeaders() {
  return {
    "Authorization": "Bearer " + getlocation(),
    sign: "3233333"
  };
}
// 错误码
const handleErr = function(err) {
  const { status } = err;
  switch (status) {
    case 401:
      logOut("验证失败，请重新登陆");
      break;
    default:
      Message("服务器错误");
  }
};
// 登出
function logOut(des) {
  des ? Message(des) : null;
  clearInfro();
  router.push("/login");
}
class Axios {
  constructor() {
    console.log("2333");
  }
  post(url, params = {}, headers) {
    return axios.post(url, params, { headers });
  }
  get(url, params = {}, headers) {
    return axios.get(url, { params, headers });
  }
}
const Http = new Axios();
export { pendingRequests, logOut };
export default Http;
