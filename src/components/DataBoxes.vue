<template>
  <div>
    <h3>
      Quebec Province
      <span class="aria-hidden"
        ><i class="bi bi-arrow-down-square-fill"></i
      ></span>
    </h3>
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="card text-white bg-danger mb-3" style="max-width: 20rem">
            <div class="card-header">
              {{ info2 }}
            </div>
            <div class="card-body">
              <h4 class="card-title">
                Cases |
                {{ info2 }}
              </h4>
              <p
                v-for="covidQuebec in covidQuebec"
                :key="covidQuebec.cases"
                class="card-text"
              >
                {{ numberWithCommas(covidQuebec.cases) }}
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card text-white bg-warning mb-3" style="max-width: 20rem">
            <div class="card-header">
              {{ info2 }}
            </div>
            <div class="card-body">
              <h4 class="card-title">
                Deaths |
                {{ info2 }}
              </h4>
              <p
                v-for="covidQuebec in covidQuebec"
                :key="covidQuebec.deaths"
                class="card-text"
              >
                {{ numberWithCommas(covidQuebec.deaths) }}
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card text-white bg-primary mb-3" style="max-width: 20rem">
            <div class="card-header">
              {{ info2 }}
            </div>
            <div class="card-body">
              <h4 class="card-title">
                Recovered |
                {{ info2 }}
              </h4>
              <p
                v-for="covidQuebec in covidQuebec"
                :key="covidQuebec.recoveries"
                class="card-text"
              >
                {{ numberWithCommas(covidQuebec.recoveries) }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
    <h3>
      Montreal
      <span class="aria-hidden"
        ><i class="bi bi-arrow-down-square-fill"></i
      ></span>
    </h3>
    <br />
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="card text-white bg-danger mb-3" style="max-width: 20rem">
            <div class="card-header">
              {{ info2 }}
            </div>
            <div class="card-body">
              <h4 class="card-title">
                Cases |
                {{ info2 }}
              </h4>
              <p
                v-for="covidMontreal in covidMontreal"
                :key="covidMontreal.cases"
                class="card-text"
              >
                {{ numberWithCommas(covidMontreal.cases) }}
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card text-white bg-warning mb-3" style="max-width: 20rem">
            <div class="card-header">
              {{ info2 }}
            </div>
            <div class="card-body">
              <h4 class="card-title">
                Deaths |
                {{ info2 }}
              </h4>
              <p
                v-for="covidMontreal in covidMontreal"
                :key="covidMontreal.deaths"
                class="card-text"
              >
                {{ numberWithCommas(covidMontreal.deaths) }}
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card text-white bg-primary mb-3" style="max-width: 20rem">
            <div class="card-header">
              {{ info2 }}
            </div>
            <div class="card-body">
              <h4 class="card-title">
                Recovered |
                {{ info2 }}
              </h4>
              <p
                v-for="covidMontreal in covidMontreal"
                :key="covidMontreal.recoveries"
                class="card-text"
              >
                {{ numberWithCommas(covidMontreal.recoveries) }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import covidMontreal from "../assets/data/covidMontreal.js";
import covidQuebec from "../assets/data/covidQuebec.js";

export default {
  name: "DataBoxes",
  props: ["info2"],
  data() {
    return {
      covidMontreal: covidMontreal,
      covidQuebec: covidQuebec,
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