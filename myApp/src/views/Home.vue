<template>
  <div class="home">


    <!-- <div v-if="viewEnable">
    </div>
    <div v-else class="my-login">
      <div @click="hello" class="aa">Hello </div>
      <input class="bb" type="text" v-model="inputText" placeholder="passwd">
    </div> -->

    <br>

    <!-- <div v-if="viewEnable"> -->
    <div>
    <a href="#gsap">GSAP</a> <br>

    <div v-if="HomeTransitionTest">
      <button @click='display=!display'>Display</button>
      <div 
        class="initialStyle"
        :class='{newStyle:display }'
      >
      </div>
      <transition name="demo">
        
      <h3 v-if='display'>transition classes</h3>
      <!-- <h4 v-else>another element</h4> -->
      </transition>
    </div>
    <div v-else>HomeTransitionTest not defined</div>

    <button @click="option">option</button>
    <!-- <talk text="Talk Component" colorText="blue" /> -->
    <br>
    <hr>

    <h2 @click="adjRelation" class="adjR">검량시 기차값과 실제무게에 대한 관계</h2>
    <div>  <input type="text" v-model="inputAdj" placeholder="입력대기" > <span>Input Adj</span> </div> 
    <div>  <input type="text" v-model="outputRealGram" > <span>Real(gram)</span></div> 
    <button v-on:click="OnCalc" >Calculator</button>
    
    <hr>
    
    <br>
    <br>

    <h1>JPOS3000-KIOSK</h1>
      <h2>board information </h2>
        <ul>
            <li> <b>Main B'd chipset</b>: S3C44B0X(160-QFP) </li>
            <li> <b>Daughter B'd(for KTC uSD) chipset</b>: AT91 ARM Thumb-based Microcontrollers AT91SAM7X256 100-lead LQFP </li>
            <li> <b>Interface B'd chipset</b>: High-Performance Cortex-M7 SAMe70n21b 100-lead LQFP </li>
            <li> <b>Touch B'd</b>: Intel Bay trail Soc Chipset INX-N29 Motherboard mSATA ssd=32G ram=2G </li>
        </ul>
      <h2>Interface(Buffer) boot & app</h2>
        <ul>
          <li>bootdownload - using atmel sam-ice with Sam70BootJPos_buffer </li>
          <li>application download -using SAmUploaderV40.exe in the Kiosk</li>          
        </ul>

      <h2>jpos3000-main boot & app</h2>
          <ul>
            <li>boot download -BootLoader downloading by dnw.exe(press 1 and then 2) </li>
            <li>application download -using SAmUploaderV40.exe in the Kiosk</li>
            <!-- <li> <a href="1.html">if you have a trouble download</a> </li> -->
            <li>
            <router-link to="/rs485"><b>How to Re-entering BootLoader Menu</b> </router-link>
            </li>

            
          </ul>

    <h1>JPOS5000</h1>
      <h2>board information </h2>
        <ul>
            <li> <b>Main B'd chipset</b>: High-Performance Cortex-M7 SAMe70n21b 100-lead LQFP</li>
            <li> <b>Interface B'd chipset</b>: High-Performance Cortex-M7 SAMe70n21b 100-lead LQFP</li>  
            <li> <b>Touch B'd</b>: Intel Bay trail Soc Chipset INX-N29 Motherboard</li> 
    
        </ul>
      <h2>Interface(Buffer) boot & app</h2>
        <ul>
          <li>boot download - using atmel sam-ice with Sam70BootJPos_buffer </li>
          <li>application download -using SAmUploaderV40.exe in the Kiosk</li>          
        </ul>
      <h2>Flowmeter bootloader & main</h2>
        <ul>
          <li>bootdownload - using atmel sam-ice with Sam70BootJPos_main, Sam70BootJPos_buffer </li>
          <li>application download -using SAmUploaderV40.exe in the Kiosk</li>
        </ul>

    <!-- <h2>How to Reentering BootLoader Menu in dnw.exe</h2>

    <ul>
      <li>short pin5 & pin6 on the 6pin housing Connector in 485 b'd</li>
      <li>short pin8 & pin12 on the 14pin housing Connector in 485 b'd</li>
    </ul>
    <img src="../assets/rs485.jpg" alt="" width="400"  > -->

    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <div id="gsap">
      <p>About gsap</p>
    </div>

  </div>
  </div>
</template>

<script>
// import {defineComponent} from 'vue'
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
// import Talk from '../components/Talk.vue'

import gsap from 'gsap'
//import { getCurrentInstance } from '@vue/runtime-core'
// import My from '../components/My.vue'
export default {
  name: 'Home',
  components: {
    // My,
    // Talk,
    //HelloWorld
  },
  data() {
    return {
      inputAdj:"",
      outputRealGram:"",
      result:"",
      display: true,
      HomeTransitionTest: false,
      inputText: "",
      viewEnable: false,
      users: [], //axios test
    }
  },
  created() {

    console.log('axio test:', this.$axios);

    let baseURI = 'https://jsonplaceholder.typicode.com'
    this.$axios.get(`${baseURI}/users`)
    .then((result) => {
      console.log(result)
      this.users = result.data
      // console.log('length='+result.data.length)
      // for(let i=0;i<result.data.length;i++) {
      //   console.log('username '+this.users[i].username);
      // }
      //this.$router.push("/")
    })

  },
  mounted() {
    console.log('mounted:',this.$store.state.count)
    // if(this.$store.state.count==1) this.viewEnable=true;
    // else this.viewEnable=false

    gsap.from(".my-login", {
        opacity:0, duration:1 , y:-50, stagger:0.6
    })

    //console.log('mounted',this.my,getCurrentInstance().appContext.config.globalProperties.my)
  },
  methods: {
    hello() {
      console.log('hello='+this.inputText)
      for(let i=0;i<this.users.length;i++) {
        console.log('username:',this.users[i].username)


        if(this.inputText===this.users[i].username) {
          console.log('same')
          this.$store.commit('enable')
          this.$router.push("/")
          let value= {
            user: this.inputText,
            date:`${new Date().getMonth()+1}/${new Date().getDate()} `,
            auth: true
          }
          sessionStorage.setItem(this.inputText,JSON.stringify(value))
          this.viewEnable=!this.viewEnable

          break;
        }

      } 

      this.inputText=""
    },
    option() {
      console.log('option')
    },
    boxTest() {
      console.log('boxTest')
        // gsap.from(".box",{ duration:1,rotationX:0    })
        // gsap.to(".box",{ duration:1,rotationX:180    })
        gsap.from(".box",{ duration:1,rotationX:0    })
        gsap.to(".box",{ duration:1,rotationX:180    })

    },
    // beforeEnter(el) {
    //   console.log(el)
    //   console.log('beforeEnter')

    // },
    // enter(el) {
    //   console.log(el)
    //   console.log('enter')
    // },
    adjRelation() {
      console.log('click ajd')
    },
    OnCalc() {
      if(parseInt(this.inputAdj)>0) {
        let c;
        c=(parseInt(this.inputAdj)*57-21+50)/100.0
        console.log('plus='+c)
        this.outputRealGram=c;


      }
      else {
        let c;
        c=(parseInt(this.inputAdj)*57-99)/100.0
        this.outputRealGram=c;
        console.log('minus='+c)
      }
    },
  }
}
</script>

<style scoped>

.box {
    display: block;
}
.orange {
    width: 30px;
    height: 30px;
    background: orange;
}


button {
  width: auto;
  margin-top: 10px;
  padding: 4px 2px;

}
.adjR:hover {
  background: #8f8f8f;
}

.initialStyle {
  width: 100px;
  height: 100px;
  background: #8f8f8f;
  transition: all 2s ease;
}
.newStyle {
  width: 100px;
  height: 100px;
  background: #8f0000;
  transform: translateX(100px) translateY(100px) rotate(720deg) scale(0.5)

}

h3 {
  background:tomato;
  color: #ffffff;
  padding: 25px;
  text-align: center;
}

h4 {
  background:mediumslateblue;
  color: #ffffff;
  padding: 25px;
  text-align: center;
}

.demo-enter-from {
  background: blue;
}
.demo-enter-active {
  transition: all 5s ease
}
.demo-enter-to {
  /* background: green; */
}
.demo-leave-from {
  /* background: black; */
}
.demo-leave-active {
  transition: all 5s ease;
}
.demo-leave-to {
  background: yellow;
}




</style>
