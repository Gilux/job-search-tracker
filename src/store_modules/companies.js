import Company from "@/models/company";
import SaveApplications from "@/firebase/SaveApplications";
import firebase from "firebase"

const companiesModule = {
  state: {},
  getters: {},
  mutations: {
    resetState (state) {
      console.log(state.data)
      state.data = Object.assign({})
    }
  },
  actions: {
    // Updates an application status, and add an entry to the "history" array
    updateCompanyStatus(context, payload) {
      let tmpCompany = Company.find(payload.id);
      let history = tmpCompany.history.slice(0);
      const d = new Date();
      const options = { year: "numeric", month: "2-digit", day: "2-digit" };
      history.unshift({
        id: Date.now(),
        date: d.toLocaleDateString("en-US", options),
        action: "Switched status to " + payload.newVal
      });

      Company.update({
        where: payload.id,
        data: {
          history: history,
          status: payload.newVal
        }
      });

      context.dispatch("saveApplications");
    },
    // Save all applications to firebase
    saveApplications(context) {
      const user = firebase.auth().currentUser
      if(user) {
        SaveApplications(user.uid)
      }
    }
  }
};

export default companiesModule;
