import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import HomePage from "./components/HomePage";
import RankedCard from "./components/RankedCard";
import Vuetify from 'vuetify';
import "vuetify/dist/vuetify.min.css";

Vue.use(VueRouter);
Vue.use(Vuetify);

const routes = [
  {
    path: "/",
    component: HomePage
  },
  {
    path: "/ranked-profile",
    component: RankedCard,
  },
  // {
  //   path: "/job-map",
  //   component: JobMap
  // },
  {
    path: "/RankedCard",
    component: RankedCard
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});
Vue.config.productionTip = false;

new Vue({
  router,
  vuetify: new Vuetify(),
  render: (h) => h(App)
}).$mount("#app");

