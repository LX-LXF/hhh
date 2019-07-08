<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">添加英雄</h2>
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
      <button class="btn btn-success" @click.prevent="add">提交</button>
    </form>
  </div>
</template>


<script>



export default {
    data() {
        return {
            // 绑定文本框
            formData:{
                name:'',
                gender:'男'
            }
        }
    },
    methods: {
        add(){
            this.axios
            .post('http://localhost:3000/heroes', this.formData)
            .then((response) =>{
                const status = response.status
                // 判断添加成功还是失败 
                if(status === 201){
                    // 成功 
                    // 3.跳转到列表组件
                    this.$router.push({name: 'heroes'})
                }else{
                    alert('失败')
                }
            })
            .catch((err) => {
                alias('服务器异常')
            })

        }
    },
};
</script>

<style>
</style>
