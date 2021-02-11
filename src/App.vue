<template>
  <div id="app">
    <Nav />
    <div>
      <div>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";

export default {
  name: "App",
  components: {
    Nav,
  },
  data: () => ({}),
};
</script>

<style scoped></style>
