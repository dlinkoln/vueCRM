import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    meta: { layout: "empty" },
    component: () => import("../views/Login.vue")
  },
  {
    path: "/register",
    name: "register",
    meta: { layout: "empty" },
    component: () => import("../views/Register.vue")
  },
  {
    path: "/",
    name: "Home",
    meta: { layout: "main" },
    component: () => import("../views/Home.vue")
  },
  {
    path: "/categories",
    name: "categories",
    meta: { layout: "main" },
    component: () => import("../views/Categories.vue")
  },
  {
    path: "/detail-records",
    name: "DetailRecords",
    meta: { layout: "main" },
    component: () => import("../views/DetailRecords.vue")
  },
  {
    path: "/history",
    name: "History",
    meta: { layout: "main" },
    component: () => import("../views/History.vue")
  },
  {
    path: "/planning",
    name: "Planning",
    meta: { layout: "main" },
    component: () => import("../views/Planning.vue")
  },
  {
    path: "/profile",
    name: "Profile",
    meta: { layout: "main" },
    component: () => import("../views/Profile.vue")
  },
  {
    path: "/record",
    name: "Record",
    meta: { layout: "main" },
    component: () => import("../views/Record.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
