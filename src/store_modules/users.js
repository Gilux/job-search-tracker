import firebase from "firebase";

import Company from "@/models/company";

const usersModule = {
  state: {},
  getters: {
    getCurrentUserId(state) {
      var user = firebase.auth().currentUser;
      if (user) {
        return user.uid
      } else {
        return null
      }
    }
  },
  mutations: {
    userLogin(state, payload) {
      state.user = Object.assign({}, payload);
      state.userLogged = true;
    },

    userAdmin(state, payload) {
      console.log(payload)
      state.isAdmin = payload;
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
            const data = snapshot.val()
            console.log(data)
            
            var companies = []

            if(typeof data === "object") {
              Object.keys(data).forEach(k => {
                companies.push(data[k])
              })
            }
            else {
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
            console.log(companies)
          });
          
        firebase
          .database()
          .ref("/users/" + payload.uid + "/data/isAdmin")
          .once("value")
          .then(function(snapshot) {
            context.commit("userAdmin", snapshot.val());
            resolve(true);
          });
      });
    }
  }
};

export default usersModule;
