## SearchBar 搜索控件

由输入框、选择器、单选框、多选框等控件组成，用以条件查询

### 单条件查询

简单的单条件查询。

:::demo 在 SearchBar 组件中，每一个表单域由一个 SearchBarItem 组件构成，表单域中可以放置各种类型的表单控件，包括 Input、Select、Checkbox、Radio、Switch、DatePicker、TimePicker
```html
<template>
  <df-search-bar
    :model="ruleForm"
    ref="ruleForm"
    class="demo-ruleForm"
    @submit="search"
  >
    <template>
      <df-search-bar-item label="活动名称" prop="name" inputWidth="200px">
        <df-input v-model="ruleForm.name"></df-input>
      </df-search-bar-item>
    </template>
  </df-search-bar>
</template>
<script>
  export default {
    data() {
      return {
        ruleForm: {
          name: ''
        }
      };
    },
    methods: {
      search(){
        console.log('search')
      }
    }
  }
</script>
```
:::

### 多条件查询

包括各种查询类型项，比如输入框、选择器、开关、单选框、多选框等，如果条件很多时，你可能需要重置按钮，配置 props.showResetButton = true 即可，注意要想使用重置按钮的内置重置功能，你必须要为 search-bar-item 传入 prop 参数，或者你也可以使用 reset 按钮传回的回调函数 @reset，来调用自己的重置方法。

:::demo 在 SearchBar 组件中，放置各种类型的表单控件，以实现多条件查询。
```html
<template>
  <df-search-bar
    :model="ruleForm"
    ref="ruleForm"
    class="demo-ruleForm"
    showResetButton
    @submit="search"
    @reset="reset"
  >
    <template>
      <df-search-bar-item label="活动名称" prop="name">
        <df-input v-model="ruleForm.name"></df-input>
      </df-search-bar-item>
      <df-search-bar-item label="活动区域" prop="region" inputWidth="150px">
        <df-select v-model="ruleForm.region" placeholder="请选择活动区域" style="width: 100%;">
          <df-option label="区域一" value="shanghai"></df-option>
          <df-option label="区域二" value="beijing"></df-option>
        </df-select>
      </df-search-bar-item>
    </template>
  </df-search-bar>
</template>
<script>
  export default {
    data() {
      return {
        ruleForm: {
          name: '',
          region: ''
        },
      };
    },
    methods: {
      search(){
        console.log('search')
      },
      reset () {
        console.log('reset')
      }
    }
  }
</script>
```
:::

### 可展开的多条件查询

当查询条件非常多时，可以隐藏一部分不重要的查询条件。

:::demo 配置 collapse 属性，即可开启隐藏/展开的切换功能，被隐藏的 SearchItem 需要放置在名为 collapse 的具名插槽中
```html
<template>
  <df-search-bar
    :model="ruleForm"
    ref="ruleForm"
    class="demo-ruleForm"
    collapse
    showResetButton
    @submit="search"
  >
    <template>
      <df-search-bar-item label="活动名称" prop="name">
        <df-input v-model="ruleForm.name"></df-input>
      </df-search-bar-item>
      <df-search-bar-item label="活动区域" prop="region" inputWidth="150px">
        <df-select v-model="ruleForm.region" placeholder="请选择活动区域" style="width: 100%;">
          <df-option label="区域一" value="shanghai"></df-option>
          <df-option label="区域二" value="beijing"></df-option>
        </df-select>
      </df-search-bar-item>
    </template>
    <template slot="collapse">
      <df-search-bar-item label="活动时间">
        <df-search-bar-item prop="date">
          <df-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date" style="width: 100%;"></df-date-picker>
        </df-search-bar-item>
      </df-search-bar-item>
      <df-search-bar-item label="即时配送" prop="delivery">
        <df-switch v-model="ruleForm.delivery"></df-switch>
      </df-search-bar-item>
      <df-search-bar-item label="活动性质" prop="type" inputWidth="auto">
        <df-checkbox-group v-model="ruleForm.type">
        <df-checkbox label="美食/餐厅线上活动" name="type"></df-checkbox>
        <df-checkbox label="地推活动" name="type"></df-checkbox>
        <df-checkbox label="线下主题活动" name="type"></df-checkbox>
        <df-checkbox label="单纯品牌曝光" name="type"></df-checkbox>
        </df-checkbox-group>
      </df-search-bar-item>
      <df-search-bar-item label="特殊资源" prop="resource" inputWidth="auto">
        <df-radio-group v-model="ruleForm.resource">
          <df-radio label="线上品牌"></df-radio>
          <df-radio label="线下场地"></df-radio>
        </df-radio-group>
      </df-search-bar-item>
      <df-search-bar-item label="活动地址" prop="address" inputWidth="260px">
        <df-input v-model="ruleForm.address"></df-input>
      </df-search-bar-item>
    </template>
  </df-search-bar>
</template>
<script>
  export default {
    data() {
      return {
        ruleForm: {
          name: '',
          region: '',
          date: '',
          delivery: false,
          type: [],
          resource: '',
          address: ''
        }
      };
    },
    methods: {
      search(){
        console.log('search')
      }
    }
  }
</script>
```
:::

### 查询条件输入验证

在防止用户犯错的前提下，尽可能让用户更早地发现并纠正错误，避免因为输入错误而引起的查询失败。

:::demo SearchBar 组件提供了查询条件验证的功能，只需要通过 `rules` 属性传入约定的验证规则即可。校验规则参见 [async-validator](https://github.com/yiminghe/async-validator)
```html
<template>
  <df-search-bar
    :model="ruleForm"
    :rules="rules"
    ref="ruleForm"
    class="demo-ruleForm"
    collapse
    showResetButton
    @submit="search"
  >
    <template>
      <df-search-bar-item label="活动名称" prop="name" tip-down>
        <df-input v-model="ruleForm.name"></df-input>
      </df-search-bar-item>
      <df-search-bar-item label="活动区域" prop="region" inputWidth="150px">
        <df-select v-model="ruleForm.region" placeholder="请选择活动区域" style="width: 100%;">
          <df-option label="区域一" value="shanghai"></df-option>
          <df-option label="区域二" value="beijing"></df-option>
        </df-select>
      </df-search-bar-item>
    </template>
    <template slot="collapse">
      <df-search-bar-item label="活动时间" required>
        <df-search-bar-item prop="date1">
          <df-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></df-date-picker>
        </df-search-bar-item>
      </df-search-bar-item>
      <df-search-bar-item label="即时配送" prop="delivery">
        <df-switch v-model="ruleForm.delivery"></df-switch>
      </df-search-bar-item>
      <df-search-bar-item label="活动性质" prop="type" inputWidth="auto">
        <df-checkbox-group v-model="ruleForm.type">
        <df-checkbox label="美食/餐厅线上活动" name="type"></df-checkbox>
        <df-checkbox label="地推活动" name="type"></df-checkbox>
        <df-checkbox label="线下主题活动" name="type"></df-checkbox>
        <df-checkbox label="单纯品牌曝光" name="type"></df-checkbox>
        </df-checkbox-group>
      </df-search-bar-item>
      <df-search-bar-item label="特殊资源" prop="resource" inputWidth="auto" tip-down>
        <df-radio-group v-model="ruleForm.resource">
          <df-radio label="线上品牌"></df-radio>
          <df-radio label="线下场地"></df-radio>
        </df-radio-group>
      </df-search-bar-item>
      <df-search-bar-item label="活动地址" prop="address" inputWidth="260px">
        <df-input v-model="ruleForm.address"></df-input>
      </df-search-bar-item>
    </template>
  </df-search-bar>
</template>
<script>
  export default {
    data() {
      return {
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          address: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          address: [
            { required: true, message: '请填写活动地址', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      search(){
        console.log('search')
      }
    }
  }
</script>
```
:::

### 插槽按钮

组件内部提供了按钮组的插槽，按钮插槽将被放置在展开/收起按钮的左边，按钮插槽的 name 是 buttons。

:::demo 配置 collapse 属性，即可开启隐藏/展开的切换功能，被隐藏的 SearchItem 需要放置在名为 collapse 的具名插槽中
```html
<template>
  <df-search-bar
    :model="ruleForm"
    ref="ruleForm"
    class="demo-ruleForm"
    collapse
    showResetButton
    @submit="search"
  >
    <template>
      <df-search-bar-item label="活动名称" prop="name">
        <df-input v-model="ruleForm.name"></df-input>
      </df-search-bar-item>
      <df-search-bar-item label="即时配送" prop="delivery" inputWidth="100px">
        <df-switch v-model="ruleForm.delivery"></df-switch>
      </df-search-bar-item>
    </template>
    <template slot="collapse">
      <df-search-bar-item label="活动时间">
        <df-search-bar-item prop="date">
          <df-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date" style="width: 100%;"></df-date-picker>
        </df-search-bar-item>
      </df-search-bar-item>
      <df-search-bar-item label="活动区域" prop="region">
        <df-select v-model="ruleForm.region" placeholder="请选择活动区域" style="width: 100%;">
          <df-option label="区域一" value="shanghai"></df-option>
          <df-option label="区域二" value="beijing"></df-option>
        </df-select>
      </df-search-bar-item>
      <df-search-bar-item label="活动性质" prop="type" inputWidth="auto">
        <df-checkbox-group v-model="ruleForm.type">
        <df-checkbox label="美食/餐厅线上活动" name="type"></df-checkbox>
        <df-checkbox label="地推活动" name="type"></df-checkbox>
        <df-checkbox label="线下主题活动" name="type"></df-checkbox>
        <df-checkbox label="单纯品牌曝光" name="type"></df-checkbox>
        </df-checkbox-group>
      </df-search-bar-item>
      <df-search-bar-item label="特殊资源" prop="resource" inputWidth="auto">
        <df-radio-group v-model="ruleForm.resource">
          <df-radio label="线上品牌"></df-radio>
          <df-radio label="线下场地"></df-radio>
        </df-radio-group>
      </df-search-bar-item>
      <df-search-bar-item label="活动地址" prop="address" inputWidth="260px">
        <df-input v-model="ruleForm.address"></df-input>
      </df-search-bar-item>
    </template>
    <template slot="buttons">
      <df-button type="success">插槽按钮</df-button>
      <df-button type="success">插槽按钮</df-button>
    </template>
  </df-search-bar>
</template>
<script>
  export default {
    data() {
      return {
        ruleForm: {
          name: '',
          region: '',
          date: '',
          delivery: false,
          type: [],
          resource: '',
          address: ''
        }
      };
    },
    methods: {
      search(){
        console.log('search')
      }
    }
  }
</script>
```
:::

### SearchBar Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| model   | 数据对象 | object      |                  —                |  — |
| rules    | 验证规则 | object | — | — |
| label-width | 表单域标签的宽度，例如 '50px'。作为 SearchBar 直接子元素的 SearchBarItem 会继承该值。支持 `auto`。 | string | — | — |
| label-suffix | 表单域标签的后缀 | string | — | — |
| hide-required-asterisk | 是否显示必填字段的标签旁边的红色星号 | boolean | — | false |
| show-message  | 是否显示校验错误信息 | boolean | — | true |
| inline-message  | 是否以行内形式展示校验信息 | boolean | — | false |
| status-icon  | 是否在输入框中显示校验结果反馈图标 | boolean | — | false |
| validate-on-rule-change  | 是否在 `rules` 属性改变后立即触发一次验证 | boolean | — | true |
| disabled | 是否禁用该表单内的所有组件。若设置为 true，则表单内组件上的 disabled 属性不再生效 | boolean | — | false |
| collapse  | 是否开启更多查询条件的隐藏/开启按钮 | boolean | — | false |
| show-submit-button | 是否显示查询按钮 | boolean | — | true |
| show-reset-button | 是否显示重置按钮 | boolean | — | false |
| disable-submit-button | 是否禁用查询按钮 | boolean | — | false |
| disable-reset-button | 是否禁用重置按钮 | boolean | — | false |
| buttons-size  | 查询/重置按钮的尺寸 |  string | — | mini |
| slot-buttons-inject-style  | /*新增*/ slot-buttons 的注入样式，当样式需求比较复杂时，以 style 对象注入的形式定制 slot-buttons 的样式 |  object | — | — |
| submit-text | /*新增*/ 查询按钮的文本 | string | — | 查询 |
| reset-text | /*新增*/ 重置按钮的文本 | string | — | 重置 |

### SearchBar Methods

| 方法名      | 说明          | 参数
|---------- |-------------- | --------------
| validate | 对整个输入区域进行校验的方法，参数为一个回调函数。该回调函数会在校验结束后被调用，并传入两个参数：是否校验成功和未通过校验的字段。若不传入回调函数，则会返回一个 promise | Function(callback: Function(boolean, object))
| validateField | 对部分输入项字段进行校验的方法 | Function(props: array \| string, callback: Function(errorMessage: string))
| resetFields | 对整个输入区域进行重置，将所有字段值重置为初始值并移除校验结果 | —
| clearValidate | 移除输入项的校验结果。传入待移除的输入项的 prop 属性或者 prop 组成的数组，如不传则移除整个输入区域的校验结果 | Function(props: array \| string)

### SearchBar Events
| 事件名称 | 说明    | 回调参数  |
|--------- |-------- |---------- |
| submit | 点击查询按钮后触发 | 无 |
| reset | 点击重置按钮后触发 | 无 |
| validate | 任一表单项被校验后触发 | 被校验的表单项 prop 值，校验是否通过，错误消息（如果存在） |

### SearchBar Slot
| name | 说明 |
|------|--------|
| — | 默认展示的查询输入项 |
| collapse | 可展开/隐藏的查询输入项 |
| buttons | 按钮组插槽 |

### SearchBarItem Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| prop    | 表单域 model 字段，如果需要重置功能，则该属性是必填的 | string    | 传入 SearchBar 组件的 `model` 中的字段 | — |
| label | 标签文本 | string | — | — |
| input-width | 表单域输入框的宽度，例如 '50px'。支持 `auto`。 | string/number | — | — |
| label-width | 标签的的宽度，例如 '50px'。支持 `auto`。 | string |       —       | — |
| required | 是否必填，如不设置，则会根据校验规则自动生成 | boolean | — | false |
| rules    | 验证规则 | object | — | — |
| error    | 验证错误信息, 设置该值会使表单验证状态变为`error`，并显示该错误信息 | string | — | — |
| show-message  | 是否显示校验错误信息 | boolean | — | true |
| inline-message  | 以行内形式展示校验信息 | boolean | — | false |
| size  | 用于控制该组件的尺寸 | string | medium / small / mini | - |
| show-message  | 是否显示校验错误信息 | boolean | — | true |
| label-min-width  | /*新增*/ 标签的最小宽度，例如 '50px'。 |  string | — | — |
| input-min-width  | /*新增*/ 表单域输入框的最小宽度，例如 '50px'。 |  string | — | — |
| label-inject-style  | /*新增*/ 标签的注入样式，当样式需求比较复杂时，以 style 对象注入的形式定制 label 的样式 | object | — | — |
| input-inject-style  | /*新增*/ 表单域输入框的注入样式，当样式需求比较复杂时，以 style 对象注入的形式定制 input 的样式 |  object | — | — |
| content-inject-style  | /*新增*/ 表单域 content 的注入样式，当样式需求比较复杂时，以 style 对象注入的形式定制 input 的样式 |  object | — | — |

### SearchBarItem Slot
| name | 说明 |
|------|--------|
| — | SearchBar Item 的内容 |
| label | 标签文本的内容 |

### SearchBarItem Scoped Slot
|  name  |   说明  |
|--------|--------|
|  error | 自定义校验信息的显示方式，参数为 { error } |

### SearchBarItem Methods

| 方法名      | 说明          | 参数
|---------- |-------------- | --------------
| resetField | 对该输入项进行重置，将其值重置为初始值并移除校验结果 | -
| clearValidate | 移除该输入项的校验结果 | -