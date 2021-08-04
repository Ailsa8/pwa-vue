import Http from "../axios";
const postApi = {
  login: (params) => postMethod("/api/users/login", params),
  userList: (params) => postMethod("/api/users/userList", params),
  userAdd: (params) => postMethod("/api/users/userAdd", params)
};
function postMethod(url, params, hearders) {
  return Http.post(url, params, hearders);
}
export default postApi;