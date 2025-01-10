import router from './router/index.js'
import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
 import store from './store/index.js'
 import axios from 'axios'
 import * as ElementPlusIconsVue from '@element-plus/icons-vue'
 
 const app = createApp(App)
 for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
   app.component(key, component)
 }
// 引入ElementPlus组件库
createApp(App).provide('axios',axios).use(ElementPlus).use(store).use(router).mount('#app')
