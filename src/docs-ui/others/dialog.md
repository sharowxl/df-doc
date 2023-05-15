## Dialog 对话框
在保留当前页面状态的情况下，告知用户并承载相关操作。

### 基本用法

Dialog 弹出一个对话框，适合需要定制性更大的场景。

:::demo 需要设置`visible`属性，它接收`Boolean`，当为`true`时显示 Dialog。Dialog 分为两个部分：`body`和`footer`，`footer`需要具名为`footer`的`slot`。`title`属性用于定义标题，它是可选的，默认值为空。最后，本例还展示了`before-close`的用法。

```html
<template>
  <div>
    <df-button type="text" @click="dialogVisible = true">点击打开 Dialog</df-button>

    <df-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <span>这是一段信息</span>
      <div slot="footer" class="dialog-footer">
        <df-button plain size="small" @click="dialogVisible = false">取消</df-button>
        <df-button size="small" type="primary" @click="dialogVisible = false">确定</df-button>
      </div>
    </df-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dialogVisible: false
      };
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
  };
</script>
```
:::

### 大号字体

Dialog 弹出一个对话框，使用大号标题。

:::demo 设置`large-title`属性，它接收`Boolean`，当为`true`时显示大号标题。body 部分使用表单，表单也可以使用大号字体，设置 `size` 为 `large` 即可。

```html
<template>
  <div>
    <!-- Form -->
    <df-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</df-button>

    <df-dialog title="收货地址" :visible.sync="dialogFormVisible" large-title>
      <df-form :model="form">
        <df-form-item size="large" label="活动名称">
          <df-input size="large" v-model="form.name" autocomplete="off"></df-input>
        </df-form-item>
        <df-form-item size="large" label="活动区域">
          <df-select size="large" v-model="form.region" placeholder="请选择活动区域">
            <df-option label="区域一" value="shanghai"></df-option>
            <df-option label="区域二" value="beijing"></df-option>
          </df-select>
        </df-form-item>
      </df-form>
      <div slot="footer" class="dialog-footer">
        <df-button size="large" plain @click="dialogFormVisible = false">取消</df-button>
        <df-button size="large" type="primary" @click="dialogFormVisible = false">确定</df-button>
      </div>
    </df-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dialogFormVisible: false,
      form: {
        name: '',
        region: ''
      }
    }
  }
}
</script>
```
:::

### 使用最大高度

将 dialog 的高度充满屏幕最大可用空间。

:::demo 需要设置`use-max-height`属性，并设定`top`属性来控制上下留出的空隙。

```html
<template>
  <div>
    <df-button type="text" @click="dialogVisible = true">点击打开 Dialog</df-button>

    <df-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="60%"
      use-max-height
      top="5vh"
    >
      <span>这是一段信息</span>
      <div slot="footer" class="dialog-footer">
        <df-button plain size="small" @click="dialogVisible = false">取消</df-button>
        <df-button size="small" type="primary" @click="dialogVisible = false">确定</df-button>
      </div>
    </df-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dialogVisible: false
    }
  }
}
</script>

```
:::

:::tip
`before-close` 仅当用户通过点击关闭图标或遮罩关闭 Dialog 时起效。如果你在 `footer` 具名 slot 里添加了用于关闭 Dialog 的按钮，那么可以在按钮的点击回调函数里加入 `before-close` 的相关逻辑。
:::

### 自定义内容

Dialog 组件的内容可以是任意的，甚至可以是表格或表单，下面是应用了 DfUI Table 和 Form 组件的两个样例。

:::demo
```html
<template>
  <div>
    <!-- Table -->
    <df-button type="text" @click="dialogTableVisible = true" style="margin-right: 15px">打开嵌套表格的 Dialog</df-button>

    <df-dialog title="收货地址" :visible.sync="dialogTableVisible">
      <df-table :data="gridData">
        <df-table-column property="date" label="日期" width="150"></df-table-column>
        <df-table-column property="name" label="姓名" width="200"></df-table-column>
        <df-table-column property="address" label="地址"></df-table-column>
      </df-table>
    </df-dialog>

    <!-- Form -->
    <df-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</df-button>

    <df-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <df-form :model="form">
        <df-form-item label="活动名称" :label-width="formLabelWidth">
          <df-input v-model="form.name" autocomplete="off"></df-input>
        </df-form-item>
        <df-form-item label="活动区域" :label-width="formLabelWidth">
          <df-select v-model="form.region" placeholder="请选择活动区域">
            <df-option label="区域一" value="shanghai"></df-option>
            <df-option label="区域二" value="beijing"></df-option>
          </df-select>
        </df-form-item>
      </df-form>
      <div slot="footer" class="dialog-footer">
        <df-button plain size="small" @click="dialogFormVisible = false">取消</df-button>
        <df-button size="small" type="primary" @click="dialogFormVisible = false">确定</df-button>
      </div>
    </df-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        gridData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
      };
    }
  };
</script>
```
:::

### 嵌套的 Dialog
如果需要在一个 Dialog 内部嵌套另一个 Dialog，需要使用 `append-to-body` 属性。
:::demo 正常情况下，我们不建议使用嵌套的 Dialog，如果需要在页面上同时显示多个 Dialog，可以将它们平级放置。对于确实需要嵌套 Dialog 的场景，我们提供了`append-to-body`属性。将内层 Dialog 的该属性设置为 true，它就会插入至 body 元素上，从而保证内外层 Dialog 和遮罩层级关系的正确。
```html
<template>
  <div>
    <df-button type="text" @click="outerVisible = true">点击打开外层 Dialog</df-button>
    
    <df-dialog title="外层 Dialog" :visible.sync="outerVisible">
      <df-dialog
        width="30%"
        title="内层 Dialog"
        :visible.sync="innerVisible"
        append-to-body>
      </df-dialog>
      <div slot="footer" class="dialog-footer">
        <df-button plain size="small" @click="outerVisible = false">取消</df-button>
        <df-button size="small" type="primary" @click="innerVisible = true">打开内层 Dialog</df-button>
      </div>
    </df-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        outerVisible: false,
        innerVisible: false
      };
    }
  }
</script>
```
:::

### 居中布局

标题和底部可水平居中

:::demo 将`center`设置为`true`即可使标题和底部居中。`center`仅影响标题和底部区域。Dialog 的内容是任意的，在一些情况下，内容并不适合居中布局。如果需要内容也水平居中，请自行为其添加 CSS。

```html
<template>
  <div>
    <df-button type="text" @click="centerDialogVisible = true">点击打开 Dialog</df-button>

    <df-dialog
      title="提示"
      :visible.sync="centerDialogVisible"
      width="30%"
      center>
      <span>需要注意的是内容是默认不居中的</span>
      <div slot="footer" class="dialog-footer">
        <df-button plain size="small" @click="centerDialogVisible = false">取消</df-button>
        <df-button size="small" type="primary" @click="centerDialogVisible = false">确定</df-button>
      </div>
    </df-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        centerDialogVisible: false
      };
    }
  };
</script>
```
:::

:::tip
Dialog 的内容是懒渲染的，即在第一次被打开之前，传入的默认 slot 不会被渲染到 DOM 上。因此，如果需要执行 DOM 操作，或通过 `ref` 获取相应组件，请在 `open` 事件回调中进行。
:::

:::tip
如果 `visible` 属性绑定的变量位于 Vuex 的 store 内，那么 `.sync` 不会正常工作。此时需要去除 `.sync` 修饰符，同时监听 Dialog 的 `open` 和 `close` 事件，在事件回调中执行 Vuex 中对应的 mutation 更新 `visible` 属性绑定的变量的值。
:::

### 关闭可拖拽

Dialog 对话框默认支持拖拽，需要注意，在非全屏模式下，拖拽才有效。可通过配置 `need-drag` 为 `false` 关闭拖拽功能。还要注意的是，如果配置了属性 `need-minimize` 或者 `no-wrapper`，那么对话框将会强制设置为可拖拽，即使你设置了 `need-drag` 为 `false`。

:::demo 配置属性 `need-drag` 为 `false` 即可关闭拖拽功能。

```html
<template>
  <div>
    <df-button type="text" @click="dialogVisible = true">点击打开 Dialog</df-button>

    <df-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :need-drag="false">
      <span>这是一段信息</span>
      <div slot="footer" class="dialog-footer">
        <df-button plain size="small" @click="dialogVisible = false">取消</df-button>
        <df-button size="small" type="primary" @click="dialogVisible = false">确定</df-button>
      </div>
    </df-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dialogVisible: false
      }
    }
  };
</script>
```
:::
### 全屏/退出全屏切换

Dialog 对话框支持全屏/退出全屏切换。

:::demo 配置属性 `need-fullscreen-toggle` 为 `true` 即可开启全屏/退出全屏切换。

```html
<template>
  <div>
    <df-button type="text" @click="dialogVisible = true">点击打开 Dialog</df-button>

    <df-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      need-fullscreen-toggle>
      <span>这是一段信息</span>
      <div slot="footer" class="dialog-footer">
        <df-button plain size="small" @click="dialogVisible = false">取消</df-button>
        <df-button size="small" type="primary" @click="dialogVisible = false">确定</df-button>
      </div>
    </df-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dialogVisible: false
      }
    }
  }
</script>
```
:::
### 最小化窗口

Dialog 对话框支持最小化窗口，在最小化状态下，只会保留 header 部分，其余部分会被隐藏。

:::demo 配置属性 `need-minimize` 为 `true` 即可启用对话框最小化窗口，需要注意的是，在此状态下，对话框会被强制设置为可拖拽，即使你设置了 `need-drag` 为 `false`。

```html
<template>
  <div>
    <df-button type="text" @click="dialogVisible = true">点击打开 Dialog</df-button>

    <df-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      need-minimize>
      <span>这是一段信息</span>
      <div slot="footer" class="dialog-footer">
        <df-button plain size="small" @click="dialogVisible = false">取消</df-button>
        <df-button size="small" type="primary" @click="dialogVisible = false">确定</df-button>
      </div>
    </df-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dialogVisible: false
    }
  }
}
</script>
```
:::
### 移除底层外壳

Dialog 支持移除底层外壳，移除外壳后，对话框将不会再遮盖全部屏幕，使得对话框之外的页面部分可以正常使用。

:::demo 配置属性 `no-wrapper` 为 `true`，对话框将会移除遮罩层 modal 和底层外壳，对话框将不会再遮盖全部屏幕，使得对话框之外的页面部分可以正常使用。需要注意的是，在此状态下，对话框会被强制设置为可拖拽，即使你设置了 `need-drag` 为 `false`，此外，对话框的 `append-to-body` 属性也将强制设置为 `true`。

```html
<template>
  <div>
    <df-button type="text" @click="dialogVisible = true">点击打开 Dialog</df-button>

    <df-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      no-wrapper>
      <span>这是一段信息</span>
      <div slot="footer" class="dialog-footer">
        <df-button plain size="small" @click="dialogVisible = false">取消</df-button>
        <df-button size="small" type="primary" @click="dialogVisible = false">确定</df-button>
      </div>
    </df-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dialogVisible: false
    }
  }
}
</script>
```
:::
### 丰富的窗口状态切换

根据上面的介绍我们可以发现，对话框不仅支持全屏窗口，还支持最小化窗口，还可以移除底层外壳，那么，将这些属性集合到一起，可以开启对话框最丰富的窗口切换状态。

:::demo

```html
<template>
  <div>
    <df-button type="text" @click="dialogVisible = true">点击打开 Dialog</df-button>

    <df-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      need-minimize
      need-fullscreen-toggle
      no-wrapper>
      <span>这是一段信息</span>
      <div slot="footer" class="dialog-footer">
        <df-button plain size="small" @click="dialogVisible = false">取消</df-button>
        <df-button size="small" type="primary" @click="dialogVisible = false">确定</df-button>
      </div>
    </df-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dialogVisible: false
    }
  }
}
</script>

```
:::

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| visible   | 是否显示 Dialog，支持 .sync 修饰符 | boolean | — | false |
| title     | Dialog 的标题，也可通过具名 slot （见下表）传入 | string    | — | — |
| width     | Dialog 的宽度 | string    | — | 50% |
| fullscreen     | 是否为全屏 Dialog | boolean    | — | false |
| top       | Dialog CSS 中的 margin-top 值 | string | — | 15vh |
| modal     | 是否需要遮罩层   | boolean   | — | true |
| modal-append-to-body     | 遮罩层是否插入至 body 元素上，若为 false，则遮罩层会插入至 Dialog 的父元素上   | boolean   | — | false |
| append-to-body     | Dialog 自身是否插入至 body 元素上。嵌套的 Dialog 必须指定该属性并赋值为 true   | boolean   | — | false |
| lock-scroll | 是否在 Dialog 出现时将 body 滚动锁定 | boolean | — | true |
| custom-class      | Dialog 的自定义类名 | string    | — | — |
| close-on-click-modal | *（修改）*  是否可以通过点击 modal 关闭 Dialog | boolean    | — | false |
| close-on-press-escape | *（修改）*  是否可以通过按下 ESC 关闭 Dialog | boolean    | — | true |
| show-close | 是否显示关闭按钮 | boolean    | — | true |
| before-close | 关闭前的回调，会暂停 Dialog 的关闭 | function(done)，done 用于关闭 Dialog | — | — |
| center | 是否对头部和底部采用居中布局 | boolean | — | false |
| destroy-on-close | 关闭时销毁 Dialog 中的元素 | boolean | — | false |
| need-drag     | *（新增）* 是否开启 Dialog 的拖拽，注意在非全屏模式下，拖拽才有效 | boolean    | — | true |
| need-fullscreen-toggle      | *（新增）* 是否开启 Dialog 的全屏/退出全屏切换 | boolean    | — | false |
| header-inject-style      | *（新增）* header 的注入样式，当样式需求比较复杂时，以 style 对象注入的形式定制 header 的样式 | object    | — | — |
| body-inject-style      | *（新增）* body 的注入样式，当样式需求比较复杂时，以 style 对象注入的形式定制 body 的样式 | object    | — | — |
| footer-inject-style      | *（新增）* footer 的注入样式，当样式需求比较复杂时，以 style 对象注入的形式定制 footer 的样式 | object    | — | — |
| position-top      | *（新增）* 可选的 top 属性，可以使得 dialog 的模态框和外壳于屏幕上边留出一些距离（只有当设置了 fullscreen 时才会生效） | Number, String    | — | — |
| need-transition      | *（新增）*  是否需要 dialog 的显隐动画 | Boolean    | — | true |
| use-max-height      | *（新增）*  是否启用非全屏状态下的最大高度, 一般和 top 属性配合在一起使用, 见上方例子 (使用最大高度) | Boolean    | — | false |
| need-minimize      | *（新增）*  是否启用对话框的最小化窗口 | Boolean    | — | false |
| minimize-width     | Dialog 最小化时的宽度，如果不设置此值，则最小化时仍使用当前的 width | string    | — | width |
| no-wrapper      | *（新增）*  是否移除对话框的底层外壳 | Boolean    | — | false |
| large-title      | *（新增）*  使用大号标题 | Boolean    | — | false |

### Slot
| name | 说明 |
|------|--------|
| — | Dialog 的内容 |
| title | Dialog 标题区的内容 |
| footer | Dialog 按钮操作区的内容 |

### Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| open  | Dialog 打开的回调 | — |
| opened  | Dialog 打开动画结束时的回调 | — |
| close  | Dialog 关闭的回调 | — |
| closed | Dialog 关闭动画结束时的回调 | — |
