<template>
<div class="navbar">
    <div class="nav-top">
        <span class="btn btn-left"><i class="iconfont icon-zhenshixingming2"></i></span>
        <h2 v-text="titles[isActive].name"></h2>
        <span class="btn btn-right"><i class="iconfont icon-zhenshixingming2"></i></span>
    </div>
    <div class="nav-bottom">    
        <ul>
<!--         <li :class="{'active':isActive===0}" @click="doAction(0)"><router-link to="/movie"><i class="iconfont icon-caigoutonggerenbangaobaozhenzhucedenglu19-copy"></i>电影</router-link></li>
        <li :class="{'active':isActive===1}" @click="doAction(1)"><router-link to="/music"><i class="iconfont icon-caigoutonggerenbangaobaozhenzhucedenglu19-copy"></i>音乐</router-link></li>
        <li :class="{'active':isActive===2}" @click="doAction(2)"><router-link to="/book"><i class="iconfont icon-caigoutonggerenbangaobaozhenzhucedenglu19-copy"></i>书籍</router-link></li>
        <li :class="{'active':isActive===3}" @click="doAction(3)"><router-link to="/photo"><i class="iconfont icon-caigoutonggerenbangaobaozhenzhucedenglu19-copy"></i>图片</router-link></li> -->
        
        </ul>
    </div>
</div>

</template>
<script>
    export default{
        name:'navbar',
        props:{
        navA:{
            validator:function (value) {
                return value > 10
            }
        } 
    },
    data(){
        return {
            isActive:0,
        }
    },
    methods:{
        doAction(index){
            this.isActive=index;
            this.$router.push({path:this.titles[index].path})
            console.log(this.titles[index].path)
            console.log(this.$route)
        }
    },
    computed:{
        titles(){
            // 循环遍历路由 得到name
            var items=this.$router.options.routes[1].children;
            return items
        }
    },
    created(){


    }
}
</script>

<style lang="less">
.nav-top{
    position:fixed;
    top:0;
    width:100%;
    height:1.28rem;
    background:#2196f3;
    color:rgba(255,255,255,0.87);
    .btn{
        width:0.80rem;
        height:1.28rem;
        position:absolute;
        top:0;
        i{
            font-size:0.60rem;
        }
    }
    .btn-left{
        left:0
    }
    .btn-right{
        right:0;
    }
    h2{
        height:1.28rem;
        line-height:1.28rem;
        padding:0 1.00rem;
        text-align:center;
        font-size:0.40rem;
    }
}
.nav-bottom{
    position:fixed;
    bottom:0;
    width:100%;
    height:1.12rem;
    padding:0.15rem 0;
    box-sizing:border-box;
    overflow:hidden;
    background:#2196f3;
    ul{
        li{
            width:25%;
            float:left;  
            font-size:0.28rem;
            a{
                color:rgba(255,255,255,0.54);                
                i{
                    display:block;
                    font-size:0.36rem;
                    margin-bottom:0.10rem;
                } 
            }
        }
        li.active{
            a{
                color:rgba(255,255,255,0.87)
            }
        }
    }
}
</style>