import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/task/:id",
      name: "taskDetails",
      component: () => import("@/views/TaskDetailView.vue"),
    },
    {
      path: "/stats",
      name: "stats",
      component: () => import("@/views/StatsView.vue"),
    },
  ],
});

export default router;
