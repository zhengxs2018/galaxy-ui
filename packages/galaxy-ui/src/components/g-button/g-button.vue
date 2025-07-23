<script setup lang="ts">
import { computed } from 'vue'

import { useNamespace } from '../../composables/use-namespace.js'
import { buttonEmits, buttonProps } from './g-button.js'

defineOptions({
  name: 'GButton',
  inheritAttrs: false,
})

const props = defineProps(buttonProps)
const emit = defineEmits(buttonEmits)

const ns = useNamespace('button')

const className = computed(() => {
  const { type, size, variant, shape, loading, disabled } = props

  return [
    ns.b(),
    {
      [ns.m(type)]: type !== '',
      [ns.m(variant)]: variant !== '',
      [ns.m(shape)]: shape !== '',
      [ns.m(size)]: size !== '',
      [ns.is('loading')]: loading,
      [ns.is('disabled')]: disabled,
    },
  ]
})

function handleClick(event: MouseEvent) {
  if (props.loading || props.disabled) {
    event.stopPropagation()
    event.preventDefault()
    return
  }

  emit('click', event)
}
</script>

<template>
  <component
    :is="as"
    ref="button"
    :class="className"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot></slot>
  </component>
</template>
