import Vue from "vue";

Vue.config.productionTip = false;

import App from "./App.vue";
import router from "./router";
import store from "./store";

import Company from "@/models/company";

import companyplaceholder from "@/dev/companyplaceholder"


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

// Fill the store with initial data
Company.create({
  data: companyplaceholder
})