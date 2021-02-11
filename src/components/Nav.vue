<template>
  <nav
    :key="$route.fullPath"
    class="navbar navbar-expand navbar-light fixed-top"
  >
    <div class="container">
      <router-link to="/" class="navbar-brand">Home</router-link>
      <router-link to="/products" v-show="isLoggedIn()" class="navbar-brand"
        >Products</router-link
      >
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <li v-show="!isLoggedIn()" class="nav-item">
            <router-link to="/login" class="nav-link">Login</router-link>
          </li>
          <li v-show="!isLoggedIn()" class="nav-item">
            <router-link to="/register" class="nav-link">Sign up</router-link>
          </li>
          <Logout v-show="isLoggedIn()" />
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import Logout from "./Logout";
import { isLoggedIn } from "../auth.js";

export default {
  name: "Nav",
  components: {
    Logout,
  },
  methods: {
    isLoggedIn() {
      return isLoggedIn();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "src/styles/Nav.scss";
</style>
