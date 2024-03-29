import axios from 'axios'

const entrepriseModule = {
  state: {
    entreprise: null,
    errorEntreprise: null,
    entreprises: [],
    entrepriseById: null
  },
  getters: {
    entreprise: state => state.entreprise,
    entreprises: state => state.entreprises,
    errorEntreprise: state => state.error,
    entrepriseById: state => state.entrepriseById
  },
  mutations: {
    setEntreprise (state, entreprise) {
      state.entreprise = entreprise
    },
    setEntrepriseById (state, entreprise) {
      state.entrepriseById = entreprise
    },
    setErrorEntreprise (state, error) {
      state.errorEntreprise = error
    },
    setEntreprisesItems (state, items) {
      state.entreprises = items
    }
  },
  actions: {
    async createEntreprise ({ commit }, entrepriseData) {
      try {
        const response = await axios.post('/entreprise/create', entrepriseData)
        commit('setEntreprise', response.data)
      } catch (error) {
        commit('setErrorEntreprise', error.message)
      }
    },
    async fetchEntreprises ({ commit }) {
      try {
        const response = await axios.get('/entreprise')
        commit('setEntreprisesItems', response.data)
      } catch (error) {
        commit('setErrorEntreprise', error.message)
      }
    },
    async fetchEntrepriseById({ commit }, id) {
      try {
        const response = await axios.get(`/entreprise/${id}/`)
        commit('setEntrepriseById', response.data)
      } catch (error) {
        console.error('Error fetching responsable:', error)
      }
    }

  }
}
export default entrepriseModule
