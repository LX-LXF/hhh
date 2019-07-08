import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


//导入样式文件
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../src/assets/css/index.css'

// 配置路由
import VueRouter from "vue-router"

import HeroList from './views/heroes/HeroList.vue'
import WeaponsList from './views/weapons/WeaponsList.vue'
import EquipsList from './views/equips/EquipsList.vue'


Vue.use(VueRouter)


const router = new VueRouter({
  linkExactActiveClass: 'active',
  routes:[
    {name :'home' , path :'/' , redirect: '/heroes'},
    {name : 'heroes' , path:'/heroes' , component : HeroList },
    {name :'weapons' , path:'/weapons' , component: WeaponsList},
    {name :'equips' , path:'/equips' , component: EquipsList},
  ]
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
