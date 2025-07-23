[Galaxy UI](../index.md) / useConfig

# 函数: useConfig()

> **useConfig**(`init?`): [`ConfigContext`](../interfaces/ConfigContext.md)

定义于: [composables/use-config.ts:33](https://github.com/zhengxs2018/galaxy-vue/blob/8e5a3fb68b3f76d6c1ebad5eeee34606ff2e7045/packages/galaxy-ui/src/composables/use-config.ts#L33)

A composable function to access the configuration of the Galaxy UI components.

You can use useConfig instead of or in conjunction with a <g-config-provider /> component.

## 参数

### init?

`Partial`\<[`ConfigContext`](../interfaces/ConfigContext.md)\>

Initial configuration for the components.

## 返回

[`ConfigContext`](../interfaces/ConfigContext.md)

A reactive configuration object that can be used in components.
