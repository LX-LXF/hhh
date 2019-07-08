// 配置路由
import VueRouter from "vue-router"

import HeroList from './views/heroes/HeroList.vue'
import WeaponsList from './views/weapons/WeaponsList.vue'
import EquipsList from './views/equips/EquipsList.vue'
// 添加英雄组件
import HeroAdd from './views/heroes/HeroAdd.vue'


import Vue from 'vue';

Vue.use(VueRouter)


const router = new VueRouter({
  // 实现高亮显示
  linkExactActiveClass: 'active',
  routes:[
    {name :'home' , path :'/' , redirect: '/heroes'},
    {name : 'heroes' , path:'/heroes' , component : HeroList },
    {name :'weapons' , path:'/weapons' , component: WeaponsList},
    {name :'equips' , path:'/equips' , component: EquipsList},
    {name :'heroesadd' , path:'/heroes/add' , component: HeroAdd},
  ]
})

export default router;