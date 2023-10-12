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
router.beforeEach(async (to, _from) => {
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
// GOOD
// router.beforeEach((to, from, next) => {
//   if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
//   else next()
// })
export default router