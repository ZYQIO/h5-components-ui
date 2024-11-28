import { App } from 'vue'
import MyButton from './components/MyButton/MyButton.vue'
import AppLayout from './components/AppLayout/AppLayout.vue'
import { Theme } from './theme'
import { themePresets } from './theme/presets'

// 导出单个组件
export { MyButton, AppLayout }

// 导出主题相关
export { Theme, themePresets }
export type { ThemeOptions } from './theme'
export type { ThemePreset } from './theme/presets'

// 导出插件
export default {
  install: (app: App) => {
    app.component('MyButton', MyButton)
    app.component('AppLayout', AppLayout)
  }
}

// 导出 CSS 变量定义
export const setupTheme = (options: { bgImage?: string } = {}) => {
  const style = document.createElement('style')
  style.innerHTML = `
    :root {
      --app-bg-image: ${options.bgImage ? `url('${options.bgImage}')` : 'none'};
    }
  `
  document.head.appendChild(style)
} 