import { defineConfig } from 'vite'
import { viteStaticCopyModulePlugin as copy } from 'vite-plugin-static-copy-modules'

export default defineConfig({
  plugins: [
    copy([
      {
        moduleName: 'galaxy-ui',
        define: 'import.meta.env.VITE_GALAXY_UI_PATH',
        targets: (modulePath, publicPath) => [
          {
            src: `${modulePath}/dist`,
            dest: publicPath,
          },
        ],
      },
    ]),
  ],
  json: {
    stringify: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ['legacy-js-api'],
      },
    },
  },
  define: {
    'process.env': {},
  },
  optimizeDeps: {
    exclude: ['@vue/repl', 'vitepress'],
  },
  ssr: {
    noExternal: ['@vue/repl'],
  },
})
