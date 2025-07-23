<script setup lang="ts">
import { type ConfigInit, provideConfig } from '../../composables/use-config.js'

defineOptions({
  name: 'GConfigProvider',
  inheritAttrs: false,
})

const props = defineProps<ConfigInit>()

provideConfig(props)
</script>

<template>
  <slot></slot>
</template>
