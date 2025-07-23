import { inject, provide } from 'vue'
import type { App, InjectionKey } from 'vue'

import type { ComponentSize } from '../common/constants.js'

/** @private */
const CONFIG_INJECTION_KEY: InjectionKey<ConfigContext> =
  Symbol('galaxy-ui#config')

/** @private */
export function provideAppConfig(app: App, init?: ConfigInit) {
  app.provide(CONFIG_INJECTION_KEY, createConfig(init))
}

/** @private */
export function provideConfig(init?: ConfigInit) {
  const base = inject(CONFIG_INJECTION_KEY, null)

  provide(
    CONFIG_INJECTION_KEY,
    base ? extendConfig(base, init) : createConfig(init),
  )
}

/**
 * A composable function to access the configuration of the Galaxy UI components.
 *
 * You can use useConfig instead of or in conjunction with a <g-config-provider /> component.
 *
 * @param init - Initial configuration for the components.
 * @returns A reactive configuration object that can be used in components.
 */
export function useConfig(init?: ConfigInit) {
  return inject(
    CONFIG_INJECTION_KEY,
    () => {
      const config = createConfig(init)
      provide(CONFIG_INJECTION_KEY, config)
      return config
    },
    true,
  )
}

export interface ConfigContext {
  /**
   * The namespace for the components.
   */
  namespace: string

  /**
   * The default size for components.
   */
  size?: ComponentSize

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

export type ConfigInit = Partial<ConfigContext>

function extendConfig(
  target: ConfigContext,
  source?: ConfigInit,
): ConfigContext {
  if (!source) return target

  return Object.keys(target).reduce((acc, key) => {
    const srcValue = source[key]

    if (srcValue !== undefined || srcValue !== null) {
      acc[key as keyof ConfigContext] = srcValue
    }

    return acc
  }, Object.create(target))
}

function createConfig(init?: ConfigInit): ConfigContext {
  const defaults: ConfigContext = {
    namespace: 'g',
    size: '',
  }

  return mergeConfig(defaults, init)
}

function mergeConfig(target: ConfigContext, source?: ConfigInit) {
  if (!source) return target

  Object.keys(source).forEach((key) => {
    const value = source[key as keyof ConfigInit]

    if (value === undefined || value === null) return

    target[key as keyof ConfigContext] = value
  })

  return target
}
