<template>
  <div class="container mt-4 p-4">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="card border-primary mb-3" style="max-width: 20rem">
            <div class="card-header">{{ info }}</div>
            <div class="card-body">
              <h4 v-bind:info="info" class="card-title">
                {{ info }}
                | Dollard-des-Ormeaux
              </h4>
              <p
                v-for="ddoData in ddoData"
                :key="ddoData.cases"
                class="card-text"
              >
                {{ ddoData.cases }}
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card border-danger mb-3" style="max-width: 20rem">
            <div class="card-header">
              {{ info }}
            </div>
            <div class="card-body">
              <h4 class="card-title">
                {{ info }}
                | LaSalle
              </h4>
              <p
                v-for="lasalleData in lasalleData"
                :key="lasalleData.cases"
                class="card-text"
              >
                {{ lasalleData.cases }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ddoData from "../assets/data/ddoData.js";
import lasalleData from "../assets/data/lasalleData.js";

export default {
  name: "WorldData",
  props: ["info"],
  data() {
    return {
      ddoData: ddoData,
      lasalleData: lasalleData,
    };
  },
};
</script>

<style>
</style>