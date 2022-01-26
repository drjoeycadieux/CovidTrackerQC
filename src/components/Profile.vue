<template>
  <div id="header" class="container mt-4 p-4">
    <div>
      <button
        class="btn btn-primary"
        v-if="$auth.isAuthenticated"
        @click="logout"
      >
        Log out
      </button>
      <div class="container mt-4 p-4">
        <img :src="$auth.user.picture" />
        <h2>{{ $auth.user.name }}</h2>
        <p>{{ $auth.user.email }}</p>
      </div>
      <!-- <div>
        <pre>{{ JSON.stringify($auth.user, null, 2) }}</pre>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
};
</script>

<style>
div#header {
  padding: 25px;
  background-color: #2c3e50;
}
</style>