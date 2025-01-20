<template>
	
	<div class="center">
		
		<div >
			<div class="title">vue3+vuerouter+pinia+elemenrplus</div>
		<div>账号</div>
		<template class='input'>
		  <el-input v-model="input" placeholder="Please input" />
		</template>
		<div>密码</div>
		<el-input v-model="password" type="password" placeholder="Please input" />
		<div ><el-button @click="gohome" class="btn" type="primary">登陆</el-button></div>
		</div>
		
	</div>
	
</template>

<script setup>
	import { computed } from "vue";
	import api from "../api/api.ts";
	import { watch} from "vue"
	import { ref, reactive } from 'vue'
	import { useRouter, useRoute } from 'vue-router'
	
	const input = ref('admin')
	const password = ref('password')
	
	const num = ref(1)
	const form = reactive({
	  name: "",
	  age: 0
	})
	const per = reactive({
	  firstName: "zhangsan",
	  lastName: 'lisi'
	})
	let fullName = computed(()=>{
	  return per.firstName + per.lastName;
	});
	watch(fullName,(newVal,oldVal)=>{
		// console.log(newVal,oldVal)
		
	  console.log("num:",fullName)
	},{ immediate: true, deep:false })
	
const router = useRouter()
const route = useRoute()
	let gohome=async function(){
		// await api.getHome({name:18});
		
		console.log(input.value)
		console.log(password.value)
		router.push({
		    path: '/home',
		    query: {
		      title: '666',
			  token:1242434212
		    }
		  })
	}
	

</script>
<style scoped>
.input{
		display:block
	}
.title{
margin-bottom: 10px;
	}
.btn{
	width: 288px;
	margin-top: 10px;
}
.center{
	display: flex;
	    align-items: center;
	    justify-content: center;
	    width: auto;
	    height: 91vh;
}
.scrollbar-flex-content {
  display: flex
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
