<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">英雄管理</h2>
    <a class="btn btn-success" href="add.html">Add</a>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>姓名</th>
            <th>性别</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item , index) in list" :key="item.id">
            <td>{{index + 1}}</td>
            <td>{{item.name}}</td>
            <td>{{item.gender}}</td>
            <td>
              <a href="edit.html">edit</a>
              &nbsp;&nbsp;
              <a href="javascript:window.confirm('Are you sure?')">delete</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { all } from 'q';

export default {
  data() {
    return {
      // 存储英雄列表数据
      list:[]
    }
  },
  // 组件加载完毕
  mounted() {
    // 发送请求 获取数据
    this.loadData()
  },
  methods:{
    // 发送请求 获取数据
  loadData(){
    axios
      .get('http://localhost:3000/heroes')
      .then((response)=>{
        // console.log(response)
        const {data , status} = response
        if(status === 200) {
          this.list = data
        }else {
          alert('失败')
        }
      })
      .catch((err) =>{
        alert('服务器异常')
      })
  }
  },
};
</script>

<style>
</style>
