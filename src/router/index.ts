import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue")
  },
  {
    path: "/composition",
    name: "Composition",
    component: () =>
      import("../views/CompositionSample.vue")
  },
  {
    path: "/options",
    name: "Options",
    component: () =>
      import("../views/OptionsSample.vue")
  },
  {
    path: "/forms",
    name: "Forms",
    component: () =>
      import("../views/FormsSample.vue")
  },
  {
    path: "/events",
    name: "Events",
    component: () =>
      import("../views/EventsSample.vue")
  },
  {
    path: "/validation",
    name: "Validation",
    component: () =>
      import("../views/FormValidationSample.vue")
  },
  {
    path: "/validation2",
    name: "Validation2",
    component: () =>
      import("../views/FormValidationSample2.vue")
  },
  {
    path: "/validation3",
    name: "Validation3",
    component: () =>
      import("../views/FormValidationSample3.vue")
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
