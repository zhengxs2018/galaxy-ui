import { provideAppConfig } from "./composables/use-config.js";
import _sfc_main from "./components/g-button/g-button.vue.js";
import _sfc_main$1 from "./components/g-config-provider/g-config-provider.vue.js";
const install = (app, init) => {
  if (init) provideAppConfig(app, init);
  app.component(_sfc_main.name, _sfc_main);
  app.component(_sfc_main$1.name, _sfc_main$1);
};
export {
  install
};
