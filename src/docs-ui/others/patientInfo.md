## PatientInfo 病人信息bar

用于住院护士站的头部病人信息展示, 但是在目前的实际场景中, 你不需要直接使用这个组件, 而应该使用 PatientInfoDynamic, 你只需要把请求到的病人信息和字段配置 JSON 传入 PatientInfoDynamic 即可, 如果一定要使用 PatientInfo, 你需要自己整理好字段的展示方式。

### 基础用法

:::demo 传入左右两边的键值对和所需的图标, 启用病人信息
```html
<template>
  <div>
    <df-patient-info
      :left-key-values="leftKeyValues"
      :right-key-values="rightKeyValues"
      :icons="icons"
    />
  </div>
</template>

<script>
export default {
  name: 'demo',
  data () {
    return {
      leftKeyValues: [
        {
          key: '姓名',
          value: '张三',
          showKey: false,
          showValue: true,
          keySize: '17px',
          keyColor: '#75797C',
          keyWeight: '400',
          valueSize: '17px',
          valueColor: '#191F25',
          valueWeight: '500'
        },
        {
          key: '性别',
          value: '女',
          showKey: false,
          showValue: true,
          keySize: '17px',
          keyColor: '#75797C',
          keyWeight: '400',
          valueSize: '17px',
          valueColor: '#191F25',
          valueWeight: '500'
        },
        {
          key: '住院号',
          value: '123456',
          showKey: false,
          showValue: true,
          keySize: '13px',
          keyColor: '#75797C',
          keyWeight: '400',
          valueSize: '13px',
          valueColor: '#191F25',
          valueWeight: '400'
        },
        {
          key: '科室',
          value: '心内科/2病区/薛娅达',
          showKey: false,
          showValue: true,
          keySize: '13px',
          keyColor: '#75797C',
          keyWeight: '400',
          valueSize: '13px',
          valueColor: '#191F25',
          valueWeight: '400',
          valueWidth: 100
        },
        {
          key: '诊断',
          value: '早产',
          showKey: true,
          showValue: true,
          keySize: '13px',
          keyColor: '#75797C',
          keyWeight: '400',
          valueSize: '13px',
          valueColor: '#191F25',
          valueWeight: '400'
        },
        {
          key: '过敏史',
          value: '花粉/维生素B2片',
          showKey: true,
          showValue: true,
          keySize: '13px',
          keyColor: '#75797C',
          keyWeight: '400',
          valueSize: '13px',
          valueColor: '#FF4545',
          valueWeight: '400'
        }
      ],
      rightKeyValues: [
        {
          key: '收费类别/费用性质',
          value: '省一卡通/在职医保',
          showKey: false,
          showValue: true,
          keySize: '13px',
          keyColor: '#75797C',
          keyWeight: '400',
          valueSize: '13px',
          valueColor: '#75797C',
          valueWeight: '400'
        },
        {
          key: '药品',
          value: '100',
          showKey: true,
          showValue: true,
          keySize: '13px',
          keyColor: '#75797C',
          keyWeight: '400',
          valueSize: '15px',
          valueColor: '#2D6EEB',
          valueWeight: '400'
        },
        {
          key: '检查',
          value: ' 201',
          showKey: true,
          showValue: true,
          keySize: '13px',
          keyColor: '#75797C',
          keyWeight: '400',
          valueSize: '15px',
          valueColor: '#2D6EEB',
          valueWeight: '400'
        }
      ],
      icons: ['二级护理', '危']
    }
  }
}
</script>
```
:::

### 图标合集

<df-table class="demo-patient icons-map-table" :data="Object.keys($PatientInfoIconsMap).map(key => {
  const icon = $PatientInfoIconsMap[key]
  return {
    key,
    type: icon.type,
    value: icon.value,
    color: icon.color,
    title: icon.title
  }
})" style="width: 100%">
  <df-table-column prop="key" label="传入值" width="180">
    <div slot-scope="{row}" style="padding-left: 14px">{{row.key}}</div>
  </df-table-column>
  <df-table-column prop="value" label="显示值" width="180" />
  <df-table-column prop="color" label="显示颜色" width="180" />
  <df-table-column prop="type" label="显示类型" width="180" />
  <df-table-column prop="demo" label="显示效果">
    <div slot-scope="{row}" :title="row.title">
      <div v-if="row.type === 'text'" :class="row.key" class="df-patient-info-item-value" :style="{backgroundColor: row.color}">{{row.value}}</div>
      <div v-if="row.type === 'icon'" :class="row.key" class="df-patient-info-item-value" :style="{backgroundColor: row.color}"><i :class="row.value" style="font-size: 14px;"></i></div>
      <div class="df-patient-info-item icons" v-if="row.type === 'array'">
        <div v-for="(j, k) in row.value" :key="k">
        <div v-if="$PatientInfoIconsMap[j] && $PatientInfoIconsMap[j].type === 'text'" class="df-patient-info-item-value" :class="$PatientInfoIconsMap[j] && $PatientInfoIconsMap[j].key" :style="{backgroundColor: $PatientInfoIconsMap[j] && $PatientInfoIconsMap[j].color}">{{$PatientInfoIconsMap[j] && $PatientInfoIconsMap[j].value}}</div>
        <div v-if="$PatientInfoIconsMap[j] && $PatientInfoIconsMap[j].type === 'icon'" class="df-patient-info-item-value" :class="$PatientInfoIconsMap[j] && $PatientInfoIconsMap[j].key" :style="{backgroundColor: $PatientInfoIconsMap[j] && $PatientInfoIconsMap[j].color}"><i :class="$PatientInfoIconsMap[j] && $PatientInfoIconsMap[j].value" style="font-size: 14px;"></i></div>
        </div>
      </div>
    </div>
  </df-table-column>
</df-table>
### 属性
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| left-key-values | 左边的键值对 | array | — | — |
| right-key-values | 右边的键值对 | array | — | — |
| icons | 图标 | array | — | — |
| gms-editable | 过敏史是否可编辑 | boolean | — | true |
| wspf-editable | 五色评分是否可编辑 | boolean | — | true |
| clear | 清除所有的字段显示, 在没有病人信息时, 应当将此值置为 true | boolean | — | false |

### 事件
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| edit-gms | 点击编辑过敏史按钮时 | — |
| edit-wspf | 点击编辑五色评分按钮时 | — |
| yu-e-show | 鼠标浮动到余额, 详细余额显示时 | — |
| yu-e-hide | 鼠标移出余额, 详细余额隐藏时 | — |
