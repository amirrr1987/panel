import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { i18n, I18NextVue } from './i18n'
import App from './App.vue'
import router from './router'
import './assets/styles/tailwind.css'
import './assets/styles/main.less'
const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(router)
app.use(I18NextVue, { i18next: i18n })
app.mount('#app')
