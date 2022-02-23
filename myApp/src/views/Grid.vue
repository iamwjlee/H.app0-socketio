<template>
<div>
<!-- <Hello v-if="showInput" :argProps="inputPara" @close="inputClose" @result="inputResult"/> -->

<!-- <Wtable :columns="columns" :rows="users" /> -->

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
  <p class="comment"> props 부모컴포넌트에서 자식컴포넌트로 데이터를 전달할때 사용하는 단방향.</p>
  <p class="comment"> 부모가 v-bind나 :키워드를 사용하여 데이터를 전달하고 이벤트를 받을수 있다.</p>
  <p class="comment"> 동적props v-bind사용시 부모의 데이터에 props를 동적으로 바인딩할 수 있습니다.</p>
  <p class="comment"> 데이터가 상위에서 업데이트될때마다 하위데이터로 전달된다!</p>
  <p class="comment"> Vuex는 상태관리 라이브러리 별도의저장소에서 데이터를 관리하며 비용이 많이든다  Redux(React) </p>
  <p class="comment"> Mutation은 state를 변경하은 유일한 방법이고 이벤트와 유사하다.</p>
  
  
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
  <i class="fas fa-arrow-down"></i>
  <i class="fas fa-arrow-up"></i>
  <i @click="myTest" class="fas fa-calculator"></i>

</div>

<div v-if="showSales">

  <Wtable :columns="Acolumns" 
          :rows="salesList" 
          :options="{ 
            a: true,
            pageSize: 6,
            sortBy: {field:'odtId',type: 'asc'}
          }"
          @event1="wtableAction" />

</div>


<!-- <div v-if="showSales">
  <div style="overflow-x: auto;">
  <table class="customers">
    <tr>
      <th @click="test('1')">id</th>
      <th @click="test('2')">date <i class="fas fa-arrow-left fa-1x"></i> </th>
      <th> carNumber </th>
      <th>liter</th>
      <th>cost</th>
      <th>amount</th>

    </tr>
    <tr v-for="(list,index) in visibleSalesList" :key="index">
      <td> {{list.odtId}}       </td>
      <td> {{list.date}} </td>
      <td>{{list.carNumber}} </td>
      <td> {{list.liter}} </td>
      <td>{{list.cost}} </td>
      <td> {{list.amount}} </td>

    </tr>
  </table>
  <div class="mylist">
    <p>total pages = {{currentPage+1}} of {{getTotalPages()}}</p>
    <button type="button" class="btn01" >show</button>
    <button type="button" class="btn01" @click="next"> ++ </button>
    <button type="button" class="btn01" @click="prev"> -- </button>

  </div>
  </div>

</div> -->


<Hello v-if="showInput" :argProps="inputPara" @close="inputClose" @result="inputResult"/>
<YesNo v-if="showYesNo" :argProps="yesnoPara" @close="yesnoClose" />

<!-- 보안설정 메뉴 -->
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
      <div class="item">
        <div>토탈변경</div>
        <div>{{dTotal}} </div>
      </div>
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

<!-- 충전기설정 메뉴 -->
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
      <div class="item">
        <div>리터표시</div>
        <div>5</div>
        
      </div>
      <div class="item">
        <div>디스펜서</div>
        <div>내장형</div>
      </div>
      <div class="item">
        <div>포스모드</div>
        <div>장위</div>
      </div>
      <div class="item">
        <div>저속충전</div>
        <div>4</div>
        </div>
      <div class="item">
        <div>고속충전</div>
        <div>1000</div>
        </div>
      <div class="item">
        <div>대류온타임</div>
        <div>8</div>
        </div>
      <div class="item">
        <div>소류온타임</div>
        <div>4</div>
        </div>
      <div @click="inputSetting('최대충전량')" class="item">
        <div>최대충전량</div>        
        <div>{{literLimit}}</div>
      </div>
      <div class="item">
        <div>홀센서사용</div>
        <div>OFF</div>
        </div>
      <div class="item">
        <div>유량계재부팅</div>
        <div>확인</div>
        </div>
    </div>
  </div>
</div>

<!-- 포스설정 메뉴 -->
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
      <div @click="yesNoSetting('판매데이타 초기화')" class="item">
        <div>인덱스</div>
        <div>변경</div>
       
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

<!-- 프린터설정 메뉴 -->
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
      <div class="item">
        <div>가맹점용</div>
        <div>ON</div>
        
      </div>
      <div class="item">
        <div>KBG발급</div>
        <div>ON</div>
        
      </div>
      <div class="item">
        <div>인쇄농도</div>
        <div>2</div>
      </div>
      <div class="item">
        <div>문자강조</div>
        <div>ON</div>
      </div>
      <div class="item">
        <div>헤드분할</div>
        <div>ON</div>
      
      </div>
      <div class="item">
        <div>커터기사용</div>
        <div>ON</div>
      </div>
      <div class="item">
        <div>백피드</div>
        <div>ON</div>
      </div>
      <div class="item">
        <div>설정값인쇄</div>
        <div>확인</div>
       
      </div>
      <div class="item">
        <div>테스트인쇄</div>
        <div>확인</div>
        
      </div>
    </div>

  </div>
</div>

<!-- 일반설정 메뉴 -->
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
      <div @click="onOffSetup('PresetLimit')" class="item">
        <div>프리셋제한</div>
        <div v-if="PresetLimit">ON</div>
        <div v-else>OFF</div>
      </div>
      <div @click="onOffSetup('CodeCostUse')" class="item">
        <div>거래처단가</div>
        <div v-if="CodeCostUse">ON</div>
        <div v-else>OFF</div>
       
      </div>
      <div @click="inputSetting('호기')" class="item">
        <div>호기설정</div>
        <div>{{pumpId}}</div>
      </div>
      <div @click="onOffSetup('CorpUse')" class="item">
        <div>법인승인</div>
        <div v-if="CorpUse">ON</div>
        <div v-else>OFF</div>
      </div>
      <div @click="onOffSetup('NozSWUse')" class="item">
        <div>노즐스위치</div>
        <div v-if="NozSWUse">ON</div>
        <div v-else>OFF</div>
      </div>
      <div @click="onOffSetup('KeyNozswUse')" class="item">
        <div>터치노즐</div>
        <div v-if="KeyNozswUse">ON</div>
        <div v-else>OFF</div>
        
      </div>
      <div @click="inputSetting('defaultCode')" class="item">
        <div>디폴트코드</div>
        <div>{{defaultCode}}</div>
      </div>
      <div @click="onOffSetup('ReceiptMode')" class="item">
        <div>SK영수증</div>
        <div v-if="ReceiptMode">ON</div>
        <div v-else>OFF</div>
       
      </div>
      <div @click="onOffSetup('SKPosCost')" class="item">
        <div>SK단가</div>
        <div v-if="SKPosCost">ON</div>
        <div v-else>OFF</div>
      </div>
      <div @click="clickBack(52)" class="item">다음</div>
    </div>
  </div>

</div>

<!-- 일반설정 두번째 메뉴 -->
<div v-if="gridState==52">
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
      <div class="item">
        <div>uSD정보</div>
        
      </div>
      <div class="item">
        <div>총회전량</div>
      </div>
      <div class="item">
        <div>디스플레이</div>
      </div>
      <div class="item">
        <div>패스워드</div>
      </div>
      <div  class="item">
        <div>버전확인</div>
      </div>
      <div class="item">
        <div>버퍼보드리셋</div>
      </div>
      <div class="item">
        <div>프린터리셋</div>
      </div>
      <div class="item">
        <div>프로그램리셋</div>
      </div>
      <div @click="clickBack(5)" class="item">
        <div>이전</div>
        
      </div>
      <div  class="item">
        <div>리더기무결성</div>
       
      </div>
      <div  class="item">
        <div>무결성재실행</div>
      </div>
      <div @click="clickBack(53)" class="item">다음</div>
    </div>
  </div>

</div>

<!-- 일반설정 세번째 메뉴 -->
<div v-if="gridState==53">
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
      <div  class="item">
        <div>머핀서비스</div>
        <div>OFF</div>
        
      </div>
      <div  class="item">
        <div>머핀세차권</div>
        <div>OFF</div>
      </div>
      <div class="item">
        <div>머핀포인트</div>
        <div>OFF</div>
      </div>
      <div  class="item">
        <div>블루멤버스</div>
        <div>OFF</div>
       
      </div>
      <div  class="item">
        <div>현장할인</div>
        <div>OFF</div>
      </div>
      <div  class="item">
        <div>픽업몰</div>
        <div>OFF</div>
      </div>
      <div  class="item">
        <div>유대입금</div>
        <div>OFF</div>
      </div>
      <div  class="item">
        <div>간편가입</div>
        <div>OFF</div>
        
      </div>
      <div @click="clickBack(52)" class="item">
        <div>이전</div>
      </div>
      <div  class="item">
        <div></div>
        <div></div>
       
      </div>
      <div class="item"> </div>
      <div class="item"></div>
    </div>
  </div>

</div>

<!-- 메인 메뉴 -->
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

<!-- 메인 화면 -->
<div v-if="gridState==0">
  <div class="first-container">
    <div class="first-head">
      <div @click="myInfo">SK</div>
      <div class="first-head02">
        <div class="item1">
          <i @click="myBell" class="first-icon far fa-bell fa-1x"></i>
          <i class="first-icon fas fa-exclamation-triangle fa-1x"></i> 
          <i class="first-icon fas fa-exclamation-circle fa-1x"></i> 
          <i class="first-icon fas fa-radiation fa-1x"></i>
        </div>
        <!-- <div>{{yyyMMdd}}:{{timeDisplay}}</div> -->
        <div class="item2">{{now}}</div>
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

<!-- 충전화면 -->
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
      <div class="item">
        <div style="color:blueviolet" ><i class="fas fa-bone fa-2x"></i></div>
        <div>머핀</div>
        </div>
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
      <div @click="inputSetting('금액')" class="item">
        <div style="color:#ccc"><i class="fas fa-calculator fa-2x"></i></div>
        <div>금액설정</div>
        
      </div>
      <div @click="clickPreset('가득')" class="item">
        <div style="color:#ccc"><i class="fab fa-cloudscale fa-2x"></i></div>
        <div>가득충전</div>
        </div>
      <div @click="clickPreset('10리터')" class="item">10리터</div>
      <div @click="clickPreset('20리터')" class="item">20리터</div>
      <div @click="inputSetting('리터')" class="item">
        <div style="color:#ccc"><i class="fas fa-calculator fa-2x"></i></div>
        <div>정량설정</div>
      </div>
      <div @click="clickBack(4)" class="item">
        <div><i class="fab fa-amazon-pay fa-2x"></i></div>
        <div>결제</div>
        </div>

    </div>
  </div>
</div>

<!-- 충전중 화면 -->
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
        <!-- <div class="i2">{{amountDisplay}}원</div> -->
        <div class="i2">
          <div class="i2-1">{{amountDisplay}}</div>
          <div class="i2-2">원</div>
          
          
        </div>
        <div class="i1">충전량</div>
        <!-- <div class="i2">{{literDisplay}}리터</div> -->
        <div class="i2">
          <div class="i2-1">{{literDisplay}}</div>
          <div class="i2-2">리터</div>

        </div>
        <div class="i3">
          <div class="i3-1">단가</div>
          <div class="i3-2">{{costDisplay}}원</div>
        </div>
        <div class="i3">
          <div class="i3-1">목표충전</div>
          <div class="i3-2">{{preSetting}}</div>
        </div>
      </div>
      <div @click="inputSetting('차량번호')" class="item">
        <div>고객관리</div>
        <div>{{carNumberDisplay}}</div>
      </div>
      <div @click="inputSetting('금액')" class="item">
        <div style="color:#ccc"><i class="fas fa-calculator fa-1x"></i></div>
        <div>금액설정</div>
        </div>
      <div @click="inputSetting('리터')" class="item">
        <div style="color:#ccc"><i class="fas fa-calculator fa-1x"></i></div>
        <div>정량설정</div>
        
        </div>
      <div @click="clickChargeStop" class="item">
        <div style="color:#ccc"><i class="far fa-stop-circle"></i></div>
        <div>충전중지</div>
        </div>

    </div>
  </div>
</div>


<!-- 결제중 화면 -->
<div v-if="gridState==41">
  <div class="payment-container">
    <PayLeft @exit="backPayment" />
    <div @click="clickBack(42,'결제완료')" class="payment-body">
      <div class="item1">
        <div>호기:{{pumpId}}</div>
        <div>거래일시:{{getDateTime()}}</div>
        <div>차량번호:{{carNumber}}</div>
        <div>수량:{{liter}}</div>
        <div>단가:{{cost}}</div>
        <div>금액:{{amount}}</div>
      </div>
      <div class="item2" >{{paymentKind}}</div>

    </div>
  </div>
</div>
<!-- 영수증 화면 -->
<div v-if="gridState==42">
  <div class="payment-container">
    <PayLeft @exit="backPayment" />
    <div @click="clickBack(0)" class="payment-body">
      <div class="item2"><i class="fas fa-receipt fa-4x"></i></div>
      <div class="item2">영수증</div>
    </div>
  </div>


</div>


<!-- 결제 메뉴 -->
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
      <div><b>!</b></div>
      <div class="a4">{{pumpId}}호기</div>
      <div class="a1">충전이 완료되었습니다</div>
      <div class="a1">결제방식을 선택해주세요</div>
      <div class="a3">충전금액</div>
      <div class="a2">
        <div class="a2-1">{{amountDisplay}}</div>
        <div class="a2-2">원</div>
        <!-- {{amountDisplay}}원 -->
      </div>
      <div class="a3">충전량</div>
      <div class="a2">
        <div class="a2-1">{{literDisplay}}</div>
        <div class="a2-2">리터</div>

        <!-- {{literDisplay}}리터 -->
      </div>
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
import YesNo from '../components/YesNo.vue'

import gsap from 'gsap'
import io from "socket.io-client"

import Wtable from '../components/Wtable.vue'

export default {
  components: {
    Hello,
    PayLeft,
    YesNo,
    Wtable,
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
      odt: {odtId:'',cost:'',literLimit:'',dTotal:'' },
      //
      payPara: '',
      dTotal: 0,
      now: '',
      preStop: 100,
      pStop: 0,
      sales : {odtId:'',date: '',carNumber:'',liter:'',cost:'',amount:'',class:''},
      yesnoPara: '적용',
      showYesNo: false,
      CorpUse: false,
      NozSWUse: true,
      KeyNozswUse: true,
      PresetLimit: false, //10만원이상 이하
      CodeCostUse: false,
      SKPosCost: false,
      ReceiptMode: false, //sk영수증옵션
      paymentKind: '',
      //
      salesList: [],
      visibleSalesList: [],//pagination //배열을 일부분을 잘라내어 새로운배열을 리턴한다.
      currentPage:0,
      pageSize: 10,
      sortDir: true,
      currentSort: 'odtId',
      showSales: false,
      sortTest: true,
      //
      Acolumns: [
        { 
          label: 'Id',
          field: 'odtId',
          sortable: true,
        },
        { 
          label: 'Date',
          field: 'date',
          sortable: false
        },
        { 
          label: 'CarNumber',
          field: 'carNumber',
          sortable: false
        },
        { 
          label: 'Liter',
          field: 'liter',
          sortable: false
        },
        { 
          label: 'Cost',
          field: 'cost',
          sortable: false,
        },
        { 
          label: 'Amount',
          field: 'amount',
          sortable: false

        },

        { 
          label: 'Class',
          field: 'class',
          sortable: false
        },


      ],
      // columns: [
      //   { 
      //     label: 'Name',
      //     field: 'name'
      //   },
      //   {
      //     label: 'Age',
      //     field: 'age'
      //   }
      // ],
      // users:[
      //   {name: 'John1',age: '50'},
      //   {name: 'John2',age: '51'},
      //   {name: 'John3',age: '52'},
      // ],

      //
      year:0,
      month:0,
      weekName: ['일','월','화','수','목','금','토']
    }
  },
  created() {
    this.socket =io("http://106.245.87.140:1605"); //How to deal with Cross Origin Resource Sharing
    this.init()
  },

  mounted() {

    console.log('mounted',this.$store.state.count)
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
        console.log('odtId=', data[i].odtId ,data[i].cost,data[i].dTotal)
      }
      this.literLimit=data[0].literLimit
      this.pumpId=data[0].odtId
      this.cost=data[0].cost

      this.dTotal=data[0].dTotal
    })

    //동적으로변경되는 타임스탬프
    this.updateNow()
    setInterval(this.updateNow.bind(this),1000)

    this.socket.on('sales',data=>{
      // for(let i=0;i<data.length;i++) {
      //   console.log('sales',data[i].odtId,data[i].date)
      // }
      this.salesList=data
    })

    const myList=['a','b','c','d','e','f','g','h']
    let pageSize=3
    let totalPages=Math.ceil(myList.length/pageSize)
    console.log('totalPages=',totalPages)

    let currentPage=3

    let index=currentPage*pageSize
    if(index>totalPages) console.log('out of size!!')
    const visibleList=myList.slice(index,index+pageSize)
    for(let i=0;i<visibleList.length;i++)
      console.log(i+':'+visibleList[i])

    //객체 정렬
    const arr= [
      {name: 'ff', price: 100},
      {name: 'aa', price: 400},
      {name: 'bb', price: 300},
      {name: 'cc', price: 100},
    ]
    // arr.sort(function(a,b){
    //   return a.price-b.price;
    // })
    arr.sort(function(a,b){
      if(a.name < b.name) return 1
      if(a.name > b.name) return -1
      if(a.name === b.name) return 0
    })
    
    console.log('sort',arr)

  },

  methods: {
    myBell() {
      console.log('myBell')
      this.socket.emit('myBell','off')

    },
    test(s) {
      let modifier=1
      if(this.sortDir==true) modifier=-1;
      //this.currentSort='odtId'
      this.salesList.sort(function(a,b){
        if(s=='1') {
          if(a.odtId < b.odtId) return 1*modifier
          if(a.odtId > b.odtId) return -1*modifier
          if(a.odtId === b.odtId) return 0*modifier
        }
        else if(s=='2') {
          if(a.date < b.date) return 1*modifier
          if(a.date > b.date) return -1*modifier
          if(a.date === b.date) return 0*modifier
        }
        //return a.odtId-b.odtId //숫자로 소팅

      })
      this.sortDir=!this.sortDir
      //console.log('sort',this.salesList)
      this.showPage()


    },
    next() {
      console.log('next')
      this.currentPage++
      this.showPage()
    },
    prev() {
      this.currentPage--
      this.showPage()
    },
    getTotalPages() {
      return Math.ceil(this.salesList.length/this.pageSize)
    },
    showPage() {
      let index=this.currentPage*this.pageSize
      this.visibleSalesList=this.salesList.slice(index,index+this.pageSize)

    },
    init(param) {
      if(param) {
        this.year=param[0]
        this.month=param[1]
      }
      else {
        const date= new Date()
        this.year=date.getFullYear()
        this.month=date.getMonth()+1
        console.log('year',this.year,this.month)
        let r=this.getFirstDayLastDate(2022,1)
        console.log('요일,마지막일,전달마지막일',r)
        
      }
    },
    getFirstDayLastDate(year,month){
      const firstDay=new Date(year,month-1,1).getDay() //6 요일
      const lastDate=new Date(year,month,0).getDate()  //31

      let lastMonth=month-1
      if(month===1) {
        lastMonth=12
        year-=1
      }
      const prevLastDate=new Date(year,lastMonth,0).getDate()
      console.log('firstDay',this.weekName[firstDay],lastDate,prevLastDate)
      return [firstDay,lastDate,prevLastDate] //요일,마지막일자,전달의 마지막일자
    },
    myTest() {
      console.log('myTest')
      // for(let i=0;i<this.salesList.length;i++) {
      //   console.log('myTest',this.salesList[i].odtId, this.salesList[i].date)
      // }
      this.totalPages=Math.ceil(this.salesList/this.pageSize)
      console.log('totalPages:',this.totalPages)
      this.showPage()
      for(let i=0;i<this.visibleSalesList.length;i++) {
        console.log('myTest',this.visibleSalesList[i].odtId, this.visibleSalesList[i].date)
      }

      this.showSales=!this.showSales
      //console.log(this.salesList)
    },
    onOffSetup(arg) {
      if(arg=='CorpUse') this.CorpUse=!this.CorpUse
      else if(arg=='NozSWUse') this.NozSWUse=!this.NozSWUse
      else if(arg=='KeyNozswUse') this.KeyNozswUse=!this.KeyNozswUse
      else if(arg=='PresetLimit') this.PresetLimit=!this.PresetLimit
      else if(arg=='CodeCostUse') this.CodeCostUse=!this.CodeCostUse
      else if(arg=='ReceiptMode') this.ReceiptMode=!this.ReceiptMode
      else if(arg=='SKPosCost') this.SKPosCost=!this.SKPosCost
      
    },
    getDateTime() {
        let today=new Date()
        let year=today.getFullYear()
        let month=('0'+(today.getMonth()+1)).slice(-2)
        let day=(''+today.getDate()).slice(-2)
        let dateString=year+'-'+month+'-'+day
        let hours=today.getHours() < 10 ? '0'+today.getHours():today.getHours();
        let minutes=today.getMinutes() < 10 ? '0'+ today.getMinutes() :today.getMinutes() ;
        let seconds=today.getSeconds() < 10 ?'0'+today.getSeconds() : today.getSeconds() ;
        let hmsString=hours+':'+minutes+':'+seconds

        return dateString+' '+hmsString

    },

    updateNow() {
      this.now= this.getDateTime()
    },
    payment(arg) {
      if(arg=='card'){
        this.gridState=41
        this.paymentKind='신용카드결제'
      }
      else if(arg=='cardNsave') {
        this.gridState=41
        this.paymentKind='적립+신용'
      }
      else if(arg=='cash'){
        this.gridState=41
        this.paymentKind='현금영수증'
      }
      else if(arg=='point'){
        this.gridState=41
        this.paymentKind='포인트'
      }
      else if(arg=='cashNsave'){
        this.gridState=41
        this.paymentKind='현금영수증+적립'
      }
      else if(arg=='save') {
        this.gridState=41
        this.paymentKind='적립'
      }
      else if(arg=='complex') {
        this.gridState=41
        this.paymentKind='복합결제'
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
      this.socket.emit('sales','read')
    },
    normalSetup(arg) {
      console.log('normalSetup',arg.cost)
    },
    wtableAction(arg) {
      console.log('arg.type=',arg.type)
      console.log('arg.value=',arg.value)
      this.showSales=!this.showSales


    },
    inputResult(arg) {
      this.showInput=!this.showInput
      // console.log('inputResult',arg)

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
        if(this.isCharging==false) this.clickCharge(this.carNumber)
      }

    },
    inputClose() {
      this.showInput=!this.showInput
    },
    yesnoClose(arg) {
      this.showYesNo=!this.showYesNo
      if(arg==true) {
        console.log('yesno true')

      }
      else if(arg==false) {
        console.log('yesno false')
      }
    },
    backPayment() {
      console.log('backPayment')
      this.gridState=4
    },
    inputSetting(arg){
      console.log('inputDialog')
      this.showInput=!this.showInput
      this.inputPara=arg

    },
    yesNoSetting(arg) {
      this.showYesNo=!this.showYesNo
      this.yesnoPara=arg
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
      // console.log('click')
      if(this.isPay==true) this.gridState=4
      else {
        if(this.isCharging==true) this.gridState=3
        else this.gridState=1
      }
    },
    clickBack(arg,arg2='default') {
      if(arg2=="결제나가기") {
        this.isPay=false
        this.pLiter=0
        this.pAmount=0
        console.log('결제나가기[s,t]',this.gridState,this.dTotal)

      }
      else if(arg2=='결제완료'){
        this.isPay=false
        this.pAmount=0
        this.pLiter=0
        console.log('결제완료')
        console.log(` 
        호기:"${this.pumpId}" 거래일자:"${this.getDateTime()}" 코드번호:"${this.carNumber}" 
        수량:"${this.liter}" 단가:"${this.cost}" 금액:"${this.amount}" 거래구분:"${this.gridState}"   `)

        this.sales.odtId=this.pumpId
        this.sales.date=this.getDateTime()
        this.sales.carNumber=this.carNumber
        this.sales.liter=''+this.liter
        this.sales.cost=this.cost
        this.sales.amount=''+this.amount
        this.sales.class=''+this.gridState
        this.socket.emit('sales','write',this.sales)

        setTimeout(()=>{
          console.log('결제완료 타임아웃')
          this.gridState=0
        },1100)
      }
      else if(this.gridState==5) {
        this.odt.odtId=this.pumpId
        this.odt.cost=this.cost
        this.odt.literLimit=this.literLimit
        this.odt.dTotal=this.dTotal
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
      console.log('TM:',tm)
      console.log('total write',this.dTotal)
      this.odt.odtId=this.pumpId
      this.odt.cost=this.cost
      this.odt.literLimit=this.literLimit
      this.odt.dTotal=this.dTotal
      this.socket.emit('odt','write',this.odt)


    },
    clickCharge(arg='') {
      this.gridState=3
      if(arg)
        console.log('충전시작[carNumber]',this.carNumber)
      else {
        this.carNumber='090000'
        console.log('충전시작[pA,pL]',this.pAmount,this.pLiter)
      }
      if(this.isCharging==false) {
          this.isCharging=true
          if(this.pulseCount!=0) this.pulseCount=0
          //
          if(this.pLiter) this.pStop=this.pLiter-this.preStop
          else if(this.pAmount) {
            let liter=Math.round((this.pAmount*1000)/this.cost)
            this.pStop=liter-this.preStop
          }
          else this.pStop=this.literLimit*1000
          //
          timer1=setInterval(()=>{
              if(this.pulseCount>this.pStop) this.pulseCount+=1;
              else          this.pulseCount+=22;
              
              this.liter=this.pulseCount
              this.amount=Math.round((this.liter*this.cost)/1000)
              if(this.pLiter && this.liter>=this.pLiter) {
                this.clickChargeStop();
                return
              }
              else if(this.pAmount && this.amount >= this.pAmount){
                //this.amount=this.pAmount
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
    // cctest() {

    // },

    myTest001() {

      // return this.salesList.sort((a,b)=>{
      //   //  let modifier=1

      //   // if(a.odtId < b.odtId) return 1*modifier
      //   // if(a.odtId > b.odtId) return -1*modifier
      //   if(a.odtId === b.odtId) return 0
      //   else return 1
      // })
      return 0
    },
    chargingState() {
      if(this.isPay===true) return '결제대기'
      else return this.isCharging==true ? '충전중':'충전대기'

    },
    costDisplay() {
      return Number(this.cost).toLocaleString()
    },
    amountDisplay() {
      return Number(this.amount).toLocaleString()
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
        let day=(''+today.getDate()).slice(-2)

        let hours=(''+today.getHours())
        let minutes=(''+ today.getMinutes())
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
.mylist {
  display: inline-block;
  }
.btn01 {
  width: 80px;
  height: 30px;
  margin-right: 4px;
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
  /* background-color: #ddd; */
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
  /* background-color: blanchedalmond; */

}
.setup-side .item {
  border: 1px solid black;
  font-size: 8px;
  text-align: center;
}
.setup-body {
  width: 300px;
  /* background-color:#ddd; */
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
  /* background-color: gainsboro; */
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
  background-color: lightgray;
}
.mainmenu-body .item1 {
  border: 1px solid black;
  grid-column: 1/2;
  grid-row: 1/3;
  font-size: 12px;
  background-color: #ddd;


}
.mainmenu-body .item2 {
  border: 1px solid black;
  grid-column: 1/2;
  grid-row: 3/5;
  font-size: 12px;
  background-color: #ddd;

}
.mainmenu-body .item3 {
  border: 1px solid black;
  grid-column: 4/5;
  grid-row: 4/6;
  font-size: 12px;
  background-color: #ddd;

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
}
.charging-body {
  width: 300px;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-auto-rows: minmax(42px,auto);
  gap: 5px 10px;
  background-color: #ddd;
  
}
.charging-body .item1 {
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
  margin-top: 10px;
}
.charging-body .item1 .i2 {
  font-size: 34px;
  font-weight: bold;
}
.i2-1 {
  width: 140px;
  text-align: right;
  margin-right: 4px;
  display: inline-block;
}
.i2-2 {
  width: 58px;
  text-align: left;
  display: inline-block;
  font-size: 24px;
}
/* .charging-body .item1 .i3 {
  font-size: 16px;
  font-weight: bold;
} */
.i3-1 {
  width: 80px;
  text-align: right;
  margin-right: 4px;
  display: inline-block;
}
.i3-2 {
  width: 100px;
  text-align: left;
  display: inline-block;
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
  font-size: 16px;

}
.charge-side01 {
  text-align: center;

}
.charge-side02 {
  font-size: 8px;
  text-align: center;
}
.charge-side03{
  text-align: center;
}

.charge-body {
  margin: 10px;
  width: 300px;
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
  padding-top: 4px;
}
.charge-body .item2 {
  /* justify-content: center; */
  border: 1px solid black;
  background-color: #ddd;
  grid-column: 3/5;
  text-align: center;
  /* padding-top: 10px; */
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
  margin-top: 5px;
  margin-left: 10px;
  margin-right: 10px;
  height: 60px;
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
.first-head02 .item1 {
  font-size: 16px;
  /* border: 1px solid black; */
}
.first-head02 .item2 {
  padding-top: 8px;
  font-size: 8px;
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

}
.first-body04 .item{
  font-size: 22px;
  font-weight: bold;
  text-align: right;
}

.first-icon {
  border: 1px solid black;
  border-radius: 4px;
  padding: 4px 4px;
  margin-top: 1px;
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
  /* display: flex;
  justify-content: center;
  align-items: center; */
}
.payment-body .item1 {
  margin-top: 20px;
  margin-left: 110px;
  text-align: left;
  font-size: 8px;
}
.payment-body .item2 {
  margin-top: 40px;
  text-align: center;
  font-size: 16px;
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
  width: 40px;
  /* font-size: 16px; */
}
.pay-side .pay-side02 {
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
.a2-1 {
  width: 106px;
  margin-right: 4px;
  text-align: right;
  display: inline-block;
}
.a2-2 {
  width: 32px;
  font-size: 14px;
  font-weight: bold;
  text-align: left;
  
  display: inline-block;
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



table,td,th {
  padding: 4px;
  /* border: 1px solid #ddd */
    border: 1px solid #ddd

}
td,th {
  /* border-bottom: 1px solid #ddd; */
}
.customers {
  width: 100%;
  border-collapse: collapse;
  /* border: 1px solid black; */
}
.customers th {
  text-align: center;
}
tr:nth-child(even){
  background-color: #f2f2f2;
}
tr:hover{
  background-color: #ddd;
}
</style>