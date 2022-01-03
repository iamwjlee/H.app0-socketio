import { createApp } from 'vue'

import App from './App.vue'
import router from './router'


// import "@/fontAwesomeIcon.js"; // fontAwesomeIcon.js ºÒ·¯¿È


//import vueGoodTablePlugin from 'vue-good-table'
//import 'vue-good-table/dist/vue-good-table.css'
//import Vue from 'vue'
//Vue.use(vueGoodTablePlugin)

//A simple notification libary for vue3
import Notifications from '@kyvg/vue3-notification'

// org
// createApp(App).use(router).mount('#app')

const app=createApp(App)
app.use(Notifications)
app.use(router)

app.mount('#app')



