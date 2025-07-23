import { useConfig } from "./use-config.js";
function useNamespace(name) {
  const { namespace } = useConfig();
  const block = `${namespace}-${name}`;
  function e(element) {
    return `${block}__${element}`;
  }
  function ee(element, elementSuffix) {
    return `${block}__${element}-${elementSuffix}`;
  }
  function m(modifier) {
    return `${block}--${modifier}`;
  }
  function be(blockSuffix, element) {
    return arguments.length === 1 ? `${block}__${blockSuffix}` : `${block}-${blockSuffix}__${element}`;
  }
  function em(element, modifier) {
    return `${e(element)}--${modifier}`;
  }
  return {
    b(blockSuffix) {
      return blockSuffix ? `${block}-${blockSuffix}` : block;
    },
    e,
    m,
    em,
    ee,
    be,
    is,
    has
  };
}
function is(value) {
  return state("is", value);
}
function has(value) {
  return state("has", value);
}
function state(namespace, state2) {
  return `${namespace}-${state2}`;
}
export {
  useNamespace
};
