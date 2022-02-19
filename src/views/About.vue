<template>
  <div>
    <Header />
    <div class="container mt-4 p-4">
      <h3>Ya another Covid tracker...</h3>
      <p>
        This website is another look at tracking covid cases from Quebec. It was
        mainly built to further my knowledge about the javascript framework
        Vuejs and to play around with more APIs. It is still a work in progress
        as I think about other features and data to consume. Right now I think
        I've found the best source of data that I can find at least where Quebec
        is concerned.
      </p>
      <span
        ><a href="https://github.com/drjoeycadieux/CovidTrackerQC"
          ><i class="bi bi-github"></i></a
      ></span>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";

export default {
  name: "About",
  components: {
    Header,
  },
};
</script>

<style>
span i {
  font-size: 30px;
  color: lightslategray;
}
</style>