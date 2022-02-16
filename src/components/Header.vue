<template>
  <div id="header">
    <ul>
      <li>
        <router-link
          style="color: white; font-size: 30px; font-family: sans-serif"
          to="/"
          >Covid-19 Tracker</router-link
        >
      </li>
      <li><router-link to="/">Landing</router-link></li>
      <li><router-link to="/home">Home</router-link></li>
      <li><router-link to="/source">Source</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/news">News</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Header",
  components: {},
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
div#header {
  padding: 25px;
  background-color: #2c3e50;
}
div#header h3 {
  color: white;
  font-size: 30px;
}
ul {
  display: flex;
  align-items: center;
}
li {
  display: inline;
  font-weight: bold;
  color: white;
  margin: 15px;
  padding: 1rem;
  border-radius: 5px;
}
li:hover {
  background-color: rgb(223, 222, 222);
  border-radius: 5px;
  padding: 1rem;
}
a {
  text-decoration: none;
  color: rgb(0, 0, 0);
}
a:hover {
  text-decoration: none;
  color: black;
}
</style>