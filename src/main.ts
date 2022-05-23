import { createApp } from 'vue'
// import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router/index'

import 'normalize.css'

// global styles
import '@/assets/base.scss'


const app = createApp(App)

// app.use(createPinia())
app.use(router)

app.mount('#app')
