import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { i18n, I18NextVue } from './i18n'
import App from './App.vue'
import router from './router'
import './assets/styles/tailwind.css'
import './assets/styles/main.less'
import { loadApiConfig } from './composable/useApiConfig'
import { initHttpClient } from './config/http.config'

// Load API config from public directory at runtime before mounting app
async function initApp() {
  try {
    // Load config from public/config/api.config.json
    await loadApiConfig()
    // Initialize HTTP client with loaded config
    initHttpClient()
    
    // Now mount the app
    const app = createApp(App)
    const pinia = createPinia()
    app.use(pinia)
    app.use(router)
    app.use(I18NextVue, { i18next: i18n })
    app.mount('#app')
  } catch (error) {
    console.error('Failed to initialize app:', error)
    // Show error to user
    document.body.innerHTML = `
      <div style="display: flex; align-items: center; justify-content: center; height: 100vh; font-family: Arial, sans-serif;">
        <div style="text-align: center; padding: 20px;">
          <h1 style="color: #ff4d4f;">خطا در بارگذاری تنظیمات</h1>
          <p style="color: #666;">نمی‌توان فایل تنظیمات را بارگذاری کرد. لطفاً مطمئن شوید که فایل config/api.config.json در پوشه public وجود دارد.</p>
          <p style="color: #999; font-size: 12px; margin-top: 20px;">Error: ${error instanceof Error ? error.message : String(error)}</p>
        </div>
      </div>
    `
  }
}

initApp()
