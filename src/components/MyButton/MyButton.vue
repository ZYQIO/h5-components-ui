<template>
  <button 
    class="ml-button"
    :class="[`ml-button--${type}`, { 'ml-button--disabled': disabled }]"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
defineOptions({
  name: 'MlButton'
})

interface Props {
  type?: 'default' | 'primary'
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  type: 'default',
  disabled: false
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const handleClick = (event: MouseEvent) => {
  if (!props.disabled) {
    emit('click', event)
  }
}
</script>

<style scoped>
.ml-button {
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
}

.ml-button--default {
  background-color: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
}

.ml-button--primary {
  background-color: #409eff;
  color: #fff;
}

.ml-button--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style> 