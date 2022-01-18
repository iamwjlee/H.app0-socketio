<template>
<div>

<a @click="jpos5000" class="jpos5000 anim" href="#">jpos5000 manual</a>
<a @click="fetch" class="jpos5000 anim" href="#">fetch</a>
<br> <br>
<div v-if="about">
  <p class="comment"> selector it was a fluke </p>
  <p class="comment"> universal * </p>
  <p class="comment"> type Tag </p>
  <p class="comment"> id #id </p>
  <p class="comment"> class .class</p>
  <p class="comment"> state :    ex) button:hover {}</p>
  <p class="comment"> attribute [] ex) a[href="naver.com"] {} </p>
  <p class="comment"> css selector { property: value; } </p>
  <p class="comment"> div padding(안에-시계방향) margin(바깥쪽)   </p>
  <p class="comment"> display positon(static,relative,absolute,fixed,sticky) by ellie</p>
  <p class="comment"> text-aline은 font-size와 padding 20px 0와 절친</p>
  <p class="comment"> how to center aline => margin: 0 auto;  </p>
  <p class="comment">Type selector Id selector Descendant selector class selector adjacent sibling selector(+) general sibling selector(~) child selector</p>
  <p class="comment">orange.small bento orange.small plate, bento orange:first-child</p>

    <p class="comment"> JavaScript arrow function </p>

  <i class="fa-solid fa-arrow-rotate-left"></i>
  <i class="fas fa-times"></i>
  <i class="fas fa-arrow-right"></i>
  <i class="fas fa-bars"></i>
  <i class="fab fa-cc-visa"></i>
  <i class="fas fa-cat"></i>
  <i class="fas fa-gas-pump fa-1x"></i>
  <i class="centerIcon far fa-bell fa-1x"></i>
  <i class="centerIcon fas fa-exclamation-triangle fa-1x"></i> 
  <i class="centerIcon fas fa-exclamation-circle fa-1x"></i> 
  <i class="centerIcon fas fa-radiation fa-1x"></i>
  <i class="fas fa-cog fa-1x"></i>
  <i class="fas fa-arrow-left fa-1x"></i>

</div>
<Hello v-if="showInput" :argProps="inputPara" @close="inputClose" @result="inputResult"/>

<!-- <br> -->
<!-- <NormalSetup @normalSetup="normalSetup"/> -->
<!-- <br> -->

<!-- dialog box -->
<!-- <Input v-if="showInput" :argProps="inputPara" @close="inputClose" @result="inputResult" /> -->



<!-- arya otp setup image -->
<div v-if="gridState==9">
  <div class="otp-container">
    <div class="setup-side">
      <div class="item">SK</div>
      <div  @click="clickBack(5)" class="item">일반설정</div>
      <div  @click="clickBack(7)" class="item">프린터설정</div>
      <div  @click="clickBack(6)" class="item">포스설정</div>
      <div  @click="clickBack(8)" class="item">충전기설정</div>
      <div  @click="clickBack(9)" class="item"><b>보안설정</b> </div>
      <div  @click="clickBack(2)" class="item">
        <div><i class="fas fa-arrow-left fa-2x"></i></div>
        <div>나가기</div>
      </div>

    </div>
    <div class="otp-body">
      <div class="item">시간변경</div>
      <div class="item">토탈변경</div>
      <div class="item">기차변경</div>
      <div class="item-empty"></div>
      <div class="item-empty"></div>
      <div class="item-empty"></div>
      <div class="item-empty"></div>
      <div class="item-empty"></div>
      <div class="item-empty"></div>
    </div>
    
  </div>
</div>

<!-- arya dispenser setup image -->
<div v-if="gridState==8">
  <div class="dispenser-container">
    <div class="setup-side">
      <div class="item">SK</div>
      <div  @click="clickBack(5)" class="item">일반설정</div>
      <div  @click="clickBack(7)" class="item">프린터설정</div>
      <div  @click="clickBack(6)" class="item">포스설정</div>
      <div  @click="clickBack(8)" class="item"><b>충전기설정</b> </div>
      <div  @click="clickBack(9)" class="item">보안설정</div>
      <div  @click="clickBack(2)" class="item">
        <div><i class="fas fa-arrow-left fa-2x"></i></div>
        <div>나가기</div>
      </div>

    </div>
    <div class="dispenser-body">
      <div class="item">
        <div>프리스탑</div>
        <div>500</div>
      </div>
      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
      <div class="item">5</div>
      <div class="item">6</div>
      <div class="item">7</div>
      <div class="item">8</div>
      <div @click="inputSetting('최대충전량')" class="item">
        <div>최대충전량</div>        
        <div>{{literLimit}}</div>
      </div>
      <div class="item">10</div>
      <div class="item"></div>
    </div>
  </div>
</div>

<!-- arya pos setup image -->
<div v-if="gridState==6">
  <div class="pos-container">
    <div class="setup-side">
      <div class="item">SK</div>
      <div  @click="clickBack(5)" class="item">일반설정</div>
      <div  @click="clickBack(7)" class="item">프린터설정</div>
      <div  @click="clickBack(6)" class="item"><b>포스설정</b> </div>
      <div  @click="clickBack(8)" class="item">충전기설정</div>
      <div  @click="clickBack(9)" class="item">보안설정</div>
      <div  @click="clickBack(2)" class="item">
        <div><i class="fas fa-arrow-left fa-2x"></i></div>
        <div>나가기</div>
      </div>

    </div>
    <div class="pos-body">
      <div class="item">
        <div>네트웤설정</div>
        <div>192.168.0</div>
      </div>
      <div class="item">
        <div>정유사설정</div>
        <div>SK-GAS</div>
      </div>
      <div class="item">
        <div>밴사설정</div>
        <div>NICE</div>

      </div>
      <div class="item">
        <div>인덱스</div>
        <div>확인</div>
       
      </div>
      <div class="item">
        <div>키다운로드</div>
        <div>NICE</div>
        
      </div>
      <div class="item-empty"></div>
      <div class="item-empty"></div>
      <div class="item-empty"></div>
      <div class="item-empty"></div>

    </div>
  </div>

</div>

<!-- arya print setup image -->
<div v-if="gridState==7">
  <div class="print-container">
    <div class="setup-side">
      <div class="item">SK</div>
      <div  @click="clickBack(5)" class="item">일반설정</div>
      <div  @click="clickBack(7)" class="item"><b>프린터설정</b> </div>
      <div  @click="clickBack(6)" class="item">포스설정</div>
      <div  @click="clickBack(8)" class="item">충전기설정</div>
      <div  @click="clickBack(9)" class="item">보안설정</div>
      <div  @click="clickBack(2)" class="item">
        <div><i class="fas fa-arrow-left fa-2x"></i></div>
        <div>나가기</div>
      </div>
      
    </div>
    <div class="print-body">
      <div class="item">
        <div>소비자용</div>
        <div>ON</div>
      </div>
      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
      <div class="item">5</div>
      <div class="item">6</div>
      <div class="item">7</div>
      <div class="item">8</div>
      <div class="item">9</div>
      <div class="item">10</div>
    </div>

  </div>
</div>

<!-- arya normal setup menu image -->
<div v-if="gridState==5">
  <div class="setup-container">
    <div class="setup-side">
      <div class="item">SK</div>
      <div  @click="clickBack(5)" class="item"><b>일반설정</b> </div>
      <div  @click="clickBack(7)" class="item">프린터설정</div>
      <div  @click="clickBack(6)" class="item">포스설정</div>
      <div  @click="clickBack(8)" class="item">충전기설정</div>
      <div  @click="clickBack(9)" class="item">보안설정</div>
      <div  @click="clickBack(2)" class="item">
        <div><i class="fas fa-arrow-left fa-2x"></i></div>
        <div>나가기</div>
      </div>
    </div>
    <div class="setup-body">
      <div @click="inputSetting('단가')" class="item">
        <div>단가설정</div>
        <div>{{costDisplay}}</div>
        
      </div>
      <div @click="inputSetting('posCard')" class="item">
        <div>포스카드</div>
        <div>{{posCard}}</div>
      </div>
      <div class="item">
        <div>프리셋제한</div>
        <div>ON</div>
      </div>
      <div class="item">4</div>
      <div @click="inputSetting('호기')" class="item">
        <div>호기설정</div>
        <div>{{pumpId}}</div>
      </div>
      <div class="item">6</div>
      <div class="item">7</div>
      <div class="item">8</div>
      <div @click="inputSetting('defaultCode')" class="item">
        <div>디폴트코드</div>
        <div>{{defaultCode}}</div>
      </div>
      <div class="item">10</div>
      <div class="item">11</div>
      <div class="item">다음</div>
    </div>
  </div>

</div>

<!-- arya main menu -->
<div v-if="gridState==2">
  <div class="mainmenu-container">
    <div class="mainmenu-side">
      <div class="item1">SK</div>
      <div class="item2">
        <div @click="clickBack(5)" class="item1">
          <div><i class="fas fa-cog fa-2x"></i></div>
          <div>설정</div>
          
        </div>
        <div @click="clickBack(0)"  class="item1">
          <div><i class="fas fa-arrow-left fa-2x"></i></div>
          <div>나가기</div>
          </div>
      </div>


    </div>
    <div class="mainmenu-body">
      <div class="item1">조회</div>
      <div class="item">포인트조회</div>
      <div class="item">영수증재발행</div>
      <div class="item">교대마감</div>

      <div class="item">세차권발행</div>
      <div class="item">직전영수증</div>
      <div class="item">그룹마감</div>

      <div class="item2">용지출력</div>
      <div class="item-empty"></div>
      <div class="item">금액영수증</div>
      <div class="item">일마감</div>

      <div class="item-empty"></div>
      <div class="item">리터영수증</div>
      <div class="item3">적립조회</div>

      <div class="item">결제취소</div>
      <div class="item-empty"></div>
      <div class="item">세차권발행</div>
    </div>
  </div>

</div>

<!-- arya first image -->
<div v-if="gridState==0">
  <div class="first-container">
    <div class="first-head">
      <div @click="myInfo">SK</div>
      <div class="first-head02">
        <div>
          <i class="first-icon far fa-bell fa-1x"></i>
          <i class="first-icon fas fa-exclamation-triangle fa-1x"></i> 
          <i class="first-icon fas fa-exclamation-circle fa-1x"></i> 
          <i class="first-icon fas fa-radiation fa-1x"></i>
        </div>
        <div>{{yyyMMdd}}:{{timeDisplay}}</div>
      </div>
      <div>
        <i @click="clickMenu" class="fas fa-bars fa-2x"></i>
      </div>
    </div>
    <div @click="clickPump" class="first-body">
      <div>{{preSetting}} {{carNumberDisplay}}</div>
      <div class="first-body02">{{chargingState}}</div>
      <div class="first-body03"> {{pumpId}}호기</div>
      <hr>
      <div class="first-body04">
        <div class="item">충전금액</div>
        <div class="item">{{amountDisplay}}</div>
        <div class="item">원</div>
        <div class="item">충전량</div>
        <div class="item">{{literDisplay}}</div>
        <div class="item">L</div>
      </div>
    </div>

  </div>

</div>

<!-- arya charge menu -->
<div v-if="gridState==1">
  <div class="charge-container">
    <div class="charge-side">
      <div class="charge-side01">
        <div @click="myInfo">SK</div>
      </div>
      <div>
        <div class="charge-side02"><b>설정</b> </div>
        <div class="charge-side02"><i class="fas fa-arrow-down"></i></div>
        <div class="charge-side02">충전중</div>
        <div class="charge-side02"><i class="fas fa-arrow-down"></i></div>
        <div class="charge-side02">결제</div>
      </div>
      <div @click="clickBack(0)" class="charge-side03">
        <div> <i class="fas fa-arrow-left fa-1x"></i> </div>
        <div class="charge-side02">뒤로</div>
        
      </div>
    </div>
    <div class="charge-body">
      <div class="item">머핀</div>
      <div @click="inputSetting('차량번호')" class="item">
        <div>고객관리</div>
        <!-- <div>{{carNumberDisplay}}</div> -->
        <div>{{defaultCarNumber}}</div>
        <!-- <div>09-0000</div> -->
        
      </div>
      <div @click="clickCharge()" class="item2">
        <div>충전시작</div>
        <div>{{preSetting}}</div>
      </div>
      <div @click="clickPreset('1만원')" class="item">1만원</div>
      <div @click="clickPreset('2만원')" class="item">2만원</div>
      <div @click="inputSetting('금액')" class="item">금액설정</div>
      <div @click="clickPreset('가득')" class="item">가득충전</div>
      <div @click="clickPreset('10리터')" class="item">10리터</div>
      <div @click="clickPreset('20리터')" class="item">20리터</div>
      <div @click="inputSetting('리터')" class="item">정량설정</div>
      <div @click="clickBack(4)" class="item">결제</div>

    </div>
  </div>
</div>

<!-- arya charging image -->
<div v-if="gridState==3">
  <div class="charging-container">
    <div class="charging-side">

      <div @click="myInfo" class="charge-side01">SK</div>
      <div>
        <div class="charge-side02">설정</div>
        <div class="charge-side02"><i class="fas fa-arrow-down"></i></div>
        <div class="charge-side02"> <b>충전중</b> </div>
        <div class="charge-side02"><i class="fas fa-arrow-down"></i></div>
        <div class="charge-side02">결제</div>
      </div>
      <div @click="clickBack(0)" class="charge-side03">
        <div> <i class="fas fa-arrow-left fa-1x"></i> </div>
        <div class="charge-side02">뒤로</div>
        
      </div>

    </div>
    <div class="charging-body">
      <div class="item1">
        <div class="i1">충전금액</div>
        <div class="i2">{{amountDisplay}}원</div>
        <div class="i1">충전량</div>
        <div class="i2">{{literDisplay}}리터</div>
        <div class="i3">단가 {{costDisplay}}원</div>
        <div class="i3">목표충전 {{preSetting}}</div>
      </div>
      <div @click="inputSetting('차량번호')" class="item">
        <div>고객관리</div>
        <div>{{carNumberDisplay}}</div>
      </div>
      <div @click="inputSetting('금액')" class="item">금액설정</div>
      <div @click="inputSetting('리터')" class="item">정량설정</div>
      <div @click="clickChargeStop" class="item">충전중지</div>

    </div>
  </div>
</div>



<div v-if="gridState==41">
  <div class="payment-container">
    <PayLeft @exit="backPayment" />
    <div @click="clickBack(0,'결제완료')" class="payment-body">
      신용카드 결제
    </div>
  </div>
</div>

<div v-if="gridState==42">
  <div class="payment-container">
    <PayLeft @exit="backPayment" />
    <div  @click="clickBack(0,'결제완료')" class="payment-body">
      신용적립 결제
    </div>
  </div>
</div>
<div v-if="gridState==43">
  <div class="payment-container">
    <PayLeft @exit="backPayment" />
    <div  @click="clickBack(0,'결제완료')" class="payment-body">
      현금영수증 결제
    </div>
  </div>
</div>
<div v-if="gridState==44">
  <div class="payment-container">
    <PayLeft @exit="backPayment" />
    <div  @click="clickBack(0,'결제완료')" class="payment-body">
      포인트 결제
    </div>
  </div>
</div>

<div v-if="gridState==45">
  <div class="payment-container">
    <PayLeft @exit="backPayment" />
    <div  @click="clickBack(0,'결제완료')" class="payment-body">
      현금영수증+적립 결제
    </div>
  </div>
</div>
<div v-if="gridState==46">
  <div class="payment-container">
    <PayLeft @exit="backPayment" />
    <div  @click="clickBack(0,'결제완료')" class="payment-body">
      적립 결제
    </div>
  </div>
</div>
<div v-if="gridState==47">
  <div class="payment-container">
    <PayLeft @exit="backPayment" />
    <div  @click="clickBack(0,'결제완료')" class="payment-body">
      복합 결제
    </div>
  </div>
</div>

<!-- arya payment image -->
<div v-if="gridState==4">
  <div class="pay-container">
  <div class="pay-side">
    <div class="pay-side01">SK</div>
    <div>
      <div class="pay-side02">설정</div>
      <div class="pay-side02"><i class="fas fa-arrow-down"></i></div>
      <div class="pay-side02">충전중</div>
      <div class="pay-side02"><i class="fas fa-arrow-down"></i></div>
      <div class="pay-side02"> <b>결제</b> </div>
    </div>
    <div @click="clickBack(0)" class="pay-side03">
        <div> <i class="fas fa-arrow-left fa-1x"></i> </div>
        <div class="charge-side02">뒤로</div>
    </div>
  </div>
  <div class="pay-body">
    <div class="t01">
      <div>!</div>
      <div class="a4">{{pumpId}}호기</div>
      <div class="a1">충전이 완료되었습니다</div>
      <div class="a1">결제방식을 선택해주세요</div>
      <div class="a3">충전금액</div>
      <div class="a2">{{amountDisplay}}원</div>
      <div class="a3">충전량</div>
      <div class="a2">{{literDisplay}}리터</div>
    </div>
    <div @click="payment('card')" class="p01">카드결제</div>
    <div @click="payment('cardNsave')" class="p02">
      <div>카드</div>
      <div>포인트</div>
    </div>
    <div @click="payment('cash')" class="p05">현금</div>
    <div @click="payment('point')" class="p06">포인트</div>
    <div @click="payment('cashNsave')" class="p07">현금적립</div>
    <div @click="payment('save')" class="p08">적립</div>
    <div @click="payment('complex')" class="p09">복합</div>
    <div @click="clickBack(0,'결제나가기')" class="p10">나가기</div>

  </div>
  </div>
</div>

<br>
<hr width="340px" >

</div>

</template>

<script>
let timer1=0
import Hello from '../components/Hello.vue'
import PayLeft from '../components/PayLeft.vue'

import gsap from 'gsap'
import io from "socket.io-client"

export default {
  components: {
    Hello,
    PayLeft,
  },
  data() {
    return {
      about: false,
      gridState: -1,
      gridLayout: false,
      amount: 0,

      pulseCnt: 0,
      liter: 0,
      cost: 1000,
      pulseCount: 0,
      isCharging: false,
      isPay: false,
      pAmount: 0,
      pLiter: 0,
      showInput: false,
      inputPara: '',
      defaultCode: '09',
      pumpId: '1',
      posCard: '100',
      carNumber: '090000',
      prevCarNumber: '090000',
      literLimit: 90,
      //
      socket: {},
      position: {x:0,y:0},
      odt: {odtId:'',cost:'',literLimit:''},
      //
      payPara: '',
      dTotal: 0
    }
  },
  created() {
    this.socket =io("http://106.245.87.140:1605"); //How to deal with Cross Origin Resource Sharing

  },

  mounted() {
    console.log('mounted')
    this.socket.emit('odt','read')
    gsap.from(".anim", {
        opacity:0, duration:1 , y:-50, stagger:0.6
    })
    this.socket.on("position",data=>{
      this.position=data
      console.log('isConnected:'+this.position.x)
    })
    this.socket.on('odt',data=>{
      console.log('fetch db')

      for(let i=0;i<data.length;i++) {
        console.log('odtId=', data[i].odtId ,data[i].cost)
      }
      this.literLimit=data[0].literLimit
      this.pumpId=data[0].odtId
      this.cost=data[0].cost
    })
  },
  methods: {
    payment(arg) {
      if(arg=='card'){
        this.gridState=41
      }
      else if(arg=='cardNsave') {
        this.gridState=42

      }
      else if(arg=='cash'){
        this.gridState=43
      }
      else if(arg=='point'){
        this.gridState=44
      }
      else if(arg=='cashNsave'){
        this.gridState=45
      }
      else if(arg=='save') {
        this.gridState=46

      }
      else if(arg=='complex') {
        this.gridState=47

      }

    },
    myInfo() {
      console.log('myInfo:',this.carNumber)
    },
    //updateSetup() {
      // this.odt.odtId='3'
      // this.odt.cost='1234'
      // this.odt.literLimit='85'
      // this.socket.emit('odt',this.odt)
    //},
    jpos5000() {
      this.gridLayout=!this.gridLayout
      if(this.gridLayout==true) this.gridState=0
      else this.gridState=99
      this.socket.emit("move","left")
    },
    fetch() {
      this.about=!this.about
      //this.socket.emit('odt','read')
    },
    normalSetup(arg) {
      console.log('normalSetup',arg.cost)
    },
    inputResult(arg) {
      this.showInput=!this.showInput
      console.log('inputResult',arg)

      if(arg.type=='금액') {
        this.pAmount=this.pLiter=0
        this.pAmount=arg.value
      }
      else if(arg.type=='리터') {
        this.pAmount=this.pLiter=0
        this.pLiter=arg.value
      }
      else if(arg.type=='defaultCode') this.defaultCode=arg.value
      else if(arg.type=='호기') this.pumpId=arg.value
      else if(arg.type=='단가') this.cost=arg.value
      else if(arg.type=='posCard') this.posCard=arg.value
      else if(arg.type=='최대충전량') this.literLimit=arg.value
      else if(arg.type=='차량번호') {
        this.carNumber=arg.value
        console.log('-->차량번호:',this.carNumber)
        // this.prevCarNumber=this.carNumber
        if(this.isCharging==false) this.clickCharge(this.carNumber)
      }

    },
    inputClose() {
      this.showInput=!this.showInput
    },
    backPayment() {
      console.log('backPayment')
      this.gridState=4
    },
    inputSetting(arg){
      console.log('input')
      this.showInput=!this.showInput
      this.inputPara=arg

    },

    clickPreset(arg) {
      this.pAmount=this.pLiter=0
      if(arg=='1만원') this.pAmount=10000
      else if(arg=='2만원') this.pAmount=20000
      else if(arg=='10리터') this.pLiter=10000
      else if(arg=='20리터') this.pLiter=20000
      else if(arg=='가득') this.pAmount=this.pLiter=0;
    },
    clickPump() {
      console.log('click')
      if(this.isPay==true) this.gridState=4
      else {
        if(this.isCharging==true) this.gridState=3
        else this.gridState=1
      }
    },
    clickBack(arg,arg2='default') {
      if(arg2=="결제나가기") {
        this.isPay=false
        console.log('결제나가기[s,t]',this.gridState,this.dTotal)

      }
      else if(arg2=='결제완료'){
        this.isPay=false
        console.log('결제완료[s,t]',this.gridState,this.dTotal)

      }
      else if(this.gridState==5) {
        this.odt.odtId=this.pumpId
        this.odt.cost=this.cost
        this.odt.literLimit=this.literLimit
        console.log('메뉴나가기',this.odt.odtId,this.odt.cost,this.odt.literLimit)
        this.socket.emit('odt','write',this.odt)
      }
      this.gridState=arg
    },
    clickMenu() {
      this.gridState=2
    },
    clickChargeStop(){
      clearInterval(timer1)
      this.isCharging=false
      this.isPay=true
      if(this.gridState==3) this.gridState=4

      // let tmLiter='0'+this.liter*1000
      // tmLiter=tmLiter.padStart(7,'0')
      //let tmTimeSring=tmTime
      this.dTotal+=this.liter
      console.log('충전완료[nu,am,li,co,to]',this.carNumber,this.amount,this.liter,this.cost,this.dTotal)

      let tm='A'
        +this.carNumber
        +(''+this.liter).padStart(7,'0')
        +(''+this.amount).padStart(7,'0')
        +this.tmTime
        +'99'
        +(''+this.dTotal).padStart(9,'0')
        +(''+this.cost*100).padStart(7,'0')
      console.log('tm:',tm)


    },
    clickCharge(arg='') {
      this.gridState=3
      if(arg)
        console.log('충전시작[nu]',this.carNumber)
      else {
        this.carNumber='090000'
        console.log('충전시작')
      }
      if(this.isCharging==false) {
          this.isCharging=true
          if(this.pulseCount!=0) this.pulseCount=0
          timer1=setInterval(()=>{
              let tmp
              this.pulseCount+=22;
              tmp=this.pulseCount/1000
              // this.liter=tmp.toFixed(3)
              // tmp=this.liter*this.cost
              // tmp=Math.ceil(this.liter*this.cost)
              
              // this.amount=Number(tmp).toLocaleString()

              // this.amount=tmp

              this.liter=this.pulseCount
              // this.amount=(this.pulseCount/1000).toFixed(3)*this.cost
              this.amount=Math.round((this.pulseCount*this.cost)/1000)
              if(this.pLiter && this.pulseCount>=this.pLiter) {
                this.clickChargeStop();
                return
              }
              else if(this.pAmount && tmp >= this.pAmount){
                this.clickChargeStop();
                return

              }
              else if(this.pulseCount>=this.literLimit*1000) {
                this.clickChargeStop()
                return
              }

          },40)
      }
      else {
        clearInterval(timer1)
        this.isCharging=false
      }

    }
  },
  computed: {
    chargingState() {
      if(this.isPay===true) return '결제대기'
      else return this.isCharging==true ? '충전중':'충전대기'

    },
    costDisplay() {
      return Number(this.cost).toLocaleString()
    },
    amountDisplay() {
      //return Number(this.amount)
      let tmp=(this.pulseCount/1000).toFixed(3)
      tmp=Math.ceil(tmp*this.cost)
      return Number(tmp).toLocaleString()
      
      // let tmp=Math.ceil(this.liter*this.cost)
      // return Number(tmp).toLocaleString()

    },
    literDisplay() {
      return (this.pulseCount/1000).toFixed(3)

    },
    carNumberDisplay() {
      return this.carNumber.slice(0,2)+'-'+this.carNumber.slice(2)
    },
    prevCarNumberDisplay() {
      return this.prevCarNumber.slice(0,2)+'-'+this.prevCarNumber.slice(2)
    },
    defaultCarNumber() {
      return '09-0000'
    },
    preSetting() {
      if(this.pAmount==0 && this.pLiter==0) return '가득충전'
      else if(this.pAmount) {
        let amount
        amount=Number(this.pAmount).toLocaleString()
        return amount+'원'
      }
      else if(this.pLiter) {
        let liter
        liter=(this.pLiter/1000).toFixed(3)
        return liter+'리터'
      }
      return '가득충전'
    },
    yyyMMdd() {
        let today=new Date()
        let year=today.getFullYear()
        let month=('0'+(today.getMonth()+1)).slice(-2)
        let day=('0'+today.getDate()).slice(-2)
        let dateString=year+'-'+month+'-'+day
        console.log('dataString',dateString)
        let hours=today.getHours();
        let minutes=today.getMinutes();
        let seconds=today.getSeconds();
        let hmsString=hours+'-'+minutes+'-'+seconds
        console.log('timeString',hmsString)
        return dateString
    },
    tmTime() {
        let today=new Date()
        let year=today.getFullYear()-2000
        let month=('0'+(today.getMonth()+1)).slice(-2)
        let day=('0'+today.getDate()).slice(-2)
        let hours=('0'+today.getHours())
        let minutes=('0'+ today.getMinutes())
        let tmTimeString=year+month+day+hours+minutes
        return tmTimeString
    },
    timeDisplay() {
        //자동업데이트가 안되
        let today=new Date()
        let hours=(''+today.getHours()).padStart(2,'0')
        let minutes=(''+today.getMinutes()).padStart(2,'0')
        let tmTimeString=hours+'-'+minutes
        return tmTimeString
    }

  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
/* otp menu */
.otp-container {
  display: flex;
  width: 340px;
  height: 240px;
  border: 1px solid black;
  margin: 0 auto;

}
.otp-body {
  width: 300px;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-auto-rows: minmax(42px,auto);
  gap: 5px;
  margin: 5px;
  margin-left: 20px;
}
.otp-body .item {
  border: 1px solid black;
  font-size: 12px;
  text-align: center;
}
/* dispenser menu */
.dispenser-container {
  display: flex;
  width: 340px;
  height: 240px;
  margin: 0 auto;
  border: 1px solid black;
}
.dispenser-body {
  width: 300px;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-auto-rows: minmax(42px,auto);
  gap: 5px;
  margin: 5px;
  margin-left: 20px;
}
.dispenser-body .item {
  border: 1px solid black;
  font-size: 12px;
  text-align: center;
}
/* pos menu */
.pos-container {
  display: flex;
  width: 340px;
  height: 240px;
  border: 1px solid black;
  margin: 0 auto;
}
.pos-body {
  width: 300px;
  background-color: #ddd;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-auto-rows: minmax(42px,auto);
  gap: 5px;
  margin: 5px;
  margin-left: 20px;
}
.pos-body .item {
  border: 1px solid black;
  font-size: 12px;
  text-align: center;
}

/* printer menu*/
.print-container {
  display: flex;
  width: 340px;
  height: 240px;
  border: 1px solid black;
  margin: 0 auto;
}
.print-body {
  width: 300px;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-auto-rows: minmax(42px,auto);
  gap: 5px;
  margin: 5px;
  margin-left: 20px;
}
.print-body .item {
  border: 1px solid black;
  font-size: 12px;
  text-align: center;
}

/* setup menu */
.setup-container {
  display: flex;
  justify-content: center;
  width: 340px;
  height: 240px;
  border: 1px solid black;
  margin: 0 auto;
}
.setup-side {
  width: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: blanchedalmond;

}
.setup-side .item {
  border: 1px solid black;
  font-size: 8px;
  text-align: center;
}
.setup-body {
  width: 300px;
  background-color:#ddd;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-auto-rows: minmax(42px,auto);
  gap: 5px;
  margin: 5px;
  margin-left: 20px;

}
.setup-body .item {
  border: 1px solid black;
  font-size: 12px;
  text-align: center;
}
/* main menu image */

.mainmenu-container {
  display: flex;
  justify-content: center;
  width: 340px;
  height: 240px;
  border: 1px solid black;
  margin: 0 auto;
  
}
.mainmenu-side {
  width: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: blanchedalmond;
  /* margin: 4px 0; */
}
.mainmenu-body {
  width: 300px;
  background-color: gainsboro;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-auto-rows: minmax(38px,auto);
  gap: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 20px;
  margin-right: 10px;
  /* margin: 18px; */
}

.mainmenu-side .item1 {
  height: 40px;
  font-size: 8px;
  text-align: center;

}
.mainmenu-side .item2 {
  height: 80px;
  font-size: 8px;
  text-align: center;
}

.mainmenu-body .item {
  border: 1px solid black;
  font-size: 12px;
}
.mainmenu-body .item1 {
  border: 1px solid black;
  grid-column: 1/2;
  grid-row: 1/3;
  font-size: 12px;

}
.mainmenu-body .item2 {
  border: 1px solid black;
  grid-column: 1/2;
  grid-row: 3/5;
  font-size: 12px;

}
.mainmenu-body .item3 {
  border: 1px solid black;
  grid-column: 4/5;
  grid-row: 4/6;
  font-size: 12px;

}

/* charging image */
.charging-container {
  display: flex;
  width: 340px;
  height: 240px;
  margin: 0 auto;
  border: 1px solid black;
  justify-content: center;
}
.charging-side {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 40px;
  /* border: 1px solid black; */
}
.charging-body {
  width: 300px;
  /* border: 1px solid black; */
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-auto-rows: minmax(42px,auto);
  gap: 5px 10px;
  background-color: #ddd;
  
}
.charging-body .item1 {
  /* border: 1px solid black; */
  grid-column: 1/4;
  grid-row: 1/5;
  text-align: center;
}
.charging-body .item {
  border: 1px solid black;
  font-size: 12px;
  padding-top: 12px;
  text-align: center;


}
.charging-body .item1 .i1 {
  font-size: 18px;
  font-weight: bold;
  /* border: 1px solid black; */
  margin-top: 10px;
}
.charging-body .item1 .i2 {
  font-size: 34px;
  font-weight: bold;
}
.charging-body .item1 .i3 {
  font-size: 16px;
  font-weight: bold;
  /* border: 1px solid black; */
}


/* charge image*/
.charge-container {
  display: flex;
  width: 360px;
  height: 240px;
  margin: 0 auto;
  border: 1px solid black;
  justify-content: center;

}
.charge-side {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 40px;
  /* border: 1px solid black; */
  font-size: 16px;

}
.charge-side01 {
  /* border: 1px solid black; */
  text-align: center;

}
.charge-side02 {
  font-size: 8px;
  text-align: center;
  /* border: 1px solid black; */
}
.charge-side03{
  text-align: center;
  /* border: 1px solid black; */
}

.charge-body {
  margin: 10px;
  width: 300px;
  /* border: 1px solid black; */
  font-size: 16px;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-auto-rows: minmax(42px,auto);
  gap: 5px;

  /* justify-content: center; */

  /* align-items: center; */

}
.charge-body .item {
  background-color: #ddd;
  font-size: 12px;
  text-align: center;
  border: 1px solid black;
}
.charge-body .item2 {
  /* justify-content: center; */
  border: 1px solid black;
  background-color: #ddd;
  grid-column: 3/5;
  text-align: center;
  padding-top: 20px;
}

/* first image*/
.first-container {
  width: 340px;
  height: 240px;
  margin: 0 auto;
  border: 1px solid black;
}
.first-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
  height: 60px;
  /* border: 1px solid black; */
  background-color: #ddd;

}
.first-body {
  height: 154px;
  margin-top: 4px;
  margin-left: 10px;
  margin-right: 10px;
  background-color: #ddd;
  text-align: center;
}
.first-head02 {
  text-align: center;
}
.first-body02 {
  font-size: 8px;
}
.first-body03 {
  font-size: 32px;
  font-weight: bold;
}
.first-body04 {
  display: grid;
  grid-template-columns: 100px 70px 20px;
  grid-template-rows: 30px 30px;

  align-content: center; /*y*/
  justify-content: center; /*x*/
  column-gap: 3px;
  row-gap: 3px;
  /* border: 1px solid pink; */

}
.first-body04 .item{
  font-size: 22px;
  font-weight: bold;
  text-align: right;
}

.first-icon {
  border: 1px solid black;
  margin-top: 10px;
  margin-right: 4px;
}

/* payment card */
.payment-container {
  display: flex;
  width: 340px;
  height: 240px;
  margin: 0 auto;
  border: 1px solid black;

}
.payment-body {
  background-color: #ddd;
  width: 300px;
  /* text-align: center; */
  display: flex;
  justify-content: center;
  align-items: center;
}
/* payment */
.pay-container {
  display: flex;
  width: 340px;
  height: 240px;
  margin: 0 auto; 
  border: 1px solid black;
  justify-content: center;
  /* font-size: 34px; */
}

.pay-side {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* border: 1px solid black; */
  width: 40px;
  /* font-size: 16px; */
}
.pay-side .pay-side02 {
  /* border: 1px solid blue; */
  font-size: 8px;
  color: black;
  text-align: center;
}
.pay-side .pay-side01 {
  margin-top: 10px;
  text-align: center;
  /* padding-top: 10px; */
  /* background-color: gray; */
}
.pay-side .pay-side03 {
  margin-bottom: 10px;
  text-align: center;
  /* padding-top: 10px; */
  /* background-color: gray; */
}



.pay-body {

  /* border: 1px solid black; */
  width: 300px;
  font-size: 12px;


  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-auto-rows: minmax(42px,auto) ;
  grid-template-areas: 
  "t01 t01 p01 p02"
  "t01 t01 .   ."
  "t01 t01 p05 p06"
  "t01 t01 p07 p08"
  "t01 t01 p09 p10"
  ;
  gap: 5px;
  background-color: #ddd;
  text-align: center;
}
.t01 {
  grid-area: t01;
  /* background-color: yellow; */
  text-align: center;
}
.t01 .a1 {
  font-size: 8px;
}
.t01 .a2 {
  font-size: 28px;
}
.t01 .a3 {
  margin-top: 6px;
  font-size: 18px;
  font-weight: bold;
}
.t01 .a4 {
  font-size: 18px;
  font-weight: bold;
}
.p01 {
  grid-area: p01;
  background-color: #ddd;
    border: 1px solid black;

}
.p02 {
  grid-area: p02;
  background-color: #ddd;
    border: 1px solid black;

}
.t04 {
  grid-area: t04;
  background-color: #ddd;
    border: 1px solid black;

}
.t05 {
  grid-area: t05;
  background-color: #ddd;
    border: 1px solid black;

}
.p05 {
  grid-area: p05;
  background-color: #ddd;
    border: 1px solid black;

}
.p06 {
  grid-area: p06;
  background-color: #ddd;
  border: 1px solid black;

}
.p07 {
  grid-area: p07;
  background-color: #ddd;
  border: 1px solid black;

}
.p08 {
  grid-area: p08;
  background-color: #ddd;
  border: 1px solid black;

}
.p09 {
  grid-area: p09;
  background-color: #ddd;
  border: 1px solid black;

}
.p10 {
  grid-area: p10;
  background-color: #ddd;
  border: 1px solid black;

}
.comment {
    text-align: right; 
    margin-bottom: 0px; 
    margin-left: 50px; 
    font-size:8px;
}

.jpos5000 {
    margin-left: 4%;
    /* display: grid; */
    place-content: center;



    display: inline-block;
    background: #b100f2;
    color: white;
    font-weight: bold; 
    text-transform: uppercase;
    text-decoration: none;
    padding: 0.8em;
    /* width: 100%; */

}



</style>