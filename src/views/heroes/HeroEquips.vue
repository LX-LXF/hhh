<template>
    <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">编辑英雄</h2>
    <form>
      <div class="form-group">
        <label for="txtName">姓名</label>
        <input type="text" class="form-control" v-model="formData.name" id="txtName" placeholder="姓名" />
      </div>
      <div class="form-group">
        <label for="sex">性别</label>
        <select class="form-control" v-model="formData.gender"> 
            <option value="男">男</option>
            <option value="女">女</option>
        </select>
      </div>
      <!-- prevent 阻止默认行为的执行 -->
      <button class="btn btn-success">提交</button>
    </form>
  </div>
</template>

<script>


import axios from 'axios'


// 在组件中获取路由参数 $router.params.id
export default {
    props:['id'],
    data() {
        return {
            formData:{
                name:'',
                gender:'男'
            }
        }
    },
    // 组件加载完毕
    mounted(){
        this.loadDataByid()
    },
    methods:{
        // 根据id加载英雄数据
        loadDataByid(){
            // 发送请求
            axios
                .get(`http://localhost:3000/heroes/${this.id}`)
                .then((response) =>{
                    const {data , status} = response
                    if(status === 200) {
                        // 存储数据
                        this.formData = data
                    }
                })
        }
    }
}
</script>

<style>

</style>
