import { BUTTON_VARIANT_TYPES, BUTTON_NATIVE_TYPES, COMPONENT_SIZE, BUTTON_TYPES } from "../../common/constants.js";
const buttonProps = {
  as: {
    type: [String, Object],
    default: "button"
  },
  type: {
    type: String,
    values: BUTTON_TYPES,
    default: "default"
  },
  // icon: {
  //   type: iconPropType,
  // },
  size: {
    type: String,
    values: COMPONENT_SIZE,
    default: ""
  },
  nativeType: {
    type: String,
    values: BUTTON_NATIVE_TYPES,
    default: "button"
  },
  variant: {
    type: String,
    values: BUTTON_VARIANT_TYPES,
    default: ""
  },
  shape: {
    type: String,
    values: ["circle", "round", ""],
    default: ""
  },
  loading: Boolean,
  // loadingIcon: {
  //   type: iconPropType,
  //   default: () => Loading,
  // },
  disabled: Boolean
};
const buttonEmits = {
  click: (evt) => evt instanceof MouseEvent
};
export {
  buttonEmits,
  buttonProps
};
