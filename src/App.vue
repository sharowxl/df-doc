<template>
  <div id="app" :class="{ 'is-component': isComponent }">
    <df-container style="height:100%;overflow:hidden">
      <df-header class="main-header" height="80">
        <Header />
      </df-header>
      <df-container class="main-container">
        <div class="page-container">
          <router-view />
        </div>
      </df-container>
    </df-container>
  </div>
</template>

<script>
import Header from './components/header'

export default {
  components: {
    Header
  },
  computed: {
    isComponent () {
      const path = this.$route.path || ''
      return path.search(/component/i) > -1
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler (value) {
        this.$nextTick(() => {
          this.setCopyCodeButton() // 当页面变化时, 为页面内的代码块添加复制按钮
          if (['/component/classes', '/css/classes'].includes(value.path)) this.setColorBlock()
        })
      }
    }
  },
  methods: {
    setColorBlock () {
      const cssWrapper = document.getElementsByClassName('language-css')[0]
      const cssValues = Array.from(cssWrapper.querySelectorAll('.hljs-number'))
      this.mapAddColorBlock(cssValues, 'css')
      const jsWrapper = document.getElementsByClassName('language-js')[0]
      const jsValues = Array.from(jsWrapper.querySelectorAll('.hljs-string'))
      this.mapAddColorBlock(jsValues, 'js')
    },
    mapAddColorBlock (colorValues, wrapperType) {
      colorValues.forEach(colorValue => {
        const color = wrapperType === 'css' ? colorValue.innerText : colorValue.innerText.substring(1, colorValue.innerText.length - 1)
        if (!color.includes('#')) return
        const colorBlock = document.createElement('div')
        colorBlock.classList.add('css-color-block')
        colorBlock.style.backgroundColor = color
        colorValue.appendChild(colorBlock)
      })
    },
    setCopyCodeButton () {
      const allPres = Array.from(document.getElementsByTagName('pre')) // 获取所有的代码块, 此时获取得到是 NodeList, 需要转为 Array, 方便使用 Array 的遍历方法
      allPres.forEach(pre => { // 遍历
        if (!pre.querySelector('.copy-code')) { // 如果代码块里没有复制代码, 为代码块添加复制按钮
          const copyButton = document.createElement('div') // 创建复制按钮
          copyButton.innerText = '复制代码' // 填入按钮的文字
          copyButton.classList.add('copy-code') // 设置按钮的样式类
          copyButton.onclick = (e) => { // 配置按钮的点击事件
            this.copyElementContent(e.target.nextSibling) // 按钮的下一个兄弟元素就是我们要复制的代码块元素
          }
          const codeNode = pre.querySelector('code') // 代码块元素
          pre.insertBefore(copyButton, codeNode) // 将复制按钮插入到代码块元素的前面
        }
      })
    },
    copyElementContent (dom) { // 复制一个 dom 元素中的内容
      dom.setAttribute('contenteditable', true) // 首先让这个 div 变成可编辑状态
      dom.focus() // 然后聚焦
      window.getSelection().selectAllChildren(dom) // 然后用 getSelection 全选, 这里并不能直接用 dom.select() 全选, 因为 select 方法只有真正的输入元素才能用
      document.execCommand('copy') // 执行复制
      window.getSelection().removeAllRanges() // 再次使用 getSelection 把全选清除
      dom.setAttribute('contenteditable', false) // 还原 div 为不可编辑状态
      this.$message({type: 'success', message: '复制成功'})
    }
  }
}
</script>

<style>
.css-color-block {
  width: 12px;
  height: 12px;
  display: inline-block;
  margin-bottom: -1px;
  margin-left: 5px;
}
.copy-code {
  position: absolute;
  right: 20px;
  top: 20px;
  padding: 4px 6px;
  z-index: auto;
  background: #e3e3e3;
  border-radius: 4px;
  color: #464646;
  cursor: pointer;
}
.copy-code:hover {
  background: #d6d6d6;
}
.copy-code:active {
  background: #c6c6c6;
}
</style>
