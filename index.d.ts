declare module 'my-h5-components' {
  import { App, Component } from 'vue'
  
  export const MyButton: Component
  export const AppLayout: Component
  
  export interface ThemeOptions {
    bgImage?: string
    primaryColor?: string
  }
  
  export class Theme {
    static setup(options?: ThemeOptions): void
  }
  
  export const themePresets: {
    default: ThemeOptions
    dark: ThemeOptions
  }
  
  export type ThemePreset = 'default' | 'dark'
  
  const plugin: {
    install: (app: App) => void
  }
  
  export default plugin
} 