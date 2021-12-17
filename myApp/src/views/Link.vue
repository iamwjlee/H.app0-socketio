<template>
<div>
    <h2>Link</h2>
    <div class="m-2">
    <button class="btn btn-primary m-1" @click="move('left')">Move Left</button> 
    <button class="btn btn-primary m-1" @click="move('right')">Move Right</button>
    {{position}}
    </div>
    
    
    <h2>Link</h2>


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
    </div> 
    <p></p>
    <p class="comment">
            HTML5는 font tag를 더 이상 지원하지 않는다. 대신 css를 사용해야
            List Push할때 트랜지션사용하지 않고 
            클래스바인딩으로 업데이트만 표시  v-bind:class="{클래스명:조건}
            "
    </p>

    <div class="m-2">  
        <input type="text" class="form-control m-1" v-model="id" placeholder="Name" >  
        <button class="btn btn-primary m-1" @click="checkName" > Approval </button> 
    </div> 


    <div v-if="isConfirmed" >

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

        <label class="me-1">BandMaid</label>
        <input type="text"  class="form-control" placeholder="Just do it">

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



    </div>



</div>
</template>

<script>
import io from "socket.io-client"
export default {
    name: 'Link',
    components: {

    },
    data() {
        return {
            socket: {},
            position : {x:0,y:0},
            tcpList: [],
            tcpResponse: "",
            tcpResponseHit: "",
            tcpResponseWatch: "",
            //
            isConfirmed: false,
            id:"",
            isShowStudent: false,
            students: [], //db student
            //
            tables: [],  //db
            isShow: false,
            adj_code: "",
            adj_id: "",
            adj_adj: "",
            adj_response : [], //실제데이터

            //배열의 일부분을 잘라내어 새로운 배열로 리턴한다.
            visible_adj_response: [], //pagnation
            currentPage: 0,
            pageSize:5,




        }
    },
    methods: {
        move(direction) {
            this.socket.emit("move",direction)
        },
        selectList(item) {
            console.log('hit '+item.ip+' '+item.id)
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
        showAdj() {
            console.log('showAdj')
            let arg={}
            this.socket.emit("show-adj",arg )
            this.isGood=!this.isGood
        },
        //
        addAdj() {
            let arg={}
            arg.code=this.adj_code
            arg.id=this.adj_id
            arg.adj=this.adj_adj
            console.log('addAdj:'+this.adj_code+' '+this.adj_id+' '+this.adj_adj)
            this.socket.emit("adj",arg )
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

        showPage() { // show all adj table data
            const page=this.currentPage*this.pageSize;
            this.visible_adj_response=this.adj_response.slice(page,page+this.pageSize)
            for(let i=0;i<this.visible_adj_response.length;i++)
                console.log(this.visible_adj_response[i].adj)
            
        },

        

    },
    created() {
        this.socket =io("http://106.245.87.140:1605"); //How to deal with Cross Origin Resource Sharing

    },
    watch: {
        // tcpResponseWatch(newVal) {
        //     console.log('watch',newVal)
        // }
    },

    mounted() {
        this.socket.on("position",data=>{
            this.position=data
            //console.log('x='+this.position.x+' y='+this.position.y)

        })

        this.socket.on("tcp-res",data=>{
            this.tcpResponse=data

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
            }
            else {
                this.tcpList.splice(hitIndex,1,data)  
                this.tcpResponseWatch=data
                this.tcpResponseHit=hitIndex
            }
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
        this.socket.on("show-adj-resp",data=>{
            this.adj_response=data
            for(let i=0;i<data.length;i++) {
                console.log('code='+ this.adj_response[i].code)
            }
            this.showPage()
            //console.log('x='+this.position.x+' y='+this.position.y)
        })



    }


}
</script>

<style scoped>
.list {
    margin: auto;
    width: 80%;
    border: 2px;
    padding:2px;

    /* padding: 0px 0px 0px 0px; */
    background-color: #777;
    text-align: center;

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
.comment {
    text-align: right; 
    margin-bottom: 0px; 
    margin-left: 50px; 
    font-size:12px;
}

</style>