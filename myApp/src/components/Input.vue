<template>
    <div class="input-back">
    <div  class="wrapper">
        <div class="top">
            <div class="item">{{argProps}} Setting</div>
            {{current || '0'}}
        </div>

        <div @click="append(1)" class="c1">1</div>
        <div @click="append(2)" class="c2">2</div>
        <div @click="append(3)" class="c3">3</div>
        <div @click="slice" class="back">back</div>

        <div @click="append(4)" class="c4">4</div>
        <div @click="append(5)" class="c5">5</div>
        <div @click="append(6)" class="c6">6</div>
        <div class="empty1">empty1</div>

        <div @click="append(7)" class="c7">7</div>
        <div @click="append(8)" class="c8">8</div>
        <div @click="append(9)" class="c9">9</div>
        <div class="cancel" @click="$emit('close',false)">cancel</div>

        <div class="empty2">empty2</div>
        <div @click="append(0)" class="c0">0</div>
        <div class="under">under</div>
        <div @click="okay" class="ok">ok</div>

    </div>
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
            console.log('okay:'+this.current+' argProps:' +this.argProps)
            // this.$emit('result',this.current)
            if(this.argProps=='amount') this.result.type='a'
            else if(this.argProps=='liter') this.result.type='l'
            else if(this.argProps=='setup') this.result.type='s'
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
.input-back {
    /* display: block; */
    position: fixed;
    /* width: 100%; */
    top: 120px;
    width: 300px;
    opacity: 0.9;
    margin-left: 20px;
    background-color: rgb(120, 148, 228);
    color: black;

}

.wrapper {
    
    margin: 4px;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-template-rows: repeat(6,60px);
    /* grid-template-rows: minmax(60px,auto); */
    grid-template-areas: 
    "top top top top"
    "top top top top"
    "c1  c2  c3  back"
    "c4  c5  c6  empty1"
    "c7  c8  c9  cancel"
    "empty2  c0  under  ok"
    ;
    grid-gap: 5px;
    font-size: 16px;
    /* width: 400px; */
}
.top{
    grid-area: top;
    background-color: rgb(218, 236, 197) ;
    font-size: 42px;
    font-weight: bold;
    text-align: center;
}
.top .item {
    font-weight: normal;
    font-size: 20px;
}
.c1{
    grid-area: c1;
    background-color: whitesmoke ;
}
.c2{
    grid-area: c2;
    background-color: whitesmoke ;
}
.c3{
    grid-area: c3;
    background-color: whitesmoke ;
}
.c4{
    grid-area: c4;
    background-color: whitesmoke ;
}
.c5{
    grid-area: c5;
    background-color: whitesmoke ;
}
.c6{
    grid-area: c6;
    background-color: whitesmoke ;
}
.c7{
    grid-area: c7;
    background-color: whitesmoke ;
}
.c8{
    grid-area: c8;
    background-color: whitesmoke ;
}
.c9{
    grid-area: c9;
    background-color: whitesmoke ;
}
.c0{
    grid-area: c0;
    background-color: whitesmoke ;
}
.empty1{
    grid-area: empty1;
    background-color: rgb(218, 236, 197) ;
}
.empty2{
    grid-area: empty2;
    background-color: rgb(218, 236, 197) ;
}

.back{
    grid-area: back;
    background-color: whitesmoke ;
}
.under{
    grid-area: under;
    background-color: whitesmoke ;
}
.cancel{
    grid-area: cancel;
    background-color: whitesmoke ;
    color: red;
}

.ok{
    grid-area: ok;
    background-color: whitesmoke ;
    color: green;
}


</style>