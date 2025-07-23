import { inject, computed, unref } from "vue";
import { useConfig } from "./use-config.js";
const SIZE_INJECTION_KEY = Symbol("galaxy-ui#size");
function useSize() {
  const { size } = useConfig();
  const context = inject(SIZE_INJECTION_KEY, null);
  return computed(() => {
    const sizeValue = context ? unref(context.size) : null;
    return sizeValue || size || "";
  });
}
export {
  useSize
};
