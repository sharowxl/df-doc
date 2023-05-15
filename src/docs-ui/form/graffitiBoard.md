## GraffitiBoard 签字板

### 基础用法
:::demo
```html
<template>
  <div class="block">
    <df-graffiti-board :props="props" :board-width="500" :board-height="300"></df-graffiti-board>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        props: {
          minRange: 1,
          maxRange: 10,
          lineWidth: 5
        }
      }
    }
  }
</script>
```
:::

### 自定义颜色
:::demo
```html
<template>
  <div class="block">
    <df-graffiti-board :colors="colors"></df-graffiti-board>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        colors: ['black', 'red', 'blue', 'yellow', 'green', 'gray']
      }
    }
  }
</script>
```
:::

### 自定义功能区
:::demo
```html
<template>
  <div class="block">
    <df-graffiti-board :layout="'rubber, prev, clear, pickColor'"></df-graffiti-board>
  </div>
</template>
```
:::

### 默认值
:::demo
```html
<template>
  <div class="block">
    <df-graffiti-board v-model="value" :board-width="690" :board-height="100"></df-graffiti-board>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        value: require('../../assets/img/logo.png')
      }
    }
  }
</script>
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value / v-model | 绑定值，返回绘制图片 | string | — | — |
| colors | 颜色 | Array | — | ['#191F25', '#FF4545', '#52B521', '#FE7C4B', '#2D6EEB'] |
| file-name | 下载绘制图片时的文件名 | string | — | 'graffiti-board' |
| board-width | 画布宽度 | string/number | — | 500 |
| board-height | 画布高度 | string/number | — | 300 |
| props | 画布相关配置 | object | — | — |
| layout | 功能区布局，用逗号分隔 | string | `prev`, `clear`, `colors`, `pickColor`, `rubber`, `range`, `download` | 'prev, clear, colors, pickColor, rubber, range, download' |

### Props
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| minRange | 画笔最小值 | number | — | 3 |
| maxRange | 画笔最大值 | number | — | 15 |
| lineWidth | 画笔默认大小，在最小值和最大值之间 | number | — | 3 |
| lineCap | 线条的结束端点样式 | string | 'round' / 'butt' / 'square' | 'round' |
| lineJoin | 两条线相交时，所创建的拐角类型 | string | 'round' / 'bevel' / 'miter' | 'round' |
| fillStyle | 画布背景 | string | hsl / hex / rgb / rgba | '#FFFFFF' |