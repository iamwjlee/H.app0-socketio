<template>
    <div class="f-container">
        <div class="f-side">
            <div class="g-container0">
                <div class="g-item0">SK</div>
                <div class="g-item0">설정</div>
                <div class="g-item0">프린터</div>
                <div class="g-item0">포스</div>
                <div class="g-item0">충전기</div>
                <div class="g-item0">보안</div>
                <div class="g-item0">뒤로</div>
            </div>
        </div>
        <div class="f-body">
            <div class="g-container">
                <div @click="clickSetup(1)" class="g-item">
                    <div>단가설정</div>
                    <div>1000</div>
                    
                </div>
                <div @click="clickSetup(2)" class="g-item">
                    <div>포스카드</div>
                    <div>100</div>
                    
                </div>
                <div @click="clickSetup(3)" class="g-item">
                    <div>프리셋제한</div>
                    <div>ON</div>
                </div>
                <div @click="clickSetup(4)" class="g-item">
                    <div>거래처단가</div>
                    <div>ON</div>
                </div>
                <div @click="clickSetup2(5)" class="g-item">
                    <div>호기설정</div>
                    <div>3</div>
                </div>
                <div class="g-item">6</div>
                <div class="g-item">7</div>
                <div class="g-item">8</div>
                <div @click="clickSetup(6)" class="g-item">
                    <div>디폴트코드</div>
                    <div>08</div>
                </div>
                <div class="g-item">10</div>
                <div class="g-item">11</div>
                <div class="g-item">12</div>
            </div>

        </div>

    </div>
</template>

<script>
export default {
    props: {
       normalSetup: Object, 
    },
    data() {
        return {
            setupData : {
                cost: '',
                posCard: '',
                id:'',
                defaultCode: ''
            }
        }
    },
    methods: {
        clickSetup2(arg) {

        },
        clickSetup(arg) {
            if(arg==1) {
                this.setupData.cost=1234
                console.log('cost',this.setupData.cost)
            }
            this.$emit('normalSetup',this.setupData)
            

        },
    }
}
</script>

<style scoped>

.f-container {
    display: flex;
    height: 270px;
    margin: 0 4px;
}
.f-side {
    flex-grow: 1;
    width: 28px;
    background-color: #eee;
}
.f-body {
    flex-grow: 10;
    background-color: #ddd;
}

.g-container {
    display: grid;
    margin: 22px 6px;
    gap: 5px;
    /* margin: 0 auto; */
    grid-template-columns: repeat(4,1fr);
    grid-auto-rows: minmax(72px,auto);
    background-color: #bbb;
}

.g-container .g-item {
    background-color: #888;
    text-align: center;
    font-size: 16px;
    padding: 20 0;
}

.g-container0 {
    display: grid;
    margin: 12px 4px;
    gap: 4px;
    /* margin: 0 auto; */
    grid-template-columns: repeat(1,1fr);
    grid-auto-rows: minmax(32px,auto);
    background-color: #bbb;
}
.g-container0 .g-item0 {
    background-color: #888;
    text-align: center;
    font-size: 8px;
    padding: 2 0;
}

</style>