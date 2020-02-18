import 'lib-flexible/flexible'
import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import * as API from './api'
import store from './vuex'
Vue.config.productionTip = false
Vue.prototype.$API = API
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

