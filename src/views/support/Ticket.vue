<template>
  <div>
    <Navbar />
    <div>
      <h1>Welcome to the {{ title }}</h1>
      <ul>
        <li
          style="color: black"
          v-for="(links, index) in links"
          v-bind:key="index"
        >
          {{ links }}
        </li>
      </ul>
    </div>
    <Stats />
  </div>
</template>

<script>
import { mapState } from "vuex";

// Components
import Navbar from "../../components/Navbar";
import Stats from "../../components/Stats";

export default {
  name: "Ticket",
  components: {
    Navbar,
    Stats,
  },
  computed: {
    ...mapState(["title", "links"]),
  },
};
</script>

<style>
ul {
  display: block;
  padding-top: 50px;
}
li {
  display: inline;
  margin: 10px;
  font-weight: bold;
}
h1 {
  width: 600px;
  margin: auto;
}
</style>