import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from '@core/router'
import { installAuthModule } from '@auth'

import '@core/assets/styles/main.css'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

installAuthModule(app)

app.mount('#app')
