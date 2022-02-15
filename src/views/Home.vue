<template>
  <div>
    <Header />
    <br />
    <br />
    <div class="container-fluid">
      <div class="alert alert-dismissible alert-warning">
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
        ></button>
        <h4 class="alert-heading">
          <span class="aria-hidden"
            ><i class="bi bi-camera-reels-fill"></i
          ></span>
          Live News (Covid-19)
        </h4>
        <p class="mb-0">
          The virus can spread from an infected person’s mouth or nose in small
          liquid particles when they cough, sneeze, speak, sing or breathe.
          These particles range from larger respiratory droplets to smaller
          aerosols. You can be infected by breathing in the virus if you are
          near someone who has COVID-19, or by touching a contaminated surface
          and then your eyes, nose or mouth. The virus spreads more easily
          indoors and in crowded settings.
          <a
            href="https://www.youtube.com/playlist?list=PLdgoQ6C3ckQv0XCp8S9zSswMuiss8lvcC"
            class="alert-link"
            >Stay Up-to-Date with cpac youtube channel</a
          >
        </p>
      </div>
    </div>
    <br />
    <div id="qcinfo" class="container-sm mt-4 p-4">
      <span><i class="bi bi-exclamation-circle"></i> Attention</span>
      <h3>
        For the most up to date information regarding COVID-19 in Canada, please
        consult
        <a
          style="color: rgb(13, 88, 228)"
          href="https://www.canada.ca/en/public-health/services/diseases/coronavirus-disease-covid-19.html"
          >Canada Deptartment of Health</a
        >This site should not be used for life saving information - instead,
        rather, a source for numbers and statistics.
      </h3>
    </div>
    <br />

    <div class="container-sm">
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

    <br />
    <WorldData info="Covid-19 Tracker Quebec" />
    <br />
    <DataBoxes info2="Covid-19 Tracker Quebec" />
    <br />
    <h3>
      AgeGroup From 20-29 Years
      <span class="aria-hidden"
        ><i class="bi bi-arrow-down-square-fill"></i
      ></span>
    </h3>
    <br />
    <AgeGroup />
    <br />
    <FooterPage />
  </div>
</template>

<script>
import Header from "../components/Header";
import DataBoxes from "../components/DataBoxes";
import FooterPage from "../components/FooterPage";
import WorldData from "../components/WorldData";
import AgeGroup from "../components/AgeGroup";

import worldWide from "../assets/data/worldWide.js";

export default {
  name: "Home",
  components: {
    Header,
    DataBoxes,
    FooterPage,
    WorldData,
    AgeGroup,
  },
  data() {
    return {
      worldWide: worldWide,
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
div#qcinfo {
  border: solid 2px rgb(13, 88, 228);
  background-color: rgb(74, 136, 252);
}
div#qcinfo h3 {
  color: black;
}
div#qcinfo span {
  color: black;
  font-weight: bold;
  font-size: 25px;
}
div#qcinfo span > i {
  color: black;
  font-weight: bold;
}
p#container {
  padding: 1px;
  border: black 2px solid;
  border-radius: 5px;
}
</style>