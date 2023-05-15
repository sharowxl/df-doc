## 全键盘支持

DfUI支持的快捷键详细描述如下，目标是提供单组件的全键盘操作，表单的快捷键支持，表格内的快捷键支持。

### 快捷键规范定义

| 组件名称| 快捷键|快捷键描述|
|--------|--------|--------|
|TreeSelect |<div style="min-width: 200px">↑、↓、←、→、esc、enter、space</div>  |↑(上箭)、↓(下箭) 切换选项功能，下拉树关闭情况下，按下箭头显示下拉树。 esc 关闭下拉树。enter 关闭下拉树（单选情况下，需要先选中当前项）。space单选情况下，选中当前项并关闭下拉树，多选情况下，切换当前项选择状态。←、→用于收缩或展开当前树节点。 |
|PageSelect | ↑、↓、←、→、esc、enter、space、pagedown、pageup |↑(上箭)、↓(下箭) 切换选项功能，数据面板未显示的情况下，按下箭头显示数据面板。 esc 关闭数据面板。enter 关闭数据面板（单选情况下，需要先选中当前项）。space单选情况下，选中当前项并关闭，多选情况下，切换当前项选择状态。pageup和左箭头，向上翻页。pagedown和右箭头，向下翻页 |
|Dialog |esc |支持 esc 关闭。|
|Radio |space、↑、↓、←、→ |space: 如未选中，则检查聚焦单选按钮，反之则改变选中。 →(右箭)、↓(下箭): 将焦点移动到下一个按钮上，依次循环选中。 ←(左箭)、↑(上箭): 将焦点移动到上一个按钮上，依次循环选中。|
|Checkbox  |esc |当复选框具有焦点时，space按键会更改复选框的状态。 |
|Table | tab、↑、↓| tab 进入焦点，且选中第一行。↑(上箭)、↓(下箭) 上一行、下一行。 且提供onKeyTab、onKeyUp、onKeyDown、onTableKeyDown、tabIndex 等一系列api|

### 参考

[https://tinper-acs.github.io/ac-keyboard-example/index.html](https://tinper-acs.github.io/ac-keyboard-example/index.html?_blank)

