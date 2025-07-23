import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path/posix'
import { fileURLToPath } from 'node:url'
import { parseArgs } from 'node:util'

import { compileAsync } from 'sass-embedded'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const { values: options } = parseArgs({
  allowNegative: true,
  allowPositionals: true,
  options: {
    mode: {
      type: 'string',
      default: 'development',
      choices: ['development', 'production'],
    },
    verbose: {
      type: 'boolean',
      default: false,
    },
    sourceMap: {
      type: 'boolean',
      default: false,
      description: 'Generate source maps for the compiled CSS',
    },
    dest: {
      type: 'string',
      default: 'dist',
      description: 'Destination directory for the compiled CSS files',
    },
  },
})

const isProd = options.mode === 'production'
const isDev = options.mode === 'development'

const result = await compileAsync(path.resolve(__dirname, 'src/index.scss'), {
  verbose: options.verbose,
  style: isProd ? 'compressed' : 'expanded',
  sourceMap: isDev || options.sourceMap,
  importers: [
    {
      findFileUrl(url) {
        if (url.startsWith('@galaxy/sass-bem')) {
          return new URL(`./node_modules/${url}`, import.meta.url)
        }

        return null
      },
    },
  ],
})

const destDir = path.resolve(__dirname, options.dest)

await mkdir(destDir, { recursive: true })

await writeFile(path.resolve(destDir, 'index.css'), result.css, 'utf-8')

if (result.sourceMap) {
  await writeFile(
    path.resolve(destDir, 'index.css.map'),
    JSON.stringify(result.sourceMap),
    'utf-8',
  )
}
