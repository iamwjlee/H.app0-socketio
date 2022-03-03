<template>
    <div class="top">Wtable component test
        <table class="customers">
            <tr >
                <th v-for="(list,index) in columns" :key="index" >
                    {{list.label}}  
                    <span v-if="list.sortable==true">

                    <i v-if="sortDir==false"  style="color:grey;" class="fas fa-arrow-down fa-1x" @click="test(list.field)"></i>
                    <i v-else  style="color:grey;" class="fas fa-arrow-up fa-1x" @click="test(list.field)"></i>
                    
                    </span>
                </th>
            </tr>
            <tr v-for="(list,index) in visibleSalesList" :key="index">
                <td v-for="(col,j) in columns" :key="j"> {{list[col.field] }}</td>
            </tr>
        </table>
        <div v-if="getTotalPages()>1">
        <p>Total Pages = {{currentPage+1}} of {{getTotalPages()}}</p>
        <button type="button" class="btn01" @click="show">show</button>
        <button type="button" class="btn01" @click="next"> ++ </button>
        <button type="button" class="btn01" @click="prev"> -- </button>
        </div>
    </div> 
    

</template>

<script>

export default {
    props: {
        // columns: String,
        // rows: String,
        // something: Array
        // product: Object
        columns: Object,
        rows: Object,
        // columns: {},
        // rows: {},
        // columns: [],
        // rows: [],
        //sortTest: Boolean,
        options: Object,
    },
    
    created() {
        //props의 경우 복사하여 그값을 마음대로 활용 할수 
        this.copyData=this.rows.slice()
        console.log('options.a:',this.options.a)
        console.log('options.pageSize:',this.options.pageSize)
    },
    mounted() {
        let index=this.currentPage*this.pageSize
        this.pageSize=this.options.pageSize
        this.visibleSalesList=this.copyData.slice(index,this.pageSize)
        console.log('WTable mounted',this.columns.length,this.copyData.length)

    },
    data() {
        return {
            event1: {
                type: '',
                value: '',
            },
            copyData: [], 
            visibleSalesList: [],
            currentPage: 0,
            pageSize: 10,
            sortDir: true,
        }
    },
    watch: {
        rows: function(v1) {
            console.log('watch rows:',v1)
            // this.copyData=v1.slice()
            this.copyData=v1
            let index=this.currentPage*this.pageSize
            this.pageSize=this.options.pageSize
            this.visibleSalesList=this.copyData.slice(index,this.pageSize)

        }
    },
    methods: {
        show() {
            console.log('show')
            this.event1.type='a'
            this.event1.value='b'

            this.$emit('event1',this.event1)
        },
        test(s) {
            // console.log('WTable press th',s)
            // this.event1.type='a'
            // this.event1.value='b'
            // this.$emit('event1',this.event1)

            console.log('sort test:',s,this.options.sortBy.field)

            let modifier=1
            if(this.sortDir==true) modifier=-1;
            this.copyData.sort(function(a,b){
                //if(s=='Id') {
                if(a[s] < b[s]) return 1*modifier
                if(a[s] > b[s]) return -1*modifier
                if(a[s] === b[s]) return 0
                //}
                //return a.odtId-b.odtId //숫자로 소팅

            })
            this.sortDir=!this.sortDir
            //console.log('sort',this.salesList)
            this.showPage()


        },
        getTotalPages() {
        return Math.ceil(this.copyData.length/this.pageSize)
        },
        showPage() {
            let index=this.currentPage*this.pageSize
            this.visibleSalesList=this.copyData.slice(index,index+this.pageSize)
        },

        next() {
            //console.log('next')
            this.currentPage++
            this.showPage()
        },
        prev() {
            this.currentPage--
            this.showPage()
        },

    }

}

</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 10px;
}
.top {
    margin: auto;
    width: 90%;
}

table,td,th {
  padding: 0 2px;
  border: 1px solid #ddd;
}
.customers {
  /* width: 100%;  */
  border-collapse: collapse;
  font-size: 10px;
  /* border: 1px solid black; */
}
.customers th {
  text-align: right;
  font-size: 0.8rem;
}
.customers td {
  text-align: right;  
  font-size: 0.8rem;
}
td:nth-child(1) {
    text-align: left;
}
th:nth-child(1) {
    text-align: left;
}
tr:nth-child(even){
  background-color: #f2f2f2;
  
}
tr:hover{
  background-color: #ddd;
}
.btn01 {
  width: 60px;
  height: 20px;
  margin-right: 4px;
}


</style>
