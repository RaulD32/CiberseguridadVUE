import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/LoginView.vue";
import Register from "../views/RegisterView.vue";
import Welcome from "../views/WelcomeView.vue";
import Notfound from "../views/NotfoundView.vue";
// import HomeView from '../views/HomeView.vue'

const routes = [
  { 
    path: '/',
    name: 'welcome',
    component: Welcome,
  },
  { 
    path: "/login", 
    component: Login 
  },
  { 
    path: "/register", 
    component: Register 
  },
  { path: "/welcome", 
    component: Welcome, 
    meta: { requiresAuth: true } 
  },
  { 
    path: "/:pathMatch(.*)*", 
    component: Notfound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Protección de rutas
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");
  if (to.meta.requiresAuth && !token) {
    next("/login");
  } else {
    next();
  }
});

export default router;
