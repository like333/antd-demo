import Vue from "vue"
import VueRouter from 'vue-router'
import User from './components/User'
Vue.use(VueRouter)

export default new VueRouter({
    routes
})

const routes = [
    { path:'/user/:id', component: User }
]

// export default router