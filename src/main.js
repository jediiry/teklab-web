import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import carousel from "v-owl-carousel";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "./assets/less/main.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.component("carousel", carousel);

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
