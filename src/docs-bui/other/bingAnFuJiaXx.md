
### BingAnFuJiaXx 病案附加信息

:::demo

```html
<template>
  <div>
    <span v-if="!list || list.length <= 0" style="font-size: 18px;">请先获取字段</span>
    <span v-else style="font-size: 18px;">
      {{ moShi==='1' ? '医生站': '病案系统' }}{{ isXiuGai ? '编辑': (moShi==='1' ? '不可编辑' : '预览') }}模式(默认样式兼容原病案首页界面)
    </span>
    <df-bing-an-fu-jia-xx
      ref='bingAnFuJiaXx'
      :is-xiu-gai="isXiuGai"
      :mo-shi="moShi"
      :ke-shi-info="keShiInfo"
      style="padding-top: 20px;"
      @handleConfirm="handleConfirm"
    />
    <div>
      <df-button type="text" @click='load'>自动加载</df-button>
      <df-button type="text" @click='open'>获取字段</df-button>
      <df-button type="text" @click='getData' :disabled="!(list && list.length)">获取附加值</df-button>
      <df-button type="text" @click='setData' :disabled="!(list && list.length)">赋值</df-button>
      <df-button type="text" @click='qieHuan' :disabled="!(list && list.length)">{{ isXiuGai ? '编辑': (moShi==='1' ? '不可编辑' : '预览') }}</df-button>
      <df-button type="text" @click='qieHuanMs' :disabled="!(list && list.length)">{{ moShi==='1' ? '病案系统模式': '医生站模式' }}</df-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      moShi: '1', // 1=医生站，2=病案系统
      isXiuGai: true, // true=编辑模式，false=不可编辑模式/预览模式
      keShiInfo: { // 科室信息
        keShiId: '6626',
        keShiMc: '测试科室'
      },
      list: [],
      fuJiaXx: {},
      testItem: '{"zhuanGuiQkDx":"4","zhongLiuBz":"1","ganRanDj":"1","suiZhen":"1","ganRanBwCs":"1|9","ganRanBw":"1|2|4","lianXiDz":"aaaaaaaaaaa","zhuanGuiQk":"1","qiangJiuYy":"6","qiangJiuYyDx":"6|3|2"}'
    }
  },
  created () {
  },
  methods: {
    async load () {
      this.list = await this.$refs.bingAnFuJiaXx.getBingAnSyFuJiaZd()
      this.$refs.bingAnFuJiaXx.init(this.list)
    },
    open () {
      this.$refs.bingAnFuJiaXx.open()
    },
    getData (){
      const val = this.$refs.bingAnFuJiaXx.getData()
      alert(val)
    },
    setData () {
      if (this.list && this.list.length > 0) {
        this.fuJiaXx = JSON.parse(this.testItem)
        const data = {}
        for (var p in this.fuJiaXx) {
          if (typeof (this.fuJiaXx[p]) !== 'function') {
            // p 为属性名称，data[p]为对应属性的值
            const ziDuanItem = this.list.find(o => o.ziDuanId === p)
            if (['2', '5'].includes(ziDuanItem?.buChongLx) && (ziDuanItem?.buChongXm || ziDuanItem?.daiMaLb)) {
              data[p] = this.fuJiaXx[p].split('|')
            } else {
              data[p] = this.fuJiaXx[p]
            }
          }
        }
        this.$refs.bingAnFuJiaXx.setData(data)
      }
    },
    qieHuan () {
      this.isXiuGai = !this.isXiuGai
    },
    qieHuanMs () {
      if (this.moShi === '1') {
        this.moShi = '2'
      } else {
        this.moShi = '1'
      }
    },
    handleConfirm (data) {
      this.list = JSON.parse(JSON.stringify(data))
      this.$refs.bingAnFuJiaXx.init(this.list)
    }
  }
}
</script>

```
:::

### BingAnFuJiaXx Attributes

BingAnFuJiaXx 基础属性
| 参数 |   说明          | 类型       | Attributes 默认值 |
|---- |------ |------ |-----------------------  |
| isXiuGai | 编辑模式 | boolean | true |  
| moShi | 模式(1=医生站，2=病案系统) | string | 1 |  
| keShiInfo | 科室信息(keShiId,keShiMc),因兼容病案系统使用，需由外部传入 | object | - |  

### BingAnFuJiaXx Events

| 方法 |   说明          | 类型       | 回调参数 |
|---- |------ |------ |-----------------------  |
| getBingAnSyFuJiaZd | 获取维护的附加字段信息 | function | - |
| init | 传入并加载附加信息 | function | - |
| getData | 获取数据(JSON格式) | function | - |
| setData | 赋值数据(JSON格式) | function | - |
| open | 打开维护窗口 | function | - |
| handleConfirm | 维护弹窗点击确定回调事件 | function | - |
