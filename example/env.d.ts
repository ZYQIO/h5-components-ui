/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.png' {
  const imageSrc: string
  export default imageSrc
}

declare module '*.css' {
  const cssContent: string
  export default cssContent
} 