import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => {
      return import("../views/Home.vue");
    },
  },
  {
    path: "/forget",
    name: "Forget",
    component: () => {
      return import("../components/forgetpassword/forgetpassword.vue");
    },
  },
  {
    path: "/sent-email",
    name: "sent-email",
    component: () => {
      return import("../components/forgetpassword/sentemail.vue");
    },
  },
  {
    path: "/sign-in",
    name: "sign-in",
    component: () => {
      return import("../components/signpage/signin.vue");
    },
  },
  {
    path: "/404",
    name: "404",
    component: () => {
      return import("../components/error/error.vue");
    },
  },
  {
    path: "/password-changed",
    name: "password-changed",
    component: () => {
      return import("../components/forgetpassword/passwordchanged.vue");
    },
  },
  {
    path: "/reset-password",
    name: "reset-password",
    component: () => {
      return import("../components/forgetpassword/resetpassword.vue");
    },
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import("../views/About.vue"),
  },
  {
    path: "/code-of-conduct",
    name: "codeConduct",
    component: () =>
      import("../views/CodeConduct.vue"),
  },
  {
    path: "/service-level-agreement",
    name: "ServiceLevelAgreement",
    component: () =>
      import("../views/ServiceLevelAgreement.vue"),
  },
  {
    path: "/safe-house-discosure",
    name: "SafeHouseDiscosure",
    component: () =>
      import("../views/SafeHouseDiscosure.vue"),
  },
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
