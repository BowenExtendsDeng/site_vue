import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import './index.css'
import VueRouter from 'vue-router'
import router from './routers/index'
import axios from 'axios'
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.$url = "http://81.70.80.55:8849"
Vue.use(ElementUI)
Vue.use(VueRouter)

new Vue({
    render: h => h(App),
    router: router
}).$mount('#app')
