<template>
  <app-layout>
    <div class="example-container">
      <h1>组件库示例</h1>
      <section>
        <h2>按钮组件示例</h2>
        <my-button>默认按钮</my-button>
        <my-button type="primary">主要按钮</my-button>
        <my-button disabled>禁用按钮</my-button>
      </section>
    </div>
  </app-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { AppLayout } from '../src/index'

export default defineComponent({
  name: 'App',
  components: {
    AppLayout
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

.my-button {
  margin-right: 10px;
}
</style> 