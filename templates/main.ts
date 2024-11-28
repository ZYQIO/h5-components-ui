import { createApp } from 'vue'
import App from './App.vue'
import MyH5Components, { Theme } from 'my-h5-components'
import 'my-h5-components/dist/style.css'

// 配置主题
Theme.setup({
  bgImage: '/assets/bg.png'
})

const app = createApp(App)
app.use(MyH5Components)
app.mount('#app') 