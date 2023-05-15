
### CardReader 读卡

#### 基础用法

输入卡号回车查询或读卡查询病人信息

:::demo

```html
<template>
  <div>
    <df-card-reader v-model="cardNo" :tongBuBz="1" @change="handleChange" />
  </div>
</template>
<script>
export default {
  data () {
    return {
      cardNo: '',
      patientInfo:{}
    }
  },
  watch: {},
  methods: {
    handleChange(val) {
      this.patientInfo = val
      window.duKaEventArgs = val
      console.log(val)
    }

  }
}
</script>

```

:::

#### 设置卡号

:::demo

```html
<template>
  <div>
    <df-card-reader ref="cardReader" v-model="cardNo" @change="handleChange" @clear="handleClear"/> <br>
    <df-button @click="setCardNo">设置卡号</df-button>
    <df-button @click="handleFocus">聚焦</df-button>
    <df-button @click="handleBlur">失焦</df-button>
    <df-button @click="handleDuKa">医保读卡</df-button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      cardNo: '',
      patientInfo:{}
    }
  },
  watch: {},
  methods: {
    handleChange(val) {
      this.patientInfo = val
      console.log(val)
    },
    handleFocus() {
      this.$refs.cardReader.focus()
    },
    handleBlur() {
      this.$refs.cardReader.blur()
    },
    async handleDuKa() {
       let res = await this.$refs.cardReader.duKa('F11')
        console.log(res)
    },
    handleClear() {
      console.log('clear')
    },
    setCardNo(){
     this.$refs.cardReader.setCardReaderValue('345')
     this.$refs.cardReader.focusDuKa()

    }

  }
}
</script>

```

:::

### CardReader属性

| 参数 | 说明 | 类型 |可选值 | 默认值 |
| ---- | ---- | ---- | ---- |---|
| value / v-model | 绑定值  | string / number |-|  — |
| placeholder | 输入框占位文本 | string | - |输入卡号回车查询或读卡 |
| disabled | 是否禁用 | boolean |  | false |
| clearable | 是否支持清空选项 | boolean |-|  true |
| autofocus | 原生属性，自动获取焦点 | boolean |-|  false |
| chaXunFs | 查询方式 | number |1:挂号档案 2:门诊 3:住院| 1 |
| canBaoXsBz | 参保信息显示标志 | number |0:不显示 1:显示| 0 |
| ziDongDkBz | 自动读卡标志 | number |0:否 1:是| 0 |
| jianDangBz | 医保建档标志  | number |0:否 1:是| 0 |
| tongBuBz | 同步标志  | number |0:否 1:是| 0 |
| yiBaoJyBz | 医保校验标志  | number |0:否 1:是| 0 |
| feiYiBaoJdBz | 非医保建档标志  | number |0:否 1:是| 0 |
| moRenFyLb | 默认费用类别  | number |-| -|

### Events

| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| change | 当前读取到的病人信息 | (value:object) |
| clear | 在点击由 clearable 属性生成的清空按钮时触发 | - |

 `change`事件返回数据结构:

```html
object: {
    bingRenId: string,
    caoZuoZt: number, //  0:取消读卡 1:读卡成功 -1:读卡失败
    conType: number, // 0:按钮 1:文本 2:焦点离开 3:读院内卡 4:读身份证 5:二维码
    dto_GY_BingRenXx: object,
    jiuZhenKh: string,
    message: string,
    yiBaoMsg: string,
    yiBaoKh: string
}
```

### Methods

| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| setCardReaderValue | 设置读卡组件的值 | (value:string) |
| focus | 获取焦点 | - |
| blur | 失去焦点 | - |
