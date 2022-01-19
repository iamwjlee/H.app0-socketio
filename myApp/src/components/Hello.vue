<template>
    <div class="hello">
        <div class="j-display">
            <div class="item">{{argProps}}를 입력하십시요</div>
            <!-- {{current||'0'}}  -->
            {{currentDisplay||'0'}}
        </div>
        <div @click="append(1)" class="j-key">1</div>
        <div @click="append(2)" class="j-key">2</div>
        <div @click="append(3)" class="j-key">3</div>
        <div @click="slice" class="j-key operator">C</div>
        <div @click="append(4)" class="j-key">4</div>
        <div @click="append(5)" class="j-key">5</div>
        <div @click="append(6)" class="j-key">6</div>
        <div @click="test" >test</div>
        <div @click="append(7)" class="j-key">7</div>
        <div @click="append(8)" class="j-key">8</div>
        <div @click="append(9)" class="j-key">9</div>
        <div @click="$emit('close',false)" class="j-key operator">취소</div>
        <div></div>
        <div @click="append(0)" class="j-key">0</div>
        <div class="j-key">.</div>
        <div @click="okay" class="j-key operator">확인</div>

    </div>
</template>

<script>
export default {
    props: {
        argProps: String,
    },
    data() {
        return {
            current: '',
            result : {
                type: "",
                value: "",
            },
            currentDisplay: '',
            digit: 0


        }
    },
    created() {
        this.digit=0
    },
    computed: {
        amountDisplay() {
            return Number(this.current).toLocaleString()
        }
    },
    methods: {
        test() {
            console.log('argProps',this.argProps)
            let tmp
            tmp=Number(this.current).toLocaleString()
            console.log('current',tmp)
        },
        append(num) {
            if(this.argProps=="금액" || this.argProps=="단가") {
                this.current=`${this.current}${num}`
                this.currentDisplay=Number(this.current).toLocaleString()
            }
            else if(this.argProps=="리터") {
                this.current=`${this.current}${num}`
                this.currentDisplay=(this.current/1000).toFixed(3)
            }
            else if(this.argProps=="호기") {
                this.current=`${this.current}${num}`
                this.currentDisplay=this.current

            }
            else if(this.argProps=="최대충전량") {
                this.current=`${this.current}${num}`
                this.currentDisplay=this.current
            }
            else if(this.argProps=="차량번호") {
                if(this.digit < 6) {
                    this.current=`${this.current}${num}`
                    this.digit++
                    this.currentDisplay=this.current.slice(0,2)+'-'+this.current.slice(2)
                }
            }
        },   
        okay() {
            // console.log('okay',this.current,this.argProps)
            this.result.type=this.argProps
            this.result.value=this.current
            this.$emit('result',this.result)
        },
        slice() {
            this.current=this.current.slice(0,-1)
            if(this.argProps=="금액" || this.argProps=="단가") this.currentDisplay=Number(this.current).toLocaleString()
            else if(this.argProps=="리터") this.currentDisplay=(this.current/1000).toFixed(3)
            else if(this.argProps=="호기" || this.argProps=="최대충전량") this.currentDisplay=this.current
            else if(this.argProps=="차량번호") {
                if(this.digit>0) this.digit--
                this.currentDisplay=this.current.slice(0,2)+'-'+this.current.slice(2)
            }
        }    

    },


}
</script>

<style scoped>
.hello {
    /* 
    팝업창을 띄우면 충전량 변화하는게 겹쳐서 같이 보임!!!! 
    */
    position: fixed;
    top: 130px;
    width: 200px;
    height: 240px;
    margin-left: 10%; 
    
    /* width: 200px;
    margin: 0 auto; */

    background-color: #ddd;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-auto-rows: minmax(32px,auto);

    gap: 2px;
    opacity: 1;
    box-shadow: 5px 5px 5px 5px gray;
}
.j-display {
    grid-column: 1/5;
    grid-row: 1/3;

    background-color: #ddd;
    text-align: center;
    font-size: 22px;
    font-weight: bold;
    padding: 0 0;

}
.j-key {
    background-color: white;
    border: 1px solid black;
    text-align: center;
    font-size: 20px;
    /* padding: 20px 0; */
}
/* .operator {
    background-color: orange;
    color: whitesmoke;
} */
.item {
    text-align: center;
    font-size: 12px;
    padding: 0 0 20px 0;

}
</style>