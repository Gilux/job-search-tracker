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
    }
  }
};

export default usersModule;
