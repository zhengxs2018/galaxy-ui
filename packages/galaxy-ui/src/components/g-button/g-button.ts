import type { Component, ExtractPropTypes, PropType } from 'vue'

import {
  BUTTON_NATIVE_TYPES,
  BUTTON_TYPES,
  BUTTON_VARIANT_TYPES,
  type ButtonVariantType,
  COMPONENT_SIZE,
  type ComponentSize,
} from '../../common/constants.js'

export const buttonProps = {
  as: {
    type: [String, Object] as PropType<string | Component>,
    default: 'button',
  },
  type: {
    type: String,
    values: BUTTON_TYPES,
    default: 'default',
  },
  // icon: {
  //   type: iconPropType,
  // },
  size: {
    type: String as PropType<ComponentSize>,
    values: COMPONENT_SIZE,
    default: '',
  },
  nativeType: {
    type: String,
    values: BUTTON_NATIVE_TYPES,
    default: 'button',
  },
  variant: {
    type: String as PropType<ButtonVariantType>,
    values: BUTTON_VARIANT_TYPES,
    default: '',
  },
  shape: {
    type: String as PropType<'circle' | 'round' | (string & {})>,
    values: ['circle', 'round', ''],
    default: '',
  },
  loading: Boolean,
  // loadingIcon: {
  //   type: iconPropType,
  //   default: () => Loading,
  // },
  disabled: Boolean,
} as const

export type ButtonProps = ExtractPropTypes<typeof buttonProps>

export const buttonEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
}

export type ButtonEmits = typeof buttonEmits
