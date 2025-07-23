import { defineComponent, renderSlot } from "vue";
import { provideConfig } from "../../composables/use-config.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "GConfigProvider",
    inheritAttrs: false
  },
  __name: "g-config-provider",
  props: {
    namespace: {},
    size: {}
  },
  setup(__props) {
    const props = __props;
    provideConfig(props);
    return (_ctx, _cache) => {
      return renderSlot(_ctx.$slots, "default");
    };
  }
});
export {
  _sfc_main as default
};
