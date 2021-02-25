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
    path: "/signup",
    name: "Signup",
    component: () => {
      return import("../views/signup.vue");
    },
  },
  {
    path: "/get-started",
    name: "getstarted",
    component: () => {
      return import("../views/researchersignup.vue");
    },
  },
  {
    path: "/company-signup",
    name: "Companysignup",
    component: () => {
      return import("../views/companysignup.vue");
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
    component: () => import("../views/About.vue"),
  },
  {
    path: "/code-of-conduct",
    name: "codeConduct",
    component: () => import("../views/CodeConduct.vue"),
  },
  {
    path: "/service-level-agreement",
    name: "ServiceLevelAgreement",
    component: () => import("../views/ServiceLevelAgreement.vue"),
  },
  {
    path: "/safe-house-discosure",
    name: "SafeHouseDiscosure",
    component: () => import("../views/SafeHouseDiscosure.vue"),
  },
  {
    path: "/terms-condition",
    name: "TermsCondition",
    component: () => import("../views/TermsCondition.vue"),
  },
  {
    path: "/contact-us",
    name: "ContactUs",
    component: () => import("../views/ContactUs.vue"),
  },
  {
    path: "/blog",
    name: "Blog",
    component: () => import("../views/Blog.vue"),
  },
  {
    path: "/company-service",
    name: "CompanyService",
    component: () => import("../views/CompanyService.vue"),
  },
  {
    path: "/how-it-works",
    name: "How",
    component: () => import("../views/How.vue"),
  },
  {
    path: "/careers",
    name: "Careers",
    component: () => import("../views/Careers.vue"),
  },
  {
    path: "/researcher",
    name: "Researcher",
    component: () => import("../views/Researcher.vue"),
  },
  {
    path: "/hack-collage",
    name: "HackCollage",
    component: () => import("../views/HackCollage.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
