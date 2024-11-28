<template>
  <button 
    class="my-button"
    :class="[`my-button--${type}`, { 'my-button--disabled': disabled }]"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MyButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ['click'],
  setup(props, { emit }) {
    const handleClick = (event: MouseEvent) => {
      if (!props.disabled) {
        emit('click', event)
      }
    }

    return {
      handleClick
    }
  }
})
</script>

<style scoped>
.my-button {
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
}

.my-button--default {
  background-color: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
}

.my-button--primary {
  background-color: #409eff;
  color: #fff;
}

.my-button--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style> 