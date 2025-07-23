import type { FunctionPlugin } from 'vue'

import { GButton, GConfigProvider } from './components/index.js'
import { type ConfigInit, provideAppConfig } from './composables/use-config.js'

export const install: FunctionPlugin<ConfigInit[]> = (app, init) => {
  if (init) provideAppConfig(app, init)

  app.component(GButton.name!, GButton)
  app.component(GConfigProvider.name!, GConfigProvider)
}
