import Http from "../axios";
const postApi = {
  userRemove: (params) => getMethod("/api/users/userRemove", params)
};
function getMethod(url, params, hearders) {
  return Http.get(url, params, hearders);
}
export default postApi;