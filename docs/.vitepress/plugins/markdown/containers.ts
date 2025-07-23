import container from 'markdown-it-container'
import type { RenderRule } from 'markdown-it/lib/renderer.mjs'
import type Token from 'markdown-it/lib/token.mjs'

import type { FileObject } from '../../common/sandbox.js'

type ContainerArgs = [typeof container, string, { render: RenderRule }]

export function createDemo(): ContainerArgs {
  return [
    container,
    'demo',
    {
      render(tokens, idx) {
        if (tokens[idx].nesting === 1) {
          const file = getFile(tokens[idx + 1])
          return `<vp-demo state="${encode(JSON.stringify(file))}">\n`
        }

        return `</vp-demo>\n`
      },
    },
  ]
}

function getFile(token: Token): FileObject {
  if (token.type === 'fence') {
    const lang = extractLang(token.info)
    const filename = extractFilename(token.info)
    return {
      name: filename ? filename : `untitled.${lang}`,
      lang: lang,
      content: token.content,
    }
  }

  throw new Error('Expected a fence token')
}

function encode(str: string): string {
  return Buffer.from(escape(str), 'utf-8').toString('base64')
}

function extractFilename(info: string) {
  return info.match(/\[(.*)\]/)?.[1]
}

function extractLang(info: string) {
  return info
    .trim()
    .replace(/=(\d*)/, '')
    .replace(/:(no-)?line-numbers({| |$|=\d*).*/, '')
    .replace(/(-vue|{| ).*$/, '')
    .replace(/^vue-html$/, 'template')
    .replace(/^ansi$/, '')
}
