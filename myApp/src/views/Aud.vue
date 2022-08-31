<template>
<div>
    <img id="dog" src="img571.png">

    <p class="comment"> 고양이도 할 수 있는 Vue.js</p>
    <p class="comment"> https://rintiantta.github.io/jpub-vue/examples/delay-transition.html#%EC%86%8C%EC%8A%A4-%EC%BD%94%EB%93%9C </p>

    <div class="title"> <h4>JavaScript</h4> </div>
    <div class="fc">
      <div class="fc-1">
        <h4>JS 클래스사용하기[ES6]</h4>
        <p>
          기존에 존재하던 class를 상속받기 위해서는 extends를 사용한다. 자식클래스에서 super을 이용해서 부모클래스를 호출할수 있다. 
          클래스의 인스턴스 객체를 생성하고 초기화하기 위해 생성자를 constructor를 통해 만든다.  
          
          만들어진 클래스의 instance를 생성할때는 new를 사용한다.          
          this가 class내부에서는 항시 class를 가르키게 할수 있다 바로 arrow function을 사용하는 것이다.
            클래스 상속, 부모 생성자를 호출, 메서드를 호출, 부모메서드를 오버라이딩할 수 있다 </p>
      </div>
      <div class="fc-1">
        <h4>JS 모듈</h4>
        <p>자바스크립코드를 여러파일과 폴더에 나누어 작성하고 서로가 서로를 효율적으로 불러올 수 있도록 해주는 시스템의 필요성이 절실해져
          모듈시스템이 ES2015에 추가되었습니다
          구형브라우저는 모듈을 지원하지 않아 대신 Webpack,Parcel등의 모듈 번들러를 통해 변환과정을 거친뒤, 브라우저에는 일반적인 자바스크립트 파이로서 불러오는 방법이 널리 사용되고 있는 추세이다. 
          브라우저 환경에서 type="module"이 붙은 스크립트가 일반스크립트와 어떤 점이 다른지. 
          모듈을 사용할땐 html 페이지가 완전히 나타난 이후에 모듈이 실행된다.
          
          단순히 값을 저장하고 있는 변수뿐만아니라 함수나 클래스도 export를 통해 여러 모듈에서 재사용 할 수 있다.
          선언과 동시에 export할 수 도있다.
          import 구문에서 이를을 적어주는 부분에 중괄호를 생략하면 모듈의 default export를 가져옵니다.

          ES2015이전의 모듈이전에는 CommonJS,AMD등의 모듈 시스템이 있었고 널리 사용되었다.
          </p>
      </div>
      <div class="fc-1">
        <h4>HTML Canvas</h4>
        <p> HTML CANVAS allow dynamic scriptable rendering of 2d shapes.</p>
        <p>Canvas api turns your dreams to reality using JavaScript.</p>
        <p>correct way to get the internal dom elems.</p>
        <div> {{x}},{{y}}  </div>        
        <div  class="myCanvas">
            <canvas width="300" height="200" ref="myCanvas"
                @mousemove="draw"
                @mousedown="beginDrawing"
                @mouseup="stopDrawing"
                > 
            </canvas>
        </div>
      </div>
    </div>

    <div class="fc">
      <div class="fc-1">
        <h4>1</h4>
        <p>Player클래스를 인스턴스하고 loop안에서 player를 업데이트하고 그려준다 키값에 따라. 
            키값은 클래스 InputHandler에서 가져온다.
            여러상태행동(SittingRight,RunningLeft,...)에 따른 각각의 클래스를 만들고 거기서 각각의 행동에 따른 player정보(그림번호,이동속도등)를 변경한다.  
            player가 입력방향키에 따라 왼쪽오른쪽 걷고 달리고 점프 할수 있다.     
            Enemy는 베이스클래스를 만들고 3종류의 자식클래스를 만든다. 계속만들어지고 한방향으로 움직인다.       
        </p>
      </div>
      <div class="fc-1">
        <h4>2</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti non hic aliquam, inventore dicta ea magnam quos suscipit expedita assumenda? Consectetur maiores fugit perspiciatis tempore iste commodi fuga aliquid dolor.</p>
      </div>
      <div class="fc-1">
        <h4>3</h4>
        <p>correct way to get the internal dom elems.</p>
      </div>
    </div>



    <footer>
        <p>Copyright © 2022 JANGWEE DATA SYSTEM.co.,Ltd. All rights reserved.</p>
        <address>Contact webmaster for more information. 02-911-1002</address>
    </footer>







</div>
</template>

<script>
export default {
    components: {

    },
    data() {
        return {
            playPause: true,
            //elements: [],
            dataArray: [1,2,3,4,5],
            //
            canvas: null,
            image: null,
            x: 0,
            y:0,
            isDrawing: false,
            test001: false,

        }
    },
    mounted() {
        this.$nextTick(function(){ // nextTick code will run only after the entire view has been rendered
        //let c=document.getElementById("myCanvas")
        //let c=this.$refs["myCanvas"] // This is the correct way to get the internal dom elems!
        let c=this.$refs.myCanvas // This is the correct way to get the internal dom elems!
        this.canvas=c.getContext('2d')
        this.canvas.clearRect(0,0,this.canvas.width,this.canvas.height)


        const img=new Image()
        img.src='img571.png'
        img.onload=() =>{
            this.canvas.save()
            this.canvas.scale(0.25,0.25)
            this.canvas.drawImage(img,0,0)
            this.canvas.restore()
        }

        this.canvas.fillStyle = 'gray';
        this.canvas.fillRect(0,0,20,20)

        this.updateNow()
        setInterval(this.updateNow.bind(this),1000)
            
        })


    },
    methods: {
        drawLine(x1, y1, x2, y2) {
            let ctx = this.canvas;
            ctx.beginPath();
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 1;
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
            ctx.closePath();
        },        
        draw(e) {
            if(this.isDrawing) {
                this.drawLine(this.x, this.y, e.offsetX, e.offsetY);
                this.x = e.offsetX;
                this.y = e.offsetY;
            }
        },
        beginDrawing(e) {
            this.x=e.offsetX;
            this.y=e.offsetY;
            this.isDrawing=true
        },
        stopDrawing(e) {
            if(this.isDrawing) {
                this.drawLine(this.x,this.y,e.offsetX,e.offsetY)
                this.x=0
                this.y=0
                this.isDrawing=false
            }
        },
        getS() {
            let today=new Date()
            let seconds=today.getSeconds() < 10 ?'0'+today.getSeconds() : today.getSeconds() ;
            return seconds
        },
        updateNow() {
            //let elements =[]
            let dataArray= new Uint8Array(5)
            this.now= this.getS()

            dataArray[0]=10
            dataArray[1]=11
            //console.log('update:',this.now)
            // for(let i=0;i<5;i++) {
            //     let item =dataArray[i]
            //     elements[i].style.transform=`rotateZ(${i* (360/5)}deg) translate(-50%,${item}px) `

            // }
        },

        onClick() {
            console.log('clicked',this.playPause)
            this.playPause!=this.playPause
            let aa= new Uint8Array(20)
            console.log('length=', aa.length)
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
img {
    display: none;   
}
.title {
    max-width: 1300px;
    margin: 0px auto;
    text-align: center;
 
}
.fc {
    max-width: 1300px;
    margin: 20px auto;
}
footer {
    display: block;
    max-width: 1300px;
    margin: 0px auto;
    text-align: center;

}
.fc-1 {
    padding: 10px 10px;
    /* width: 30%; */
    flex-basis: 30%;
    background-color: rgb(246, 246, 246);
    margin-bottom: 5px;
}
.myCanvas {
    width: 300px;
    height: 200px;

    border: 1px solid grey;
}

@media (min-width:900px) {
    .fc {
        display: flex;
        justify-content: space-between;
    }
}


.comment {
    text-align: right; 
    margin-bottom: 0px; 
    margin-left: 50px; 
    font-size:8px;
}

</style>