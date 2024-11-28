import type { ThemeOptions } from './index'

export const themePresets = {
  default: {
    bgImage: '/images/default-bg.png',
    primaryColor: '#409eff'
  },
  dark: {
    bgImage: '/images/dark-bg.png',
    primaryColor: '#333333'
  },
  // 其他预设主题...
} as const

export type ThemePreset = keyof typeof themePresets 