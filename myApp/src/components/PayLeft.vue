<template>
<div class="pay-side">
    <div class="pay-side01">SK</div>
    <div>
      <div class="pay-side02">설정</div>
      <div class="pay-side02"><i class="fas fa-arrow-down"></i></div>
      <div class="pay-side02">충전중</div>
      <div class="pay-side02"><i class="fas fa-arrow-down"></i></div>
      <div class="pay-side02"> <b>결제</b> </div>
    </div>
    <div @click="$emit('exit',false)" class="pay-side03">
        <div> <i class="fas fa-arrow-left fa-1x"></i> </div>
        <div class="charge-side02">뒤로</div>
    </div>
</div>

</template>




<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<style scoped>
.pay-side {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 40px;
}

.pay-side .pay-side02 {
  font-size: 8px;
  color: black;
  text-align: center;
}
.pay-side .pay-side01 {
  margin-top: 10px;
  text-align: center;
}
.pay-side .pay-side03 {
  margin-bottom: 10px;
  text-align: center;
}


</style>