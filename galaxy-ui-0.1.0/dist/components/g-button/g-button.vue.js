import { defineComponent, computed, createBlock, openBlock, resolveDynamicComponent, normalizeClass, withCtx, renderSlot } from "vue";
import { useNamespace } from "../../composables/use-namespace.js";
import { buttonEmits, buttonProps } from "./g-button.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "GButton",
    inheritAttrs: false
  },
  __name: "g-button",
  props: buttonProps,
  emits: buttonEmits,
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const ns = useNamespace("button");
    const className = computed(() => {
      const { type, size, variant, shape, loading, disabled } = props;
      return [
        ns.b(),
        {
          [ns.m(type)]: type !== "",
          [ns.m(variant)]: variant !== "",
          [ns.m(shape)]: shape !== "",
          [ns.m(size)]: size !== "",
          [ns.is("loading")]: loading,
          [ns.is("disabled")]: disabled
        }
      ];
    });
    function handleClick(event) {
      if (props.loading || props.disabled) {
        event.stopPropagation();
        event.preventDefault();
        return;
      }
      emit("click", event);
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(_ctx.as), {
        ref: "button",
        class: normalizeClass(className.value),
        disabled: _ctx.disabled,
        onClick: handleClick
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["class", "disabled"]);
    };
  }
});
export {
  _sfc_main as default
};
