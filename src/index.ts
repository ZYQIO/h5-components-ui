import { App } from 'vue'
import MlButton from './components/MyButton/MyButton.vue'
import MlLayout from './components/AppLayout/AppLayout.vue'
import MlNavbar from './components/MlNavbar/MlNavbar.vue'
import { Theme } from './theme'
import { themePresets } from './theme/presets'

// 导出单个组件
export { MlButton, MlLayout, MlNavbar }

// 导出主题相关
export { Theme, themePresets }
export type { ThemeOptions } from './theme'
export type { ThemePreset } from './theme/presets'

// 导出插件
export default {
  install: (app: App) => {
    app.component('MlButton', MlButton)
    app.component('MlLayout', MlLayout)
    app.component('MlNavbar', MlNavbar)
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