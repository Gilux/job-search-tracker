import Vue from "vue";
import firebase from "firebase";

Vue.config.productionTip = false;

import App from "./App.vue";
import router from "./router";
import store from "./store";

import Techno from "@/models/techno";
import Field from "@/models/field";

import initFirebase from "./firebase/init";
import './registerServiceWorker'
initFirebase();

firebase.auth().languageCode = "fr";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

// Let's fill the store with Field and Techno values (common to all users, so no need to wait for login !)
firebase
  .database()
  .ref("/fields")
  .once("value")
  .then(function(snapshot) {
    snapshot.val().forEach(f => {
      Field.insert({
        data: f
      });
    });
  });

firebase
  .database()
  .ref("/technos")
  .once("value")
  .then(function(snapshot) {
    snapshot.val().forEach(t => {
      Techno.insert({
        data: t
      });
    });
  });

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch("userLogin", user).then(response => {
      router.push({ name: "companies" });
    });
  }
});

// Fill the store with initial data
// Company.create({
//   data: companyplaceholder
// })
