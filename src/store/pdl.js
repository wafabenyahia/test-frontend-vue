import axios from 'axios'

const pdlModule = {
  state: {
    pdl: null,
    errorPdl: null,
    pdlById: null
  },
  getters: {
    pdl: state => state.pdl,
    pdlById: state => state.pdlById,
    errorPdl: state => state.errorPdl
  },
  mutations: {
    setPdl (state, pdl) {
      state.pdl = pdl
    },
    setErrorPdl (state, error) {
      state.errorPdl = error
    },
    setPdlById (state, pdl) {
      state.pdlById = pdl
    }
  },
  actions: {
    async createPdl ({ commit }, pdlData) {
      try {
        const response = await axios.post('/pdl/create', pdlData)
        commit('setPdl', response.data)
      } catch (error) {
        commit('setErrorPdl', error.message)
      }
    },
    async fetchPdlById ({ commit }, id) {
      try {
        const response = await axios.get(`/pdl/${id}/`)
        commit('setPdlById', response.data)
      } catch (error) {
        console.error('Error fetching responsable:', error)
      }
    }
  }
}
export default pdlModule
