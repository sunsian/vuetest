<template>
  <div class="hello">
    <h1 class="user-avater"><img src="../assets/images/3.jpg"></h1>
    <div class="label-group">
      <i class="iconfont icon-caigoutonggerenbangaobaozhenzhucedenglu19-copy"></i>
      <label for="user-name"></label>
      <input type="text" name="user-name" v-model="userName">
    </div>
    <div class="label-group">
      <i class="iconfont icon-zhenshixingming2"></i>
      <label for="user-pw"></label>
      <input type="text" name="user-pw" v-model="userPw">
    </div>
    <div class="btn-bar">
    <button class="btn btn-login" @click="login">登录</button>
    <button class="btn btn-register">注册</button>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      
        userName: '',
        userPw: ''
    }
  },
  methods:{
    login(){
      var userName=this.userName;
      var userPw=this.userPw;
      this.$router.push({name:'Hello'})

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.hello{
  width: 100%;
  height: 100%;
  background: url(../assets/images/login_bg.jpg) no-repeat center;
  background-size: 100% 100%;
  .user-avater{
    padding-top: 1.8rem;
    img{
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
    }
  }
  .label-group{
    width: 60%;
    margin:0 auto 0.80rem;
    position: relative;
    border-bottom: 0.01rem solid #fff;
    padding-bottom: 0.10rem;
    font: 0.30rem Arial;
    color: #fff;
    i{
      font-size: 0.30rem;
      color: #fff;
      float: left;


    }
    label{
      float: left;


    }
    input{
      padding-left: 0.40rem;
      height: 0.30rem;
      line-height: 0.30rem;
      background: none;
      font: 0.30rem Arial;
      color: #fff;
    }

  }
  .btn-bar{
    width: 55%;
    margin:0.40rem auto 0;
    
    color: #fff;
    .btn{
      display: inline-block;
      padding: 0.10rem 0.40rem;

      background: green;
      margin: 0 0.10rem; 
      font: 0.40rem Arial;
      color: #fff;

    }
  }
}


</style>
