import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './assets/styles/index.css'

import router from "./router/index"
import { createPinia } from 'pinia'

const pinia = createPinia()
const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')