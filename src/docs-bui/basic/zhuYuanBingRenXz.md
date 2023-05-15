### ZhuYuanBingRenXz 住院病人选择

:::demo 住院病人选择

```html
<template>
  <div>
    <df-zhu-yuan-bing-ren-xz
      v-model="value"
      @change="changeInfo"
      :dataInfo="dataInfo"
      :huLiJbShow = "huLiJbShow"
      :zhuYuanShow='zhuYuanShow'
      :width="width"
      :disabled="disabled"
      ref="zhuYuanBingRenXz"
      placeholder="请输入姓名/床号/健康号/住院号"
    >
    </df-zhu-yuan-bing-ren-xz>
    <br>
    <df-button @click="getFocusInfo">聚焦</df-button>
    <df-button @click="loseFocusInfo">失焦</df-button>
    <df-button @click="refresh">刷新</df-button>
    <df-button @click="clear">清空</df-button>
    <df-button @click="refreshRc">外部入参</df-button>
  </div>
</template>
<script>

export default {
  data () {
    // const data = {
    //   'isTrue': false,
    //   'originalValues': {},
    //   'dtoState': 0,
    //   'QueryParams': {},
    //   '_traceChange': false,
    //   'yuanQuId': '1',
    //   'keShiId': null,
    //   'bingQuId': null,
    //   'zaiYuanZt': '100', 在院状态,第一位0在院,第二位0预在院,第三位0出院
    //   'yingErBz': null, 婴儿标志,第一位0代表大人,第二位0代表婴儿
    //   'jieSuanZt': null, 结算状态,第一位0代表已结算,第二位0代表未结算
    //   'riBaoZt': null, 日报状态,第一位0代表未日报,第二位0代表已日报
    //   'paiXuTj': null, 排序统计,如果没传默认按床位排序,排序条件就是bingRenXx里面具体的某个字段
    //   'shuRuMaLx': 'ShuRuMa1',
    //   'queryString': '',
    //   'pageIndex': 1,
    //   'pageSize': 10,
    //   'xiTongId': null
    // }
    return {
      value: {},
      dataInfo: {
        'zaiYuanZt': '110',
        'queryString': '',
        'pageIndex': 1,
        'pageSize': 10,
        'yuJieSuanLx': '1', // zhuYuanShow为true 必填
        'jieSuanFs': '0', // zhuYuanShow为true 必填
        'chongSuanFw': '1', // zhuYuanShow为true 必填
        'shangChuangBz': '0',// 非必填
        'chongSuanBz': '0',// 非必填
        'yiBaoJcBz': '1',// 非必填
        'zhangHuBz': 0 // 非必填
      },
      disabled:false, // 控件是否可用
      huLiJbShow: true,
      zhuYuanShow: false,
      width: 240
    }
  },
  methods: {
    changeInfo (val) {
      // zhuYuanShow为true 当需要结算1数据时，请加上以下判断  
      // zhuYuanShow为false 可去掉该判断条件  
      if(this.zhuYuanShow &&(!val.jieSuan1 || (val.jieSuan1 && JSON.stringify(val.jieSuan1) === '{}'))){
        if(!val.clearBz && JSON.stringify(val.jieSuan1) === '{}'){
          this.value = {}
          this.$refs.zhuYuanBingRenXz.clear()
        }
        return
      } 
       
      console.log(999, this.value, val)
    },
    clear(){
      this.$refs.zhuYuanBingRenXz.clear()
    },
    // 注意声明ref
    getFocusInfo(){
      this.$refs.zhuYuanBingRenXz.focus()
    },
    loseFocusInfo(){
      this.$refs.zhuYuanBingRenXz.blur()
    },
    refresh(){
      this.$refs.zhuYuanBingRenXz.refresh()
    },
    refreshRc(){
      this.$refs.zhuYuanBingRenXz.refresh('35074')
    }
  }
}
</script>
```

:::

### ZhuYuanBingRenXz Attributes

ZhuYuanBingRenXz 基础属性
| 参数 |   说明          | 类型       | Attributes 默认值 |
|---- |------ |------ |-----------------------  |
| value | 选中的数据 | object | - |  
| placeholder | 占位符设置文字 | string | - |  
| dataInfo | 接口请求所需参数 | object | - |
| huLiJbShow | 是否展示护理等级 | boolean | true |
| width | 组件宽度(支持px/支持%/支持数字) | number/string | 240 |
| disabled | 控件是否可使用 | boolean | false |
| zhuYuanShow | 住院预结算 | boolean | false |

### ZhuYuanBingRenXz Events

| 方法 |   说明          | 类型       | 回调参数 |
|---- |------ |------ |-----------------------  |
| change | 发生改变触发 | function | 更新后的值 |
