<template>
  <el-scrollbar>
	  <div @click="toX">{{name}}</div>
    <div class="scrollbar-flex-content">
      <p v-for="item in 50" :key="item" class="scrollbar-demo-item">
        {{ item }}
      </p>
    </div>
  </el-scrollbar>
  <div class="bottom" >
  	<div class="nav" @click="bg"><router-link to="/home">首页</router-link></div>
  	<div class="nav"><router-link to="/search?id=1&title='App'">搜索</router-link></div>
  	<div class="nav"><router-link to="/find">发现</router-link></div>
  	<div class="nav"><router-link to="/mine">我的</router-link></div>
  </div>
</template>
<script setup>
	import { defineProps,computed } from 'vue';
	import { ref ,nextTick} from 'vue'
	import { useRouter, useRoute } from 'vue-router'
	import { ElLoading } from 'element-plus'
	import {useUserStore} from "../store/user";
	
	const userStore = useUserStore()
	const name =  userStore.name
	// const name = computed(() => userStore.updateName="wangwu")
	
	const router = useRouter()
	let toX=function(){
		// 导航到路由，并传递query
		router.push({
		    path: '/x',
		    query: {
		      title: '666',
			  token:1242434212
		    }
		  })
	}
</script>


<style scoped>
	.bottom{display: flex;
	position: fixed;
	background: white;
	height: 6vh;
	line-height: 6vh;
	bottom: 0;
	left: 0;
	z-index: 99;}
	.nav{
		width: 25vw;
		text-align: center;
	}
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
.scrollbar-flex-content {
  display: flex;
}
.scrollbar-demo-item {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-danger-light-9);
  color: var(--el-color-danger);
}
</style>
