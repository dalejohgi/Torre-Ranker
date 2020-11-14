import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import HomePage from "./components/HomePage";
import RankedProfile from "./components/RankedProfile";
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
    path: "/ranked-profile/:username",
    component: RankedProfile,
    props: true
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

