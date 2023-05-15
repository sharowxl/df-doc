## RightMenu 右键菜单

点击右键时,出现对应按钮菜单

### 基础用法

:::demo

```html
<template>
  <div
    v-right-menu="menuList"
    :df-right-menu-data="data"
    :style="style"
  >
    demo
  </div>
</template>

<script>
export default {
  name: 'Demo',
  data () {
    return {
      style: {
        width: '100px',
        height: '100px',
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        lineHeight: '100px'
      },
      data: {
        xingMing: '张三'
      },
      menuList: [{
        label: '按钮1',
        click: ({menu, data}) => {
          console.log(menu.label, JSON.parse(JSON.stringify(data)))
        }
      }, {
        label: '按钮2',
        divided: true,
        click: ({menu, data}) => {
          console.log(menu.label, JSON.parse(JSON.stringify(data)))
        }
      }]
    }
  }
}
</script>

```
:::

### 属性
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value | 绑定menuList,一个对象数组,对象内可配置内容详见下表 | [object] | — | — |
| df-right-menu-data | 菜单按钮点击后的回调数据 | object | — | — |
| df-right-menu-showable | 右键点击后是否显示右键菜单 | boolean | — | true |

#### 绑定menuList的对象的可配置属性
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| label | 菜单按钮名称 | string | — | — |
| divided | 是否显示分割线 | boolean | — | — |
| click | 菜单按钮点击事件, 回调参数是当前按钮配置内容与right-menu-data | function({menu, data}) | — | — |
