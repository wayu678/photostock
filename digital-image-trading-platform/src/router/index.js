import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import ImageList from '../views/ImageList.vue';
import Cart from '../views/Cart.vue';
import Payment from '../views/Payment.vue';
import Profile from '../views/Profile.vue';
import Download from '../views/Download.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/images',
      name: 'ImageList',
      component: ImageList
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/payment',
      name: 'Payment',
      component: Payment
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/download',
      name: 'Download',
      component: Download
    }
  ]
});