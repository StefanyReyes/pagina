import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Inicio.vue";
import Precios from "../views/Precios.vue";
import Removibles from "../views/tipo/Removible.vue";
import Fijas from "../views/tipo/Fijas.vue";


const routes = [
  {
    path: "/",
    name: "",
    component: Home,
  },
  {
    path: "/precios", 
    name: "precios",
    component: Precios,
    children:[
      {
        path: "/removibles", 
        name: "removibles",
        component: Removibles,
      },
      {
        path: "/fijas", 
        name: "fijas",
        component: Fijas,
      },
    ]
  }
];



const router = createRouter({
  history: createWebHashHistory(),
  routes,
  mode: 'history' // Eliminar el signo #
});

export default router;
