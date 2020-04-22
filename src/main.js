import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import testComponents from 'testcomponentsdddd'
import mobile from 'mobile-component-library'
// import mobileUI from 'mobile-component-library'

// Vue.use(testComponents)
Vue.use(mobile)

Vue.config.productionTip = false

import './assets/common.css'

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
