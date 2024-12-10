import { createApp } from 'vue'
import './style.css'
// import './assets/css/sb-admin-2.min.css';
import App from './App.vue'

createApp(App).mount('#app').$nextTick(() => {
  // Use contextBridge
  window.ipcRenderer.on('main-process-message', (_event, message) => {
    console.log(message)
  })
})
