<template>
  <df-page-dynamic
    placeholder="请选择医生"
    :parameter="parameter"
    v-model="selectValue"
    :props="props"
    @change="change"
  />
</template>

<script>
export default {
  name: 'ZgSelect',
  props: {
    peiZhiId: {
      type: String,
      default: '基础公用_职工'
    },
    fuWuTjMc: {
      type: String,
      default: '获取所有医生按工号和输入码和院区'
    },
    currentYqId: {
      type: String,
      default: ''
    },
    value: {
      type: [Object, String],
      required: true,
      default: () => ({})
    }
  },
  watch: {
    value (val) {
      this.selectValue = val
    }
  },
  data () {
    return {
      props: {
        key: 'ZHIGONGID',
        value: 'ZHIGONGXM'
      },
      selectValue: {},
      userinfo: {}

    }
  },
  computed: {
    parameter () {
      return {
        peiZhiId: this.peiZhiId,
        fuWuTjMc: this.fuWuTjMc,
        dangQianYe: 1,
        chaXunCs: {
          SHURUMLX: this.userinfo.shuRuMa,
          SHURUMA: '',
          YUANQUID: this.currentYqId
        }
      }
    }
  },
  created () {
    this.userinfo = sessionStorage.getItem('userInfo') ? JSON.parse(sessionStorage.getItem('userInfo')) : {}
    this.selectValue = this.value
  },
  methods: {
    change (val) {
      this.$emit('change', val)
    }
  }
}
</script>
