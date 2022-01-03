
<template>
    <div>
        <!-- <transition appear
            @before-enter="beforeEnter" 
            @enter="enter"
        > -->
        <div class="toast-wrapper">
            <div class="toast-1">
                {{imageInfoProp.msg}}
                <img @click="$emit('close',false)" :src="imageInfoProp.path" alt="#" :width="imageInfoProp.w">   
            </div>
        </div>
        <!-- </transition> -->
       
      
        
    </div>
</template>

<script>
// import gsap from 'gsap'

export default {
    name: 'My',
    props: {
        imagePath:String,
        text: String,
        imageInfoProp: Object,
        // img: String
    },
    data() {
        return {
            // images: {
            //     sample: require('../assets/logo.png'),
            // }
        }
    },
    mounted() {
       
    },
    methods: {
        // beforeEnter(el) {
        //     el.style.opacity=0
        //     el.style.transform='scale(0.5,0.5)'
        // },
        // enter(el,done) {
        //     gsap.to(el,{
        //         duration: 1,
        //         opacity:1,
        //         scale:0.8,
        //         ease: "power4",
        //         onComplete: done
        //     })
        // },



    }

}
</script>

<style scoped>
  .toast-wrapper {
    position: fixed;
    width: 100%;
    top: 80px;
  }

  .toast-1 {

    padding: 20px;
    color: white;
    background: #ff0062;
    border-radius: 10px;
    box-shadow: 1px 3px 5px rgba(0,0,0,0.2);
    max-width: 400px;
    margin: 0 auto;
    text-align: center;
  }

</style>