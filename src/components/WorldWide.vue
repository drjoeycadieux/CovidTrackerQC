<template>
  <div>
    <div class="container mt-4 p-4">
      <h3>WorldWide Covid-19 Tracker | Total Cases</h3>
      <p id="container" v-for="worldWide in worldWide" :key="worldWide.cases">
        {{ numberWithCommas(worldWide.cases) }}
      </p>
      <h3>Total Deaths</h3>
      <p id="container" v-for="worldWide in worldWide" :key="worldWide.deaths">
        {{ numberWithCommas(worldWide.deaths) }}
      </p>
      <h3>Fully Vaccinated</h3>
      <p
        style="background-color: lightgreen; color: black"
        id="container"
        v-for="worldWide in worldWide"
        :key="worldWide.fullyvacinnated"
      >
        {{ numberWithCommas(worldWide.fullyvaccinated) }}
      </p>
    </div>
  </div>
</template>

<script>
import WorldWide from "../assets/data/worldWide";

export default {
  name: "WorldWide",
  data() {
    return {
      worldWide: WorldWide,
    };
  },
  methods: {
    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
};
</script>

<style>
</style>