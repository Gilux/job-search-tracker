import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const companies = [
  {
    id: 1,
    job_name: "Front-end Developer",
    company_name: "Ubisoft, inc",
    logo: "ubisoft.com",
    status: "OPEN",
    ratings: {
      projects: 3,
      salary: 2,
      location: 5,
    },
    history: [
      {
        id: "10202034023434",
        date: "2019-02-24",
        action: "CV sent"
      }
    ],
    personal_notes: "lorem ipsum",
    location: [],
  },
  {
    id: 2,
    job_name: "Back-end Developer",
    company_name: "Google",
    logo: "google.com",
    status: "OPEN",
    ratings: {
      projects: 3,
      salary: 2,
      location: 5,
    },
    history: [
      {
        id: "10202034023454",
        date: "2019-02-27",
        action: "Second mail sent"
      },
      {
        id: "10202034023434",
        date: "2019-02-24",
        action: "CV sent"
      }
    ],
    personal_notes: "lorem ipsum",
    location: [],
  }
]

export default new Vuex.Store({
  state: {
    companies: companies.slice(0)
  },
  getters: {
    getCompanyById: (state) => (id) => {
      return state.companies.find(c => c.id == id)
    }
  },
  mutations: {},
  actions: {}
});
