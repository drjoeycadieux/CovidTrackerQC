<template>
  <div>
    <p>There are currently {{ countLinks }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Stats",
  computed: {
    ...mapGetters(["countLinks"]),
  },
};
</script>

<style>
p {
  font-weight: bold;
}
</style>