<script setup lang="ts">
import { Repl } from '@vue/repl'
import Monaco from '@vue/repl/monaco-editor'
import { watchEffect } from 'vue'

import { useReplStore } from '../composables/use-repl-store.js'

defineOptions({
  name: 'VpPlayground',
})

const store = useReplStore(location.hash)

watchEffect(() => {
  history.replaceState({}, '', store.serialize())
})
</script>

<template>
  <div class="VPPlayground">
    <Repl :store="store" :editor="Monaco" :clear-console="false" />
  </div>
</template>

<style scoped>
.VPPlayground {
  height: calc(100vh - var(--vp-nav-height)) !important;
}
</style>

<style>
.VPDoc:not(.has-sidebar) {
  padding: 0 !important;
}

.VPDoc:not(.has-sidebar) .content,
.VPDoc:not(.has-sidebar) .container {
  width: 100% !important;
  max-width: 100% !important;
}

.VPFooter {
  display: none;
}
</style>
