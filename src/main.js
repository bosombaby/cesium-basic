import { createApp } from 'vue'
import '@/styles/reset.scss'

// 存储管理
import { registerStore } from './store'

import App from './App.vue'
const app = createApp(App)

// 绑定pinia
registerStore(app)
app.mount('#app')
