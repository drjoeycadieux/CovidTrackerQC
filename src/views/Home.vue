<template>
  <div>
    <Header />
    <AlertBanner />
    <br />
    <br />

    <div class="container-sm">
      <SiteAlert />
      <WorldWide />
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
import WorldWide from "../components/WorldWide";
import AlertBanner from "../components/alerts/AlertBanner";
import SiteAlert from "../components/alerts/SiteAlert";

export default {
  name: "Home",
  components: {
    Header,
    DataBoxes,
    FooterPage,
    WorldData,
    AgeGroup,
    WorldWide,
    AlertBanner,
    SiteAlert,
  },
  data() {
    return {};
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