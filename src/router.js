import Vue from "vue"
import VueRouter from 'vue-router'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Table from './components/Table'

Vue.use(VueRouter)

const routes = [
   {
       path:'/login',
       component:Login
   },
   {
       path:'/register',
       component:Register
   },
    {
        path: '/',
        component: Home,
        children:[
            { path:'/table',component:Table },
        ]
    },
    
]
    


const router = new VueRouter({
    routes
})

export default router