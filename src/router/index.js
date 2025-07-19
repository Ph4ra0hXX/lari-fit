import { createWebHistory, createRouter } from "vue-router";
import Home from "../pages/home.vue";
import Burger from "../pages/burger.vue";
import Bebidas from "../pages/bebidas.vue";
import Checkout from "../pages/checkout.vue";
import Entrega from "../pages/entrega.vue";
import Macarronada from "../pages/macarronada.vue";
import Batata from "../pages/batata.vue";
import Sobremesas from "../pages/sobremesas.vue";
import Combo from "../pages/combo.vue";
import Sopas from "../pages/sopas.vue";
import CrepiocaFit from "../pages/crepiocaFit.vue";
import PizzasFit from "../pages/pizzasFit.vue";
import TapiocasRecheadas from "../pages/tapiocasRecheadas.vue";
import TapiocasDoces from "../pages/tapiocasDoces.vue";
import SanduichesNaturais from "../pages/sanduichesNaturais.vue";
import PanquecasFit from "../pages/panquecasFit.vue";
import SucosNaturais from "../pages/sucosNaturais.vue";
import DetoxVerdeAntioxidante from "../pages/detoxVerdeAntioxidante.vue";
import ShakesProteicos from "../pages/shakesProteicos.vue";
import Lacup from "../pages/lacup.vue";

const routes = [
  {
    path: "/",
    name: "app",
    component: Home,
  },
  {
    path: "/entradas",
    name: "Burger",
    component: Burger,
  },
  {
    path: "/carte",
    name: "Combo",
    component: Combo,
  },
  {
    path: "/espetinhos",
    name: "macarronada",
    component: Sopas,
  },
  {
    path: "/guarnicoes",
    name: "batata",
    component: Batata,
  },
  {
    path: "/sobremesas",
    name: "sobremesas",
    component: Sobremesas,
  },
  {
    path: "/bebidas",
    name: "bebidas",
    component: Bebidas,
  },
  {
    path: "/checkout",
    name: "checkout",
    component: Checkout,
  },
  {
    path: "/entrega",
    name: "entrega",
    component: Entrega,
  },
  {
    path: "/lacup",
    name: "lacup",
    component: Lacup,
  },
  {
    path: "/crepioca-fit",
    name: "crepiocaFit",
    component: CrepiocaFit,
  },
  {
    path: "/pizzas-fit",
    name: "pizzasFit",
    component: PizzasFit,
  },
  {
    path: "/tapiocas-recheadas",
    name: "tapiocasRecheadas",
    component: TapiocasRecheadas,
  },
  {
    path: "/tapiocas-doces",
    name: "tapiocasDoces",
    component: TapiocasDoces,
  },
  {
    path: "/sanduiches-naturais",
    name: "sanduichesNaturais",
    component: SanduichesNaturais,
  },
  {
    path: "/panquecas-fit",
    name: "panquecasFit",
    component: PanquecasFit,
  },
  {
    path: "/sucos-naturais",
    name: "sucosNaturais",
    component: SucosNaturais,
  },
  {
    path: "/detox-verde-antioxidante",
    name: "detoxVerdeAntioxidante",
    component: DetoxVerdeAntioxidante,
  },
  {
    path: "/shakes-proteicos",
    name: "shakesProteicos",
    component: ShakesProteicos,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
