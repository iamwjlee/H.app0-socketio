<template>
    <div>
        <hr>
        <p :style="{color: colorText}" >{{text}} </p>
        <p class="comment">클래스바인딩보다 스타일을 주로 사용 스타일바인딩은 실제로는 자바스크립트객체 </p>
        <div v-if="test01Enable" class="test01"> </div>
        <div v-else> Talk transition test1 Hidden </div>

        <div v-if="test02Enable">
            <button class="btn btn-primary m-1" @click="test(1)" > t1 </button> 
            <button class="btn btn-primary m-1" @click="test(2)" > t2 </button> 
            <button class="btn btn-primary m-1" @click="test(3)" > t3 </button> 
            <button class="btn btn-primary m-1" @click="sort" > sort </button> 

            <button class="btn btn-primary m-1" @click="st" > Single Transition </button> 

            <transition-group  tag="ul" class="list" name="list" >
                <li v-for="item in filterdList"
                    :key="item"
                    class="item"
                    @click="doRemove(item)"
                >
                {{item}}
                </li>

            </transition-group>

            <transition name="fade">
                <p v-if="isHello">Hello</p>
            </transition>


        </div>
        <div v-else>Talk transition test2 Hidden</div>


        <h1> {{hello}}   </h1>

        <div class="m-2">  
            <input type="text" class="form-control m-1" v-model="id" placeholder="Name" >  
            <button class="btn btn-primary m-1" @click="checkName" > Approval </button> 
        </div> 

        <div class="list" style="color:white">
        Response {{tcpResponse}}
        </div>

        <div class="list">
            <li v-for="(item,index) in tcpList"
                :key="index"
                class="item"
                @click="selectList(item)"
                :class="{itemHit:index===tcpResponseHit}"
            >
            {{item.ip}}
            {{item.id}} 
            {{item.cnt}}
            {{index}}
            </li>
            <br>
        </div> 

        <p></p>
        <p class="comment">
            HTML5는 font tag를 더 이상 지원하지 않는다. 대신 css를 사용해야
            List Push할때 트랜지션사용하지 않고 
            클래스바인딩으로 업데이트만 표시  v-bind:class="{클래스명:조건}
            "
        </p>

        <!-- <transition-group  tag="ul" class="list" name="list">
            <li v-for="item in tcpList"
                :key="item"
                class="item"
                @click="selectList(item)"
            >
            {{item.ip}}
            {{item.id}} 
            {{item.cnt}}
            </li>
        </transition-group> -->


        <hr>

        <!-- </div> -->

        <div v-if="isConfirmed" >

            <div class="m-2">
            <button class="btn btn-primary m-1" @click="move('left')">Move Left</button> 
            <button class="btn btn-primary m-1" @click="move('right')">Move Right</button>
            {{position}}
            </div>
            <br>

            <div>
                <button class="btn btn-primary m-1" @click="mydb('student')">db students</button> 
            </div>  
            <ul v-if="isShowStudent">
                NumberofStudent is {{students.length}}
                <li v-for="(list,index) in students" :key="index" > id={{list.id}}  name={{list.name}} </li>
            </ul>
            <div>
                <button class="btn btn-primary m-1" @click="mydb('tables')">db all table</button> 
            </div>  
            <ul v-if="isShow">
                NumberofTables is {{tables.length}}
                <li v-for="(list,index) in tables" :key="index" > name={{list.name}} </li>
            </ul>
            <div>
                <button class="btn btn-primary m-1" @click="mydb('create')">db create table</button> 
            </div>  
            <div>
                <button class="btn btn-primary m-1" @click="mydb('insert')">db insert table</button> 
            </div>  

            <div>
                <button class="btn btn-primary m-1" @click="mydb('update-setup')">db update-setup</button> 
            </div>  

            <!-- <div class="m-3"> -->
            <label class="me-1">BandMaid</label>
            <input type="text"  class="form-control" placeholder="Just do it">
            <!-- </div> -->

            <!-- 시작하기 adj -->
            <hr> 
            <div class="m-2">
            <label class="m-1">code</label>
            <input class="form-control m-1"  type="text" placeholder="code" v-model="adj_code" >
            <label class="m-1">id</label>
            <input class="form-control m-1" type="text" placeholder="pump Id" v-model="adj_id">
            <label class="m-1">adj</label>
            <input class="form-control m-1" type="text" placeholder="adj" v-model="adj_adj">

            </div>

            <div class="m-2">
            <button class="btn btn-primary m-1" @click="addAdj">Add to db</button>
            <button class="btn btn-primary m-1">add1</button>
            <button class="btn btn-outline-secondary m-1">add2</button>

            </div>

            <br>
            <br>
            <div class="m-2">
            <button @click="showAdj" class="btn btn-outline-secondary m-1">Show</button>

            </div>
        
            <ul>
                <li v-for="(list,index) in adj_response " :key="index"> 
                    code={{list.code}} 
                    id={{list.pumpId}} 
                    adj={{list.adj}} 
                    date={{list.date}} </li>
            </ul>

            <div class="container mt-3">
            <h2>Bootstrap5 basic table</h2>
            <p>basic .table class adds basic styling(light padding and horizontal dividers) to a table</p>
            <table class="table" >
                <thead>
                    <tr>
                        <th>CODE</th>
                        <th>ID</th>
                        <th>ADJ</th>
                        <th>DATE</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(list,index) in visible_adj_response" :key="index" >
                        <td> {{list.code}} </td>
                        <td> {{list.pumpId}} </td>
                        <td> {{list.adj}} </td>
                        <td> {{list.date}} </td>
                        <td>
                            <button class="btn btn-danger btn-sm m-1" @click="removeRow(index)" >remove row</button>
                            <!-- <button class="btn btn-danger btn-sm m-1" >remove row</button> -->
                        </td>
                    </tr>
                </tbody>
            </table>
            <p>total page= {{currentPage+1}} of {{totalPages()}} </p>
            <button class="btn btn-outline-secondary  p-1 m-1" @click="showPage"> show page </button>
            <button class="btn btn-outline-secondary  p-1 m-1" @click="next"> ++ </button>
            <button class="btn btn-outline-secondary  p-1 m-1" @click="prev"> -- </button>

            </div>
            <!-- 마지막부분 -->
            <hr> 

            <!-- <div v-if="isGood">
                <vue-good-table 
                    :columns="columns"
                    :rows="adj_response"
                />
            </div> -->
            <!-- <table-lite
                :is-loading="table.isLoading"
                :columns="table.columns"
                :adj_response="table.rows"
                :total="table.totalRecordCount"
                :sortable="table.sortable"
                />  -->

        </div>
    </div>
</template>

<script>
// 테이블하면 생각나는것은? 정답 부트스트랩
// bootstrap 4 5 diff

    // static site generator : 
    // Bootstrap 4 uses Jekyll software 
    // Bootstrap 5 user Hugo software
import io from "socket.io-client"
import gsap from 'gsap'
//


export default {
    name: 'Talk',
    props: {
        text: String,
        colorText: String
    },
    components: {
        //VueGoodTable,
        // TableLite,
        // VueTailwindPagination,
    },
    data() {

        return {
            hello: 'Talk Component!',
            socket: {},
            position: {
                x:0,y:0
            },
            students: [],
            tables: [],
            isShow: false,
            isGood: false,
            isShowStudent: false,
            isConfirmed: false,
            id: "",
            adj_code: "",
            adj_id: "",
            adj_adj: "",
            adj_response : [], //실제데이터

            //배열의 일부분을 잘라내어 새로운 배열로 리턴한다.
            visible_adj_response: [], //pagnation
            currentPage: 0,
            pageSize:5,
            tcpResponse: "",
            tcpResponseWatch: "",
            tcpResponseHit: "",
            

            index: 0,
            list: [2,1,3,5,4,6,7,9,8,10], //test
            tcpList: [],
            addEnter:false,
            current: 2,
            isHello: true,
            test01Enable: 0,
            test02Enable: 0,
            enterClass: "",
            isOpen: false,
            isActive: false,
            textObj : {
                color: this.colorText,
                fontSize: '14px'
            }


        }
    },
    created() {
        this.socket =io("http://106.245.87.140:1605"); //How to deal with Cross Origin Resource Sharing
    },
    beforeMount() {
        console.log('beforeMount')
    },
    mounted() {

        //this.socket.emit("login",{name:'wj',userid:1234});
        //this.socket.emit("move","left");
        this.socket.on("tcp-res",data=>{
            ///console.log(data)
            this.tcpResponse=data
            // console.log(data.ip)
            // console.log(data.id)
            // console.log(this.tcpList)

            let hitIndex
            let hit=this.tcpList.some(function (el,index) {
                 if(el.ip===data.ip && el.id===data.id) {
                     hitIndex=index
                     //console.log('index '+index)
                     return true
                 }

            })
            if(hit==false) {
                this.tcpList.push(data)
                // this.addEnter=true
                // const newNumber=Math.max.apply(null,this.tcpList)+1
                // const index=Math.floor(Math.random()*(this.tcpList.length+1))
                // this.tcpList.splice(index,0,newNumber)
                //console.log('new ip='+data.ip +' id='+data.id)                
            }
            else {
                //뷰가 배열의 변경을 감지하고 화면을 갱신하기위해
                this.tcpList.splice(hitIndex,1,data)  
                this.tcpResponseWatch=data
                this.tcpResponseHit=hitIndex
                // gsap.from(".item",{
                //     duration:0.5,
                //     opacity:0,
                //     scale:0,
                //     y:200,
                //     ease: "power1",
                //     stagger:0.1 /*다음번카드의 지연시간 */
                //     // stagger: {from:'edges',each:0.1}
                // })


            }
        })
        this.socket.on("show-adj-resp",data=>{
            this.adj_response=data
            for(let i=0;i<data.length;i++) {
                console.log('code='+ this.adj_response[i].code)

            }
            this.showPage()

            //console.log('x='+this.position.x+' y='+this.position.y)
        })
        this.socket.on("position",data=>{
            this.position=data
            //console.log('x='+this.position.x+' y='+this.position.y)

        })
        this.socket.on("db",data=>{
            console.log(data)
            this.students=data
            console.log('lengthOfStudent='+data.length)
            for(let i=0;i<data.length;i++)
                console.log(' >'+this.students[i].id +' '+this.students[i].name)

        })
        this.socket.on("tables",data=>{
            console.log(data)
            this.tables=data
            console.log('lengthOfData='+data.length)
            for(let i=0;i<data.length;i++)
                console.log(' >'+this.tables[i].name)

        })

    },
    computed: {
        filterdList() {
            return this.list.filter(el=>el%this.current ===0)
            // return this.list.filter(function(el,index,arr){
            //     console.log('----')
            //     console.log(el)
            //     console.log(index)
            //     console.log(arr)
            //     console.log('-----------')
            // })
        }
    },
    watch: {

        // tcpResponseWatch(newVal) {
        //     console.log('watch',newVal)
        // }
        
    },
    methods: {
        boxTest() {
            console.log('boxtest')
                //  gsap.from(".box",{ duration:1,rotationX:0    })
                // gsap.to(".box",{ duration:1,rotationX:180    })
                 gsap.from(".box",{    })
                gsap.to(".box",{    })

        },
        st() {
            //this.list=this.list.sort()
            this.show=!this.show
        },
        selectList(item) {
            console.log('hit '+item.ip+' '+item.id)
        },
        sort() {
            console.log('sort test')
            this.list=this.list.sort(function(a,b){
                return a-b
            })
            this.filterdList()
            // let test_list=["10","2","1","3","8","7","z","a"]
            //  test_list.sort(function(a,b){
            //      return a-b
            //  })
            //  console.log(test_list)
        },

        test(arg) {
            
           this.current=arg

        },
        doRemove(item) {
            this.list.splice(this.list.indexOf(item),1)  //인덱스에 있는거 1개 삭제

        },
        removeRow(index) {  //https://codepen.io/jjelic/pen/yevNLZ?editors=1010
            console.log('addRow index='+index + ' page='+ (this.currentPage*this.pageSize)*1 +' index='+index)
            let order=parseInt(this.currentPage*this.pageSize+index)
            console.log('order='+order)
            console.log('delete id='+this.adj_response[order].code + ' pumpId='+this.adj_response[order].pumpId)
            this.socket.emit("adj-delete",{code:this.adj_response[order].code,pumpId:this.adj_response[order].pumpId })
            this.adj_response.splice(order,1)
            this.showPage()

        },
        next() {
            let t=this.totalPages();
            if(this.currentPage<t-1) {
                this.currentPage++;
            }
            console.log('total page='+t + ' current page='+ this.currentPage)
            this.showPage()

        },
        prev() {
           if(this.currentPage>0) {
               this.currentPage--
           }
           this.showPage()
        },
        totalPages() {
            return Math.ceil(this.adj_response.length/this.pageSize)
        },
        showPage() {
            const page=this.currentPage*this.pageSize;
            this.visible_adj_response=this.adj_response.slice(page,page+this.pageSize)
            for(let i=0;i<this.visible_adj_response.length;i++)
                console.log(this.visible_adj_response[i].adj)
            
        },
        checkName() {
            console.log('id:'+this.id)
            if(this.id==="BandMaid")
                this.isConfirmed=!this.isConfirmed;

            else if(this.id==="111") {
                //console.log(this.tcpList)
                console.log(this.filterdList)
            }

        },
        move(direction) {
            this.socket.emit("move",direction)
        },
        mydb(arg) {
            if(arg=='create') {
               console.log('db create')  
            }
            else if(arg=='tables') {
                this.isShow=!this.isShow

            }
            else if(arg=='student') this.isShowStudent=!this.isShowStudent
            this.socket.emit("db",arg)
        },
        addAdj() {
            let arg={}
            arg.code=this.adj_code
            arg.id=this.adj_id
            arg.adj=this.adj_adj
            console.log('addAdj:'+this.adj_code+' '+this.adj_id+' '+this.adj_adj)
            //this.socket.emit("adj",{code:"100",id:"3",adj:"1000" } )
            //this.socket.emit("adj",{code:this.adj_code,id:this.adj_id,adj:this.adj_adj } )
            this.socket.emit("adj",arg )

        },
        showAdj() {
            console.log('showAdj')
            let arg={}
            this.socket.emit("show-adj",arg )
            this.isGood=!this.isGood

        },
        //
        // transition은  css의 변화를 동적으로 변환해 준다 
        //
        beforeEnter(el){ //트랜지션을 시작할때 apply index*100ms delay
            console.log('beforeEnter',el)
            this.$nextTick(()=>{
                if(!this.addEnter) {
                    el.style.transitionDelay=100*parseInt(el.dataset.index,10)+'ms'
                }
                else {
                    this.addEnter=false
                }
            })
            //el.style.transitionDelay=300*parseInt(el.dataset.index,10)+'ms'
        }
        ,
        afterEnter(el) { //finish transition or cencel, remove delay  
        console.log('afterEnter',el)
            el.style.transitionDelay=''
        }

    }
}
</script>
<style scoped>
    /* button {
        width: auto;
        padding: 4px 2px;
        margin-top: 10px;
        margin-bottom: 4px;
    } */
    /* input {
    margin-top: 5px;
    margin-right: 2px;
    width: 60px;
    height: 20px;  
    } */

.list {
    margin: auto;
    width: 80%;
    border: 2px;
    padding:2px;

    /* padding: 0px 0px 0px 0px; */
    background-color: #777;
    text-align: center;

}

.active{
    background: #15f5f5;
}
.item {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background: #f5f5f5;
    width: 100px;
    height: 100px;
    margin: 4px;  
    padding: 10px 10px 10px 10px; 
}
.itemHit {
    background: orchid;
}
.item:hover {
    background: #a5a5a5;
    /* border-radius: 90%; */
}


/*transition style   
    요소의 추가,삭제,변경시 발생
    진입하는 순가 enter
    v-enter  
    v-enter-active
    v-enter-to

    v-leave
    v-leave-active
    v-leave-to

    vue transiton tag 
    1. transition
    2. transition-group

*/
/*
    상태변화(예로 호버)에 따라 css프로퍼티가 변경되면 프로퍼티 변경에 따른 표시의 변화(트렌지션)은 
    지체없이 즉시 발생한다
    트렌지션은 상태변화에 동반하여 변경되는 css프로퍼티값에 의한 표시의 변화를 
    부드럽게 하기 위해 애니메이션 속도를 조절한다. 
    즉 변화가 일정기간에 걸쳐 일어나도록 한다

    트랜지션은 자동으로 발동되지 않는다. :hover와 같은 가상클래스선택자또는 자바스크립트의 부수적인 액션
    에 의해 발동된다
    트랜지션이 자동발동하도록 하고 싶다면 css애니메이션을 사용한다.
*/
/*
    https://bangj.tistory.com/126
    트랜지션
    - 페이지 트랜지션:트랜지션 래퍼 컴포넌트사용

        <transition name="fade" mode="out-in">
            <router-view />
        </transition>


    - 트랜지션 구룹
        v-enter
        v-enter-active
        v-leave-active
        v-leave-to


    --sort기능을 추가하고 실행하면 트랜지션효과가 되지 않는다.
    v-move를 스타일에 추가해야 한다.

    [css]transform 프로퍼티
        값에는 translate(),scale(),rotate(),skew()
        example) transform: translateY(-40px)
        transition 프로퍼티
            transition: 1s
    [css 스타일속성] 프로퍼티:밸류
*/

/* 
    뷰에서는 트랜지션래퍼 컴포넌트를 기본으로 제공한다. 이걸 이용해 다양한 애니메이션
    효과를 낼 수 있다.

    Vue 3 Animation Tutorial 

    Vue js crash course 2021
    vuejs.org
    v3.vuejs.org
    단방향 양방향 바인드 v-bind:src=""  v-model:
    이미지데이터연결
    클래스연결 : 
        클래스에 따라 버튼색상변경 
        클래스에 따라 이미지 테두리 색변경 

    v-bind:src="picture"



*/


.list-move {  
     /* transition:  opacity 1s , transform 1s;  */
     transition: all 1s ease;
     /* vue 3 animation tutorial #8
        .list-move
        position: absolute; 
     */
}


.list-enter-from {
    opacity: 0;
    /* transform: translateY(-10px); */
     transform: scale(0.6); 
}
.list-enter-to {
   opacity: 1;  
    transform: scale(1.0); 

}
.list-enter-active {
   /* transition:  opacity 1s , transform 1s;  */
   transition: all 1s easy;
   
}

.list-leave-from {
    opacity: 1;  
    /* transform: scale(1.0);  */
     transform: scale(0.6);  
}
.list-leave-to {
     opacity: 0;  /*마지막에 1초후에 안보여   */
      /* transform: translateY(40px);   */
       /* transform: scale(0.6);  */
      /* transform: scale(1.0); */
}
.list-leave-active {
    /* transition:  opacity 1s , transform 1s; */
    transition: all opacity 1s ,easy;    
    position: absolute; /*must be in list-move */
}



.test01 {
    width: 100px;
    height: 100px;
    background: red;
    transition: 2s;
}
.test01:hover {
    border-radius: 50%;
    background: blue;
}

.fade-enter {
    transition: 1s ease;

}
.fade-enter-active {
    transition: 1s;
}
.fade-leave-active {
    transition: 1s;
}
.fade-leave-to {
    transform: translateX(40px);
  opacity: 0;
}


.box {
    display: block;
}
.orange {
    width: 30px;
    height: 30px;
    background: orange;
}


/* .slide-in-right {
    transform: translate(-50%,0)
} */

.comment {
    text-align: right; 
    margin-bottom: 0px; 
    margin-left: 50px; 
    font-size:12px;
}

</style>