import { computed, inject, provide, unref } from 'vue'
import type { InjectionKey, MaybeRef } from 'vue'

import type { ComponentSize } from '../common/constants.js'
import { useConfig } from './use-config.js'

const SIZE_INJECTION_KEY: InjectionKey<SizeContext> = Symbol('galaxy-ui#size')

export function provideSize(context: SizeContext) {
  provide(SIZE_INJECTION_KEY, context)
}

export function useSize() {
  const { size } = useConfig()
  const context = inject(SIZE_INJECTION_KEY, null)

  return computed<ComponentSize>(() => {
    const sizeValue = context ? unref(context.size) : null
    return sizeValue || size || ''
  })
}

export interface SizeContext {
  size?: MaybeRef<ComponentSize | undefined>
}
