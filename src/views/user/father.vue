<template>
  <div>
    <child>
      <template v-slot:header>
        <h1>Here might be a page title</h1>
      </template>
    </child>
  </div>
</template>
<script>
import child from "./components/child.vue";
export default {
  components: { child }
};
</script>