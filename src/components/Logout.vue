<template>
  <li class="nav-item">
    <a href="#" class="nav-link" @click.prevent="logOut()">Logout</a>
  </li>
</template>

<script>
import axios from "axios";

export default {
  name: "Logout",
  methods: {
    /* eslint-disable */
    async logOut() {
      const response = await axios.post("logout", null, {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + localStorage.getItem("loginToken"),
        },
      });

      this.$router.push("/");
      localStorage.removeItem("loginToken");
    },
  },
};
</script>
