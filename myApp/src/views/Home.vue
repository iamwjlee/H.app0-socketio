<template>
  <div class="home">
    <talk />
    <h2>검량시 기차값과 실제무게에 대한 관계</h2>
    <div>  <input type="text" v-model="inputAdj" placeholder="입력대기" > <span>Input Adj</span> </div> 
    <div>  <input type="text" v-model="outputRealGram" > <span>Real(gram)</span></div> 
    <button v-on:click="OnCalc" >Calculator</button>

    <h1>JPOS3000-KIOSK</h1>
      <h2>board information </h2>
        <ul>
            <li> <b>Main B'd chipset</b>: S3C44B0X(160-QFP) </li>
            <li> <b>Daughter B'd(for KTC uSD) chipset</b>: AT91 ARM Thumb-based Microcontrollers AT91SAM7X256 100-lead LQFP </li>
            <li> <b>Interface B'd chipset</b>: High-Performance Cortex-M7 SAMe70n21b 100-lead LQFP </li>
            <li> <b>Touch B'd</b>: Intel Bay trail Soc Chipset INX-N29 Motherboard </li>
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
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import Talk from '../components/Talk.vue'
export default {
  name: 'Home',
  components: {
    Talk,
    //HelloWorld
  },
  data() {
    return {
      inputAdj:"",
      outputRealGram:"",
      result:""
    }
  },
  methods: {
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
button {
  width: auto;
  margin-top: 10px;
  padding: 4px 2px;

}
input {
  margin-top: 5px;
  width: 60px;
  height: 20px;  
}
</style>
