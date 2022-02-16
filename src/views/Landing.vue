<template>
  <div>
    <Header />
    <br />
    <div class="container mt-4 p-4">
      <GoogleForms />
      <span style="font-size: 50px" class="aria-hidden"
        ><i class="bi bi-arrow-down-right-circle-fill"></i
      ></span>
      <h3>Welcome to Covid-19 Tracker Quebec</h3>
      <hr />
      <br />
      <h3>Coronavirus disease (COVID-19)</h3>
      <br />
      <h4>
        Coronavirus disease (COVID-19) is an infectious disease caused by the
        SARS-CoV-2 virus. Most people who fall sick with COVID-19 will
        experience mild to moderate symptoms and recover without special
        treatment. However, some will become seriously ill and require medical
        attention.
      </h4>
    </div>
    <br />
    <DataHub sitename="Covid-19 Tracker Data" />
    <br />
    <hr />
    <FooterMedia />
  </div>
</template>

<script>
import FooterMedia from "../components/FooterMedia";
import Header from "../components/Header";
import DataHub from "../components/DataHub";
import GoogleForms from "../components/GoogleForms";

export default {
  name: "Landing",
  components: {
    Header,
    FooterMedia,
    DataHub,
    GoogleForms,
  },
};
</script>

<style>
</style>