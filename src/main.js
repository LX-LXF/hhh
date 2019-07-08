import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


//导入样式文件
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../src/assets/css/index.css'

// 配置路由
import VueRouter from "vue-router"

import HeroList from './views/heroes/HeroList.vue'


Vue.use(VueRouter)


const router = new VueRouter({
  routes:[
    {name :'home' , path :'/' , redirect: '/heroes'},
    {name : 'heroes' , path:'/heroes' , component :HeroList }
  ]
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
