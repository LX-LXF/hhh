import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


//导入样式文件
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../src/assets/css/index.css'

import router from './router'
import axios from 'axios'

// 希望给Vue的实例增加成员 可以在Vue的构造函数的原型上增加成员
Vue.prototype.axios = axios

// 配置baseURL , 将来axios会自动把 baseURL和get（url）中的路径拼接起来
axios.defaults.baseURL = 'http://localhost:3000/'

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
