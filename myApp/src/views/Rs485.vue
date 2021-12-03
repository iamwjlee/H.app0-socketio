<template>
    <div class="rs485">
    <h2>How to Re-entering BootLoader Menu in dnw.exe </h2>

    <ul>
      <li>통신보드상에서 해당호기의 6핀 커넥터의 5번과 6번을 쇼트 시킨다(부트모드활성화).</li>
      <li>또는 14핀 커넥터의 8번과 12번을 쇼트시킨다(위와 동일라인)</li>
      <br>
      <li>위와 같이 강제로 쇼트시킨상태에서 메인보드전원을 오프후 온한다(전원 리셋)</li>
      <li>메인보드를 리셋시키는 다른 방법</li>
      <ul>
        <li><b>14핀 커넥터</b>의 경우는   핀11(리셋핀) 과 핀12(그라운드) 쇼트하면 리셋된다</li>
        <li><b>6핀 컨넥터</b> 의 경우는 4번핀과 6번핀 쇼트하면 리셋된다</li>
        <li><em>6핀컨넥터의 구조:  4번핀(리셋) 5번핀(부트) 6번핀(그라운드)</em>  </li>
      </ul>
      <li><b>결론:</b> 6핀커넥터의 5,6번 쇼트된상태에서 4번핀을 6번핀에 쇼트시키고 분리하면 DNW의 아래와 같은 부트로더메뉴로 재진입된다</li>
    </ul>
    <div style="text-align: center">
    <img src="rs485.jpg" alt="" width="400" >
    </div>
    <hr>
    <h2>DNW download menu</h2>
    <div>
        <p>===================================</p>    
        <p>=    Flash Write [firmware Update] - REV-F[08/05/21]    =</p>    
        <p>===================================</p>    
        <p></p>    
        <p>     1. Flash Write     2. Running       3. Reset </p>               
        <p> menu select ?</p>     
    </div>
    <hr>

    </div>
</template>

<style scoped>

</style>