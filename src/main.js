import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import config from './config'
import 'highlight.js/styles/color-brewer.css'

import './demo-styles/index.scss'
import './assets/basic.scss'

import icon from './icon.json'
import DfIcon from './df-icon.json' // Icon 列表页用

import DfUI from './plugins/df-ui'
import PatientInfoIconsMap from './patient-info-icons-map.json' // Icon 列表页用
import '@df_scope/df-ui/lib/theme-chalk/index.css'

import DfBUI from './plugins/df-bui'
import '@df_scope/df-bui/lib/theme-chalk/index.css'
import '@df_scope/df-ui/lib/theme-chalk/classes.css'

import baseComponents from './components'
import DemoBlock from './components/demoBlock.vue'
import hljs from 'highlight.js'

import utils from '@df_scope/df-utils'

Vue.prototype.$icon = icon // Icon 列表页用
Vue.prototype.$DfIcon = DfIcon
Vue.prototype.$PatientInfoIconsMap = PatientInfoIconsMap
Vue.component('demo-block', DemoBlock)
Vue.use(utils)
Vue.use(DfUI)
Vue.use(DfBUI)
Vue.use(baseComponents)

router.afterEach(route => {
  // https://github.com/highlightjs/highlight.js/issues/909#issuecomment-131686186
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll('pre code:not(.hljs)')
    Array.prototype.forEach.call(blocks, hljs.highlightBlock)
  })
})

const app = window.app = new Vue({    //eslint-disable-line
  router,
  store,
  render: h => h(App),
  beforeCreate () {
  },
  created () {
  }
}).$mount('#app')
