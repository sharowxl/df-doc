## ButtonList 按钮
配置化按钮

### 分割线
:::demo

```html
<template>
  <div>
    <label>带分割线</label>
    <df-button-list
      show-divide
      :buttonList="buttonList"
    />
    <br/>
    <label>不带分割线</label>
    <df-button-list
      :show-divide="false"
      :buttonList="buttonList"
    />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        buttonList: [{
          label: 'button1',
          loading: false,
          click: (button) => {
            button.loading = true
            setTimeout(() => {
              button.loading = false
            }, 1000)
          } 
        }, {
          label: 'button2',
          click: (button) => {} 
        }, {
          label: 'button3',
          click: (button) => {
            console.log(button)
          } 
        }, {
          label: 'button4',
          click: (button) => {} 
        }]
      }
    }
  }
</script>
```
:::

### 各种type类型
:::demo

```html
<template>
  <div>
    <df-button-list
      show-divide
      :display-button-length="5"
      :buttonList="buttonList"
    />
    <br/>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        buttonList: [{
          label: 'button1',
          loading: false,
          type: 'primary',
          click: (button) => {
            button.loading = true
            setTimeout(() => {
              button.loading = false
            }, 1000)
          } 
        }, {
          label: 'button2',
          type: 'success',
          click: (button) => {} 
        }, {
          label: 'button3',
          type: 'warning',
          click: (button) => {
            console.log(button)
          } 
        }, {
          label: 'button4',
          type: 'danger',
          click: (button) => {} 
        }, {
          label: 'button5',
          type: 'info',
          click: (button) => {} 
        }]
      }
    }
  }
</script>
```
:::

### 使用showable控制只显示符合条件的按钮
:::demo

```html
<template>
  <div>
    <df-button-list
      :data="data"
      :display-button-length="5"
      :buttonList="buttonList"
    />
    <br/>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        data: {
          showButton: [2, 3, 4]
        },
        buttonList: [{
          label: 'button1',
          loading: false,
          type: 'primary',
          showable: false,
          click: (button) => {
            button.loading = true
            setTimeout(() => {
              button.loading = false
            }, 1000)
          } 
        }, {
          label: 'button2',
          type: 'success',
          showable: (data) => data.showButton.includes(2),
          click: (button) => {} 
        }, {
          label: 'button3',
          type: 'warning',
          showable: (data) => data.showButton.includes(3),
          click: (button) => {
            console.log(button)
          } 
        }, {
          label: 'button4',
          type: 'danger',
          showable: (data) => data.showButton.includes(4),
          click: (button) => {} 
        }, {
          label: 'button5',
          type: 'info',
          showable: (data) => data.showButton.includes(5),
          click: (button) => {} 
        }]
      }
    }
  }
</script>
```
:::

### 使用disabled控制只读符合条件的按钮
:::demo

```html
<template>
  <div>
    <df-button-list
      :data="data"
      :display-button-length="5"
      :buttonList="buttonList"
    />
    <br/>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        data: {
          disabledButton: [2, 3]
        },
        buttonList: [{
          label: 'button1',
          loading: false,
          type: 'primary',
          disabled: true,
          click: (button) => {
            button.loading = true
            setTimeout(() => {
              button.loading = false
            }, 1000)
          } 
        }, {
          label: 'button2',
          type: 'success',
          disabled: (data) => data.disabledButton.includes(2),
          click: (button) => {} 
        }, {
          label: 'button3',
          type: 'warning',
          disabled: (data) => data.disabledButton.includes(3),
          click: (button) => {
            console.log(button)
          } 
        }, {
          label: 'button4',
          type: 'danger',
          disabled: (data) => data.disabledButton.includes(4),
          click: (button) => {} 
        }, {
          label: 'button5',
          type: 'info',
          disabled: (data) => data.disabledButton.includes(5),
          click: (button) => {} 
        }]
      }
    }
  }
</script>
```
:::

### button-list Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| display-button-length | 显示按钮数量 | number  |   -   |  2  |
| show-divide  | 是否显示分割线 | boolean  | - | false |
| hide-on-click  | 收起的按钮点击后是否立刻隐藏收起按钮 | boolean  | - | false |
| button-list | 按钮配置,详见下表 | [object] | — | [] |
| data | 额外数据,用于按钮各个函数的回调 | array/object | — | {} |

### button-list Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| label | 按钮名称 | string/function(button-list传入的data)  |   -   |  -  |
| showable  | 是否显示 | boolean/function(button-list传入的data)  | - | true |
| disabled | 是否只读 | boolean/function(button-list传入的data) | — | false |
| click | 点击执行方法 | function(当前按钮配置, button-list传入的data) | — | - |
| size | 尺寸 | string  | medium / small / mini  |    —     |
| type | 类型 | string | primary / success / warning / danger / info / text | text |
| plain | 是否朴素按钮   | boolean | — | false |
| round | 是否圆角按钮   | boolean | — | false |
| circle | 是否圆形按钮   | boolean | — | false |
| icon  | 图标类名 | string   |  —  |  —  |
| autofocus  | 是否默认聚焦 | boolean   |  —  |  false  |
