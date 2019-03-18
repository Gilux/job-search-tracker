import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home.vue";

import store from './store';

Vue.use(VueRouter);

const router =  new VueRouter({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        requiresAuth: false
      }
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
            import(/* webpackChunkName: "about" */ "./views/Companies.vue")
        },
        {
          path: "add",
          name: "add_company",
          component: () =>
            import(/* webpackChunkName: "about" */ "./views/Companies.vue")
        }
      ],
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: "/technologies",
      name: "technologies",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Technologies.vue"),
      meta: {
        requiresAuth: true,
        admin: true
      }
    },
    {
      path: "/fields",
      name: "fields",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Fields.vue"),
      meta: {
        requiresAuth: true,
        admin: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  // Proceed if no auth is required
  if(!to.meta.requiresAuth) next()

  // Otherwise, check if the user is logged in, redirect to login page if not
  if(!store.state.user.userLogged) {
      return router.push({name: "home"})
  }

  // If the user is not an admin
  if(!store.state.user.data.isAdmin) {
    return router.push({name: "home"})
  }

  next()
})

export default router;