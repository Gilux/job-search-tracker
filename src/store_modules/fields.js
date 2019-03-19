import SaveFields from "@/firebase/SaveFields"

const fieldsModule = {
  state: {},
  getters: {},
  mutations: {},

  actions: {
    saveFields: (context) => {
      SaveFields()
    }
  }
};

export default fieldsModule;
