<script setup lang="ts">
import { Sandbox } from '@vue/repl'
import { watchEffect } from 'vue'

import { useReplStore } from '../composables/use-repl-store.js'

defineOptions({
  name: 'VpSandbox',
})

const { code } = defineProps({
  code: {
    type: String,
    default: '',
  },
})

const store = useReplStore()

watchEffect(() => {
  store.files['src/App.vue'].code = code
})
</script>

<template>
  <Sandbox :store="store" :clear-console="false" />
</template>
