import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


//导入样式文件
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../src/assets/css/index.css'
import VueRouter from "vue-router"


Vue.use(VueRouter)


const router = new VueRouter({
  routes:[

  ]
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
