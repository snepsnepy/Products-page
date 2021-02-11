<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    @submit.prevent="handleSubmit"
  >
    <h3 class="header">Sign up</h3>
    <div>
      <v-text-field :rules="nameRules" v-model="name" placeholder="Name" />

      <v-text-field :rules="emailRules" v-model="email" placeholder="Email" />

      <v-text-field
        :rules="passwordRules"
        type="password"
        v-model="password"
        placeholder="Password"
      />

      <v-text-field
        :rules="confirmPasswordRules"
        type="password"
        v-model="password_confirmation"
        placeholder="Confirm Password"
      />

      <v-text-field
        :rules="dateStart"
        type="date"
        v-model="education_start_date"
        placeholder="Education Start Date"
      />

      <v-text-field
        :rules="dateEnd"
        type="date"
        v-model="education_end_date"
        placeholder="Education End Date"
      />

      <div class="custom-control custom-checkbox">
        <input
          type="checkbox"
          class="custom-control-input"
          v-model="terms"
          id="customCheck1"
        />
        <label class="custom-control-label" for="customCheck1"
          >I agree terms and conditions</label
        >
      </div>

      <button
        :disabled="!valid || this.terms === false"
        @click="validate"
        class="btn btn-primary btn-block"
      >
        Sign Up
      </button>
    </div>
  </v-form>
</template>

<script>
import axios from "axios";

import { Utils } from "../Utils";
let utils = new Utils();

export default {
  name: "Register",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      education_start_date: "",
      education_end_date: "",
      terms: false,

      valid: true,
      nameRules: utils.getNameRules(),
      emailRules: utils.getEmailRules(),
      passwordRules: utils.getPasswordRules(),
      confirmPasswordRules: [
        (v) => !!v || "Password is required",
        (v) =>
          v === this.password || "The password confirmation does not match.",
      ],
      dateStart: utils.getDateStartRules(),
      dateEnd: [
        (v) => !!v || "Date is required",
        (v) => v > this.education_start_date || "The date is not correct.",
      ],
    };
  },
  methods: {
    /* eslint-disable */
    async handleSubmit() {
      const response = await axios.post("register", {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation,
        education_start_date: this.education_start_date,
        education_end_date: this.education_end_date,
        terms: this.terms,
      });

      this.$router.push("/login");
    },
    validate() {
      this.$refs.form.validate();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "src/styles/Register.scss";
</style>
