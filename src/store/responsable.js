import axios from 'axios'

const responsableModule = {
  state: {
    responsable: null,
    responsableById:null,
    errorResponsable: null
  },
  getters: {
    responsable: state => state.responsable,
    responsableById: state => state.responsableById,
    errorResponsable: state => state.errorResponsable
  },
  mutations: {
    setResponsable (state, responsable) {
      state.responsable = responsable
    },
    setResponsableById (state, responsable) {
      state.responsableById = responsable
    },
    ErrorResponsable (state, error) {
      state.errorResponsable = error
    }
  },
  actions: {
    async createResponsable ({ commit }, responsableData) {
      try {
        const response = await axios.post('/responsable/create', responsableData)
        commit('setResponsable', response.data)
      } catch (error) {
        commit('setErrorResponsable', error.message)
      }
    },
    async fetchResponsableById ({ commit }, id) {
      try {
        const response = await axios.get(`/responsable/${id}/`)
        commit('setResponsableById', response.data)
      } catch (error) {
        console.error('Error fetching responsable:', error)
      }
    }
  }
}
export default responsableModule
