<template>
  <div>
    <ChildComponent  @send-data="getSonData" :data2="'我是测试数据'" :message1="parentMessage" />
	{{name}}
	<div style="font-size: 20px">
	    <!-- 由于SVG图标默认不携带任何属性 -->
	    <!-- 你需要直接提供它们 -->
	    <Edit style="width: 1em; height: 1em; margin-right: 8px" />
	    <Share style="width: 1em; height: 1em; margin-right: 8px" />
	    <Delete style="width: 1em; height: 1em; margin-right: 8px" />
	    <Search style="width: 1em; height: 1em; margin-right: 8px" />
	  </div>
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue';
import { ref ,computed,nextTick} from 'vue';
import {useUserStore} from "../store/user";
import { ElLoading } from 'element-plus'

export default {
  name: 'ParentComponent',
  components: {
    ChildComponent
  },
  setup() {
	  // ElLoading.service()
	  // const loadingInstance = ElLoading.service()
	  // nextTick(() => {
	  //   // Loading should be closed asynchronously
	  //   loadingInstance.close()
	  // },2000)
	  const userStore = useUserStore()
	  const name = computed(() => userStore.name)
	  
	   // 具体使用
	    // userStore.updateName('芳芳')
	  // userStore.name = '芳芳'
    const parentMessage = ref('Hello from parent');
// 定义一个函数，用于接收子组件中的数据
	function getSonData(data){
	 console.log("子组件中的数据：",data)
	}
    return {
      parentMessage,
	  getSonData,
	  name,
	  useUserStore
    };
  }
}
</script>
