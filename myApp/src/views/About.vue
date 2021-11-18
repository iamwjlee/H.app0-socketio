<template>
  <div class="about">
    <h2>프로젝트 디렉토리</h2>
    <h4>J.Snow</h4>
    <hr>
    <div class="kanami"> 
    <img src="kanami.png" alt="" width="400">
    </div>

    <hr>
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
            <li> Node Server for link test</li>
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




  </div>
</template>

<style scoped>
h2,h4 {
  text-align: center;
  margin-top: 0px;
  margin-bottom: 0px;
}
.kanami {
    text-align: center;
}
</style>
