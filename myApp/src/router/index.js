import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,

  },
  {
    path: '/Touch',
    name: 'Touch',
    component: () => import(/* webpackChunkName: "about" */ '../views/Touch.vue')
  },

  {
    path: '/rs485',
    name: 'Rs485',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Rs485.vue')
  },
  {
    path: '/gsap',
    name: 'Gsap',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Gsap.vue')
  },
  {
    path: '/link',
    name: 'Link',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Link.vue')
  },
  {
    path: '/layout',
    name: 'Layout',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Layout.vue')
  },
  
  {
    path: '/Grid',
    name: 'Grid',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Grid.vue'),
    meta: {
      authRequired: true
    },
    // beforeEnter : (to,from,next)=>{
    //   if(to.matched.some(function(routeInfo){
    //     return routeInfo.meta.authRequired
    //   })) {
    //     console.log('auth true')
    //     next()

    //   }
    //   else {
    //     console.log('auth false')
    //     next('/')
    //   }
    //   console.log('bE', to.path)
    //   console.log('bE',from.name)
    //   console.log('bE',next.name)
    // }

  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/aud',
    name: 'Aud',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Aud.vue'),
  },

  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
    // beforeEnter : (to,from,next)=>{
    //   console.log('bE', to.name)
    //   console.log('bE',from.name)
    //   console.log('bE',next.name)
    //   next()
    // }

    meta: {
      authRequired: true
    },

  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(function(to,from,next){ //
  //if(this.$store.state.count) {
  //  console.log('bE',this.$store.state.count)
  //}

      // if(to.matched.some(function(routeInfo){
      //   return routeInfo.meta.authRequired
      // })) {
      //   console.log('auth true')
      //   //next()
      //   alert('login pls')

      // }
      // else {
      //   console.log('auth false')
      //   next()
      // }
      // console.log('bE', to.path)
      // console.log('bE',from.name)
      // console.log('bE',next.name)


  //스토어는 리프래시시 초기화된다!
  let sessioinKey=JSON.parse(sessionStorage.getItem('wj'))
  if(sessioinKey) {
    if(sessioinKey.auth==true) {
      console.log('Global Navigation Guard:\t\t',from.path,to.path)
      next()
    }
    else {
      console.log('Not match:',sessioinKey)
      if(to.path=='/Login') next()
      else alert('Log in please!')
    }
  
  }
  else {
    console.log('Global Navigation Guard::\t\t',from.path,to.path)
    if(to.path=='/Login') next()
    else if(to.path=='/') next()
    else if(to.path=='/touch') next()
    else if(to.path=='/about') next()
    else if(to.path=='/aud') next()

  }

})

export default router
