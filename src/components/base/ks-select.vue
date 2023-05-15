<template>
  <df-page-dynamic
    placeholder="请选择科室"
    :parameter="parameter"
    v-model="selectValue"
    :props="props"
    @change="change"
  />
</template>
<script>
export default {
  name: 'KsSelect',
  props: {
    peiZhiId: {
      type: String,
      default: '基础公用_科室'
    },
    fuWuTjMc: {
      type: String,
      default: '按输入码和院区过滤科室'
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
    value: {
      deep: true,
      immediate: true,
      handler (val) {
        this.selectValue = val
      }
    }
  },

  data () {
    return {
      props: {
        key: 'KESHIID',
        value: 'KESHIMC'
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
  },

  methods: {
    change (val) {
      this.$emit('change', val)
    }
  }
}
</script>
