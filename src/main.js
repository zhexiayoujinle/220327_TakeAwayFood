/* 
    入口js
*/
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';

Vue.config.productionTip = false
Vue.prototype.$axios = axios;

new Vue({
    render: h => h(App),
    router, //使用上vue-router
    store,  //使用上vuex
    axios,
}).$mount('#app')
