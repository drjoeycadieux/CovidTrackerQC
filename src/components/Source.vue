<template>
  <div>
    <Header />
    <div class="container mt-4 p-4">
      <h3>
        <span class="aria-hidden"
          ><i class="bi bi-arrow-right-square-fill"></i
        ></span>
        How We Get Our Data
      </h3>
      <h5>
        The data on this site is, for the most part, entirely manually compiled
        from a huge variety of government and news media sources in near
        real-time as information is announced. The variety of sources is used to
        ensure that an accurate and complete dataset is available. For every
        case, a source URL is provided. For reference, a list of links to the
        common sources for each province is found below. Do note that data from
        this site is largely updated by the live press briefings, and the
        sources below are usually delayed.
      </h5>
      <ul>
        <li>
          <a
            href="https://santemontreal.qc.ca/en/public/coronavirus-covid-19/situation-of-the-coronavirus-covid-19-in-montreal/"
            >Sante Montreal</a
          >
        </li>
        <br />
        <br />
        <li>
          <a
            href="https://www.quebec.ca/sante/problemes-de-sante/a-z/coronavirus-2019/situation-coronavirus-quebec"
            >Quebec</a
          >
        </li>
      </ul>
    </div>
    <div class="container mt-4 p-4">
      <iframe
        src="https://ourworldindata.org/grapher/positive-rate-daily-smoothed?tab=table&region=NorthAmerica"
        loading="lazy"
        style="width: 100%; height: 600px; border: 0px none"
      ></iframe>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";

export default {
  name: "Source",
  components: {
    Header,
  },
};
</script>

<style>
a {
  text-decoration: none;
  color: black;
}
a:hover {
  color: white;
  text-decoration: none;
}
</style>