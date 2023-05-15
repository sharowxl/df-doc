import ksSelect from './base/ks-select.vue' // 科室
import zgSelect from './base/zg-select.vue' // 职工

const components = {
  ksSelect,
  zgSelect
}
export default Vue => {
  Object.keys(components).forEach(
    key => Vue.component(key, components[key])
  )
}
