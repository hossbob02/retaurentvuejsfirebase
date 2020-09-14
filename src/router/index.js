import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
//import Router from 'vue-router'
import firebase from '../Firebase'
Vue.use(VueRouter)


const router = new VueRouter({
  mode:'history',
  routes : [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
   
    {
      path: '/products',
      name: 'Products',
      component: () => import(/* webpackChunkName: "about" */ '../views/Products.vue')
    },
    {
      path: '/reserve',
      name: 'Reserve',
      component: () => import(/* webpackChunkName: "about" */ '../views/Reserve.vue')
    },
    {
      path: '/signin',
      name: 'Signin',
      component: () => import(/* webpackChunkName: "about" */ '../views/Signin.vue')
    },
    {
      path: '/addproduct',
      name: 'Addproduct',
      meta: { requiresAuth: true },
      component: () => import(/* webpackChunkName: "about" */ '../views/Addproduct.vue')
    },
    {
      path: '/manager',
      name: 'Manager',
      meta: { requiresAuth: true },
      component: () => import(/* webpackChunkName: "about" */ '../views/Manager.vue')
    }
  ]
})
router.beforeEach((to, from, next) => {

  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  const currentUser = firebase.auth().currentUser

  if (requiresAuth && !currentUser) {
      next('/signin')
  } else if (requiresAuth && currentUser) {
      next()
  } else {
      next()
  }
})
export default router
