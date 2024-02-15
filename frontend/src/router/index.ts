import { createRouter, createWebHistory } from "vue-router";
import AboutViewVue from "../views/AboutView.vue";
import WorkViewVue from "../views/WorkView.vue";

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: AboutViewVue },
    { path: "/work", component: WorkViewVue },
  ],
});
