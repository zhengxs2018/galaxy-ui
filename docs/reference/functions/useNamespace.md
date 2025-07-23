[Galaxy UI](../index.md) / useNamespace

# 函数: useNamespace()

> **useNamespace**(`name`): `object`

定义于: [composables/use-namespace.ts:20](https://github.com/zhengxs2018/galaxy-vue/blob/e67881df0290492498b823acdc47b0e998577a46/packages/galaxy-ui/src/composables/use-namespace.ts#L20)

A composable to generate BEM class names for components.
It uses the namespace provided by the app configuration.

## 参数

### name

`string`

The name of the component or block.

## 返回

An object containing methods to generate BEM class names.

### be()

> **be**: \{(`element`): `string`; (`blockSuffix`, `element`): `string`; \}

#### 调用签名

> (`element`): `string`

##### 参数

###### element

`string`

##### 返回

`string`

#### 调用签名

> (`blockSuffix`, `element`): `string`

##### 参数

###### blockSuffix

`string`

###### element

`string`

##### 返回

`string`

### e()

> **e**: (`element`) => `string`

Generate the element class name.

#### 参数

##### element

`string`

The element name to append to the block.

#### 返回

`string`

The generated element class name.

### ee()

> **ee**: (`element`, `elementSuffix`) => `string`

#### 参数

##### element

`string`

##### elementSuffix

`string`

#### 返回

`string`

### em()

> **em**: (`element`, `modifier`) => `string`

#### 参数

##### element

`string`

##### modifier

`string`

#### 返回

`string`

### has()

> **has**: (`value`) => `string`

#### 参数

##### value

`string`

#### 返回

`string`

### is()

> **is**: (`value`) => `string`

#### 参数

##### value

`string`

#### 返回

`string`

### m()

> **m**: (`modifier`) => `string`

#### 参数

##### modifier

`string`

#### 返回

`string`

### b()

> **b**(`blockSuffix?`): `string`

#### 参数

##### blockSuffix?

`string`

#### 返回

`string`

## 示例

```ts
const ns = useNamespace('button');

ns.b(); // 'galaxy-ui-button'
ns.e('icon'); // 'galaxy-ui-button__icon'
ns.m('primary'); // 'galaxy-ui-button--primary'
```
