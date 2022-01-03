<template>
<div>
<div class="wrapper">
  <div class="header"></div>
  <div class="leftCol">
    <div>LeftCol1</div>
    <div>LeftCol2</div>
    <div>LeftCol3</div>
    <div>LeftCol4</div>

  </div>
  <div class="rightCol">RightCol</div>
  <div class="midTop">midTop</div>
  <div class="midBottom">midBottom</div>
  <div class="footer"> <i class="fas fa-cat"></i> Jang wee data system co.,ltd  02-911-1002</div>
</div>
<br>
<div class="mainWrapper">
  <div class="topBorder">1 </div>
  <div class="leftBorder">2</div>
  <div class="rightBorder">3</div>
  <div class="bottomBorder">4</div>
  <div class="body1">b1</div>
  <div class="body2">
            <div class="j-wrapper">
                <div class="j-item">충전금액</div>
                <div class="j-item">11</div>
                <div class="j-item">원</div>            
                <div class="j-item">충전량</div>
                <div class="j-item">12</div>
                <div class="j-item">L</div>

                <div class="j-item">단가</div>
                <div class="j-item">1000</div>
                <div class="j-item">원</div>

            </div>


  </div>
  

</div>



<br> <br>
<p class="comment"> frame(grid)=side(grid)+body(grid)</p>
<div class="wrapper1">
    <div class="menuSideBar">

        <div class="wrapper11">
            <div class="side1 side">Soil</div>
            <div class="side2"></div>
            <div class="side3"></div>
            <div class="side4"></div>
            <div class="side5"></div>
            <div class="side6 side"> 
                <i class="fas fa-cog fa-1x">
                    <!-- <div  class="menuSide"> 설정 </div> -->
                </i>
            </div>
            <div class="side7 side">
                <i class="fas fa-arrow-left fa-1x">
                    <!-- <div  class="menuSide"> 취소  </div> -->
                </i> 
                
            </div>

        </div>

    </div>


    <div class="inquiry">조회</div>
    <div class="stationPoint">충전소포인트</div>
    <div class="reReceipt">연수증재발행</div>
    <div class="deadLineA">교대마감</div>

    <!-- <div class="feeding">feeding</div> -->
    <!-- <div class=""></div> -->
    <div class="stationWash">충전소세차권</div>
    <div class="receipt1">직전영수증</div>
    <div class="deadLineGroup">그룹마감</div>

    <div class="feeding">용지출력</div>
    <!-- <div class=""></div> -->
    <div class="receiptA">금액영수증</div>
    <div class="deadLineDay">일마감</div>

    <!-- <div class=""></div>
    <div class=""></div> -->
    <div class="receiptL">리터영수증</div>
    <div class="saveCard">카드적립조회</div>

    <div class="cancel">직전취소</div>
    <div class="carWash">세차권발행</div>


</div>


</div>

</template>


<style scoped>
 .j-wrapper {
    width: 240px;
    height: 140px;
    display: grid;
    background-color: wheat;
    /* grid-template-columns: repeat(2,100px); */
    grid-template-columns: 100px 70px 20px;
    /* grid-template-rows: repeat(3,minmax(20px,auto)); */

    grid-template-rows: repeat(3,40px);
    align-content: center; /*y*/
    justify-content: center; /*x*/
    column-gap: 3px;
    row-gap: 3px;
    
    margin-left: 4%;
}
.j-wrapper .j-item {
    width: 100%;
    height: 100%;
    border: 1px solid blue;
    text-align: right;
    align-items: center;
    
    
    font-size: 21px;
    font-weight: bold;
    color: rgb(7, 141, 128);
/* align-content: center; */
}

.mainWrapper {
  display: grid;
  grid-template-columns: 1fr 16fr 1fr;
  grid-template-rows: 15px 60px 170px 15px;
  grid-template-areas:
  "topBorder topBorder topBorder"
  "leftBorder body1 rightBorder"
  "leftBorder body2  rightBorder"
  "bottomBorder bottomBorder bottomBorder";
  
  grid-gap: 5px;
 }
  .body1{
   grid-area: body1;
   background-color: rgb(144, 195, 193) ;
 }
  .body2{
   grid-area: body2;
   background-color: rgb(144, 195, 193) ;
 }

 .topBorder{
   grid-area: topBorder;
   background-color: LightSeaGreen ;
 }
 .leftBorder{
   grid-area: leftBorder;
   background-color: LightSeaGreen ;
 }

 .rightBorder{
   grid-area: rightBorder;
   background-color: LightSeaGreen ;
 }
 .bottomBorder{
   grid-area: bottomBorder;
   background-color: LightSeaGreen ;
 }

  /* "feeding stationWash receipt1 deadLineGroup"
  "cancel receipt1 . deadLineGroup";


  
  
  */
.menuSide {
    font-size: 8px;

}
.wrapper11 {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 30px 30px 30px 30px 30px 30px 30px;
   grid-gap: 8px;
  grid-template-areas:
    "side1"
    "side2"
    "side3"
    "side4"
    "side5"
    "side6"
    "side7";
}
.wrapper1 {
  display: grid;
  grid-template-columns: 1fr 2fr 2fr 2fr 2fr;
  grid-template-rows: 50px 50px 50px 50px 50px;
  grid-template-areas:
  "menuSideBar inquiry stationPoint reReceipt deadLineA"
  "menuSideBar inquiry stationWash receipt1 deadLineGroup"
  "menuSideBar feeding .           receiptA deadLineDay"
  "menuSideBar feeding .           receiptL saveCard"
  "menuSideBar cancel . carWash saveCard";
  
  grid-gap: 5px;
 }

.wrapper {
  display: grid;
  grid-template-columns: 1fr 4fr 4fr 1fr;
  grid-template-rows: 50px 100px 100px 30px;
  grid-template-areas:
  "header header header header"
  "leftCol midTop midTop rightCol"
  "leftCol midBottom midBottom rightCol"
  "footer footer footer footer";
  grid-gap: 5px;
 }
.side1 {
   grid-area: side1;
   border: 1px solid white;
   color: rgb(233, 170, 170);
}
.side2 {
   grid-area: side2;
    border: 1px solid white;

   background-color: rgb(8, 80, 76) ;
   color: rgb(233, 170, 170);
}
.side3 {
   grid-area: side3;
   background-color: rgb(37, 53, 126) ;
   color: rgb(233, 170, 170);
    border: 1px solid white;

}
.side4 {
   grid-area: side4;
   background-color: rgb(37, 126, 121) ;
   color: rgb(233, 170, 170);
   border: 1px solid white;

}
.side5 {
   grid-area: side5;
   background-color: rgb(37, 73, 131) ;
   color: rgb(233, 170, 170);
      border: 1px solid white;

}
.side6 {
   grid-area: side6;
   background-color: rgb(37, 73, 131) ;
   color: rgb(233, 170, 170);
      border: 1px solid white;

}
.side7 {
   grid-area: side7;
   background-color: rgb(37, 73, 131) ;
   color: rgb(233, 170, 170);
      border: 1px solid white;

}

.side {
    text-align: center;
}
.menuSideBar {
   grid-area: menuSideBar;
   background-color: rgb(37, 126, 121) ;
   color: whitesmoke;
 }

.inquiry {
   grid-area: inquiry;
   background-color: LightSeaGreen ;
 }
.stationPoint {
   grid-area: stationPoint;
   background-color: orange ;
 }
.reReceipt {
   grid-area: reReceipt;
   background-color: LightSeaGreen ;
 }
.deadLineA {
   grid-area: deadLineA;
   background-color: orange ;
 }
/*----------------*/
.stationWash {
   grid-area: stationWash;
   background-color: orange ;
 }
.receipt1 {
   grid-area: receipt1;
   background-color: LightSeaGreen ;
 }
.deadLineGroup {
   grid-area: deadLineGroup;
   background-color: orange ;
 }
 /*----------------*/
 .feeding {
   grid-area: feeding;
   background-color: orange ;
 }
.receiptA {
   grid-area: receiptA;
   background-color: LightSeaGreen ;
 }

.deadLineDay {
   grid-area: deadLineDay;
   background-color: orange ;
 }
 /*----------------*/
.receiptL {
   grid-area: receiptL;
   background-color: LightSeaGreen ;
 }

.saveCard {
   grid-area: saveCard;
   background-color: orange ;
 }

 /*----------------*/
.cancel {
   grid-area: cancel;
   background-color: LightSeaGreen ;
 }

.carWash {
   grid-area: carWash;
   background-color: orange ;
 }


.header{
   grid-area: header;
   background-color: LightSeaGreen ;
 }
  
 .leftCol{
   grid-area: leftCol;
   background-color: orange;
 }
  
 .rightCol{
   grid-area: rightCol;
   background-color: lightblue;
 }
  
  .midTop{
   grid-area: midTop;
   background-color: lightgrey;
 }
  
 .midBottom{
   grid-area: midBottom;
   background-color: pink;
 }
  
 .footer{
   grid-area: footer;
   background-color: lightgreen;
   text-align: center;
 }

 .comment {
    text-align: right; 
    margin-bottom: 0px; 
    margin-left: 50px; 
    font-size:8px;
}

</style>