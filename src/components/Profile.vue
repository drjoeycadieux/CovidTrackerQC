<template>
  <div id="header" class="container mt-4 p-4">
    <div class="container">
      <div class="row">
        <div class="col"><img :src="$auth.user.picture" /></div>
        <div class="col">
          <h2>{{ $auth.user.name }}</h2>
        </div>
        <div class="col">
          <p>{{ $auth.user.email }}</p>
        </div>
      </div>
    </div>
    <button
      class="btn btn-primary"
      v-if="$auth.isAuthenticated"
      @click="logout"
    >
      Log out
    </button>
  </div>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {};
  },
  methods: {
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin,
      });
    },
  },
};
</script>

<style>
div#header {
  padding: 25px;
  background-color: #2c3e50;
}
</style>