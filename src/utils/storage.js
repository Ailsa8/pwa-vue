export function getToken() {
  return sessionStorage.getItem("access-token");
}
export function setToken(token) {
  sessionStorage.setItem("access-token", token);
}
export function clearInfro() {
  sessionStorage.clear();
}