import { createApp } from 'vue'
import App from './App.vue'
import MyH5Components, { setupTheme } from '../src/index'
import bgImage from '../src/assets/bg.png'

// 添加基础样式
import '../src/styles/base.css'

// 使用预设主题
setupTheme({
  bgImage: bgImage
})

const app = createApp(App)
app.use(MyH5Components)
app.mount('#app') 