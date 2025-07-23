export type ComponentSize =
  | (string & {})
  | 'default'
  | 'medium'
  | 'small'
  | 'large'

export const COMPONENT_SIZE: ComponentSize[] = [
  '',
  'default',
  'medium',
  'small',
  'large',
]

export type ButtonType =
  | (string & {})
  | 'default'
  | 'primary'
  | 'success'
  | 'warning'
  | 'info'
  | 'danger'

export const BUTTON_TYPES: ButtonType[] = [
  'default',
  'primary',
  'success',
  'warning',
  'info',
  'danger',
  '',
]

export type ButtonNativeType = (string & {}) | 'button' | 'submit' | 'reset'

export const BUTTON_NATIVE_TYPES: ButtonNativeType[] = [
  'button',
  'submit',
  'reset',
]

export type ButtonVariantType = (string & {}) | 'plain'

export const BUTTON_VARIANT_TYPES: ButtonVariantType[] = ['plain', '']
