import Vue from 'vue'
import App from './App.vue'
require('./fontawesome');

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
