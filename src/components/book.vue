<template>
    <div class="book">
        <h2 @click="href(0)">book</h2>
        <ul>
            <li v-for="(item,index) in $router.options.routes">{{item.name}}</li>
        </ul>
        <router-link to="/hello" replace>hh</router-link>
        <h5 @click="foo()">{{bb}}
        </h5>
    </div>
</template>
<script>
const temP={
    template:'<h2>{{aa}}</h2>',
    props:['aa']
}
export default {
    name:'book',
    data(){
        return{
            bb:'back',
        }
    },
    created(){

    },
    mounted(){
        // var alp=document.getElementsByTagName('ul')
        // var al=alp[0].getElementsByTagName('li')
        // console.log(al)
        // al[0].style.fontSize="50px"
        // al[0].style.color="red";
    },
    methods:{
        href(index){
            this.$router.push({name:'Hello',query:{userId:33}})
            //this.$router.push({name:'Hello',params:{userId:1}})
            //this.$router.push({'HELLO',params:{userId:1}})
            //this.$router.replace('hello')

        },
        back(){
            this.$router.go(-1)
        },
        foo(){
            console.log(this.$router)
        }
    },
    components:{
        temP

    }
  
}
</script>

<style lang="less">
.book{
   
}
</style>