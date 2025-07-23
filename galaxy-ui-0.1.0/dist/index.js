import { install } from "./installer.js";
import { version } from "./version.js";
import { default as default2 } from "./components/g-config-provider/g-config-provider.vue.js";
import { default as default3 } from "./components/g-button/g-button.vue.js";
import { BUTTON_NATIVE_TYPES, BUTTON_TYPES, BUTTON_VARIANT_TYPES, COMPONENT_SIZE } from "./common/constants.js";
import { buttonEmits, buttonProps } from "./components/g-button/g-button.js";
import { useConfig } from "./composables/use-config.js";
import { useNamespace } from "./composables/use-namespace.js";
import { useSize } from "./composables/use-size.js";
const index = {
  version,
  install
};
export {
  BUTTON_NATIVE_TYPES,
  BUTTON_TYPES,
  BUTTON_VARIANT_TYPES,
  COMPONENT_SIZE,
  default3 as GButton,
  default2 as GConfigProvider,
  buttonEmits,
  buttonProps,
  index as default,
  useConfig,
  useNamespace,
  useSize,
  version
};
