import router from "../router";
import { getToken } from "../utils/storage";

const whitePage = ["/login"];
router.beforeEach(async(to, from, next) => {
  if (getToken() || whitePage.includes(to.path)) {
    next();
  } else {
    next("/login");
  }
});