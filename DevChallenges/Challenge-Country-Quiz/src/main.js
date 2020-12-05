import Vue from 'vue'
import App from './App.vue'
import "./registerServiceWorker";
import store from './store'
import "@/assets/css/tailwind.scss";
import router from './router'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')