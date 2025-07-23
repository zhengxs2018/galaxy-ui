import { useConfig } from './use-config.js'

/**
 * A composable to generate BEM class names for components.
 * It uses the namespace provided by the app configuration.
 *
 * @param name - The name of the component or block.
 * @returns An object containing methods to generate BEM class names.
 *
 * @example
 *
 * ```ts
 * const ns = useNamespace('button');
 *
 * ns.b(); // 'galaxy-ui-button'
 * ns.e('icon'); // 'galaxy-ui-button__icon'
 * ns.m('primary'); // 'galaxy-ui-button--primary'
 * ```
 */
export function useNamespace(name: string) {
  const { namespace } = useConfig()

  const block = `${namespace}-${name}`

  /**
   * Generate the element class name.
   * @param element - The element name to append to the block.
   * @returns The generated element class name.
   */
  function e(element: string) {
    return `${block}__${element}`
  }

  function ee(element: string, elementSuffix: string) {
    return `${block}__${element}-${elementSuffix}`
  }

  function m(modifier: string) {
    return `${block}--${modifier}`
  }

  function be(element: string): string
  function be(blockSuffix: string, element: string): string
  function be(blockSuffix: string, element?: string): string {
    return arguments.length === 1
      ? `${block}__${blockSuffix}`
      : `${block}-${blockSuffix}__${element}`
  }

  function em(element: string, modifier: string) {
    return `${e(element)}--${modifier}`
  }

  return {
    b(blockSuffix?: string) {
      return blockSuffix ? `${block}-${blockSuffix}` : block
    },
    e,
    m,
    em,
    ee,
    be,
    is,
    has,
  }
}

function is(value: string) {
  return state('is', value)
}
function has(value: string) {
  return state('has', value)
}

function state(namespace: string, state: string) {
  return `${namespace}-${state}`
}
