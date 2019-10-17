import Vue from 'vue'
import App from './App.vue'
import store from '@/store/workflow'
import router from '@/router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
Vue.use(iView)

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
