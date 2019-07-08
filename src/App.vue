<template>
  <div id="app">
    <!-- 头部提取 放入提取的标签名 -->
    <app-header></app-header>
    
    <div class="container-fluid">
      <div class="row">
        <!-- 提取侧边栏 放入组件的标签名 标签内全部小写-->
        <app-silder></app-silder>
        
        <!-- 这是路由对象组件显示的位置 -->
        <router-view></router-view>
      </div>
    </div>
    
  </div>
</template>
<script>
import HelloWorld from "./components/HelloWorld.vue";
import AppHeader from "./components/AppHeader.vue";
import AppSilder from "./components/AppSilder.vue";


export default {
  name: "app",
  components: {
    HelloWorld,
    AppHeader,
    AppSilder
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
