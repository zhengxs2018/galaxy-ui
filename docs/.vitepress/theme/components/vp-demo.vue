<script setup lang="ts">
import { File, Sandbox } from '@vue/repl'
import { useToggle } from '@vueuse/core'
import { useRouter, withBase } from 'vitepress'
import { watch } from 'vue'

import { parseFile } from '../../common/sandbox.js'
import { useReplStore } from '../composables/use-repl-store.js'

defineOptions({
  name: 'VpDemo',
})

const props = defineProps({
  state: String,
})

const router = useRouter()

const [sourceVisible, toggleSourceVisible] = useToggle()

const store = useReplStore()

watch(
  () => props.state,
  (state) => {
    const parsed = parseFile(state)

    if (!parsed) return

    const files = store.getFiles()

    store.setFiles({
      ...files,
      'src/App.vue': parsed.content,
    })
  },
  { immediate: true },
)

function sendToPlayground() {
  router.go(withBase(`/playground${store.serialize()}`))
}
</script>

<template>
  <div class="vp-demo vp-raw">
    <div class="vp-demo-showcase">
      <Sandbox :store="store" :clear-console="false" />
    </div>

    <div class="vp-demo-btns">
      <button
        ref="toggle"
        class="vp-demo-btn toggle-btn"
        @click="toggleSourceVisible()"
      >
        查看源代码
      </button>

      <button class="vp-demo-btn play-btn" @click="sendToPlayground()">
        代码演练场
      </button>
    </div>

    <div v-show="sourceVisible" class="vp-demo-source">
      <slot></slot>
    </div>

    <Transition name="vp-fade-in-linear">
      <div
        v-show="sourceVisible"
        class="vp-demo-control"
        tabindex="0"
        role="button"
        @click="toggleSourceVisible(false)"
      >
        <span>隐藏源代码</span>
      </div>
    </Transition>
  </div>
</template>

<style>
.vp-demo {
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
}

.vp-demo-btns {
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 2.5rem;
  border-top: 1px solid var(--vp-c-divider);
}

.vp-demo-btn {
  margin: 0 0.5rem;
  cursor: pointer;
  color: var(--vp-c-text-2);
  transition: 0.2s;
}

.vp-demo-btn:hover {
  color: var(--vp-c-brand-1);
}

.vp-demo-control {
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid var(--vp-c-divider);
  height: 44px;
  box-sizing: border-box;
  background-color: var(--vp-c-bg-color, #fff);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  margin-top: -1px;
  color: var(--vp-c-text-2);
  cursor: pointer;
  position: sticky;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
}

.vp-demo-control span {
  font-size: 14px;
  margin-left: 10px;
}

.vp-demo-control:hover {
  color: var(--vp-c-brand-1);
}

.vp-demo-source div[class*='language-'] {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
  border-radius: 0 !important;
}
</style>
