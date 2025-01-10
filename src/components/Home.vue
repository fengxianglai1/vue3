<script setup>
	import { useRouter, useRoute } from 'vue-router'
	import { onMounted, ref } from 'vue'
	import { computed } from 'vue';
	import {useUserStore} from "../store/user";
	const count = ref(3)
	const userStore = useUserStore()
	const name = computed(() => userStore.name)
	const add = () => {
	  count.value++
	}
	onMounted((router) => {
		const route=useRoute()
		console.log(route.query)
	      // 执行一次性副作用dss
	    });
		
	
	const onDelete = () => {
	  if (count.value > 0) {
	    count.value--
	  }
	}
	
	const tableData = [
	  {
	    date: '2016-05-03',
	    name: 'Tom',
	    address: 'No. 189, Grove St, Los Angeles',
	  },
	  {
	    date: '2016-05-02',
	    name: 'Tom',
	    address: 'No. 189, Grove St, Los Angeles',
	  },
	  {
	    date: '2016-05-04',
	    name: 'Tom',
	    address: 'No. 189, Grove St, Los Angeles',
	  },
	  {
	    date: '2016-05-01',
	    name: 'Tom',
	    address: 'No. 189, Grove St, Los Angeles',
	  },
	]
</script>

<template>
  <main class="main">
	  {{name}}
	  title:{{$route.query.title }}
     <!-- <TheWelcome /> -->
	 <div class="block text-center">
	     <el-carousel height="150px">
	       <el-carousel-item v-for="item in 4" :key="item">
	         <h3 class="small justify-center" text="2xl">{{ item }}</h3>
	       </el-carousel-item>
	     </el-carousel>
	   </div>
	   
	   <!-- <div class="block text-center" m="t-4">
	     <span class="demonstration">Switch when indicator is clicked</span>
	     <el-carousel trigger="click" height="150px">
	       <el-carousel-item v-for="item in 4" :key="item">
	         <h3 class="small justify-center" text="2xl">{{ item }}</h3>
	       </el-carousel-item>
	     </el-carousel>
	   </div> -->
	  <el-button @click="add">Add Item</el-button>
	  <el-button @click="onDelete">Delete Item</el-button>
	  <el-scrollbar>
	    <p v-for="item in count" :key="item" class="scrollbar-demo-item">
	      {{ item }}
	    </p>
	  </el-scrollbar>
	  <div class="bottom" >
	  	<div class="nav"><el-icon><ChatSquare /></el-icon><router-link to="/home">首页</router-link></div>
	  	<div class="nav"><router-link to="/search?id=1&title='App'">搜索</router-link></div>
	  	<div class="nav"><router-link to="/find">发现</router-link></div>
	  	<div class="nav"><router-link to="/mine">我的</router-link></div>
	  </div>
	  
	  
	 
 </main> 
 <el-table :data="tableData" style="width: 100%">
     <el-table-column prop="date" label="Date" width="180" />
     <el-table-column prop="name" label="Name" width="180" />
     <el-table-column prop="address" label="Address" />
</el-table>
</template>


<style scoped>
	.demonstration {
	  color: var(--el-text-color-secondary);
	}
	
	.el-carousel__item h3 {
	  color: #475669;
	  opacity: 0.75;
	  line-height: 150px;
	  margin: 0;
	  text-align: center;
	}
	
	.el-carousel__item:nth-child(2n) {
	  background-color: #99a9bf;
	}
	
	.el-carousel__item:nth-child(2n + 1) {
	  background-color: #d3dce6;
	}
	.main{
		    min-height: 100vh
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
	.scrollbar-demo-item {
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  height: 50px;
	  margin: 10px;
	  text-align: center;
	  border-radius: 4px;
	  background: var(--el-color-primary-light-9);
	  color: var(--el-color-primary);
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
