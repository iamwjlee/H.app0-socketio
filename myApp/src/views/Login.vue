
<template>
    <div>
    <div class="login">
      <input type="text" v-model="inputText" placeholder="passwd">
      <button @click="hello">로그인</button>

    </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    component: {

    },
    data() {
        return {
            inputText: ''

        }
    },
    created() {
        let baseURI = 'https://jsonplaceholder.typicode.com'
        this.$axios.get(`${baseURI}/users`)
        .then((result) => {
            console.log('GET from jsonplaceholder:', result.data)
            this.users = result.data
            // console.log('length='+result.data.length)
            // for(let i=0;i<result.data.length;i++) {
            //   console.log('username '+this.users[i].username);
            // }
            //this.$router.push("/")
        })

        /*
        Access to XMLHttpRequest at 'http://106.245.87.140:1605/data' 
        from origin 'http://localhost:1604' 
        has been blocked by CORS policy: 
        No 'Access-Control-Allow-Origin' header is present on the requested resource.


        클라이언트가 1604이고 서버가 1605일때 클라이언트에서 서버로 리소스를 요청할시 CORS 클라에서 에러생김
        외부 프록시서버를 사용해서 우회 
        CORS는 브라우저에 관련된 정책이기 때문에, 브라우저를 통하지 않고 서버간 통신을 할때는 
        이정책이 적용되지 않는다.
        */
        let uri='http://106.245.87.140:1605/data'
        //let uri=`https://cors-anywhere.herokuapp.com/http://106.245.87.140:1605/data`
        this.$axios.get(uri)
        .then((result)=>{
            console.log('GET from local', result.data)
        })
        .catch((Error)=>{
            console.log(Error)
        })

        // let uri='http://106.245.87.140:1605/data'
        // //let uri=`https://cors-anywhere.herokuapp.com/http://106.245.87.140:1605/data`
        //  this.$axios.post(uri,{id:4,name:'wj'})
        //  .then((res)=>{
        //     //  console.log('result--',res)
        //      console.log(res.data)
        //  })
        //  .catch((Error)=>{
        //      console.log(Error)
        //  })


    },
    mounted() {
        let uri='http://106.245.87.140:1605/data'
        //let uri=`https://cors-anywhere.herokuapp.com/http://106.245.87.140:1605/data`
         this.$axios.post(uri,{id:4,name:'wj'})
         .then((res)=>{
             console.log('POST to local', res.data)
         })
         .catch((Error)=>{
             console.log(Error)
         })

    },
    methods: {
        hello() {
            if(this.inputText=="") return
            console.log('hello='+this.inputText)
            for(let i=0;i<this.users.length;i++) {
                console.log('username:',this.users[i].username)

                if(this.inputText===this.users[i].username) {
                    this.$store.commit('enable')
                    this.$router.push("/")
                    let value= {
                        user: this.inputText,
                        date:`${new Date().getMonth()+1}/${new Date().getDate()} `,
                        auth: true
                    }
                    sessionStorage.setItem(this.inputText,JSON.stringify(value))
                    //this.viewEnable=!this.viewEnable

                    break;
                }

            } 

            this.inputText=""
        },

    },

}

</script>
<style scoped>
.login {
    margin: auto;
    width: 90%;
}
</style>