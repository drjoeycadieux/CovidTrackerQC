<template>
  <div>
    <div class="container mt-4 p-4">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="card border-dark mb-3" style="max-width: 20rem">
              <div class="card-header">Covid-19 Tracker | AgeGroup</div>
              <div class="card-body">
                <h4 class="card-title">AgeGroup | 20-29 Years</h4>
                <p
                  v-for="ageGroup in ageGroup"
                  :key="ageGroup.cases"
                  class="card-text"
                >
                  {{ ageGroup.cases }}
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card border-light mb-3" style="max-width: 20rem">
              <div class="card-header">Covid-19 Tracker | AgeGroup</div>
              <div class="card-body">
                <h4 class="card-title">
                  AgeGroup | NUMBER OF CASES IN THE PAST 14 DAYS2
                </h4>
                <p
                  v-for="ageGroup in ageGroup"
                  :key="ageGroup.cases14"
                  class="card-text"
                >
                  {{ numberWithCommas(ageGroup.cases14) }}
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <figure class="text-center">
              <blockquote class="blockquote">
                <p class="mb-0">Ya another CovidTracker.</p>
              </blockquote>
              <figcaption class="blockquote-footer">
                Joey Cadieux
                <cite title="Source Title"
                  >Developer of covid-19 Tracker Quebec</cite
                >
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ageGroup from "../assets/data/ageGroup";

export default {
  name: "AgeGroup",
  data() {
    return {
      ageGroup: ageGroup,
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