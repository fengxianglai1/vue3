// // import App from './App'

// // #ifndef VUE3
// import Vue from 'vue'
// import './uni.promisify.adaptor'
// Vue.config.productionTip = false
// App.mpType = 'app'
// const app = new Vue({
//   ...App
// })
// app.$mount()
// // #endif

// // #ifdef VUE3
// import { createSSRApp } from 'vue'
// export function createApp() {
//   const app = createSSRApp(App)
//   return {
//     app
//   }
// }
// // #endif
import App from './App.vue'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App
})
// 初始化vConsole，并启用Console和Network插件
var vConsole = new VConsole({
    defaultPlugins: ['SYSTEM', 'CONSOLE', 'NETWORK']
});
 vConsole.show();
// 如果需要在页面加载完成后才显示vConsole，可以监听DOMContentLoaded事件
// document.addEventListener('DOMContentLoaded', function () {
//     vConsole.show();
// });

app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif