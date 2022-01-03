<template>
  <div class="about">
    <!-- <transition name="about"> -->
    <transition appear name="fade"
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        @before-leave="beforeLeave"
        @leave="leave"
        @after-leave="afterLeave"
    >
    <h2 v-if="showTitle">Transition JavaScript Hooks</h2>
    </transition>
    <hr>
    <!-- 카나미 사진 -->
    <transition appear name="kanami"
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
    >
    <div class="kanami"> 
    <img src="kanami.png" alt="" width="400">
    </div>
    </transition>


    <hr>
    <h2>프로젝트 디렉토리</h2>
    <h4>J.Snow</h4>
    <br>
    <h3>J.jpos3000</h3>
        <ul>
            <li>Main B'd chipset: S3C44B0X(160-QFP) </li>
            <li>컴파일러: ARM ADS1.2 installed at C:\Program Files\ARM\ADSv1_2 </li>
            <li>컴파일러 위치:  \\Jposnas\hw\_wjlee\ARM ADS(ARM Developer Suite) 1.2</li>
            <li>다운로드 by dnw.exe</li>
            <li>현재릴리즈 버전 + 모바일단말기(FM) 대응</li>
           
        </ul>
    <h3>J.jpos3000.ic.version</h3>
        <ul>
            <li>이전에 사용되된 밴사별 IC-CARD 릴리즈 버전</li>
        </ul>
    <h3>J.jpos5000.buffer</h3>
        <ul>
            <li>Main B'd chipset:High-Performance Cortex-M7 SAMe70n21b 100-lead LQFP</li>
            <li>컴파일러: AtmelStudio7.0</li>
            <li>현재릴리즈 버전 jpos5000 and jpos3000-Kiok 공용 펌웨어</li>
        </ul>
    <h3>J.jpos5000.main</h3>
        <ul>
            <li>Main B'd chipset:High-Performance Cortex-M7 SAMe70n21b 100-lead LQFP</li>
            <li>컴파일러: AtmelStudio7.0</li>
            <li>현재릴리즈 버전 jpos5000 메인 유량계 보드 펌웨어</li>
        </ul>
    <h3>J.link</h3>
        <ul>
            <li> 1st try</li>
            <li> http(1603) waiting...with socket.io </li>
            <li> tcp#1(1600)waiting...</li>
            <li> tcp#2(1601)waiting...</li>
            <li></li>
            <li>2nd try</li>
            <li>http(1605)+tcp(1600) is running local by node</li>
            <li>web app(1604) is connected with node by socket.io(1605)  </li>
            <li>web app is running local http://localhost:1604/</li>
            <li>web app can listen to the Arya</li>

        </ul>
    <h3>J.odt</h3>
        <ul>
            <li>Touch B'd: Intel Bay trail Soc Chipset INX-N29 Motherboard</li>   
            <li>운영체제: Windows 10 Enterprise LTSC </li>         
            <li>컴파일러: gcc-6.3.0 + SDL2-2.0.7/i686-w64-mingw32</li>
            <li>jpos3000+Kiosk 과 jpos5000용 터치보드 소프트웨어(공용)</li>
        </ul>
    <h3>jpos3000-Kiosk</h3>
        <ul>
            <li>J.jpos3000에서 파생된 Kiosk전용 펌웨어(통신형JPOS로 셋팅해야) </li>
        </ul>
    <h3>jpos3000-KTC인증</h3>
        <ul>
          <li>uSD카드사용하기위한 업보드를 사용하는 J.jpos3000 펌웨어 </li>
        </ul>
    <h3>jpos5000</h3>
        <ul>
            <li>유량계 메인보드: High-Performance Cortex-M7 SAMe70n21b 100-lead LQFP</li>
            <li>인터페이스 보드: High-Performance Cortex-M7 SAMe70n21b 100-lead LQFP</li>  
            <li>마더보드: Intel Bay trail Soc Chipset INX-N29 Motherboard</li> 
    
        </ul>
    <h3>jpos5000-KTC인증</h3>  
      <li>유량계 메인보드에 업보드타입으로 uSD카드 장착</li>

    <br>
    <br>

    <h3>jpos300-Kiosk 유량계 부트&메인코드</h3>
    <ul>
        <li>Regacy구조: 유량계부트 + jpos3000 메인코드</li>
        <li>Kiosk 구조: 유량계부트 + Kiosk-boot(BootLoader) + jpos3000-Kiosk 메인코드</li>
        <li>Kiosk환경에서 레거시 코드를 올릴때는 DNW사용해야</li> 
        <li>반대의 경우는 BootLoader.bin을 DNW로 올리고 키오스크에서 JPOS3000-SD-210808.bin를 V30으로 다운로드한다</li>     
        <li>BootLoader.bin by using dnw.exe </li>
        <ul>

            <li>if BootClear.bin loading by dnw then you can see</li>
            <li>Firmware UPgrade Downloading.!(계속이게 보여 어떻게 탈출?)  </li>
            <li>keypad not working in dispenser, and Nothing in Touch  </li>
            <li>dnw 연결상태에서 </li>
            <li>통신보드리셋후 바로 두번째 버튼(이용민이사의 커스텀케이블)을 눌러야..</li>
            <li>아니면 dnw에서 1번(Flash Write)눌러 BootClear.bin writing 하고 끝나면 
                또 1번눌러 원하는 이미지파일을 writing 한다. 2번(Running)을 눌르면 안돼!</li>
        </ul>
        <li>download JPOS300-KIOSK-NOSD.bin by V31 on the Kiosk</li>
    </ul>
    <h3>jpos5000 유량계 부트&메인코드</h3>
    <ul>
        <li>bootdownload - using atmel sam-ice with Sam70BootJPos_main, Sam70BootJPos_buffer </li>
        <li>application download -using SAmUploaderV31.exe in the Kiosk</li>
    </ul>
    <h3>PassOTP1002</h3>
    <ul>
        <li>for calibration test</li>
    </ul>
    <br>
    <br>


    <h3>layout test</h3>

    <!-- <div class="container">
        <div class="row">
            <div class="col">
            1 of 2
            </div>
            <div class="col">
            2 of 2
            </div>
        </div>
        <div class="row row-cols-2 my-row" >
            <div class="col my-col1">
                <img src="../assets/logo.png" alt="" width="100" >
            </div>
            <div class="col my-col2">
            2 of 3
            </div>
            <div class="col my-col3">
                <img src="../assets/akane.jpg" alt="" >
            </div>
            <div class="col" >
                2of4
            </div>
        </div>
    </div> -->

  </div>
</template>

<script>
import { ref } from 'vue'
export default {
    setup() {
        const showTitle =ref(true)
        const beforeEnter=(el) =>{
            console.log('beforeEnter',el)
        } 
        const enter=() =>{
            console.log('enter')
        } 
        const afterEnter=(el) =>{
            
            console.log('afterEnter',el)
            ///leave test
            ///el.style.color='blue'
            ///setTimeout(()=>showTitle.value=false,2000)
        } 
        const beforeLeave=() =>{
            console.log('beforeLeave')
        } 
        const leave=() =>{
            console.log('leave')
        } 
        const afterLeave=() =>{
            console.log('afterLeave')
        } 

        return {showTitle,beforeEnter,enter,afterEnter,beforeLeave,leave,afterLeave}

    },
}
</script>


<style scoped>
h2,h4 {
  text-align: center;
  margin-top: 0px;
  margin-bottom: 0px;
}
.kanami {
    text-align: center;
}
.fade-enter-from {
    opacity: 0;
}
.fade-enter-active {
    transition: opacity 3s ease;
}
.fade-leave-to {
    opacity: 0;
}
.fade-leave-active {
    transition: opacity 3s ease;
}

/* enter classes */
.kanami-enter-from {
    opacity: 0;
    transform:  translateX(-200px) translateY(-200px) rotate(360deg) scale(0.5); 
}
/* .kanami-enter-to {
    opacity: 1;  
    transform: translateY(0px);     
}  */

.kanami-enter-active {
    transition: all 0.5s ease ; 
}

.kanami-ani-enter-active {
    animation: wobble 0.5s ease;
}
@keyframes wobble {
    0% {transform:  translateY(-60px); opacity: 0}
    50% {transform:  translateY(0px); opacity: 1}
    60% {transform:  translateX(8px) }
    70% {transform:  translateX(-8px) }
    80% {transform:  translateX(4px) }
    90% {transform:  translateX(-4px) }
    100% {transform:  translateX(0px) }

}

.my-row {
    display:flexbox
}
.my-col1 {
    text-align: center;
    /* background-color: darkorange; */
    /* background: url('../assets/logo.png'); */
} 
.my-col2 {
    background-color:darkorchid
}
.my-col3 {
    /* width: 200;
    height: 150;
    object-fit: cover; */
    
    /* background-color:darkseagreen */
    width: 70%;
    height: 200px;
    overflow: hidden;

}
.my-col3 img {
    max-width: 100%;
    height: auto;
    display: block;

}
.comment {
    text-align: right; 
    margin-bottom: 0px; 
    margin-left: 50px; 
    font-size:12px;
}

</style>
