<template>
  <df-page-dynamic
    :parameter="parameter"
    v-model="value"
    :props="props"
    @change="change"
    width="300"
    isShow
    @onSelectInput="onSelectInput">
  </df-page-dynamic>
</template>

<script>
const params = {
  'chaXunCs': {
    'SHURUMLX': 'ShuRuMa1',
    'XIYAOYYID': '060101',
    'CHENGYAOYYID': '060101',
    'CAOYAOYYID': '060101',
    'WEICAIYYID': '060101',
    'KUCUNGLLX': '1101',
    'KESHIID': '',
    'KESHIYAOPINPZFS': '',
    'MENZHENJGTX': 1,
    'ZHANGBULB': '',
    'ISZHONGYAOPFKLDZ': null,
    'XITONGID': '06',
    'USERID': 'DBA',
    'MENZHENZYBZ': null,
    'YUANQUID': '1',
    'FEIYONGXZ': '',
    'XIANZHISYBZ': '',
    'QUANXIANKZMS': null,
    'FENLEILB': '1',
    'SHURUMA': 'W'
  },
  'peiZhiId': '公用药品产地价格',
  'fuWuTjMc': '取通用名_别名跟产地|药品类型|按分类类别|不要求有库存数量|不取暂停药品|本院区使用',
  'dangQianYe': 1,
  'shiFouFy': 1,
  'meiYeTs': 20
}

export default {
  data () {
    return {
      parameter: params,
      value: {},
      props: {
        key: 'BIEMINGID',
        value: 'BIEMINGMC'
      }
    }
  },
  methods: {
    change (val) {
      console.log(this.value, val)
    },
    onSelectInput (val) {
      console.log('onSelectInput1111', val)
    }
  }
}
</script>
