// 配置路由
import VueRouter from "vue-router"

import HeroList from './views/heroes/HeroList.vue'
import WeaponsList from './views/weapons/WeaponsList.vue'
import EquipsList from './views/equips/EquipsList.vue'
// 添加英雄组件
import HeroAdd from './views/heroes/HeroAdd.vue'
import HeroEquips from './views/heroes/HeroEquips.vue'


import Vue from 'vue';

Vue.use(VueRouter)


const router = new VueRouter({
  // 实现高亮显示
  // 当url中的地址，跟a标签的href中的地址精确匹配的时候 添加类样式
  // linkExactActiveClass: 'active',

  // 当url中的地址，跟a标签的href中的路由地址的时候 添加类样式
  linkActiveClass: 'active',
  routes:[
    {name :'home' , path :'/' , redirect: '/heroes'},
    {name : 'heroes' , path:'/heroes' , component : HeroList },
    {name :'weapons' , path:'/weapons' , component: WeaponsList},
    {name :'equips' , path:'/equips' , component: EquipsList},
    {name :'heroesadd' , path:'/heroes/add' , component: HeroAdd},
    {name :'heroesedit' , path:'/heroes/edit/:id' , component:HeroEquips , props:true}
  ]
})
// 导出
export default router;