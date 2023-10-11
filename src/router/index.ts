import { createRouter, createWebHistory } from "vue-router"

import { useMain } from '@/store/index'
import Login from '@/Login.vue'

let routes= [
	{
		path: '/',
		name: 'home',
		component: ()=> import('@/view/homeView.vue')
	},
	{
		path: '/login',
		name: 'Login',
		component: Login
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
})
router.beforeEach(async (to, from) => {
	const store = useMain()
   if (
     // 检查用户是否已登录
     store.status &&
     // ❗️ 避免无限重定向
     to.name !== 'Login'
   ) {
     // 将用户重定向到登录页面
     return { name: 'Login' }
   }
 })

export default router