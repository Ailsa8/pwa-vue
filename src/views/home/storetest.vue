<template>
  <div>
    <div>store: {{ viewsCount }}</div>
    <div>getters: {{ countadd }}</div>
    <div>computed中拿数据{{ testOne }}</div>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
export default {
  data() {
    return {
      testOneData: "www"
    };
  },
  computed: {
    ...mapState({
      viewsCount: state => state.login.count
    }),
    ...mapGetters({
      countadd: "getcount"
    }),
    testOne({ $data, $attrs, $route, $store, $listeners, $ref }) {
      // computed中可以直接拿vue挂载的属性
      console.log($data.tese);
      // const a = null;
      // if (a.length > 1) {
      //   // ...
      // }
      return $data.tese ?? $data.testOneData;
    }
  }
};
</script>