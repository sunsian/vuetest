<template>
  <div class="hello">
    <h1>{{ msg }}</h1> 
    <h1>{{res}}</h1>
    <h4 @click="href(res)">条钻图片</h4>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      res: this.$route.query.userId,
    }
  },
  created(){
    this.getData()
  },
  mounted(){
    console.log(this.$route.params.userId)
  },
  methods: {
    getData () {
      console.log(this.$route)
      console.log(this.$route.query)
      console.log(this.$route.query.userId)

function checkAdult(age) {
    return age.meta.requiresAuth;
}
console.log(this.$route.matched.some)

console.log(this.$route.matched.some(checkAdult))

      var that =this
      // axios.get('http://10.2.54.21:8888/123',{"sid":"1"}).then(function (response) {
      //   //console.log(response);
      //   //console.log(JSON.parse(response.data));
      //   that.res=JSON.parse(response.data).items[0].title
      // })





    },
    href(id){
    	this.$router.push({path:'photo/:'+id})

    }

  },
  computed:{
    aa(){
      return this.$route.query.userId
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
