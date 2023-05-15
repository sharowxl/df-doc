import Vue from 'vue'
import VueRouter from 'vue-router'
import dfUiRouters, {rootPathName as rootRedirect} from './df-ui'
import dfBuiRouters from './df-bui'
import cssRouters from './css'
import jsRouters from './js'
import yewugymkRouters from './yewugymk'
import server from './server'
import pageLayoutRouters from './page-layout'
import standardRouters from './standard'
import Login from '@/login/index.vue'
Vue.use(VueRouter)
const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    redirect: `/${rootRedirect}`
  },
  dfUiRouters,
  dfBuiRouters,
  cssRouters,
  jsRouters,
  yewugymkRouters,
  pageLayoutRouters,
  standardRouters,
  server
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
