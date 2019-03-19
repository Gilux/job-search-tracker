import SaveTechnos from '@/firebase/SaveTechnos'

const technosModule = {
  state: {},
  getters: {},
  mutations: {},

  actions: {
    saveTechnos: (context) => {
      SaveTechnos(Object.assign({}, context.state.data))
    }
  }
};

export default technosModule;
