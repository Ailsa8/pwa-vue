export default {
  state: {
    // 全局状态
    count: 1
  },
  getters: {
    // 过滤
    getcount: (state) => {
      return ++state.count;
    }
  },
  mutations: {
    // 更改状态
    ADD_COUNT(state) {
      ++state.count;
    },
    MINUS_COUNT(state) {
      --state.count;
    }
  },
  actions: {
    // 异步更改状态
    addCount({ commit }) {
      commit("ADD_COUNT");
    }
  }
};