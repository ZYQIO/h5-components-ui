<template>
  <ml-layout>
    <!-- 基础用法 -->
    <ml-navbar title="标题" />

    <!-- 自定义背景图 -->
    <ml-navbar 
      title="带背景图的导航栏"
      bg-image="/path/to/navbar-bg.png"
    />

    <!-- 自定义左右内容 -->
    <ml-navbar>
      <template #left>
        <div @click="onBack">返回</div>
      </template>
      <template #title>
        <div class="custom-title">自定义标题</div>
      </template>
      <template #right>
        <div @click="onMore">更多</div>
      </template>
    </ml-navbar>
  </ml-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { MlLayout, MlNavbar } from '../src/index'

export default defineComponent({
  name: 'App',
  components: {
    MlLayout,
    MlNavbar
  },
  setup() {
    const onBack = () => {
      console.log('点击返回')
      window.history.back()
    }

    const onMore = () => {
      console.log('点击更多')
    }

    return {
      onBack,
      onMore
    }
  }
})
</script>

<style>
.example-container {
  padding: 20px;
  color: #333;
}

section {
  margin: 20px 0;
}

h1, h2 {
  margin-bottom: 20px;
}

.ml-button {
  margin-right: 10px;
}

.custom-title {
  font-weight: bold;
}
</style> 