import Vue from 'vue'
import VueLocalStorage from 'vue-localstorage'
import App from './App.vue'
import {store} from './store'
import vuetify from './plugins/vuetify'

Vue.use(VueLocalStorage, {
  name: 'storage'
})

Vue.config.productionTip = false

new Vue({
  vuetify,
  store,
  render: (h) => h(App)
}).$mount('#app')
