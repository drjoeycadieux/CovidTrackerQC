<template>
  <div>
    <Header />
    <br />
    <div class="container mt-4 p-4">
      <span style="font-size: 50px" class="aria-hidden"
        ><i class="bi bi-arrow-down-right-circle-fill"></i
      ></span>
      <h3>Welcome to Covid-19 Tracker Quebec</h3>
      <hr />
      <br />
      <h3>Coronavirus disease (COVID-19)</h3>
      <br />
      <h4>
        Coronavirus disease (COVID-19) is an infectious disease caused by the
        SARS-CoV-2 virus. Most people who fall sick with COVID-19 will
        experience mild to moderate symptoms and recover without special
        treatment. However, some will become seriously ill and require medical
        attention.
      </h4>
    </div>
    <br />
    <div v-if="!$auth.loading">
      <button
        class="btn btn-primary"
        v-if="!$auth.isAuthenticated"
        @click="login"
      >
        Log in
      </button>
    </div>
    <br />
    <hr />
    <FooterMedia />
  </div>
</template>

<script>
import FooterMedia from "./FooterMedia";
import Header from "./Header";

export default {
  name: "Landing",
  components: {
    Header,
    FooterMedia,
  },
  methods: {
    login() {
      this.$auth.loginWithRedirect();
    },

    logout() {
      this.$auth.logout({
        returnTo: window.location.origin,
      });
    },
  },
};
</script>

<style>
</style>