<template>
    <div>

        <h3>gsap test</h3>



        <main>
            <div class="content">
                <h1 class="anim1"> 
                    <span>JPOS5000 </span> 
                    <span>JPOS3000-KIOSK</span> 
                    <span>JPOS3000-REGACY</span> </h1>
                <p class="anim1">
                     Main B'd chipset:High-Performance Cortex-M7 SAMe70n21b 100-lead LQFP
                     Touch B'd: Intel Bay trail Soc Chipset INX-N29 Motherboard
                     compiler AtmelStudio7.0
                     Windows 10 Enterprise LTSC
                     gcc-6.3.0 + SDL2-2.0.7/i686-w64-mingw32
                </p>
                <a @click="demoClick" class="anim1" href="#">start </a>
            </div>
        </main>
        
        <div class="kanami">
            <img src="1.png" alt="" width="144" >    
        </div>
        



        <transition appear 
            @before-enter="beforeEnter" 
            @enter="enter"
            :css="false"
            >
        <div class="card0">bounce.out</div>
        </transition>

        <div id="container">
            <div v-for="card in cards" :key="card.id" class="card" ></div>
        </div>

        <!-- <div :style="{width: number +'px'}" class="bar">
            <span> {{number}} </span>
        </div> -->
        <!-- number를 div style에 바인딩한다 -->
        <!-- 소수의 자리수를 제한한다 .toFixed() -->
        <br>
        <div :style="{width: tweenedNumber.toFixed(0) +'px'}" class="bar">
            <span> {{tweenedNumber.toFixed(0)}} </span>
        </div>
        <br>
        


        <h2 class="title">JavaScript Animation Libary gsap.to() Basic Usage</h2>
        <div class="box orange"></div>
        <div class="box grey"></div>

    </div>
</template>

<script>
/*
https://hasudoki.tistory.com/entry/Vuejs-Vue-%EC%95%A0%EB%8B%88%EB%A9%94%EC%9D%B4%EC%85%98Animate-3-GSAP-3
*/
import gsap from 'gsap'
export default {
    data() {
        return {
            viewEnable: false,
            cards: [
                {id:1234},
                {id:3434},
                {id:1355},
                {id:6534},
                {id:1674},
                {id:6734},
            ],
            number: 0,
            tweenedNumber:0,
        }
    },
    mounted() {
        gsap.from(".card",{
            duration:0.5,
            opacity:0,
            scale:0,
            y:200,
            ease: "power1",
            // stagger:0.1 /*다음번카드의 지연시간 */
            stagger: {from:'edges',each:0.1}
        })
        console.log('vuex:',this.$store.state.count)
        if(this.$store.state.count==1) this.viewEnable=true;
        else this.viewEnable=false



            gsap.from(".anim1", {
                opacity:0, duration:1 , y:-50, stagger:0.6
            })
            gsap.from('img',{duration:1,y:30,opacity:0})
            // gsap.from('aside',{duration:1,y:30,opacity:0,delay:1.1})

    },
    methods: {
        demoClick() {
            console.log('click demo')
            // gsap.from(".anim1", {
            //     opacity:0, duration:1 , y:-50, stagger:0.6
            // })
            gsap.from('img',{duration:1,y:30,opacity:0})
            // gsap.from('aside',{duration:1,y:30,opacity:0,delay:1.1})


            // gsap.to(".box",{ duration:2, x:300,rotation:360    })
            gsap.from(".box",{ duration:1,rotationX:0    })
            gsap.to(".box",{ duration:1,rotationX:180    })
        },
        beforeEnter(el) {
            console.log(el)
            el.style.opacity=0
            el.style.transform='scale(0,0)'
        },
        enter(el,done) {
            console.log(el)
            gsap.to(el,{
                duration: 1,
                opacity:1,
                scale:1,
                ease:'bounce.out',
                onComplete: done
            })
        },
        randomNumber() {
            this.number=Math.floor(Math.random()*(450-0))
            //console.log('this.number',this.number)
        },


    },
    created() {  //1.5초마다 number 매번갱신
        setInterval(this.randomNumber,1500)
    },
    watch: {
        //number 프로퍼티가 변경되면 변경된 값을 콜백함수의 첫번째인자로 전달
        number(newValue) {
            gsap.to(this.$data, {
                duration: 1,
                ease: "circ.out",
                tweenedNumber: newValue,
            })
        }
    }
}
</script>

<style scoped>

.kanami {
    text-align: center;
}


a {
    display: inline-block;
    background: #b100f2;
    color: white;
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;
    padding: 1em;
}
main {
    margin-left: 2%;
    display: grid;
    place-content: center;
}
.content {
    width: 100%;
}
span {
    display: block;
}
/* aside {
    background: url('../assets/logo.png');
    background-size: cover;
    background-repeat: no-repeat;
    display: block; */
    /* height: 100vh;
} */
.box {
    display: block;
}
.orange {
    width: 30px;
    height: 30px;
    background: orange;
}
#container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
.card {
    /* margin: 0 auto 0 auto; */
    height: 6.5em;
    width: 6.5em;
    background-color: #16c0b0;
    box-shadow: 0.08em 0.03em 0.4em #ababab;
    padding-top: 1em;
    margin-top: 0.5em;
    margin-right: 0.5em;
}


.card0 {
    display: block;
    margin: 0 auto 0 auto;
    height: 6.5em;
    width: 6.5em;
    background-color: #16c0b0;
    box-shadow: 0.08em 0.03em 0.4em #ababab;
}
.bar{
    padding: 5px;
    background-color: #2c3e50;
    border: 1px #16c0b0 solid;
    min-width: 20px;
}
.bar span {
    color: white;
}
</style>