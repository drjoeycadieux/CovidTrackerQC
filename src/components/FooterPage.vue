<template>
  <div id="footer">
    <div class="container-sm">
      <h2 style="color: white">Covid-19 Tracker Quebec</h2>
      <hr style="color: white" />
    </div>
    <p>
      Designed and built with
      <i style="color: pink" class="bi bi-suit-heart-fill"></i> in Montreal //
      Data Provided By <a href="https://techwithjoey.com">Joey Cadieux</a>
    </p>
  </div>
</template>

<script>
export default {
  name: "FooterPage",
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
div#footer {
  padding: 25px;
  background-color: #2c3e50;
}
div#footer p {
  color: white;
  font-weight: bold;
}
div#footer a {
  text-decoration: none;
  color: rgb(19, 107, 165);
}
div#footer a:hover {
  color: rgb(21, 118, 230);
}
div#footer a:visited {
  color: red;
}
</style>