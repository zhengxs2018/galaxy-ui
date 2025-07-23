<script lang="ts" setup>
import { ref, useSlots } from 'vue'

import VpTabPane from './vp-tab-pane.vue'

defineOptions({
  name: 'VpTabs',
})

const activeTabIndex = ref(0)
const children = useSlots().default?.()
const tabs = children?.filter(({ type }) => type === VpTabPane)
</script>

<template>
  <div class="vp-tabs">
    <div class="vp-tabs__nav">
      <div
        v-for="(tab, idx) in tabs"
        @click="activeTabIndex = idx"
        class="vp-tabs__nav-link"
        :class="{
          'is-active': activeTabIndex === idx,
        }"
      >
        {{ tab.props?.label }}
      </div>
    </div>
    <div class="vp-tabs__contents">
      <component
        v-for="(tab, idx) in tabs"
        v-show="activeTabIndex === idx"
        :is="tab"
        :active="activeTabIndex === idx"
      />
    </div>
  </div>
</template>

<style scoped>
.vp-tabs {
  margin-top: 16px;
}

.vp-tabs__nav {
  position: relative;
  display: flex;
  /* margin-right: -24px;
  margin-left: -24px; */
  /* padding: 0 12px; */
  overflow-x: auto;
  overflow-y: hidden;
}

.vp-tabs__nav::after {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 1px;
  background-color: var(--vp-c-gutter);
  content: '';
}

.vp-tabs__nav-link {
  position: relative;
  display: inline-block;
  border-bottom: 1px solid transparent;
  padding: 0 12px;
  line-height: 48px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
  white-space: nowrap;
  cursor: pointer;
  transition: color 0.25s;
}

.vp-tabs__nav-link::after {
  position: absolute;
  right: 8px;
  bottom: -1px;
  left: 8px;
  z-index: 10;
  height: 1px;
  content: '';
  background-color: transparent;
  transition: background-color 0.25s;
}

.vp-tabs__nav-link.is-active {
  color: var(--vp-c-brand);
}

.vp-tabs__nav-link.is-active::after {
  background-color: var(--vp-code-tab-active-bar-color);
}
</style>
