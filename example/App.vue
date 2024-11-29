<template>
  <ml-layout>
    <ml-navbar 
      title="标题" 
      :height="44"
      :status-bar-height="20"
      bg-image="/path/to/navbar-bg.png"
      @back-click="onBackClick"
    >
      <template #right>
        <div class="nav-right-btn">更多</div>
      </template>
    </ml-navbar>
    
    <!-- 添加一些内容，以便看到导航栏的固定效果 -->
    <div class="content">
      <div v-for="i in 20" :key="i" class="content-item">
        内容 {{ i }}
      </div>
    </div>
  </ml-layout>
</template>

<script setup lang="ts">
import { MlLayout, MlNavbar } from '@/index'

defineOptions({
  name: 'App'
})

const onBackClick = () => {
  console.log('返回按钮被点击')
}
</script>

<style>
.content {
  padding-top: 64px; /* navbar height + status bar height */
}

.content-item {
  padding: 20px;
  border-bottom: 1px solid #eee;
}

.nav-right-btn {
  padding: 8px;
  color: #333;
  cursor: pointer;
}
</style> 