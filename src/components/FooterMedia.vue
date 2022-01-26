<template>
  <div>
    <div class="footer">
      <div class="app">
        <ul>
          <li>
            <a href="https://facebook.com"
              >Facebook <i class="bi bi-facebook"></i
            ></a>
          </li>
          <li>
            <a href="https://twitter.com"
              >Twitter <i class="bi bi-twitter"></i
            ></a>
          </li>
          <li>
            <a href="https://github.com">Github <i class="bi bi-github"></i></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterMedia",
};
</script>

<style>
.footer {
  padding: 25px;
}
#app ul {
  display: flex;
  align-items: center;
}
#app li {
  display: inline;
  font-weight: bold;
  color: white;
  margin: 15px;
  padding: 1rem;
  border-radius: 5px;
}
#app a {
  color: lightslategray;
}
</style>