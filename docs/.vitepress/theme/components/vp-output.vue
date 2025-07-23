<script lang="ts" setup>
import { ref } from 'vue'

defineOptions({
  name: 'VpOutput',
})

defineProps({
  data: {},
})

const visible = ref(false)
</script>

<template>
  <div class="vp-output">
    <div class="vp-output-summary" @click="visible = !visible">
      {{ visible ? '收起' : '展开' }}
    </div>
    <div v-if="visible" class="vp-output-code">
      <pre>{{ data }}</pre>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.vp-output {
  position: relative;
  margin-top: 10px;
}

.vp-output-summary {
  margin-bottom: 5px;
  cursor: pointer;
  font-weight: bold;
  color: #333;
  background-color: #f0f0f0;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ddd;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  user-select: none;
}

.vp-output-code {
  margin-top: 0;
  padding: 10px;
  background-color: #f5f5f5;
  border-radius: 4px;
  max-height: 280px;
  overflow-y: auto;
  color: #333;
  font-size: 14px;
  line-height: 1.5;
  border: 1px solid #ddd;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}
</style>
