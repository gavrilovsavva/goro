import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    meta: { layout: "home" },
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/Days",
    name: "days",
    meta: { layout: "days" },
    component: () => import("../views/DaysView.vue"),
  },
  {
    path: "/Dream",
    name: "dream",
    meta: { layout: "dream" },
    component: () => import("../views/DreamView.vue"),
  },
  {
    path: "/Plans",
    name: "plans",
    meta: { layout: "plans" },
    component: () => import("../views/PlansView.vue"),
  },
  {
    path: "/Years",
    name: "years",
    meta: { layout: "years" },
    component: () => import("../views/YearsView.vue"),
  },
  {
    path: "/Birthday",
    name: "birthday",
    meta: { layout: "birthday" },
    component: () => import("../views/BirthdayView.vue"),
  },
  {
    path: "/Completed",
    name: "completed",
    meta: { layout: "completed" },
    component: () => import("../views/CompletedView.vue"),
  },
  {
    path: "/Call",
    name: "call",
    meta: { layout: "call" },
    component: () => import("../views/CallView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
