<template>
  <div>
    <Header />
    <div id="news-container" class="container mt-5 p-4">
      <h3>Latest Covid-19 News</h3>
      <hr />
      <h3 v-for="post in articles" :key="post.title">
        {{ post.title }}
        <p>
          {{ post.description }}
          <a :href="post.url">
            {{ post.url }}
          </a>
          {{ post.source.name }}
          {{ post.publishedAt }}
        </p>
      </h3>
    </div>
    <br />
    <br />
    <FooterPage />
  </div>
</template>

<script>
import Header from "../components/Header";
import FooterPage from "../components/FooterPage";

export default {
  name: "News",
  components: {
    Header,
    FooterPage,
  },
  data() {
    return {
      articles: [],
      timestamp: 0,
    };
  },
  mounted() {
    this.fetchNews();
  },
  methods: {
    async fetchNews() {
      try {
        await fetch(
          "https://gnews.io/api/v3/search?q=covid+canada&token=5228bd988561296d8e8ff34464c6a809",
          { cache: "force-cache" }
        )
          .then((res) => res.json())
          .then((data) => {
            this.articles = data.articles;
            this.timestamp = data.timestamp;
          });
      } catch (error) {
        return error.message;
      }
    },
  },
};
</script>

<style>
div#news-container {
  padding: 6px;
  border: solid rgb(0, 0, 0) 2px;
}
div#news-container a {
  color: firebrick;
}
p {
  text-align: center;
  color: black;
  font-weight: bold;
}
</style>