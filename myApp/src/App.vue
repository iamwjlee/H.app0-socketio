<template>
<div id="app">
  <div id="nav">
    <router-link to="/">Home </router-link> |
    <router-link to="/touch">Touch board setting</router-link> |
    <router-link to="/gsap">GSAP</router-link> | 
    <router-link to="/link">Link</router-link> |
    <router-link to="/layout">Layout</router-link> |   
    <router-link to="/Grid">Grid</router-link> |   
    <router-link to="/about">About</router-link> |
    <router-link to="/aud">Aud</router-link> |

    <router-link to="/Login">Login</router-link> 


  </div>
  <router-view/>

  <notifications />
  <!-- <router-view v-slot="{ Component }">
    <transition name="route" mode="out-in">
      <component :is="Component"> </component>
    </transition>
  </router-view> -->

</div>


</template>

<script>
export default {
  data() {
    return {
      logEnable: true
    }
  },
  methods: {

  },
  created() {
    //this.$VueCookies.isKey('connect.sid')
    //let me=this.$VueCookies.keys().join('\n')
    //this.$cookie.get('test')
    console.log('----------->App.vue created!')
    // 라우팅 되도 변화지 않는다. 리플레시 해야 바뀐다
    // let d=JSON.parse(sessionStorage.getItem('wj'))
    // if(d) {
    //   this.logEnable=false
    //   console.log('created:',d,this.logEnable)
    // }
    // else {
    //   this.logEnable=true
    //   console.log('created::',d,this.logEnable)

    // }

  }
}
</script>


<style >

* {
   margin: 0;
   padding: 0;
   box-sizing: border-box; 
}



#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}



.route-enter-from{
  opacity: 0;
  transform: translateX(100px)
}
.route-enter-active {
  transition: all 0.3s ease-out;
}
.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.route-leave-active {
  transition: all 0.3s ease-in;
}

.my-login {
  text-align: center;

}
.my-login .aa {

  font-size: 24px;
  /* font-weight: bold; */
  margin: 10px;

  display: inline-block;
  border: solid 1px #ddd;
}

.my-login .bb {
  margin-top: 5px;
  width: 100px;
  height: 36px;  
  font-size: 20px;
  border: solid 1px #ddd;
}

</style>
