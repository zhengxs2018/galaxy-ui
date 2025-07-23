/// <reference types="vite/client" />
import styles from '@galaxy/theme-default/dist/index.css?raw'
// 为了解决沙箱环境下，无法加载本地样式的问题
import { File, mergeImportMap, useStore, useVueImportMap } from '@vue/repl'
import { withBase } from 'vitepress'
import { computed, ref } from 'vue'

import welcomeCode from '../template/welcome.vue?raw'

const GALAXY_UI_PUBLIC_PATH = withBase(
  `/${import.meta.env.VITE_GALAXY_UI_PATH}/dist/index.js`,
)

function useImportMap() {
  const {
    importMap: builtinImportMap,
    vueVersion,
    productionMode,
  } = useVueImportMap()

  productionMode.value = import.meta.env.PROD

  const importMap = computed(() => {
    return mergeImportMap(builtinImportMap.value, {
      imports: {
        'galaxy-ui': GALAXY_UI_PUBLIC_PATH,
      },
    })
  })

  return {
    importMap,
    vueVersion,
    productionMode,
  }
}

export function useReplStore(initial?: string) {
  const { importMap, vueVersion } = useImportMap()

  const styleFile = new File('src/style.css', styles, true)

  return useStore(
    {
      vueVersion,
      builtinImportMap: importMap,
      template: ref({
        welcomeSFC: welcomeCode,
      }),
      sfcOptions: ref({
        script: {
          propsDestructure: true,
        },
      }),
      files: ref({
        [styleFile.filename]: new File('src/style.css', styles, true),
      }),
    },
    initial,
  )
}
