<template>
  <div 
    class="ml-navbar" 
    :class="{ 
      'ml-navbar--fixed': fixed,
      'ml-navbar--no-bg': !showBackground
    }"
    :style="navbarStyle"
  >
    <!-- 左侧按钮区域 -->
    <div class="ml-navbar__left">
      <slot name="left">
        <div v-if="showBack" class="ml-navbar__back" @click="handleBack">
          <span class="ml-navbar__back-icon"></span>
          <span v-if="backText" class="ml-navbar__back-text">{{ backText }}</span>
        </div>
      </slot>
    </div>

    <!-- 标题区域 -->
    <!-- <div class="ml-navbar__title">
      <slot name="title">{{ title }}</slot>
    </div> -->

    <!-- 右侧按钮区域 -->
    <div class="ml-navbar__right">
      <slot name="right"></slot>
    </div>

    <!-- 自定义背景图 -->
    <div 
      v-if="bgImage && showBackground" 
      class="ml-navbar__bg"
      :style="bgStyle"
    ></div>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineProps, defineEmits } from 'vue'

const props = defineProps({
  // 标题
  title: {
    type: String,
    default: ''
  },
  // 是否显示返回按钮
  showBack: {
    type: Boolean,
    default: true
  },
  // 返回按钮文字
  backText: {
    type: String,
    default: '返回'
  },
  // 是否固定在顶部
  fixed: {
    type: Boolean,
    default: true
  },
  // 背景图片
  bgImage: {
    type: String,
    default: ''
  },
  // 是否显示背景
  showBackground: {
    type: Boolean,
    default: true
  },
  // 导航栏高度
  height: {
    type: [String, Number],
    default: 44
  },
  // 状态栏高度（用于iOS）
  statusBarHeight: {
    type: [String, Number],
    default: 20
  },
  // 自定义z-index
  zIndex: {
    type: [String, Number],
    default: 100
  }
})

const emit = defineEmits(['back-click'])

// 计算导航栏样式
const navbarStyle = computed(() => {
  const style: Record<string, string> = {
    height: `${Number(props.height) + Number(props.statusBarHeight)}px`,
    zIndex: String(props.zIndex)
  }
  return style
})

// 计算背景图样式
const bgStyle = computed(() => ({
  backgroundImage: props.bgImage ? `url(${props.bgImage})` : 'none'
}))

// 处理返回按钮点击
const handleBack = () => {
  emit('back-click')
  if (window.history.length > 1) {
    window.history.back()
  }
}
</script>

<style scoped>
.ml-navbar {
  position: relative;
  width: 100%;
  background-color: #fff;
  display: flex;
  align-items: flex-end;
}

.ml-navbar--fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}

.ml-navbar--no-bg {
  background: transparent;
}

.ml-navbar__bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1;
}

.ml-navbar__left,
.ml-navbar__right {
  flex: 1;
  height: var(--navbar-height, 44px);
  display: flex;
  align-items: center;
}

.ml-navbar__left {
  padding-left: 16px;
}

.ml-navbar__right {
  padding-right: 16px;
  justify-content: flex-end;
}

.ml-navbar__title {
  flex: 2;
  height: var(--navbar-height, 44px);
  line-height: var(--navbar-height, 44px);
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.ml-navbar__back {
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 8px;
  cursor: pointer;
}

.ml-navbar__back-icon {
  width: 12px;
  height: 12px;
  border-top: 2px solid #333;
  border-left: 2px solid #333;
  transform: rotate(-45deg);
}

.ml-navbar__back-text {
  margin-left: 4px;
  font-size: 14px;
  color: #333;
}

/* 适配 iOS 刘海屏 */
@supports (padding-top: constant(safe-area-inset-top)) {
  .ml-navbar--fixed {
    padding-top: constant(safe-area-inset-top);
  }
}

@supports (padding-top: env(safe-area-inset-top)) {
  .ml-navbar--fixed {
    padding-top: env(safe-area-inset-top);
  }
}
</style> 