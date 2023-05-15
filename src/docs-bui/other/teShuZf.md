## 特殊字符

### 基础用法

#### 特殊字符

:::demo
```html
<template>
  <df-row>
    <df-col class="df-full-height" :gutter="8" :span="8">
      <df-button type="text" @click="dialogVisible = true">特殊字符</df-button>
      <df-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="400px"
        top="5vh"
      >
        <df-te-shu-zf
          ref="teShuZf"
        />
        <div slot="footer" class="dialog-footer">
        <df-button plain size="small" @click="dialogVisible = false">取消</df-button>
        <df-button size="small" type="primary" @click="onConfirm">确定</df-button>
      </div>
      </df-dialog>
    </df-col>
  </df-row>
</template>
<script>
export default {
  data () {
    return {
      dialogVisible: false,
      selectTeShuZf: ''
    }
  },
  methods: {
     onConfirm() {
      console.log('点击确认后选取的文字', this.$refs.teShuZf.getSelectText())
      this.dialogVisible = false
    }
  },
  mounted () {}
}
</script>
```
:::