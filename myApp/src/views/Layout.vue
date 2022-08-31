<template>
    <!-- <div v-if="viewEnable"> -->
    <div>
        <i class="fa-solid fa-arrow-rotate-left"></i>
        <i class="fas fa-times"></i>
        <i class="fas fa-arrow-right"></i>
        <i class="fas fa-bars"></i>
        <i class="fab fa-cc-visa"></i>
    <div class="comment">
        <p>float inline block-> Flex</p>
        <p>icon -> Scalable Vector Graphics FontAwesome version5 support SVG</p>
        <p>npm i --save-dev @fortawesome/fontawesome-svg-core</p>
        <p>npm i --save-dev @fortawesome/free-solid-svg-icons</p>
        <p>npm i --save-dev @fortawesome/vue-fontawesome</p>
        <p>npm install --save @/fontAwesomeIcon.js</p>
        <p>npm install error happen so use link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" 
        </p>
    </div>
        

    <br>
    <br>


    <br>
    <a @click="aboutClick" class="aboutLayout" href="#">About Layout</a>
    <div v-if="about" class="comment">
        <p>props는 property, parents property can be send to child by v-binding props is read only</p>
        <p>여러컴포넌트를 사용할때는 vuex를 셋팅하고 정보를 store에 저장하지만 몇개의 컴포넌트를 사용하는 경우는
            굳이 store에 넣을 필요없이 해당컴포넌트의 data에 정의하고 props로 자식에게 데이터를 전달, 자식은 부모에게 이벤트발생
        </p>
        <p>부모는 :imageInfoProp="imageInfo 이런식으로 자식에게 전달, 자식은 해당Props가 등록되어 있어야 한다
            한프롭을 통해 데이터(오브젝트)를 전달한다</p>
    </div>
    <a @click="gridClick" class="aboutLayout" href="#">Grid Layout</a>
    <div v-if="gridLayout">

        <br>
        <!-- <button @click="startClick">start</button> <button @click="stopClick">stop</button>  -->

        <div v-if="menuStatus==0">
            <div @click="menuClick" class="j-state">
                <p>메뉴</p>
            </div>

            <div class="j-state" >
                <!-- <p> {{ isCharging==true ? '충전중' :'충전대기' }}</p> -->
                <p> {{ checkIfCharging}} {{yyyMMdd}}</p>
                
            </div>
            <div class="j-id no-drag" @click="startClick()"> 3호기 </div>

            <div class="j-wrapper">
                <div class="j-item">충전금액</div>
                <div class="j-item">{{amount}}</div>
                <div class="j-item">원</div>            
                <div class="j-item">충전량</div>
                <div class="j-item">{{liter}}</div>
                <div class="j-item">L</div>

                <div class="j-item">단가</div>
                <div class="j-item">{{cost}}</div>
                <div class="j-item">원</div>

            </div>

        </div>
        <div v-if="menuStatus==1">

            <div class="flex-container">
                <div class="item">
                    <br> 
                    <i class="fab fa-cc-visa fa-2x"></i>
                        
                    <br>일반설정 <br>
                    <i class="fas fa-gas-pump fa-2x"></i>
                    
                    <br>주유기설정 <br>
                    <i class="fas fa-print fa-2x"></i>
                    
                    <br>프린터설정 <br>
                    <i class="fas fa-key fa-2x"></i>
                    
                    <br>보안설정<br> <br>
                    <i @click="menuClick" class="fas fa-arrow-left fa-2x"></i>
                    <br>돌아가기<br>
                </div>
                <div class="item2">
                    <br>
                    <!-- <div @click="menuClick" class="j-state">
                        <p>메뉴나가기</p>
                    </div> -->
                    <div class="j-menu">
                    <div class="j-item">1</div>
                    <div class="j-item">2</div>
                    <div class="j-item">3</div>
                    <div class="j-item">4</div>
                    <div class="j-item">5</div>
                    <div class="j-item">6</div>
                    <div class="j-item">7</div>
                    <div class="j-item">8</div>
                    <div class="j-item">9</div>
                    <div class="j-item">10</div>
                    <div class="j-item">11</div>
                    <div class="j-item">12</div>
                    <div class="j-item">13</div>
                    <div class="j-item">14</div>
                    <div class="j-item">15</div>
                    <div class="j-item">16</div>
                    <div class="j-item">17</div>
                    <div class="j-item">18</div>
                    <div class="j-item">19</div>
                    <div class="j-item">20</div>
                    </div>
                </div>



            </div>


        </div>



        <!-- <div class="liter">
        <div>충전금액</div> <div>{{amount}}</div>  
        </div>

        <div class="liter">
        <div>충전량</div> <div>{{liter}}</div> 
        </div>
        <div class="liter">
        <div>단가</div> <div>{{cost}}</div> 
        </div> -->

        <!-- <p>bootstrap's grid system built with flexbox and is fully responsive thanks to a twelve column system</p> -->
    </div>

    <br>

    <!-- <Toast v-if="showToast"    /> -->
    <!-- <My text="Toast" img="../assets/logo.png" img2="logo.png"/> -->
    <!-- <My  v-if="showToast" text="Toast" :imagePath="imageName"/> -->
    <My  v-if="showToast" text="Toast" :imageInfoProp="imageInfo" @close="toastClose" />    
    <!-- <h5 class="comment">여기에 숨겨진 컴포넌트가 있다 반복재사용가능한 :imageInfoProp="imageInfo 
        이런식으로 자식컴포넌트에 Props를 등록하고 프롭을 통해 데이터(오브젝트)를 전달한다</h5> -->
    <div class="container" >

        <div class="row" >

            <h6>Soil 일체형 메인메뉴</h6>            
            <div class="col">

                <img  @click="selectPic" src="../assets/menu.png" alt="" width="400" height="250">                

            </div>
            <div v-if="selected" class="col bg-light text-dark">
                <p class="item"> <b @click="inquirySales(1)">조회</b> 판매데이터내역(인덱스,차량번호,전체회전량,금액,리터,날짜) </p>
                <p class="item"> <b>용지출력</b> 프린터 라인피딩명령</p>
                <p class="item"> <b>결제취소</b> 직전 신용거래에 한하여 취소가 가능한다</p>
                <p class="item"> <b>충전소고객포인트 - 조회</b> 충전소포인트조회.</p>
                <p class="item"> <b>충전소고객포인트 - 세차권</b>충전소포인트로 세차권발행</p>
                <p class="item"> <b>영수증 - 재발행</b>직전영수증 재발행</p>
                <p class="item"> <b>영수증 - 직전</b>TBD</p>
                <p class="item"> <b>영수증 - 금액</b>임의 금액으로 영수증 발행</p>
                <p class="item"> <b>영수증 - 리터</b>TBD</p>
                <p class="item"> <b>세차권발행</b>충전소자체의 세차권발행</p>
                <p class="item"> <b>마감 - 교대</b>사무실에서 원격으로 교대 마감한다.</p>
                <p class="item"> <b>마감 - 그룹</b>사무실에서 원격으로 그룹 마감한다.</p>
                <p class="item"> <b>마감 - 일일</b>사무실에서 원격으로 일마감한다.</p>
                <p class="item"> <b>카드적립조회</b>포인트카드의 적립금액 조회</p>
                <p class="item"> <b>좌측 설정아이콘</b>설정메뉴진입</p>

            </div>

        </div>
        <br>

        <div class="row" >

            <h6>Soil 일체형 일반설정 첫페이지</h6>            
            <div class="col">

                <img  @click="selectPic" src="../assets/gs-1.png" alt="" width="400" height="250">                

            </div>
            <div v-if="selected" class="col bg-light text-dark">
                <p class="item"> <b @click="inquirySales(2)">단가설정</b> 호기별로도 단가를 설정할 수 있다</p>
                <p class="item"> <b>POS카드ID</b> 사업장에서 차량관리를 위한 충전소고유번호</p>
                <p class="item"> <b>프리셋금액제한</b> 리터제한값이상으로는 주유설정이 안되게 한다</p>
                <p class="item"> <b>거래처별단가사용</b>최대4개의 거래처에 대해 개별단가를 적용할 수 있다.</p>
                <p class="item"> <b>호기설정</b>노즐번호(호기)를 설정한다 </p>
                <p class="item"> <b>법인승인</b>10번이상의 차량번호에 대해 승인된 차량그룹만 자동 충전하겠다</p>
                <p class="item"> <b>노즐스위치사용</b>노즐스위치사용여부</p>
                <p class="item"> <b>터치노즐사용</b>터치화면상의 충전시작버튼사용여부</p>
                <p class="item"> <b>디폴트코드</b>차량번호(4자리)외에 그룹번호 2자리</p>
                <p class="item"> <b>영수증옵션</b>TBD</p>
                <p class="item"> <b>POS단가설정</b>TBD</p>

            </div>

        </div>
        <br>
        <div class="row">
            <h6>Soil 일체형 일반설정 둘째페이지</h6>

            <div class="col">
                <img  @click="selectPic" src="../assets/gs-2.png" alt="" width="400" height="250">                
            </div>
            <div class="col bg-light text-dark">
                <p class="item"> <b @click="inquirySales(3)">uSD정보확인</b>uSD id와 기물번호표시</p>
                <p class="item"> <b>총회전량</b> 전체누적회전량/일일회전량표시 </p>
                <p class="item"> <b>디스플레이 OFF</b> 검은 화면으로 표시 </p>
                <p class="item"> <b>패스워드변경</b> 비밀번호변경 </p>
                <p class="item"> <b>리더기무결성확인</b> 카드리더기 무결성 여부 확인 </p>
                <p class="item"> <b>무결성재실행</b> 카드리더기 무결성 체크 재실행</p>

            </div>

        </div>
        <br>
        <div class="row">
            <h6>Soil 일체형 프린터설정</h6>

            <div class="col">
                <img  @click="selectPic" src="../assets/pm15.png" alt="#" width="400" height="250">                
            </div>
            <div class="col bg-light text-dark">
                <p class="item"> <b>소비자용발급</b>소비자용 영스증 발급(YES/NO)</p>
                <p class="item"> <b>가맹점용발급</b>가맹점용 보관용 영스증 발급(YES/NO) </p>
                <p class="item"> <b>KBG발급</b> YES/NO 없이 영수증출력하고 한장또는두장출력여부는 jpos.ini수정해야    </p>
                <p class="item"> <b>인쇄농도</b>인쇄농도설정(0~25) 설정후 아리아 재실행해야함</p>
                <p class="item"> <b>문자강조</b> TBD </p>
                <p class="item"> <b>헤드분할</b> TBD </p>
                <p class="item"> <b>커터기사용</b> TBD </p>
                <p class="item"> <b>백피드</b> TBD </p>
                <p class="item"> <b>설정값인쇄</b> 설정값을 인쇄</p>
                <p class="item"> <b>테스트인쇄</b> 테스트인쇄</p>

            </div>

        </div>
        <br>

        <div class="row">
            <h6>Soil 일체형 포스설정</h6>

            <div class="col">
                <img  @click="selectPic" src="../assets/pos.png" alt="#" width="400" height="250">                
            </div>
            <div class="col bg-light text-dark">
                <p class="item"> <b>IP설정</b>사무실통신프로그램 IP주소</p>
                <p class="item"> <b>정유사설정</b>SK-GAS또는 S-OIL선택 </p>
                <p class="item"> <b>밴사 설정</b> 밴사설정[NICE,KIS,KICC,KSNT,FDIK,SMTR]  </p>
                <p class="item"> <b>판매데이터인덱스변경</b>미전송건수를 초기화</p>
                <p class="item"> <b>키다운로드</b> 나이스밴사만 적용 </p>

            </div>

        </div>
        <br>

        <div class="row">
            <h6>Soil 일체형 충전기설정</h6>

            <div class="col">
                <img  @click="selectPic" src="../assets/dispenser.png" alt="#" width="400" height="250">                
            </div>
            <div class="col bg-light text-dark">
                <p class="item"> <b>프리스탑</b>설정리터 500ml이전에 큰밸브를 닫는다</p>
                <p class="item"> <b>리터표시시작점</b>셋팅값*200ml 이전의 리터는 디스플레이하지 않는다. </p>
                <p class="item"> <b>디스펜서모드</b> 일체형과 통신형으로 구분된다 </p>
                <p class="item"> <b>저속제한</b></p>
                <p class="item"> <b>고속제한</b></p>
                <p class="item"> <b>대류온타임</b></p>
                <p class="item"> <b>소류온타임</b> </p>
                <p class="item"> <b>최대충전량</b> </p>
                <p class="item"> <b>홀센서사용</b> </p>
                <p class="item"> <b>유량계재부팅</b>유량계메인보드SW리셋 </p>

            </div>

        </div>
        <br>

        <div class="row">
            <h6>Soil 일체형 결제화면</h6>
            <div class="col">
                <img  @click="selectPic" src="../assets/pay.png" alt="" width="400" height="250">                

            </div>
            <div class="col bg-light text-dark">
                <p class="item"> <b>카드결제</b> 신용카드 단독 결제</p>
                <p class="item"> <b>카드결제+포인트적립</b> 신용카드와 적립카드로 결제</p>
                <p class="item"> <b>현금영수증</b> 현금으로 결제시 현금영수증발행을 소비자(핸드폰번호),사업자(사업자등록변호)선택하여 발행한다. 국세청 현금영수증카드도 사용할 수 있다.</p>
                <p class="item"> <b>포인트사용</b> 충전금액전체를 적립카드의 포인트로 결제 한다. 
                 카드 비밀번호4자리를 입력해야 한다</p>
                <p class="item"> <b>현금영수증+포인트적립</b> SOIL에서는 지원되지 않는다</p>
                <p class="item"> <b>포인트적립</b> 현금결제하고 적립카드에 포인트 적립만 한다</p>
                <p class="item"> <b>복합결제</b> 쿠폰,포인트,현금,신용카드를 혼용하여 결제 한다</p>


            </div>
        </div>
        <br>
        <div class="row">
            <h6>Soil 일체형 복합결제 화면</h6>
            <div class="col">
                <img  @click="selectPic" src="../assets/cpay.png" alt="" width="400" height="250">                

            </div>
            <div class="col bg-light text-dark">
                <p class="item"> <b>!</b>복합결제진입시 보통 적립카드를 먼저 읽히고 복합결제 화면으로 진입한다</p>
                <p class="item"> <b>쿠폰사용</b> 결제금액중에 일부또는 전체를 쿠폰으로 결제한다
                쿠폰에 있는 바코드나 번호를 입력하여 결제에 사용한다</p>
                <p class="item"> <b>포인트사용</b> 적립카드의 포인트로 원하는 금액만큼 결제 한다.
                먼저 사용할 포인트카드를 읽히고 사용할 포인트금액을 입력한다 그리고 카드 비밀번호 4자리를 입력해야 한다. </p>
                <p class="item"> <b>현금결제</b> 사용할 현금을 입력하고, 현금영수증을  발행(소비자또는사업자용도)할 수 있다.</p>
                <p class="item"> <b>신용카드 결제</b> 신용카드를 사용하여 남아있는 결제금액을 결제할 수 있다</p>
                <p class="item"> <b>!</b>복합결제에서 부분결제만 되고 전체금액이 결제안될수 도 있다!</p>


            </div>
        </div>


    </div>


    <div v-if="kanami" class="container" >
        <h2>Container#4</h2>
        <div class="row">
            <div class="col">
                <img class="img-fluid" src="../assets/akane.jpg" alt="" width="200" height="150">                
            </div>
            <div class="col">Column2Column2</div>
            <!-- <div class="col">Column3Column3</div> -->
            <div class="col">
                <img class="img-fluid" src="../assets/akane.jpg" alt="" width="200" height="150">                
            </div>
        </div>
        <div class="row">
            <div class="col">Column4</div>
            <div class="col">Column5</div>
            <div class="col">Column6</div>
        </div>

    </div>



    </div>
</template>


<script>
// import gsap from 'gsap'
// import Toast from '../components/Toast.vue'
import My from '../components/My.vue'
let timer1=0
let charging=0
export default {
    name: 'Layout',
    components: {
        // Toast,
        My,
    },
    data() {
        return {
            viewEnable: false,
            about: false,
            gridLayout: false,
            pulseCount: 0,
            liter: 0.000,
            cost: 1000,
            isCharging: false,
            amount: 0,
            selected: true,
            kanami: false,
            showToast: false,
            //images : {
            // imageName: require('../assets/logo.png'),
            //}
            imageName : "",
            imageInfo : {
                path: "",
                w: "",
                h: "",
                msg: "",
            },
            menuStatus: 0, 
        }
    },
    mounted() {
        console.log('vuex:',this.$store.state.count)
        if(this.$store.state.count==1) this.viewEnable=true;
        else this.viewEnable=false

        // gsap.from(".aboutLayout", {
        //     opacity:0, duration:1 , y:-50, stagger:0.6
        // })

        // gsap.from(".item",{
        //     duration:0.2,
        //     opacity:0,
        //     scale:0.5,
        //     y:100,
        //     ease: "power1",
        //     // stagger:0.1 /*다음번카드의 지연시간 */
        //     stagger: {from:'edges',each:0.1}
        // })
        // gsap.from(".item", {
        //     opacity:0, duration:0.6 , y:50, stagger:0.1
        // })
        // gsap.from(".col", {
        //     opacity:0, duration:1 , y:-50, stagger:0.1
        // })

    },
    computed: {
        checkIfCharging(){
            return this.isCharging==true ? '충전중':'충전대기'
        },
        yyyMMdd() {
            let today=new Date()
            let year=today.getFullYear()
            let month=('0'+(today.getMonth()+1)).slice(-2)
            let day=('0'+today.getDate()).slice(-2)
            let dateString=year+'-'+month+'-'+day
            console.log('dataString',dateString)
            return this.isCharging==false ? dateString:''
            // return dateString
        },

    },
    methods: {
        menuClick() {
            console.log('mouseClick')
            // this.gridLayout=false
            if(this.menuStatus==0) this.menuStatus=1
            else if(this.menuStatus==1) this.menuStatus=0
        },
        aboutClick() {
            this.about=!this.about

            this.yyyMMdd
        },
        gridClick() {
            let money=123456
            let money_txt=Number(money).toLocaleString()
            console.log('grid',money,money_txt)
            
            let liter=1.234012;
            console.log('grid',liter)


            this.gridLayout=!this.gridLayout
            console.log('isCharging',this.isCharging)

        },
        startClick() {
            // event.stopPropagation()
            if(charging==0) {
                this.isCharging=true
                charging=1
                if(this.pulseCount!=0) this.pulseCount=0
                timer1=setInterval(()=>{
                    let tmp
                    // let tmp2
                    this.pulseCount+=22;
                    tmp=this.pulseCount/1000
                    this.liter=tmp.toFixed(3)
                    tmp=this.liter*this.cost
                    this.amount=Number(tmp).toLocaleString()

                },40)
            }
            else {
                if(charging) {
                    clearInterval(timer1)
                }
                this.isCharging=false
                charging=0;
            }
        },
        stopClick() {
            charging=0;
            this.isCharging=false
            clearInterval(timer1)
        },
        toastClose(close) {
            this.showToast = close
        },
        selectPic() {
            //this.selected=!this.selected
        },
        inquirySales(item) {
            
            if(item==1) {
                console.log("11")
                this.imageName=require('../assets/1.png')
                this.imageInfo.path=require('../assets/1.png')     
                this.imageInfo.w=144   
                this.imageInfo.h=144     
                this.imageInfo.msg="단가를 변경합니다"   
            }
            else if(item==2) {
                console.log("22")
                this.imageName=require('../assets/NumberInput.png')
                this.imageInfo.path=require('../assets/NumberInput.png')
                this.imageInfo.w=355
                this.imageInfo.h=512       
                this.imageInfo.msg="단가2를 변경합니다"   


            }
            else if(item==3) {
                console.log("33")
                this.imageName=require('../assets/logo.png')
                this.imageInfo.path=require('../assets/logo.png')
                this.imageInfo.w=200   
                this.imageInfo.h=200     
                this.imageInfo.msg="단가3를 변경합니다"   


            }

             this.showToast = true;
            // setTimeout(() => this.showToast = false, 1000)

        }
    },
    watch: {

    },
    created() {

    },

}
</script>


<style scoped>
.no-drag {-ms-user-select: none; -moz-user-select: -moz-none; -webkit-user-select: none; -khtml-user-select: none; user-select:none;}

/* .j-menu {
    display: block;
    width: 210px;
    height: 140px;
    font-weight: bold;
    font-size: 12px;
    text-align: center;
    background-color: rgb(112, 81, 23);
    margin-bottom: 2%;
    margin-left: 4%;
} */


.j-state {
    display: block;
    width: 240px;
    height: 20px;
    font-weight: bold;
    font-size: 12px;
    text-align: center;
    background-color: wheat;
    margin-bottom: 2%;
    margin-left: 4%;
}
.j-id {
    display: block;
    width: 240px;
    height: 60px;
    font-size: 48px;
    background-color: wheat;
    margin-left: 4%;
    margin-bottom: 2%;
    text-align: center;
}
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
 .j-menu {
    width: 240px;
    height: 220px;
    display: grid;
    background-color: wheat;
    /* grid-template-columns: repeat(2,100px); */
    grid-template-columns: 54px 54px 54px 54px;
    /* grid-template-rows: repeat(3,minmax(20px,auto)); */

    grid-template-rows: repeat(5,40px);
    align-content: center; /*y*/
    justify-content: center; /*x*/
    column-gap: 3px;
    row-gap: 3px;
    
    margin-left: 4%;
}
.j-menu .j-item {
    width: 100%;
    height: 100%;
    border: 1px solid blue;
    text-align: center;
    align-items: center;
    
    
    font-size: 12px;
    font-weight: bold;
    color: rgb(7, 141, 128);

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



        /* display: flex;
        justify-content: center;
        align-items: center; */
    

/* align-content: center; */
}

a {
    margin-left: 2%;
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
.comment {
    text-align: right; 
    margin-bottom: 0px; 
    margin-left: 50px; 
    font-size:8px;
}
.liter {
    font-size: 35px;
    display: inline;
}


b {
    background-color: dimgray;
    color:whitesmoke;
}
b:hover {
    font-size: 16px;
    background: yellow;
    color:#aaa ;
    outline: 3px solid #aaa; 
    cursor: pointer;
}
input:focus {
    background: yellow;
    outline: 3px solid #aaa; 

}
.item {
    margin: 0;
    font-size: 12px;
}


.flex-container {
    display: inline-flex;

}
.flex-container .item {
    background-color: rgb(156, 220, 223);
    border: 1px solid #000;
    width:60px;
    height: 300px;
    text-align: center;
    font-size: 12px;
}
.flex-container .item2{
    background-color: cadetblue;
    border: 1px solid #000;
    width:260px;
    height: 300px;
}

</style>