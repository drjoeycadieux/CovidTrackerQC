import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: "Ticket System",
    links: ["https://google.ca", "https://youtube.com", "https://facebook.com"]
  },
  getters: {
    countLinks: (state) => {
      return state.links.length;
    }
  },
  mutations: {},
  modules: {},
  actions: {}
});
