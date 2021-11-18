<template>
    <div class="rs485">
    <h2>How to Re-entering BootLoader Menu in dnw.exe </h2>

    <ul>
      <li>short pin5 & pin6 on the 6pin housing Connector in 485 b'd</li>
      <li>short pin8(부트핀) & pin12 on the 14pin housing Connector in 485 b'd</li>
      <li>keep short two pins and then power reset</li>
      <li>power reset by pin11(리셋핀) and pin12(그라운드) short</li>
    </ul>
    <img src="rs485.jpg" alt="" width="400" >
    <hr>
    <h2>dnw download menu</h2>
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