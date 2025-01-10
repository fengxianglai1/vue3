<template>
  <div class="infinite-list-wrapper" style="overflow: auto">
	  <div class="header">
		  <div><img class="headerImg" src="../assets/logo.png"/><span class="name">苍茫951</span></div>
		  <div style="font-size: 1.5rem;">></div>
	  </div>
	  <ul class="ul">
	  		  <li>
	  			  <div>1</div>
	  			  <div>关注</div>
	  		  </li>
	  		  <li>
	  			  <div>1</div>
	  			  <div>关注</div>
	  		  </li>
	  		  <li>
	  			  <div>1</div>
	  			  <div>訪問</div>
	  		  </li>
	  		  <li>
	  			  <div>1</div>
	  			  <div>排名</div>
	  		  </li>
	  </ul>
	  <div class="gzd">
		  <div>关注度</div>
		  <ul class="ul content">
		  		  <li>
		  			  <div>1</div>
		  			  <div>关注</div>
		  		  </li>
		  		  <li>
		  			  <div>1</div>
		  			  <div>关注</div>
		  		  </li>
		  		  <li>
		  			  <div>1</div>
		  			  <div>訪問</div>
		  		  </li>
		  		  <li>
		  			  <div>1</div>
		  			  <div>排名</div>
		  		  </li>
		  </ul>
	  </div>
	  
	  <ul class="ul">
		  <li>
			  <div>1</div>
			  <div>关注</div>
		  </li>
		  <li>
			  <div>1</div>
			  <div>关注</div>
		  </li>
		  <li>
			  <div>1</div>
			  <div>訪問</div>
		  </li>
		  <li>
			  <div>1</div>
			  <div>排名</div>
		  </li>
	  </ul>
	  <div class="gzd">
	  		  <div>关注度</div>
	  		  <ul class="ul content">
	  		  		  <li>
	  		  			  <div>1</div>
	  		  			  <div>关注</div>
	  		  		  </li>
	  		  		  <li>
	  		  			  <div>1</div>
	  		  			  <div>关注</div>
	  		  		  </li>
	  		  		  <li>
	  		  			  <div>1</div>
	  		  			  <div>訪問</div>
	  		  		  </li>
	  		  		  <li>
	  		  			  <div>1</div>
	  		  			  <div>排名</div>
	  		  		  </li>
	  		  </ul>
	  </div>
	  <div class="gzd">
	  		  <div>关注度</div>
	  		  <ul class="ul content">
	  		  		  <li>
	  		  			  <div>1</div>
	  		  			  <div>关注</div>
	  		  		  </li>
	  		  		  <li>
	  		  			  <div>1</div>
	  		  			  <div>关注</div>
	  		  		  </li>
	  		  		  <li>
	  		  			  <div>1</div>
	  		  			  <div>訪問</div>
	  		  		  </li>
	  		  		  <li>
	  		  			  <div>1</div>
	  		  			  <div>排名</div>
	  		  		  </li>
	  		  </ul>
	  </div>
	  <div class="gzd">
	  		  <div>关注度</div>
	  		  <ul class="ul content">
	  		  		  <li>
	  		  			  <div>1</div>
	  		  			  <div>关注</div>
	  		  		  </li>
	  		  		  <li>
	  		  			  <div>1</div>
	  		  			  <div>关注</div>
	  		  		  </li>
	  		  		  <li>
	  		  			  <div>1</div>
	  		  			  <div>訪問</div>
	  		  		  </li>
	  		  		  <li>
	  		  			  <div>1</div>
	  		  			  <div>排名</div>
	  		  		  </li>
	  		  </ul>
	  </div>
	  
    <ul
	id="ul"
      v-infinite-scroll="load"
      class="list"
      :infinite-scroll-disabled="disabled"
    >
      <li v-for="i in count" :key="i" class="list-item">{{ i }}</li>
    </ul>
    <p v-if="loading">Loading...</p>
    <p v-if="noMore">No more</p>
	<div class="bottom" >
		<div class="nav" @click="bg"><router-link to="/home">首页</router-link></div>
		<div class="nav"><router-link to="/search?id=1&title='App'">搜索</router-link></div>
		<div class="nav"><router-link to="/find">发现</router-link></div>
		<div class="nav"><router-link to="/mine">我的</router-link></div>
	</div>
  </div>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue'



window.addEventListener('scroll', function() {
    console.log('页面正在滚动！');
})
const count = ref(10)
const loading = ref(false)
const noMore = computed(() => count.value >= 20)
const disabled = computed(() => loading.value || noMore.value)
const load = () => {
  loading.value = true
  setTimeout(() => {
    count.value += 2
    loading.value = false
  }, 2000)
}
</script>

<style scoped>
	.content{
		padding-top: 0px !important;
	}
	.gzd{
		    background: #f4f1f1;
		    border-radius: 0.5rem;
			padding: 0.8rem 0.8rem 0;
	}
	.name{
		position: relative;
		top: -43px;
		margin-left: 0.8rem;
	}
	.headerImg{
		border-radius: 50%;
	}
	.header{
		display: flex;
		justify-content: space-between;
		padding-top:0.8rem;
	}
	.ul{
		display: flex;
		flex: 1;
		justify-content: space-between;
		list-style-type: none;
		padding: 0.8rem;
		text-align: center;
	}
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
	#ul{
		/* margin-bottom:10vh */
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
.infinite-list-wrapper {
  /* height: 300px; */
  padding-bottom:40px;
  /* text-align: center; */
}
.infinite-list-wrapper .list {
  padding: 0;
  margin: 0;
  list-style: none;
}

.infinite-list-wrapper .list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background: var(--el-color-danger-light-9);
  color: var(--el-color-danger);
}
.infinite-list-wrapper .list-item + .list-item {
  margin-top: 10px;
}
</style>
