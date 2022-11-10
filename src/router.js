import Vue from "vue";
import Router from "vue-router";
import HomePage from "./views/Inicio.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "inicio",
      alias: "/inicio",
      component: HomePage
    }
  ]
});