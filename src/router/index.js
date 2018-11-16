import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Login from '@/components/Login'
import Product from '@/components/Product'
import Checkout from '@/components/Checkout'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about:user_id',
      name: 'About',
      component: About
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/item:item_id',
      name: 'Product',
      component: Product
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: Checkout
    }
  ]
})
