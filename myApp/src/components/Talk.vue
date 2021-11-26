<template>
    <div>
        <h1> {{hello}}   </h1>
        <div>  <input type="text" v-model="id" placeholder="Name" >  <button @click="checkName" > Approval </button> </div> 


        <div v-if="isConfirmed" >

        <div><button @click="move('left')">Move Left</button>  </div> 
        <div><button @click="move('right')">Move Right</button> </div>  
        {{position}}
        <br>
        <div><button @click="mydb('student')">db students</button> </div>  
        <ul v-if="isShowStudent">
            NumberofStudent is {{students.length}}
            <li v-for="(list,index) in students" :key="index" > id={{list.id}}  name={{list.name}} </li>
        </ul>
        <div><button @click="mydb('tables')">db all table</button> </div>  
        <ul v-if="isShow">
            NumberofTables is {{tables.length}}
            <li v-for="(list,index) in tables" :key="index" > name={{list.name}} </li>
        </ul>
        <div><button @click="mydb('create')">db create table</button> </div>  
        <div><button @click="mydb('insert')">db insert table</button> </div>  

        <div><button @click="mydb('update-setup')">db update-setup</button> </div>  

        <hr>
        <input type="text" placeholder="code" v-model="adj_code">
        <input type="text" placeholder="pump Id" v-model="adj_id">
        <input type="text" placeholder="adj" v-model="adj_adj">
        <button @click="addAdj">Add to db</button>
        <br>
        <button @click="showAdj">Show</button>
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
                <tr v-for="(list,index) in adj_response" :key="index" >
                    <td> {{list.code}} </td>
                    <td> {{list.pumpId}} </td>
                    <td> {{list.adj}} </td>
                    <td> {{list.date}} </td>
                </tr>
            </tbody>
        </table>
        </div>

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
//
// import 'vue-good-table/dist/vue-good-table.css'
// import {VueGoodTable} from 'vue-good-table'
// import TableLite from 'vue3-table-lite'
// import '@ocrv/vue-tailwind-pagination/dist/style.css'
// import VueTailwindPagination from '@ocrv/vue-tailwind-pagination'
export default {
    name: 'Talk',
    components: {
        //VueGoodTable,
        // TableLite,
        // VueTailwindPagination,
    },
    data() {
        // const table=reactive({
        //     isLoading: false,
        //     columns: [

        //     ],
        //     rows: [],
        //     totalRecordCound:   0,
        //     sortable: {
        //         oreder:"id",
        //         sort: "asc"
        //     }
        // }

        // )
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
            adj_code: 0,
            adj_id: 0,
            adj_adj: 0,
            adj_response : [],
            // columns:[
            //     {
            //         label: 'code',
            //         field: 'code',
            //         type: 'number'
            //     },
            //     {
            //         label: 'id',
            //         field: 'id',
            //         type: 'number'
            //     },

            // ]


        }
    },
    created() {
        //this.socket =io("http://127.0.0.1:3000"); //How to deal with Cross Origin Resource Sharing
        this.socket =io("http://106.245.87.140:1605"); //How to deal with Cross Origin Resource Sharing
    },
    mounted() {
        //this.socket.emit("login",{name:'wj',userid:1234});
        //this.socket.emit("move","left");
        this.socket.on("show-adj-resp",data=>{
            this.adj_response=data
            for(let i=0;i<data.length;i++) {
                console.log('code='+ this.adj_response[i].code)

            }
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
    methods: {
        checkName() {
            console.log('id:'+this.id)
            if(this.id==="BandMaid")
                this.isConfirmed=!this.isConfirmed;
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
        }
    }
}
</script>
<style scoped>
    button {
        width: auto;
        padding: 4px 2px;
        margin-top: 10px;
        margin-bottom: 4px;
    }
    input {
    margin-top: 5px;
    margin-right: 2px;
    width: 60px;
    height: 20px;  
    }

</style>