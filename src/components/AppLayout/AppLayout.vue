<template>
  <div class="ml-layout" :class="{ 'ml-layout--no-bg': !showBackground }">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import bgImage from '@/assets/bg.png'

defineOptions({
  name: 'MlLayout'
})

interface Props {
  bgImage?: string
  showBackground?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  bgImage: '',
  showBackground: true
})

const getBackgroundImage = () => {
  if (!props.showBackground) {
    return 'none'
  }
  if (props.bgImage) {
    return `url(${props.bgImage})`
  }
  return `url(${bgImage})`
}
</script>

<style scoped>
.ml-layout {
  min-height: 100vh;
  width: 100%;
  background-color: #f5f5f5;
  background-image: v-bind('getBackgroundImage()');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

/* 不显示背景图时的样式 */
.ml-layout--no-bg {
  background-image: none;
}

/* 提供一些预设的背景样式 */
.ml-layout--pattern1 {
  background-image: v-bind('getBackgroundImage()');
}

.ml-layout--pattern2 {
  background-image: v-bind('getBackgroundImage()');
}
</style> 