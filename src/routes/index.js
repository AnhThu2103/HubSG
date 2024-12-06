import { createRouter, createWebHistory } from 'vue-router';

// Import các component
import LoginPage from "@/components/Step1/LoginPage.vue";
import RegisterPage from "@/components/Step1/RegisterPage.vue";
import ForgotPass from "@/components/Step1/ForgotPass.vue";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: LoginPage,
  },
  {
    path: "/",
    redirect: "/login", // Chuyển hướng đến /login
  },
  {
    path: "/reg",
    name: "Register",
    component: RegisterPage,
  },
  {
    path: "/fp",
    name: "ForgotPass",
    component: ForgotPass,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
