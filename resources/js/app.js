require('./bootstrap');

// Load Vue.js
import Vue from 'vue' 

// Load Vue Router
import router from './router'

Vue.component('mainapp', require('./components/mainapp.vue').default)
const app = new Vue({
    el: '#app',
    router
})
