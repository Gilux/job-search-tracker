import Vue from "vue"
import Vuex from "vuex"
import pathify from 'vuex-pathify'

Vue.use(Vuex)

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
      projects: 5,
      salary: 5,
      location: 1,
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

const companiesModule = {
  state: {
    companies: companies.slice(0),
  },
  getters: {
    getCompanyById: (state) => (id) => {
      return state.companies.find(c => c.id == id)
    }
  },
  mutations: {
    updateCompanyPersonalNotes: (state, payload) => {
      let tmpCompanies = state.companies.slice(0)

      tmpCompanies = tmpCompanies.map((c) => {
        if(c.id == payload.id) {
          c.personal_notes = payload.newVal
        }
        return c
      })

      Vue.set(state, "companies", tmpCompanies)
    },
    updateCompanyStatus: (state, payload) => {
      let tmpCompanies = state.companies.slice(0)

      tmpCompanies = tmpCompanies.map((c) => {
        if(c.id == payload.id) {
          c.status = payload.newVal
        }
        return c
      })

      Vue.set(state, "companies", tmpCompanies)
    },
    addHistoryEntry: (state, payload) => {
      console.log("addhistory")
      let tmpCompanies = state.companies.slice(0)

      tmpCompanies = tmpCompanies.map((c) => {
        if(c.id == payload.company_id) {
          c.history.unshift(payload)
        }
        return c
      })

      Vue.set(state, "companies", tmpCompanies)
    },
  },

  actions: {
    updateCompanyStatus(context, payload) {
      console.log(context)
      context.commit('updateCompanyStatus', payload)

      const d = new Date()
      const options = { year: 'numeric', month: '2-digit', day: '2-digit' }
      
      context.commit('addHistoryEntry', {
        company_id: payload.id,
        id: Date.now(),
        date: d.toLocaleDateString('fr-FR', options),
        action: "Switched status to " + payload.newVal
      })
    },
  }
}

export default new Vuex.Store({
  plugins: [ pathify.plugin ],
  modules: {
    companies: companiesModule,
  }
  
});
