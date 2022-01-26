<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="card border-primary mb-3" style="max-width: 20rem">
            <div class="card-header">{{ sitename }}</div>
            <div class="card-body">
              <h4 class="card-title">
                Covid-19 Tracker Data | CIUSSS de l'Ouest-de-l'Île-de-Montréal
              </h4>
              <p
                v-for="ciusssouest in ouestMontréal"
                :key="ciusssouest.cases"
                class="card-text"
              >
                {{ ciusssouest.cases }}
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card border-success mb-3" style="max-width: 20rem">
            <div class="card-header">{{ sitename }}</div>
            <div class="card-body">
              <h4 class="card-title">
                Covid-19 Tracker Data | CIUSSS du Nord-de-l'Île-de-Montréal
              </h4>
              <p
                v-for="ciusssnord in nordMontréal"
                :key="ciusssnord.cases"
                class="card-text"
              >
                {{ ciusssnord.cases }}
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card border-danger mb-3" style="max-width: 20rem">
            <div class="card-header">{{ sitename }}</div>
            <div class="card-body">
              <h4 class="card-title">
                Covid-19 Tracker Data | CIUSSS de l'Est-de-l'Île-de-Montréal
              </h4>
              <p
                v-for="ciusssest in estMontréal"
                :key="ciusssest.cases"
                class="card-text"
              >
                {{ ciusssest.cases }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ciusssouest from "../assets/ciusss/ciusssouest";
import ciusssnord from "../assets/ciusss/ciusssnord";
import ciusssest from "../assets/ciusss/ciusssest";

export default {
  name: "DataHub",
  props: ["sitename"],
  data() {
    return {
      ciusssouest: ciusssouest,
      ciusssnord: ciusssnord,
      ciusssest: ciusssest,
    };
  },
};
</script>

<style>
</style>