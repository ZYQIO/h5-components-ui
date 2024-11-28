<template>
  <app-layout>
    <router-view></router-view>
  </app-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { AppLayout } from 'my-h5-components'

export default defineComponent({
  name: 'App',
  components: {
    AppLayout
  }
})
</script>

<style>
/* 确保根元素有高度 */
html, body, #app {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style> 