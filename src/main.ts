import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/index.css'

import router from "./router/index"
import { createPinia } from 'pinia'

import ElementPlus from 'element-plus'

import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

const app = createApp(App)
app.use(router).use(createPinia()).use(ElementPlus,{ locale: zhCn })
app.mount('#app')