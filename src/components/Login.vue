<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    @submit.prevent="handleSubmit"
  >
    <h3 class="header">Login</h3>

    <v-text-field :rules="emailRules" v-model="email" placeholder="Email" />
    <v-text-field
      :rules="passwordRules"
      type="password"
      v-model="password"
      placeholder="Password"
    />

    <button
      :disabled="!valid"
      @click="validate"
      class="btn btn-primary btn-block"
    >
      Login
    </button>
  </v-form>
</template>

<script>
import axios from "axios";

import { Utils } from "../Utils";
let utils = new Utils();

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      valid: true,
      emailRules: utils.getEmailRules(),
      passwordRules: utils.getPasswordRules(),
    };
  },
  methods: {
    async handleSubmit() {
      const response = await axios.post("login", {
        email: this.email,
        password: this.password,
      });

      this.$router.push("/products");
      localStorage.setItem("loginToken", response.data.accessToken);
    },
    validate() {
      this.$refs.form.validate();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "src/styles/Login.scss";
</style>
