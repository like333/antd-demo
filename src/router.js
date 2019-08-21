import Vue from "vue"
import VueRouter from 'vue-router'

const Home = () => import('./components/Home')
const Login = () => import('./components/Login')
const Register = () => import('./components/Register')
const WorkBench = () => import('./components/WorkBench')
const BasicForm = () => import('./components/Form/BasicForm')
const DisForm = () => import('./components/Form/DisForm')
const AdvaForm = () => import('./components/Form/AdvaForm')
const StandardList = () => import('./components/List/standardList')
const FilterList = () => import('./components/List/filterList')
const FilterCardList = () => import('./components/List/filterCardList')
const CardList = () => import('./components/List/cardList')
const SearchList = () => import('./components/List/searchList')
const BasicPage= () => import('./components/DetailPage/basicPage')
const AdvancedPage= () => import('./components/DetailPage/AdvancedPage')
const Table = () => import('./components/Table')
const Analysis = () => import('./components/Analysis')
const Monitor = () => import('./components/Monitor')


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
            { path:'',component:WorkBench },
            { path:'/workBench',name:'workBench',component:WorkBench },
            { path:'/basicForm',name:'basicForm',component:BasicForm },
            { path:'/disForm',name:'disForm',component:DisForm },
            { path:'/advaForm',name:'advaForm',component:AdvaForm },
            { path:'/standardList',name:'standardList',component:StandardList },
            { path:'/filterList',name:'filterList',component:FilterList },
            { path:'/filterCardList',name:'filterCardList',component:FilterCardList },
            { path:'/cardList',name:'cardList',component:CardList },
            { path:'/searchList',name:'searchList',component:SearchList },
            { path:'/basicPage',name:'basicPage',component:BasicPage },
            { path:'/advancedPage',name:'advancedPage',component:AdvancedPage },
            { path:'/table',name:'table',component:Table },
            { path:'/analysis',name:'analysis',component:Analysis },
            { path:'/monitor',name:'monitor',component:Monitor },
            
        ]
    },
    
]
    


const router = new VueRouter({
    routes
})

export default router