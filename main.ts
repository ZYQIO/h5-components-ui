import { createApp } from 'vue'
import App from './App.vue'
import MyH5Components from 'my-h5-components'
// 引入样式文件
import 'my-h5-components/dist/style.css'
import { Theme } from 'my-h5-components'

const app = createApp(App)
app.use(MyH5Components)

// 使用绝对路径
Theme.setup({
  bgImage: '/images/bg.png'  // 图片需要放在 public 目录下
})

app.mount('#app') 