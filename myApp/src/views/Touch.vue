<template>
  <div v-if="viewEnable" class="touch">

    <!-- <button @click="toggleModal" class="button-c">Open</button>
    <transition name="fade2">
        <div  class="modal">
            <p>
                <button @click="toggleModal">Close</button>
            </p>

        </div>
    </transition> -->
    <!-- <div v-if="viewEnable">
    </div>
    <div v-else class="my-login">
      <div @click="hello" class="aa">Hello </div>
      <input class="bb" type="text" v-model="inputText">
    </div>

    <br> -->



    <div style="text-align: center">
    <a href="#one">터치보드 원도10설치후^</a> <br>
    <a href="#two">AryaStark 디렉토리구조</a> <br>
    <a href="#three">JPOS5000(일체형) uSD 갱신및 기물추가</a> <br>
    </div>
    <br>
    <br>
    <div id="one">
    <h2>터치보드 원도10설치후</h2>
    <ol>
      <li>원도우10 설치후에 c: 드라이브에 AryaStark 폴더를 카피한다</li>
      <li>AryaStark 폴더를 공유디렉토리로 만든다.</li>
      <ul>
        <li>폴더공유에서 everyone추가하고  네트워그및공유센터에서 암호보호공유끄기로 설정한다.</li>
      </ul>
      <li>c:/AryaStark/odt/arya.bat를 바탕화면으로 복사또는 바로가기를 만든다.</li>
      <li>AryaStark/odt/bin/uac_disable.bat를 관리자 권한으로 실행</li>
      <ul>
        <li>동영상 실행을 위해서 (게시자를 알수없는 이 앱이 디바이스를 변경하도록 허용하기 위해)</li>
      </ul>
      <li>설정=> 시스템 ->전원및절전 -> 없슴 -> 추가전원설정 ->균형조정(권장) -> 설정변경</li>
      <ul>
        <li>디스플레이 끄기: 해당없슴</li>
        <li>고급전원관리옵션 설정변경 ->하드디스끄기-> 사용안함</li>
      </ul>
      <li>설정=> 시스템->디스플레이-> 밝기변경 60%</li>
      <li>원도우10 최적화및 업데이트방지 셋팅이 필요</li>
      <ul>
        <li>설정->Windows 업데이트누르면 <span style="color:red; font-size:12px">*일부설정은 조직에서 관리합니다</span> 확인해야  </li>
        <li>services.msc -> windows update :: 수동->사용안함으로 셋팅</li>
        <li>gpedit.msc  -> 관리템플릿->windows 구성요소 ->windows 업데이트->자동업데이트구성 -> 사용안함</li>
        <li>gpedit.msc  -> 관리템플릿->시스템->인터넷통신관리 ->인터넷통신설정->모든 windows 업데이트기능에 액세스안함 ->사용</li>
        <li>내 PC 오른쪽마우스(손가락으로 길게 눌러) ->고급 시스템 속성 ->고급(탭) -> 성능(설정) -> 고급(탭) -> 가상메모리(변경)</li>
          <ul>
            <li>모든 드라이브에 대한 페이징 파일 크기 자동관리(체크해제) </li>
            <li>페이징 파일없음(체크)</li>
          </ul>
      </ul>
      <li>최신터치SW로 업데이트 한다(mainU.exe를 AryaStark/odt/release 에 복사한다)</li>
      <li>부팅메뉴 Advanced->Miscellaneous Configuration->Restore AC Power Loss ->Power On 으로 셋팅</li>
      <li>odt 실행화일인 main.exe를 악성코드로 오인하여 windows가 이파일을 지우는 경우가 있슴</li>
      <ul>
        <li>설정->업데이트및보안->Windows 보안->바이러스및 위협방지->설정관리 -> 제외추가또는 제거->제외사항추가 ->C:\AryaStark 폴더를 제외항목에 추가한다!</li>
      </ul>
    </ol>
    </div>

    <br>
    <div id="two">
    <h2>AryaStark 디렉토리구조</h2>
    <ul>
      <li>\ezhelp : 원격</li>
      <li>\MainBdupdate : </li>
      <ul>
        <li>인터페이스 보드 FW(J5000Buffer.bin)</li>
        <li>JPOS3000-Kiosk FW(JPOS3000_NOSD-xxxxxx.bin/JPOS3000_SD-xxxxxx.bin)</li>
        <li>JPOS5000 일체형 메인 유량계보드 FW(flowmeter.bin)</li>
      </ul>
      <li>\MinGW : c++ 컴파일러</li>
      <li>\mv : 비디오플레이어 실행파일</li>
      <li>\odt : 터치 마더보드 프로그램</li>
      <li>\SDL2-2.0.7 : 그래픽라이브러리</li>
      <li>\video : 동영상파일</li>
      <li>\PrgUploader : 원격다운로드를 위한 폴더::미사용</li>
      <ul>
        <li>Client.exe를 실행시키면 사무실컴퓨터(192.168.0.79)에서 파일을 읽어오고 터치SW를 재실행한다.</li>
      </ul>
    </ul>
    </div>

    <br>
    <div id="three">
    <h2>JPOS5000(일체형) uSD 갱신및 기물추가</h2> 
    <ol>
      <li>JPOS5000신형의 uSD카드 인증서등록</li>
      <ul>
        <li>JPOS5000신형인 경우는 기존에 사용되던 인증서 대신 아래의 파일을 uSD카드에 읽혀서 갱신해야 합니다(JuUGi_Flash.exe사용하여) 	</li>
        <li>[2021_05_31_19_09_11][[KTC01_LPG_JWData_010031_900101-KTC01_LPG_JWData_010031_900101]]certs.dat </li>
        <li>\\jposnas\AS\프로그램_KIOSK\JPOS5000 uSD Card KTC인증서 디렉토리에 있습니다.</li>
      </ul>
      <li>http://otp.ktc.re.kr/ 사이트에서 기물추가시</li>
      <ul>
        <li>JPOS5000신형인경우는 펌웨어 선택란에서 "장위데이터 LPG v.010031"을 사용해야 합니다.</li>
        <li>기존의 JPOS3000인경우는 펌웨어 선택란에서 "장위데이터 LPG v.010016"을 사용해야 합니다</li>
      </ul>
      <li>나머지는 기존(JPOS3000)과 동일합니다.</li>
    </ol>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'Touch',
  data() {
    return {
      // isOpen:false,
      viewEnable: false,

    }
  },
  mounted() {
    console.log('vuex:',this.$store.state.count)
    if(this.$store.state.count==1) this.viewEnable=true;
    else this.viewEnable=false

  },
  methods: {
    // toggleModal() {
    //     this.isOpen=!this.isOpen
    // },

  }
}
</script>

<style scoped>
/* .button-c {
  width: 5em;
  height: 2em;
  margin: 0.5em;
  border-radius: 5px;
  background: linear-gradient(to right, #16c0b0, #84cf6a);
  font-size: 1em;
  color: white;
  border: none;
  outline: none;
  cursor: pointer;
}

.modal {
  width: 250px;
  height: 200px;
  padding: 10px;
  margin: 0 auto;
  margin-top: 20px;
  border-radius: 2%;
  background-color: #e0e0e0;
}


.fade2-enter {
    opacity: 0;
}
.fade2-enter-active,
.fade2-leave-active {
    transition: opacity 0.5s ease-out;
}
.fade2-leave-to {
    opacity: 0;
} */

</style>