export function getlocation(type) {
  if (type) {
    return sessionStorage.getItem(type);
  } else {
    return sessionStorage.getItem("access-token");
  }
}
export function setlocation(token, type) {
  if (type) {
    sessionStorage.setItem(type, typeof token === "string" ? token : JSON.stringify(token));
  } else {
    sessionStorage.setItem("access-token", token);
  }
}
export function clearInfro() {
  sessionStorage.clear();
}
