<!-- ChildComponent.vue -->
<template>
  <div>
    <p>{{ message1 }}{{data2}}</p>
	  <button @click="emit('send-data',data)">把数据发送到父组件</button>
	  <button @click="toHome()">路由跳转{{name}}</button>
  </div>
</template>

<script setup>
import { defineProps,computed } from 'vue';
import { ref ,nextTick} from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { ElLoading } from 'element-plus'
import {useUserStore} from "../store/user";

const props = defineProps({
  message1: {
    type: String,
    required: true
  } ,
  data2: {
    type: String,
    required: true,
	default: ''
  }
});
// const props1 = defineProps({
//   data1: {
//     type: String,
//     required: true
//   }
// });

 const userStore = useUserStore()

 const name = userStore.name
 // userStore.updateName="lisi"
 // const name = computed(() => userStore.updateName="lisi")
 
const router = useRouter()
const route = useRoute()

let toHome=function(){
	// 导航到路由，并传递query
	router.push({
	    path: '/',
	    query: {
	      title: '666',
		  token:1242434212
	    }
	  })
}
let data = ref(userStore.age.agedemo) // 子组件中的数据
const emit = defineEmits(['send-data']) // 接收props

</script>
