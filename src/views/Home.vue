<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <button @click="getapithis">click me</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  created() {},
  methods: {
    getapithis() {
      this.Http.post("home.homeGet").then(data => {
        console.log(data);
      });
    }
  }
};
</script>
