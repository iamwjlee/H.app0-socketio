<template>
    <div>
        <h1> {{hello}} </h1>
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

    </div>
</template>

<script>
import io from "socket.io-client"
export default {
    name: 'Talk',
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
            isShowStudent: false
        }
    },
    created() {
        //this.socket =io("http://127.0.0.1:3000"); //How to deal with Cross Origin Resource Sharing
        this.socket =io("http://106.245.87.140:1605"); //How to deal with Cross Origin Resource Sharing
    },
    mounted() {
        //this.socket.emit("login",{name:'wj',userid:1234});
        //this.socket.emit("move","left");
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
</style>