import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
//import store from './store'
import { createStore} from 'vuex'

//Create a new store insance
const store = createStore({
    state() {
        return {
            count: 0,
            message: 'Hello', //test
        }
    },
    mutations: {
        increment(state) {
            state.count++
        },
        enable(state) {
            state.count=1
        },
        changeMessage(state,msg){
            state.message=msg
        }
    },
    actions: {
        increment({commit}) {
            commit('increment')
        },
        callMutation({state,commit},{newMsg}){
            console.log('callMutataion',state.message)
            //commit('changeMessage',{state,newMsg})
            commit('changeMessage',newMsg)
        }
    },
    getters: {
        getMsg(state){
            return `${state.message} =>length:${state.message.length} `
        }
    }

})
// import "@/fontAwesomeIcon.js"; // fontAwesomeIcon.js ºÒ·¯¿È


//import vueGoodTablePlugin from 'vue-good-table'
//import 'vue-good-table/dist/vue-good-table.css'
//import Vue from 'vue'
//Vue.use(vueGoodTablePlugin)

//A simple notification libary for vue3
import Notifications from '@kyvg/vue3-notification'

// org
// createApp(App).use(router).mount('#app')

import axios from 'axios'  

const app=createApp(App)
app.config.globalProperties.my="11" //test, it's not global that i think
app.config.globalProperties.$axios=axios; //versiion2.xx prototype -> 

app.use(Notifications)
app.use(router)
app.use(store) //Install the store instance as a plugin

app.mount('#app')

//global variable



