import { inject, provide } from "vue";
const CONFIG_INJECTION_KEY = Symbol("galaxy-ui#config");
function provideAppConfig(app, init) {
  app.provide(CONFIG_INJECTION_KEY, createConfig(init));
}
function provideConfig(init) {
  const base = inject(CONFIG_INJECTION_KEY, null);
  provide(
    CONFIG_INJECTION_KEY,
    base ? extendConfig(base, init) : createConfig(init)
  );
}
function useConfig(init) {
  return inject(
    CONFIG_INJECTION_KEY,
    () => {
      const config = createConfig(init);
      provide(CONFIG_INJECTION_KEY, config);
      return config;
    },
    true
  );
}
function extendConfig(target, source) {
  if (!source) return target;
  return Object.keys(target).reduce((acc, key) => {
    const srcValue = source[key];
    if (srcValue !== void 0 || srcValue !== null) {
      acc[key] = srcValue;
    }
    return acc;
  }, Object.create(target));
}
function createConfig(init) {
  const defaults = {
    namespace: "g",
    size: ""
  };
  return mergeConfig(defaults, init);
}
function mergeConfig(target, source) {
  if (!source) return target;
  Object.keys(source).forEach((key) => {
    const value = source[key];
    if (value === void 0 || value === null) return;
    target[key] = value;
  });
  return target;
}
export {
  provideAppConfig,
  provideConfig,
  useConfig
};
