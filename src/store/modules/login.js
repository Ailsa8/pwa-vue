export default {
  state: {
    // 全局状态
    count: 1,
    userName: ""
  },
  getters: {
    // 过滤
    getcount: (state) => {
      return ++state.count;
    },
    getUserName: (state) => {
      return state.userName;
    }
  },
  mutations: {
    // 更改状态
    ADD_COUNT(state) {
      ++state.count;
    },
    MINUS_COUNT(state) {
      --state.count;
    },
    USERNAME(state, val) {
      console.log("mutations====", val);
      state.userName = val;
    }
  },
  actions: {
    // 异步更改状态
    addCount({ commit }) {
      commit("ADD_COUNT");
    }
  }
};