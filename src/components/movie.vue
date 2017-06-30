<template>
<div class="movie">
	<nav>
		<ul>
			<li v-for="(item,index) in navs" @click="getData(item.api,item.number,0)" :class="{'active':isActive===index}" v-text="item.text"></li>
		</ul>
	</nav>
	<iscroll-view class="scroll-view" @pullUp="loadMore" @pullDown="refresh" ref="iscroll" @scrollEnd="scrollEnd">
		<div class="movie-list">
			<div class="movie-item" v-for="item in movies">
				<div class="movie-vatar">
					<img :src="item.images.large!=''?item.images.large:'static/images/3.jpg'">
				</div>
				<div class="movie-dec">
					<h5 v-text="item.title">肖申克的救赎</h5>
					<p><span v-for="genre in item.genres" v-text="genre"></span>({{item.year}})(平均<!-- {{item.rating.average}} -->分)</p>
				</div>
			</div>
		</div>
	</iscroll-view>
</div>	
</template>
<script>

export default{
	name:'movie',
	data(){
		return {
			title:"movie",
			movies:[],
			navs:[
				{text:'top250',number:0,api:'top250'},			
				{text:'正在上映',number:1,api:'in_theaters'},
				{text:'即将上映',number:2,api:'coming_soon'}
			],
			isActive:'0',
			caches:[
				{'top250':[],y:0},
				{'in_theaters':[],y:0},				
				{'coming_soon':[],y:0}
			]

		}
	},
	created(){
		
	},
	mounted(){
		//const $scroller = this.$refs.iscroll.$refs.scroller
		this.getData('top250',0,0)
	},
	methods:{
		
		getData(api,num,start){
			var that = this;
			var _api = api
			this.isActive=num;

			that.$refs.iscroll.scrollTo(0,that.caches[num].y,100)
				

			if(that.caches[num][api].length!='0' && start=='0'){
				that.movies=that.caches[num][api]
			}else{
				this.$http.get('http://localhost:8080/movie/'+api+'?count=10&start='+start).then(function (response) {
					console.log(response)
					if (response.status=="200") {
						// if (_api=='top250') {
						// 	if(JSON.stringify(that.caches[0].top250)!= JSON.stringify(response.data.subjects)){
						// 		for(var k in response.data.subjects){

						// 				that.caches[0].top250.push(response.data.subjects[k])
						// 		}
								

						// 	}
							
						// }if (_api=='in_theaters') {
						// 	that.caches[1].in_theaters=response.data.subjects

						// }if (_api=='coming_soon') {
						// 	that.caches[2].coming_soon=response.data.subjects

						// }
						
						if(JSON.stringify(that.caches[num][_api])!= JSON.stringify(response.data.subjects)){
							for(var k in response.data.subjects){
								console.log(k)
								that.caches[num][_api].push(response.data.subjects[k])
							}
						}
						
						// if(start=='0'){
						// 	that.movies=that.caches[num][_api]
						// }else{
							
						// }
						that.movies=that.caches[num][_api]
						
						// for (var i = 0; i < that.caches.length; i++) {

						// 	for(var k in that.caches[i]){
						// 		if(k==_api){
						// 			if(start=='0'){
						// 				that.movies=that.caches[i][k]
						// 			}else{
						// 				that.movies=that.movies.concat(that.caches[i][k])
						// 			}

									
						// 		}

						// 	}

						// }	



					}
				})



			}

			console.log(that.movies)


			this.$refs.iscroll.refresh()
		},
		loadMore(){
			var start= this.movies.length
			var api=this.navs[this.isActive].api;
			console.log(start)
			this.getData(api,this.isActive,start)
		},
		refresh(){
			console.log('刷新')
		},
		scrollEnd(iscroll){
			this.caches[this.isActive].y=iscroll.y
		},

		

	}
}
	
</script>
<style lang="less" scoped>
html{
	font-size: 100px;
}
h1{
	font-size: 0.20rem;
	font-weight: 400;
	height: 0.64rem;
	line-height: 0.64rem;
}
nav {
	height: 0.96rem;
	line-height: 0.96rem;
	background:#2196f3;
	color:rgba(255,255,255,0.54);
	ul {
		overflow: hidden;
		li{
			float: left;
			width: 33.33%;
			height: 0.96rem;
			box-sizing: border-box;
			font-size: 0.32rem;
			font-weight: 700;
			border-bottom: 2px solid #ccc;
		}
		li.active{
			border-color: red;
			color:rgba(255,255,255,0.87);
		}
	}
}
.scroll-view {
  /* -- Attention: This line is extremely important in chrome 55+! -- */
  touch-action: none;
  /* -- Attention-- */
  position: fixed;
  top: 2.24rem;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
}
.movie-list{
	.movie-item{
		border-bottom: 1px solid #ccc;
		padding: 0.20rem 0;
		overflow: hidden;
		height: 0.88rem;
		cursor: pointer;
		.movie-vatar{
			float: left;
			padding-left: 0.20rem;
			height: 0.80rem;
			img{
				width: 0.80rem;
				height: 0.80rem;
				border-radius: 50%;
			}
		}
		.movie-dec{
			padding-left: 1.20rem;
			padding-right: 0.20rem;
			padding-top: 0.10rem;
			height: 0.60rem;
			text-align: left;
			h5{
				font-size: 0.32rem;
				color:rgba(0,0,0,0.87)
			}
			p{
				font-size: 0.28rem;
				color:rgba(0,0,0,0.54)
			}
		}

	}
}

	
</style>