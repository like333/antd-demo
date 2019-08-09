import Vue from "vue"
import VueRouter from 'vue-router'
import Home from './components/Home'
import Login from './components/Login'

Vue.use(VueRouter)

const routes = [
   {
       path:'/login',
       component:Login
   },
   
    {
        path: '/',
        component: Home,
        children:[
            // { path:'',component:'' },
        ]
    },
    
]
    


const router = new VueRouter({
    routes
})

export default router