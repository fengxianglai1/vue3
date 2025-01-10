<script setup>
	import { defineProps,computed, watch, watchEffect } from 'vue';
	import { ref ,nextTick,reactive } from 'vue'
	import { useRouter, useRoute } from 'vue-router'
	import { ElLoading } from 'element-plus'
	import {useUserStore} from "../store/user";
	
	const userStore = useUserStore()
	// const name = computed(() => userStore.name)
	// const name = computed(() => userStore.updateName="wangwu")
	let name=userStore.name='你们到底要怎样';
	let watchDemp = ref(1)
	const state = reactive({
	  count: 1,
	  name: 'Vue 3'
	});
	watch([state],(newval,oldval)=>{
		state.count=2233
		console.log('我是name',newval,oldval)
	},{
		immediate:true
	})
	// userStore.$patch((state)=>{
	// 	state.name="222"
	// })
</script>

<template>
  <main class="main">
	  {{state.count}}
     <!-- <TheWelcome /> -->
	 <div class="search" v-for="item in 10" :key="item" >
		 <div class="title">title</div>
		 <div class="content">content</div>
		 <div class="content">{{name}}</div>
	 </div>
	 <div class="bottom" >
	 	<div class="nav" @click="bg"><router-link to="/home">首页</router-link></div>
	 	<div class="nav"><router-link to="/search?id=1&title='App'">搜索</router-link></div>
	 	<div class="nav"><router-link to="/find">发现</router-link></div>
	 	<div class="nav"><router-link to="/mine">我的</router-link></div>
	 </div>
 </main> 
</template>


<style scoped>
	.el-menu{
		position: fixed;
		    bottom: 0;
		    width: 100%;
			left:0px;
	}
	.router-link-active{
		color: orange;
	}
	.el-menu--horizontal>.el-menu-item{
		/* width: 15vw; */
	}
	a {
	  text-decoration: none;
	  color:#000000;
	}
	.search{
		    padding: 1rem;
		    background: rgb(243 234 234);
		    border-radius: 0.6rem;
			margin-bottom: 10px;
			/* width: 100%; */
		/* .title{
			width: 100%;
		}
		.content{
			width: 100%;
		} */
		}
	.bottom{display: flex;
    position: fixed;
    background: white;
    height: 6vh;
    line-height: 6vh;
    bottom: 0;
    left: 0;
    z-index: 99;}
header {
  line-height: 1.5;
}
.nav{
	width: 25vw;
	text-align: center;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
