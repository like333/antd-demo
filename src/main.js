import Vue from 'vue'
import router from './router.js'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import App from './App.vue'

Vue.use(Antd)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.path == '/login') {
    sessionStorage.removeItem('user')
  }
  let user = JSON.parse(sessionStorage.getItem('user'))
  if (!user && to.path != '/login') {
    if(to.path == '/register'){
      next()
    }else{
      next({ path: '/login' })
    }
  } else {
    next()
  }

})
console.log(sessionStorage)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
