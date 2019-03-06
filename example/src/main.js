import Vue from 'vue'
import App from './App.vue'

import VueWebMonetization from 'vue-web-monetization'
Vue.use(VueWebMonetization)

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
