import Vue from 'vue'
import router from './router'
import { Button } from 'ant-design-vue'
import App from './App.vue'

Vue.component(Button.name, Button)

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
