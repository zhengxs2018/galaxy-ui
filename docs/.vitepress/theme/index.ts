import { type Theme, defineClientComponent } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import VpOutput from './components/vp-output.vue'
import VpTabPane from './components/vp-tab-pane.vue'
import VpTabs from './components/vp-tabs.vue'

export default {
  Layout: DefaultTheme.Layout,
  enhanceApp(context) {
    DefaultTheme.enhanceApp(context)

    const { app } = context

    app.component(VpOutput.name!, VpOutput)
    app.component(VpTabs.name!, VpTabs)
    app.component(VpTabPane.name!, VpTabPane)

    app.component(
      'vp-playground',
      defineClientComponent(() => import('./components/vp-playground.vue')),
    )
    app.component(
      'vp-sandbox',
      defineClientComponent(() => import('./components/vp-sandbox.vue')),
    )
  },
} as Theme
