<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ name }}</p>
  </div>
</template>
<script>
export default {
  name: "About",
  data() {
    return {
      dainfro: {},
      name: "",
      stuei: ""

    };
  },
  created() {
    this.name = this.dainfro?.name || "no";
    console.log(process.env);
    // console.log("globleAilsa==", API_CONFIG);
    // this.infro = ailsaGloble
    // if(globleAilsa){
    //   console.log("globleAilsa==", globleAilsa)
    //   // this.infro = globleAilsa
    // }
  }
};
</script>

