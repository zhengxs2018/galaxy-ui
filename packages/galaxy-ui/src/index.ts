import { install } from './installer.js'
import { version } from './version.js'

export * from './common/index.js'
export * from './components/index.js'
export * from './composables/index.js'

export { version }

export default {
  version,
  install,
}
