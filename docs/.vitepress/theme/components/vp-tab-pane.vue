<script lang="ts" setup>
defineOptions({
  name: 'VpTabPane',
})

defineProps({
  label: String,
})
</script>

<template>
  <div class="vp-tab-pane">
    <slot />
  </div>
</template>

<style>
.vp-tab-pane {
  padding: 20px 0;
}
</style>
