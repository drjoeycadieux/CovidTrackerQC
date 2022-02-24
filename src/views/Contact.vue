<template>
  <div>
    <Navbar />
    <div class="container mt-4 p-4">
      <h3>Contact Us | General Information</h3>
      <h5>{{ getLocalTime() }}</h5>
      <div
        style="color: black"
        v-for="contact in contact"
        :key="contact.title"
        class="container-sm"
      >
        {{ contact.title }}
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import info from "../assets/contact/info";

import Navbar from "../components/Navbar";

export default {
  name: "Contact",
  components: {
    Navbar,
  },
  data() {
    return {
      Info: info,
    };
  },
  methods: {
    getLocalTime() {
      return moment().format("LLL");
    },
  },
};
</script>

<style>
</style>