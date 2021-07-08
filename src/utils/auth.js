import router from "../router";
import { getToken } from "../utils/storage";
import { pendingRequests } from "@/http/axios";

const whitePage = ["/login"];
router.beforeEach(async(to, from, next) => {
  pendingRequests.clear();
  if (getToken() || whitePage.includes(to.path)) {
    next();
  } else {
    next("/login");
  }
});