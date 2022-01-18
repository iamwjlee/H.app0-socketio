<template>
    <div class="hello">
        <div class="j-display">
            <div class="item">{{argProps}}을 입력하십시요</div>
            {{current||'0'}}
        </div>
        <div @click="append(1)" class="j-key">1</div>
        <div @click="append(2)" class="j-key">2</div>
        <div @click="append(3)" class="j-key">3</div>
        <div @click="slice" class="j-key operator">back</div>
        <div @click="append(4)" class="j-key">4</div>
        <div @click="append(5)" class="j-key">5</div>
        <div @click="append(6)" class="j-key">6</div>
        <div >empty</div>
        <div @click="append(7)" class="j-key">7</div>
        <div @click="append(8)" class="j-key">8</div>
        <div @click="append(9)" class="j-key">9</div>
        <div @click="$emit('close',false)" class="j-key operator">cancel</div>
        <div>empty</div>
        <div @click="append(0)" class="j-key">0</div>
        <div class="j-key">.</div>
        <div @click="okay" class="j-key operator">okay</div>

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


        }
    },
    methods: {
        append(num) {
            this.current=`${this.current}${num}`
        },   
        okay() {
            console.log('okay',this.current,this.argProps)
            // if(this.argProps=='amount') this.result.type='amount'
            // else if(this.argProps=='liter') this.result.type='liter'
            // else if(this.argProps=='defaultCode') this.result.type='defaultCode'
            // else if(this.argProps=='pumpId') this.result.type='pumpId'
            // else if(this.argProps=='cost') this.result.type='cost'
            // else if(this.argProps=='posCard') this.result.type=this.argProps
            this.result.type=this.argProps
            this.result.value=this.current
            this.$emit('result',this.result)
        },
        slice() {
            this.current=this.current.slice(0,-1)
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
    top: 120px;
    width: 200px;
    margin-left: 8%; 
    
    /* width: 200px;
    margin: 0 auto; */

    background-color: slategray;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-auto-rows: minmax(42px,auto);

    gap: 2px;
    opacity: 1;
}
.j-display {
    grid-column: 1/5;
    grid-row: 1/3;

    background-color: tan;
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
.operator {
    background-color: orange;
    color: whitesmoke;
}
.item {
    text-align: center;
    font-size: 12px;
    padding: 0 0 20px 0;

}
</style>