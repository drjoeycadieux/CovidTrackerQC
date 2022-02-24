<template>
  <nav>
    <h2>Covid-19 Tracker Quebec</h2>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/source">Source</router-link>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
nav h2 {
  color: white;
  float: left;
  display: inline;
}
nav {
  padding: 25px;
  background-color: #2c3e50;
}
nav a {
  font-weight: 700;
  margin: 10px 20px;
}
nav a:hover {
  color: lightslategray;
}
</style>