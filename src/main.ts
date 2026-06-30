import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from '@core/router'
import { installAuthModule } from '@modules/auth/plugin/auth.plugin'

import '@core/assets/styles/tailwind.css'
import 'nprogress/nprogress.css'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

installAuthModule(app)

app.mount('#app')
