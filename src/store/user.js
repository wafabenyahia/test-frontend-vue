import axios from 'axios'

const userModule = {
  state: {
    user: null,
    loading: false,
    error: null,
    loginSuess: false,
    auth: {}
  },
  getters: {
    isAuthenticated: (state) => state.loginSuess,
    auth: (state) => state.auth,
    user: state => state.user,
    loading: state => state.loading,
    error: state => state.error
  },
  mutations: {
    handleLoginSuccuss (state) {
      state.loginSuess = true
    },
    setUser (state, user) {
      state.user = user
    },
    setLoading (state, loading) {
      state.loading = loading
    },
    setError (state, error) {
      state.error = error
    },
    setAuth (state, user) {
      localStorage.setItem('userauth', JSON.stringify(user))
      state.auth = user
    }
  },
  actions: {
    // eslint-disable-next-line no-empty-pattern
    async login ({ commit }, {
      email,
      password
    }) {
      try {
        const response = await axios.post('/login', {
          email: email,
          password: password
        })
        commit('setAuth', response.data)
        console.log(response.data)
        commit('handleLoginSuccuss')
      } catch (error) {
        console.log('erreur authentification')
      }
    },
    async createUser ({ commit }, userData) {
      commit('setLoading', true)
      try {
        const response = await axios.post('/user/create', userData)
        commit('setUser', response.data)
        commit('setLoading', false)
      } catch (error) {
        commit('setError', error.message)
        commit('setLoading', false)
      }
    }
  }
}
export default userModule
