// v4.x 示例
// 1. 在@/router/index.js中引入createRouter和createWebHistory
import { createRouter, createWebHistory } from 'vue-router'

// 2. 引入路由组件
const HomeView =() => import('../components/Home.vue')
const FindView =() => import('../components/Find.vue')
const SearchView =() => import('../components/Search.vue')
const MineView =() => import('../components/Mine.vue')
const LoginView =() => import('../components/Login.vue')
const FatherComponent =() => import('../components/FatherComponent.vue')
const Erweima =() => import('../components/erweima.vue')

// 3. 定义路由
const routes = [
  { path: '/home', component: HomeView },
  { path: '/', component: LoginView },
  { path: '/find', component: FindView },
  { path: '/search', component: SearchView },
  { path: '/mine', component: MineView },
  { path: '/login', component: LoginView },
  { path: '/x', component: FatherComponent },
  { path: '/y', component: Erweima },
  
]

// 4. 创建 router 实例并 export
const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router

