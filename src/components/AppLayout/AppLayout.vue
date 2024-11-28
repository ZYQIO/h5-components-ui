<template>
  <div class="app-layout" :class="{ 'no-bg': !showBackground }">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import bgImage from '@/assets/bg.png'

export default defineComponent({
  name: 'AppLayout',
  props: {
    // 可以支持自定义背景图
    bgImage: {
      type: String,
      default: ''
    },
    // 控制是否显示背景图
    showBackground: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {
    // 处理背景图片路径
    const getBackgroundImage = () => {
      if (!props.showBackground) {
        return 'none'
      }
      if (props.bgImage) {
        return `url(${props.bgImage})`
      }
      return `url(${bgImage})`
    }

    return {
      getBackgroundImage
    }
  }
})
</script>

<style scoped>
.app-layout {
  min-height: 100vh;
  width: 100%;
  background-color: #f5f5f5;
  background-image: v-bind('getBackgroundImage()');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

/* 不显示背景图时的样式 */
.app-layout.no-bg {
  background-image: none;
}

/* 提供一些预设的背景样式 */
.app-layout--pattern1 {
  background-image: v-bind('getBackgroundImage()');
}

.app-layout--pattern2 {
  background-image: v-bind('getBackgroundImage()');
}
</style> 