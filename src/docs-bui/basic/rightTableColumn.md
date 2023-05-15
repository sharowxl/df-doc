
### DfRightTableColumn 权限操作列

基于普通表格列组件封装的用于给定的权限值判断显示隐藏按钮的表格操作列子组件。

:::demo使用`right-key-list`属性给操作列添加一个权限值列表， store内的权限数据源会根据传入的`right-key-list` 判断当前操作列里的按钮显示或隐藏。注：若想让权限生效，`right-key-list` 和 `buttons` 必须是一对一的关系，也就是下标需要一一对应。
```html
<template>
  <df-table
    :data="tableData"
    @button-click='buttonClick'
    border
  >
    <df-table-column prop="date" label="日期" width="180" />
    <df-table-column prop="name" label="姓名" width="180" />
    <df-table-column prop="address" label="地址" />
    <df-right-table-column
      width='200'
      type="buttons"
      button-type='text'
      :buttons='["删除", "创建"]'
      :right-key-list="['delete', 'create']"
    />
  </df-table>
</template>
<script>
export default {
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '李时珍',
        address: '四川省武当山普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '李时珍',
        address: '四川省武当山普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '李时珍',
        address: '四川省武当山普陀区金沙江路 1519 弄'
      }]
    }
  },
  methods: {
    buttonClick (button, buttonIndex, row, rowIndex) {
      console.log(`第 ${rowIndex + 1} 行的按钮组中的第 ${buttonIndex + 1} 个按钮被点击了，这个按钮名称是 ${button}，这一行的信息是`, row)
    }
  }
}
</script>
```
:::


:::tip
数据源默认获取位置为`store.state.config.activeCaiDan.anNiuList`。此外普通表格列组件可用的属性在权限操作列全部可用。如果操作列按钮是使用 `set-buttons` 动态配置的，请前往使用 [业务组件方法](#/professional/methods) 使用`getRightButtons`进行权限按钮筛选。
:::

### DfRightTableColumn属性
DfRightTableColumn 完整保留了 [TableColumn](#/component/table) 的所有属性。
| 参数 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ---- |
| right-key-list | 权限值 | Array | - |  