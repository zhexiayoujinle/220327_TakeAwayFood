/* 
    入口js
*/
import Vue from 'vue'
import { Button } from 'mint-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';

// 加载mockserver
import './mock/mockServer'

Vue.config.productionTip = false
Vue.prototype.$axios = axios;
// 注册全局组件标签
Vue.component(Button.name, Button)   // <mt-button>

new Vue({
    render: h => h(App),
    router, //使用上vue-router
    store,  //使用上vuex
    axios,
}).$mount('#app')
