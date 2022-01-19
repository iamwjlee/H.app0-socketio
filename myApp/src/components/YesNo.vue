<template>
    <div class="yesno">
        <div>{{argProps}} 할까요?</div>
        <div>
            <a @click="$emit('close',true)" class="item" href="#">Yes</a>
            <a @click="$emit('close',false)" class="item" href="#">No</a>
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

        }
    }
}
</script>

<style scoped>
.yesno {
    position: fixed;
    top: 130px;
    width: 200px;
    height: 140px;
    margin-left: 10%;
    background-color: #ddd;
    box-shadow: 5px 5px 5px 5px gray;
    text-align: center;

}
.item {
    display: inline-block;
    background: #b100f2;
    color: white;
    font-weight: bold;
    text-decoration: none;
    margin-left: 20px;    
    margin-top: 60px;
    padding: 10px 10px;
    width: 60px;

}
</style>