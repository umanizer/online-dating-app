import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import "./assets/css/style.css"
import dayjs from "dayjs";

dayjs.locale("ja");
Vue.prototype.$dayjs = dayjs;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  dayjs,
  render: h => h(App)
}).$mount('#app')
