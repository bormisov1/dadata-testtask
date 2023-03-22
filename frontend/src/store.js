import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const backendUrl = `http://${process.env.VUE_APP_BACKEND_HOST || 'localhost'}:3000`
export const store = new Vuex.Store({
  state: {
    search: getLSItemSafe('search', ''),
    companyDetails: getLSItemSafe('companyDetails', null)
  },
  getters: {
  },
  mutations: {
    ['SET_SEARCH']: (state, value) => {
      state.search = value
      Vue.storage.set('search', value)
    },
    ['SET_COMPANY_DETAILS']: (state, value) => {
      state.companyDetails = value
      Vue.storage.set('companyDetails', JSON.stringify(value))
    }
  },
  actions: {
    ['SET_SEARCH']: ({commit}, value) => {
      commit('SET_SEARCH', value)
    },
    ['SEARCH']:  ({state, commit}) => {
      return new Promise(resolve => {
        fetch(backendUrl + `/party/${state.search}`, {
          method: "GET"
        })
        .then((response) => {
          if (response.ok) return response.json();
          throw new Error(response.err && response.err.message
            ? response.err.message : 'unknown_err')
        })
        .then((data) => {
          if (data) commit('SET_COMPANY_DETAILS', data)
          resolve(data)
        })
        .catch((error) => {
          commit('SET_COMPANY_DETAILS', {})
          console.error("Error:", error)
          resolve({error})
        })
      })
    }
  }
})

function getLSItemSafe(key, fallbackValue) {
  const value = localStorage.getItem(key)
  if (value == null || value === 'undefined')
    return fallbackValue
  if (value === 'true') return true
  if (value === 'false') return false
  try {
    return JSON.parse(value)
  } catch {
    return value
  }
}
