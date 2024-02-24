import { createRouter, createWebHistory } from "vue-router";
import HomeViewVue from "../views/HomeView.vue";

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{ path: "/", component: HomeViewVue }],
});
