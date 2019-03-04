import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/companies",
      name: "companies",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Companies.vue"),
      children: [
        {
          path: "c/:id",
          name: "single_company",
          component: () =>
          import(/* webpackChunkName: "about" */ "./views/Companies.vue"),
        }
      ]
    },
  ]
});
