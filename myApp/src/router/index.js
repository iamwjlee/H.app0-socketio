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
    // beforeEnter : (to,from,next)=>{
    //   console.log('bE', to.name)
    //   console.log('bE',from.name)
    //   console.log('bE',next.name)
    //   next()
    // }

    
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

router.beforeEach(function(to,from,next){ //전역네비게이션가드
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



  let d=JSON.parse(sessionStorage.getItem('Bret'))
  if(d) {
    if(d.user=='Bret') {
      console.log('Bret hit')
      console.log('bE', to.path)
      console.log('bE',from.path)
      console.log('bE',next.name)
  
      next()
    }
    else {
      console.log('Not match:',d)
      if(to.path=='/Login') next()
      else alert('Log in please!')
      }
  
  }
  else {
    console.log('No key!')
    console.log('bE', to.path)
    console.log('bE',from.path)
    //next()
    if(to.path=='/Login') next()
    else if(to.path=='/') next()
    else if(to.path=='/touch') next()
    else if(to.path=='/gsap') next()
    else if(to.path=='/about') next()

  }

})

export default router
