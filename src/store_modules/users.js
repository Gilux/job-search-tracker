import firebase from "firebase";

import Company from "@/models/company";

const usersModule = {
  state: {},
  getters: {
    getCurrentUserId(state) {
      var user = firebase.auth().currentUser;
      if (user) {
        return user.uid;
      } else {
        return null;
      }
    },
  },
  mutations: {
    userLogin(state, payload) {
      state.user = Object.assign({}, payload);
      state.userLogged = true;
    },

    userAdmin(state, payload) {
      state.isAdmin = payload.isAdmin
    },

    resetUserState(state) {
      state.user = {}
      state.isAdmin = false
      state.userLogged = false
    }
  },
  actions: {
    userLogin(context, payload) {
      return new Promise((resolve, reject) => {
        context.commit("userLogin", payload);

        firebase
          .database()
          .ref("/users/" + payload.uid + "/applications")
          .once("value")
          .then(function(snapshot) {
            const data = snapshot.val();
            var companies = [];
            if (typeof data === "object") {
              Object.keys(data).forEach(k => {
                companies.push(data[k]);
              });
            } else {
              companies = data.filter(c => {
                if (c) return true;
                return false;
              });
            }

            companies.forEach(a => {
              Company.insert({
                data: a
              });
            });
          });

        firebase
          .database()
          .ref("/users/" + payload.uid + "/data")
          .once("value")
          .then(function(snapshot) {
            context.commit("userAdmin", snapshot.val());
            resolve(true);
          });
      });
    },
    resetUserState(context) {
      context.commit("resetUserState")
    }
  },
  
};

export default usersModule;
