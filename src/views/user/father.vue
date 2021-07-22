<template>
  <div>
    <child>
      <template v-slot:header>
        <h1>Here might be a page title</h1>
      </template>
    </child>
    <button @click="stringifyConsole">stringifyConsole</button>
  </div>
</template>
<script>
import child from "./components/child.vue";
export default {
  components: { child },
  methods: {
    stringifyConsole() {
      const students = [
        {
          name: "james",
          score: 100
        }, {
          name: "jordon",
          score: 60
        }, {
          name: "kobe",
          score: 90
        }
      ];
      console.log(JSON.stringify(students, this.replacer, 4));
    },


    replacer(key, value) {
      if (key === "score") {
        if (value === 100) {
          return "S";
        } else if (value >= 90) {
          return "A";
        } else if (value >= 70) {
          return "B";
        } else if (value >= 50) {
          return "C";
        } else {
          return "E";
        }
      }
      return value;
    }

  }
};
</script>