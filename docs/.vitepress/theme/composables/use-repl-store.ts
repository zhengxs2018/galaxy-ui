/// <reference types="vite/client" />
// 解决沙箱环境下，无法加载本地组件样式的问题
import styles from '@galaxy/theme-default/dist/index.css?raw'
import { File, mergeImportMap, useStore, useVueImportMap } from '@vue/repl'
import { withBase } from 'vitepress'
import { computed, ref } from 'vue'

import welcomeCode from '../template/welcome.vue?raw'

const GALAXY_UI_PUBLIC_PATH = withBase(
  `/${import.meta.env.VITE_GALAXY_UI_PATH}/dist/index.js`,
)

export function useImportMap() {
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

export function useGalaxyFiles() {
  const files: File[] = [new File('src/galaxy-ui.css', styles, true)]

  return files.reduce(
    (acc, file) => {
      acc[file.filename] = file
      return acc
    },
    {} as Record<string, File>,
  )
}

export function useReplStore(initial?: string) {
  const { importMap, vueVersion } = useImportMap()
  const galaxyFiles = useGalaxyFiles()

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
      files: ref(galaxyFiles),
    },
    initial,
  )
}
