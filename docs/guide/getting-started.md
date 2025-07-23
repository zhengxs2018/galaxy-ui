---
title: 快速开始
---

# 快速开始

这个教程可以帮助你快速上手 Galaxy UI。

## 安装

选择合适的包管理工具，然后执行：

::: code-group

```sh [pnpm]
$ pnpm add galaxy-ui
```

```sh [yarn]
$ yarn add galaxy-ui
```

```sh [npm]
$ npm add galaxy-ui
```

:::

## 引入样式文件

[Sass](https://github.com/sass) 的最低支持版本为 1.79.0，推荐使用 [sass-embedded](https://github.com/sass/embedded-host-node)。

::: code-group

```scss [导入主题文件]
@use 'galaxy-ui/index.scss';
```

```scss [修改变量]
@forward 'galaxy-ui/theme.scss' with (
  $namespace: 'g'
);
```

:::

### 使用

::: code-group

```vue [直接使用]
<script setup lang="ts">
import { GButton } from 'galaxy-ui'
</script>

<template>
  <g-button>按钮</g-button>
</template>
```

```ts [全局注册]
import GalaxyUI from 'galaxy-ui'
import { createApp } from 'vue'

const app = createApp(App)

app.use(GalaxyUI)
```

:::
