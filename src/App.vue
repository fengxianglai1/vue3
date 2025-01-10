

<template>
	<main class="main">
     <!-- <TheWelcome /> -->
	 <!-- <el-button type= "danger">12345</el-button> -->
	 <router-view></router-view>
	 
	</main> 
	
	
	
</template>
<script lang="ts" setup>
	
import { ElLoading } from 'element-plus'
import { ref ,nextTick} from 'vue'
ElLoading.service()
const loadingInstance = ElLoading.service()

setTimeout(()=>{
	loadingInstance.close()
},2000)



const activeIndex = ref('1')
const activeIndex2 = ref('1')
const flag = ref(true)
let gohome = function(){
	
		// flag=!flag
}
const bg = (re) => {
  console.log(re)
}
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style scoped>
	html{
		font-size:14px;
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
	
	.main{
			padding-bottom: 5vh;
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
