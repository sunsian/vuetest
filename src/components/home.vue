<template> 
    <div id="home" class="home">
        <router-view></router-view>
        <navbar></navbar>
    </div> 
</template>
<script>
import navbar from './navbar'
export default{
    name:'home',
    data(){
        return {
            totalNumber:''
        }
    },
    components:{
        navbar
    },
    methods:{

    },
    created(){
    }
}


</script>
<style lang="less">
.home{
    >div{
        margin-top:1.26rem;
    }
    .navbar{
        margin-top: 0;
    }
}

</style>