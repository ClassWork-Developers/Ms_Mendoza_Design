import Vue from "vue";
import Router from "vue-router";
import HomePage from "./views/Inicio.vue";
import Contenido from "./views/Contenido.vue";
import AboutMe from "./views/AboutMe.vue";
import Form from "./views/Form.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "inicio",
      alias: "/inicio",
      component: HomePage
    },
    {
      path: "/contenido",
      name: "contenido",
      alias: "/content",
      component: Contenido
    },
    {
      path: "/acercademi",
      name: "aboutme",
      alias: "/aboutme",
      component: AboutMe
    },
    {
      path: "/formulario",
      name: "formulario",
      alias: "/form",
      component: Form
    }
  ]
});