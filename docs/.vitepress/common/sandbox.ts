export type FileObject = {
  name: string
  lang: string
  content: string
}

export function parseFile(state?: string): FileObject | null {
  if (!state) {
    console.warn('[VPDemo] State is required to parse the file.')
    return null
  }

  try {
    return JSON.parse(unescape(atob(state)))
  } catch (e) {
    console.error('Failed to decode state:', e)
    return null
  }
}
