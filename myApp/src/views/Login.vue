
<template>
    <div>



    <div class="login" v-if="logEnable">
    <button @click="logOut">로그아웃</button>
    </div>

    <div class="login" v-else>
    <p class="comment">   
클라이언트가 서버에 처음으로 Request를 보낸 후 클라이언트엔 session id 쿠키 값이 없기에 새로 발급 후 저장.
요청마다 클라이언트는 전달받은 session id 값을 헤더 쿠키에 넣어서 서버에 전달하고 서버는 이를 이용해 사용자를 식별한다.
클라이언트가 로그인을 요청하면 서버는 session을 로그인한 사용자 정보로 갱신하고 새로운 session id를 발급한다.        
    </p>
    <p class="comment"> 서버에서 session file이 계속만들어 지는 문제가 있다. 뷰에서 axio를 보낼때마다?? </p>
    <p class="comment"> 서버에서 쿠키를 만들고 클라에서 리플래시하면 쿠키를 받는다 벗 클라(axios전송)의 쿠키를 서버는 못받는듯</p>
    <p class="comment"> 브라우저에서 get/post로 쿠키를 받을수 있는것 같은데 axios로 접속하면 안되는 이유는 ??/ </p>
    <p class="comment"> 토큰(JWT)기반인증 앱에서 사용자가 로그인 할수 있는것을 의미 한다.</p>
    <p class="comment"> Authentication인증  Authorization인가   세션과 토큰의 차이점 https://brunch.co.kr/@jinyoungchoi95/1 </p>
    <p class="comment"> 쿠키  로그인유지,장바구니유지,게임스코어관리</p>
    <p class="comment"> 쿠키  사용자선호언어,테마유지</p>
    <p class="comment"> 쿠키  조회수,방문통계 분석</p>
    <input type="text" v-model="inputId" placeholder="user id">
    <input type="text" v-model="inputPasswd" placeholder="passwd">
    <div>
    <input @click="checkbox" type="checkbox" v-model="saveChecked"> 아이디와 비밀번호를 저장할까요?
    </div>
    <button @click="logIn">로그인</button>


    <button @click="makeCookie2">쿠키</button>
    <button @click="checkCookie">쿠키확인</button>
    <button @click="hello">hello</button>
    <button >세션</button>

    <br>
    <br>
    <div>
        <input type="email" placeholder="eve.holt@reqres.in" v-model="email" >
        <input type="text" placeholder="cityslicka" v-model="password" >
        <input type="button" @click="onLoggin" value="log in">
    </div>

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
            inputId: '',
            inputPasswd: '',
            logEnable: false,
            email: '',
            password:'',
            saveChecked: false,

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
        let d=JSON.parse(sessionStorage.getItem('wj'))
        if(d) {
        this.logEnable=true
        console.log('login mounted:',d,this.logEnable)
        }
        else {
        this.logEnable=false
        console.log('login mounted::',d,this.logEnable)

        }

        let k=this.$VueCookies.isKey('aaa')
        console.log('VueCookies aaa is :',k)
        let keys=this.$VueCookies.keys().join('-')
        console.log('VueCookies all keys:',keys)
        const value=this.$VueCookies.get('id')
        console.log('VueCookies key:id value=', value)



    },
    methods: {
        checkbox() {
            console.log('checkbox\t\t',this.saveChecked)
            this.saveChecked=!this.saveChecked
        },
        onLoggin() {
            //eve.holt@reqres.in   cityslicka
            //console.log('onLoggin:',email.value)
            console.log('onLoggin\t\t',this.email,this.password)
            let uri='https://reqres.in/api/login'
            this.$axios.post(uri,{"email":this.email,"password":this.password},{withCredentials: true})
            .then((res)=>{
                console.log('res\t\t', res)
            })
            .catch((Error)=>{
                console.log(Error)
            })
           
        },
        checkCookie() {
            let uri='http://localhost:1605/cookie'
            //let uri=`https://cors-anywhere.herokuapp.com/http://106.245.87.140:1605/data`
            //this.$axios.get(uri)
            this.$axios.get(uri,{withCredentials: true})

            .then((result)=>{
                console.log('GET from local', result.data)
            })
            .catch((Error)=>{
                console.log(Error)
            })

        },
        makeCookie2() {
            let uri='http://localhost:1605/cookie/test'
            this.$axios.post(uri,{id:'hj',passwd:'1234' }, {withCredentials: true})
            //this.$axios.get(uri)
            .then((res)=>{
                console.log('makeCookie2', res)
            })
            .catch((Error)=>{
                console.log(Error)
            })


        },
        makeCookie() {
            // let uri='http://106.245.87.140:1605/api/login'
            // //let uri=`https://cors-anywhere.herokuapp.com/http://106.245.87.140:1605/data`
            // this.$axios.post(uri,{id:4,name:'wj'})
            // .then((res)=>{
            //     console.log('POST to local', res.data)
            // })
            // .catch((Error)=>{
            //     console.log(Error)
            // })

            let uri=`https://cors-anywhere.herokuapp.com/http://106.245.87.140:1605/data`
            uri='http://106.245.87.140:1605/session/test2'
            uri='http://localhost:1605/session/test2'
            //this.$axios.defaults.withCredentials=true
            this.$axios.get(uri,{withCredentials: true})
            //this.$axios.get(uri)
            .then((res)=>{
                console.log('makeCookie', res)
            })
            .catch((Error)=>{
                console.log(Error)
            })


            // fetch('http://106.245.87.140:1605/session/test2',{credentials: 'include'})
            // .then((res)=>{
            //     console.log('makeCookie', res)
            // })
            // .catch((Error)=>{
            //     console.log(Error)
            // })

        },
        logOut() {
            // let uri='http://106.245.87.140:1605/api/logout'
            // //let uri=`https://cors-anywhere.herokuapp.com/http://106.245.87.140:1605/data`
            // this.$axios.post(uri,{id:4,name:'wj'})
            // .then((res)=>{
            //     console.log('POST to local', res.data)
            // })
            // .catch((Error)=>{
            //     console.log(Error)
            // })
            sessionStorage.clear();
            this.logEnable=!this.logEnable

        },
        logIn() {
            if(this.inputId=="") return
            console.log('hello='+this.inputId)
            //let uri='http://106.245.87.140:1605/api/login'
            //let uri=`https://cors-anywhere.herokuapp.com/http://106.245.87.140:1605/data`
            //this.$axios.post(uri,{id:4,name:this.inputId })
            //let key=this.inputId
            let uri='http://localhost:1605/api/login'

            this.$axios.post(uri,{id:this.inputId,passwd:this.inputPasswd },{withCredentials:true})
            .then((res)=>{
                console.log('POST to local', res.data)
                if(res.data.result=='okay') {
                    let value= {
                        user: this.inputId,
                        date:`${new Date().getMonth()+1}/${new Date().getDate()} `,
                        auth: true
                    }
                    sessionStorage.setItem(this.inputId,JSON.stringify(value))

                    console.log('-------->okay')
                    this.$router.push("/")
                }
                else console.log('------->result:',res.data)
                this.inputId=""

            })
            .catch((Error)=>{
                console.log(Error)
            })

            this.inputPasswd=""
        },
        hello() {
            if(this.inputId=="") return
            console.log('hello='+this.inputId)
            for(let i=0;i<this.users.length;i++) {
                console.log('username:',this.users[i].username)

                if(this.inputId===this.users[i].username) {
                    this.$store.commit('enable')
                    this.$router.push("/")
                    let value= {
                        user: this.inputId,
                        date:`${new Date().getMonth()+1}/${new Date().getDate()} `,
                        auth: true
                    }
                    sessionStorage.setItem(this.inputId,JSON.stringify(value))
                    //this.viewEnable=!this.viewEnable

                    break;
                }

            } 

            this.inputId=""
        },

    },

}

</script>
<style scoped>
.login {
    margin: auto;
    width: 90%;
}

.comment {
    text-align: right; 
    margin-bottom: 0px; 
    margin-left: 50px; 
    font-size:8px;
}

</style>