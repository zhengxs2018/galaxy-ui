import vue from '@vitejs/plugin-vue'
import jsx from '@vitejs/plugin-vue-jsx'
import { defineConfig } from 'vite'
import { checker } from 'vite-plugin-checker'
import dts from 'vite-plugin-dts'
import { externalizeDeps as external } from 'vite-plugin-externalize-deps'

import pkg from './package.json'

export default defineConfig({
  appType: 'custom',
  plugins: [
    checker({
      typescript: true,
      vueTsc: true,
    }),
    external(),
    dts({ outDir: './dist-types' }),
    vue(),
    jsx(),
  ],
  define: {
    'process.env.PKG_VERSION': JSON.stringify(pkg.version),
  },
  esbuild: {
    minifyIdentifiers: false,
  },
  build: {
    minify: false,
    copyPublicDir: false,
    reportCompressedSize: false,
    lib: {
      entry: ['src/index.ts'],
      formats: ['es'],
    },
    rollupOptions: {
      output: {
        exports: 'named',
        // See https://github.com/vitejs/vite/issues/5174
        preserveModules: true,
      },
    },
  },
})
