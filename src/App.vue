<template>
  <div id="app">
    <nav-com v-if="this.$route.path !== '/login'"></nav-com>
    <router-view />
  </div>
</template>
<script>
import navCom from "./views/layout/nav.vue";
export default {
  components: { navCom }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
}

#nav {
  padding: 30px 30px 30px 0;
  width: 200px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
