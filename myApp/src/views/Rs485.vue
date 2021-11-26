<template>
    <div class="rs485">
    <h2>How to Re-entering BootLoader Menu in dnw.exe </h2>

    <ul>
      <li>통신보드상에서 해당호기의 6핀 커넥터의 5번과 6번을 쇼트 시킨다(부트모드활성화).</li>
      <li>또는 14핀 커넥터의 8번과 12번을 쇼트시킨다(위와 동일라인)</li>
      <br>
      <li>위와 같이 강제로 쇼트시킨상태에서 메인보드전원을 오프후 온한다(전원 리셋)</li>
      <li>메인보드를 리셋시키는 다른 방법은 핀셋으로 pin11(리셋핀) and pin12(그라운드) 쇼트시켜도 된다(CPU 리셋)</li>
    </ul>
    <img src="rs485.jpg" alt="" width="400" >
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