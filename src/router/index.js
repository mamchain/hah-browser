import Vue from 'vue'
import Router from 'vue-router'
import homePage from './home'
import dposPage from './dpos'
import erc20Page from './erc20'
import richPage from './rich'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    ...homePage, ...erc20Page, ...dposPage, ...richPage
  ]
})
