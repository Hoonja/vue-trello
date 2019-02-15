import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home'
import Login from '../components/Login'
import Board from '../components/Board'
import Card from '../components/Card'
import NotFound from '../components/NotFound'
import store from '../store'

Vue.use(VueRouter)

const requireAuth = (to, from, next) => {
  const loginPath = `/login?rPath=${encodeURIComponent(to.path)}`
  store.getters.isAuth ? next() : next(loginPath)
}

const routes = [
  { path: '/', component: Home, beforeEnter: requireAuth },
  { path: '/login', component: Login },
  {
    path: '/b/:bid', component: Board, beforeEnter: requireAuth, children: [
      { path: 'c/:cid', component: Card, beforeEnter: requireAuth }
  ]},
  { path: '*', component: NotFound }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router