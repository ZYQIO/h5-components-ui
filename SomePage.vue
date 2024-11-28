<template>
  <div class="page">
    <my-button type="primary" @click="handleClick">
      点击我
    </my-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SomePage',
  setup() {
    const handleClick = () => {
      console.log('按钮被点击')
    }

    return {
      handleClick
    }
  }
})
</script> 