[Galaxy UI](../index.md) / useConfig

# 函数: useConfig()

> **useConfig**(`init?`): [`ConfigContext`](../interfaces/ConfigContext.md)

定义于: galaxy-ui/src/composables/use-config.ts:33

A composable function to access the configuration of the Galaxy UI components.

You can use useConfig instead of or in conjunction with a <g-config-provider /> component.

## 参数

### init?

`Partial`\<[`ConfigContext`](../interfaces/ConfigContext.md)\>

Initial configuration for the components.

## 返回

[`ConfigContext`](../interfaces/ConfigContext.md)

A reactive configuration object that can be used in components.
