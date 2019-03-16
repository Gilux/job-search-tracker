import firebase from "firebase"

import Company from "@/models/company"

const usersModule = {
  state: {},
  getters: {},
  mutations: {
    userLogin(state, payload) {
      state.user = Object.assign({}, payload)
      state.userLogged = true
    }
  },
  actions: {
    userLogin(context, payload) {
      context.commit("userLogin", payload)

      firebase
        .database()
        .ref("/users/" + payload.uid + "/applications")
        .once("value")
        .then(function (snapshot) {
          console.log(snapshot.val())
          snapshot.val().forEach(a => {
            Company.insert({
              data: a
            });
          });
        });
    }
  }
};

export default usersModule;
