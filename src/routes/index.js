import { createRouter, createWebHashHistory } from "vue-router";
import store from "../store/index";

import Home from "@/views/Home.vue";
import Layout from "@/components/Layout.vue";
import Project from "@/views/Project.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";

const routes = [
  { path: "/", redirect: "/login" },
  {
    path: "/login",
    name: "Login",
    meta: { requiresUnauth: true },
    component: Login
  },
  {
    path: "/register",
    name: "Register",
    meta: { requiresUnauth: true },
    component: Register
  },
  {
    path: "/layout",
    name: "Layout",
    component: Layout,
    children: [
      {
        path: "/dashboard",
        meta: { requiresAuth: true },
        name: "Dashboard",
        component: Home
      },
      {
        path: "/products",
        name: "Products",
        meta: { requiresAuth: true },
        component: Project
      }
    ]
  }
];

const router = createRouter({
  linkExactActiveClass: "is-active has-text-primary",
  history: createWebHashHistory(window.process.env.BASE_URL),
  routes
});

router.beforeEach(function (to, _, next) {
  if (to.meta.requiresAuth && !store.getters["auth/isAuthenticated"]) {
    next("/login");
  } else if (to.meta.requiresUnauth && store.getters["auth/isAuthenticated"]) {
    next("/dashboard");
  } else {
    next();
  }
});
export default router;
