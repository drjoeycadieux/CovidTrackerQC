<template>
  <div id="alerts">
    <p>
      <i class="bi bi-info-square-fill"></i>
      As of June 5, 2022 we are no longer collecting new data. |
      {{ getLocalUpdate() }}
    </p>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "AlertBanner",
  data() {
    return {
      getLocalUpdate() {
        return moment().format("MMMM Do YYYY, h:mm:ss a");
      },
    };
  },
};
</script>

<style>
#alerts {
  padding: 5px;
  background-color: firebrick;
  color: black;
  text-align: center;
}
#alerts,
h4 {
  font-weight: bold;
  font-family: sans-serif;
  font-size: 15px;
  padding: 1em;
}
</style>