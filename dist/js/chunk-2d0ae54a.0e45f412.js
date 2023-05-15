(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ae54a"],{"0a36":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t._self._c;return n("section",{staticClass:"content df-doc"},[t._m(0),n("p",[t._v("用于标记和选择。")]),t._m(1),n("demo-block",[n("div",[n("p",[t._v("由"),n("code",[t._v("type")]),t._v("属性来选择tag的类型，也可以通过"),n("code",[t._v("color")]),t._v("属性来自定义背景色。")])]),n("template",{slot:"source"},[n("df-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n  <div>\n    <df-tag>标签一</df-tag>\n    <df-tag type="success">标签二</df-tag>\n    <df-tag type="info">标签三</df-tag>\n    <df-tag type="warning">标签四</df-tag>\n    <df-tag type="danger">标签五</df-tag>\n  </div>\n</template>\n')])])])],2),t._m(2),n("demo-block",[n("div",[n("p",[t._v("设置"),n("code",[t._v("closable")]),t._v("属性可以定义一个标签是否可移除。默认的标签移除时会附带渐变动画，如果不想使用，可以设置"),n("code",[t._v("disable-transitions")]),t._v("属性，它接受一个"),n("code",[t._v("Boolean")]),t._v("，true 为关闭。")])]),n("template",{slot:"source"},[n("df-demo1")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v("<template>\n  <df-tag\n    v-for=\"tag in tags\"\n    :key=\"tag.name\"\n    closable\n    :type=\"tag.type\">\n    {{tag.name}}\n  </df-tag>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tags: [\n          { name: '标签一', type: '' },\n          { name: '标签二', type: 'success' },\n          { name: '标签三', type: 'info' },\n          { name: '标签四', type: 'warning' },\n          { name: '标签五', type: 'danger' }\n        ]\n      };\n    }\n  }\n<\/script>\n")])])])],2),t._m(3),t._m(4),n("demo-block",[n("template",{slot:"source"},[n("df-demo2")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n  <div>\n    <df-tag\n      :key="tag"\n      v-for="tag in dynamicTags"\n      closable\n      :disable-transitions="false"\n      @close="handleClose(tag)">\n      {{tag}}\n    </df-tag>\n    <df-input\n      class="input-new-tag"\n      v-if="inputVisible"\n      v-model="inputValue"\n      ref="saveTagInput"\n      size="mini"\n      @keyup.enter.native="handleInputConfirm"\n      @blur="handleInputConfirm"\n    >\n    </df-input>\n    <df-button v-else class="button-new-tag" size="mini" @click="showInput">+ New Tag</df-button>\n  </div>\n</template>\n\n<style>\n  .df-tag + .df-tag {\n    margin-left: 8px;\n  }\n  .button-new-tag {\n    margin-left: 10px;\n    height: 32px;\n    line-height: 30px;\n    padding-top: 0;\n    padding-bottom: 0;\n  }\n  .input-new-tag {\n    width: 90px;\n    margin-left: 10px;\n    vertical-align: bottom;\n  }\n</style>\n\n<script>\n  export default {\n    data() {\n      return {\n        dynamicTags: [\'标签一\', \'标签二\', \'标签三\'],\n        inputVisible: false,\n        inputValue: \'\'\n      };\n    },\n    methods: {\n      handleClose(tag) {\n        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);\n      },\n\n      showInput() {\n        this.inputVisible = true;\n        this.$nextTick(_ => {\n          this.$refs.saveTagInput.$refs.input.focus();\n        });\n      },\n\n      handleInputConfirm() {\n        let inputValue = this.inputValue;\n        if (inputValue) {\n          this.dynamicTags.push(inputValue);\n        }\n        this.inputVisible = false;\n        this.inputValue = \'\';\n      }\n    }\n  }\n<\/script>\n')])])])],2),t._m(5),n("p",[t._v("Tag 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。")]),n("demo-block",[n("div",[n("p",[t._v("额外的尺寸："),n("code",[t._v("medium")]),t._v("、"),n("code",[t._v("small")]),t._v("、"),n("code",[t._v("mini")]),t._v("，通过设置"),n("code",[t._v("size")]),t._v("属性来配置它们。")])]),n("template",{slot:"source"},[n("df-demo3")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n  <div>\n    <df-tag closable>默认标签</df-tag>\n    <df-tag size="small" closable>小型标签</df-tag>\n    <df-tag size="medium" closable>中等标签</df-tag>\n  </div>\n</template>\n')])])])],2),t._m(6),t._m(7),n("demo-block",[n("div",[n("p",[t._v("通过设置"),n("code",[t._v("effect")]),t._v("属性来改变主题，默认为 "),n("code",[t._v("light")])])]),n("template",{slot:"source"},[n("df-demo4")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n  <div>\n    <div class="tag-group">\n      <span class="tag-group__title">Dark</span>\n      <df-tag\n        v-for="item in items"\n        :key="item.label"\n        :type="item.type"\n        effect="dark">\n        {{ item.label }}\n      </df-tag>\n    </div>\n    <div class="tag-group">\n      <span class="tag-group__title">Plain</span>\n      <df-tag\n        v-for="item in items"\n        :key="item.label"\n        :type="item.type"\n        effect="plain">\n        {{ item.label }}\n      </df-tag>\n    </div>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        items: [\n          { type: \'\', label: \'标签一\' },\n          { type: \'success\', label: \'标签二\' },\n          { type: \'info\', label: \'标签三\' },\n          { type: \'danger\', label: \'标签四\' },\n          { type: \'warning\', label: \'标签五\' }\n        ]\n      }\n    }\n  }\n<\/script>\n')])])])],2),t._m(8),t._m(9),t._m(10),t._m(11)],1)},i=[function(){var t=this,n=t._self._c;return n("h2",{attrs:{id:"tag-biao-qian"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tag-biao-qian"}},[t._v("¶")]),t._v(" Tag 标签")])},function(){var t=this,n=t._self._c;return n("h3",{attrs:{id:"ji-chu-yong-fa"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ji-chu-yong-fa"}},[t._v("¶")]),t._v(" 基础用法")])},function(){var t=this,n=t._self._c;return n("h3",{attrs:{id:"ke-yi-chu-biao-qian"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ke-yi-chu-biao-qian"}},[t._v("¶")]),t._v(" 可移除标签")])},function(){var t=this,n=t._self._c;return n("h3",{attrs:{id:"dong-tai-bian-ji-biao-qian"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dong-tai-bian-ji-biao-qian"}},[t._v("¶")]),t._v(" 动态编辑标签")])},function(){var t=this,n=t._self._c;return n("p",[t._v("动态编辑标签可以通过点击标签关闭按钮后触发的 "),n("code",[t._v("close")]),t._v(" 事件来实现")])},function(){var t=this,n=t._self._c;return n("h3",{attrs:{id:"bu-tong-chi-cun"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#bu-tong-chi-cun"}},[t._v("¶")]),t._v(" 不同尺寸")])},function(){var t=this,n=t._self._c;return n("h3",{attrs:{id:"bu-tong-zhu-ti"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#bu-tong-zhu-ti"}},[t._v("¶")]),t._v(" 不同主题")])},function(){var t=this,n=t._self._c;return n("p",[t._v("Tag 组件提供了三个不同的主题："),n("code",[t._v("dark")]),t._v("、"),n("code",[t._v("light")]),t._v(" 和 "),n("code",[t._v("plain")])])},function(){var t=this,n=t._self._c;return n("h3",{attrs:{id:"attributes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#attributes"}},[t._v("¶")]),t._v(" Attributes")])},function(){var t=this,n=t._self._c;return n("table",[n("thead",[n("tr",[n("th",[t._v("参数")]),n("th",[t._v("说明")]),n("th",[t._v("类型")]),n("th",[t._v("可选值")]),n("th",[t._v("默认值")])])]),n("tbody",[n("tr",[n("td",[t._v("type")]),n("td",[t._v("类型")]),n("td",[t._v("string")]),n("td",[t._v("success/info/warning/danger")]),n("td",[t._v("—")])]),n("tr",[n("td",[t._v("closable")]),n("td",[t._v("是否可关闭")]),n("td",[t._v("boolean")]),n("td",[t._v("—")]),n("td",[t._v("false")])]),n("tr",[n("td",[t._v("disable-transitions")]),n("td",[t._v("是否禁用渐变动画")]),n("td",[t._v("boolean")]),n("td",[t._v("—")]),n("td",[t._v("false")])]),n("tr",[n("td",[t._v("hit")]),n("td",[t._v("是否有边框描边")]),n("td",[t._v("boolean")]),n("td",[t._v("—")]),n("td",[t._v("false")])]),n("tr",[n("td",[t._v("color")]),n("td",[t._v("背景色")]),n("td",[t._v("string")]),n("td",[t._v("—")]),n("td",[t._v("—")])]),n("tr",[n("td",[t._v("size")]),n("td",[t._v("尺寸")]),n("td",[t._v("string")]),n("td",[t._v("medium / small / mini")]),n("td",[t._v("—")])]),n("tr",[n("td",[t._v("effect")]),n("td",[t._v("主题")]),n("td",[t._v("string")]),n("td",[t._v("dark / light / plain")]),n("td",[t._v("light")])])])])},function(){var t=this,n=t._self._c;return n("h3",{attrs:{id:"events"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("¶")]),t._v(" Events")])},function(){var t=this,n=t._self._c;return n("table",[n("thead",[n("tr",[n("th",[t._v("事件名称")]),n("th",[t._v("说明")]),n("th",[t._v("回调参数")])])]),n("tbody",[n("tr",[n("td",[t._v("click")]),n("td",[t._v("点击 Tag 时触发的事件")]),n("td",[t._v("—")])]),n("tr",[n("td",[t._v("close")]),n("td",[t._v("关闭 Tag 时触发的事件")]),n("td",[t._v("—")])])])])}],s=e("5530"),r=(e("b0c0"),e("c975"),e("a434"),e("14d9"),{name:"component-doc",components:{"df-demo0":function(){var t=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[[e("div",[e("df-tag",[t._v("标签一")]),t._v(" "),e("df-tag",{attrs:{type:"success"}},[t._v("标签二")]),t._v(" "),e("df-tag",{attrs:{type:"info"}},[t._v("标签三")]),t._v(" "),e("df-tag",{attrs:{type:"warning"}},[t._v("标签四")]),t._v(" "),e("df-tag",{attrs:{type:"danger"}},[t._v("标签五")])],1)]],2)},n=[],e={};return Object(s["a"])({render:t,staticRenderFns:n},e)}(),"df-demo1":function(){var t=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[t._l(t.tags,(function(n){return e("df-tag",{key:n.name,attrs:{closable:"",type:n.type}},[t._v("\n    "+t._s(n.name)+"\n  ")])}))],2)},n=[],e={data:function(){return{tags:[{name:"标签一",type:""},{name:"标签二",type:"success"},{name:"标签三",type:"info"},{name:"标签四",type:"warning"},{name:"标签五",type:"danger"}]}}};return Object(s["a"])({render:t,staticRenderFns:n},e)}(),"df-demo2":function(){var t=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[[e("div",[t._l(t.dynamicTags,(function(n){return e("df-tag",{key:n,attrs:{closable:"","disable-transitions":!1},on:{close:function(e){return t.handleClose(n)}}},[t._v("\n      "+t._s(n)+"\n    ")])})),t._v(" "),t.inputVisible?e("df-input",{ref:"saveTagInput",staticClass:"input-new-tag",attrs:{size:"mini"},on:{blur:t.handleInputConfirm},nativeOn:{keyup:function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"enter",13,n.key,"Enter")?null:t.handleInputConfirm.apply(null,arguments)}},model:{value:t.inputValue,callback:function(n){t.inputValue=n},expression:"inputValue"}}):e("df-button",{staticClass:"button-new-tag",attrs:{size:"mini"},on:{click:t.showInput}},[t._v("+ New Tag")])],2)]],2)},n=[],e={data:function(){return{dynamicTags:["标签一","标签二","标签三"],inputVisible:!1,inputValue:""}},methods:{handleClose:function(t){this.dynamicTags.splice(this.dynamicTags.indexOf(t),1)},showInput:function(){var t=this;this.inputVisible=!0,this.$nextTick((function(n){t.$refs.saveTagInput.$refs.input.focus()}))},handleInputConfirm:function(){var t=this.inputValue;t&&this.dynamicTags.push(t),this.inputVisible=!1,this.inputValue=""}}};return Object(s["a"])({render:t,staticRenderFns:n},e)}(),"df-demo3":function(){var t=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[[e("div",[e("df-tag",{attrs:{closable:""}},[t._v("默认标签")]),t._v(" "),e("df-tag",{attrs:{size:"small",closable:""}},[t._v("小型标签")]),t._v(" "),e("df-tag",{attrs:{size:"medium",closable:""}},[t._v("中等标签")])],1)]],2)},n=[],e={};return Object(s["a"])({render:t,staticRenderFns:n},e)}(),"df-demo4":function(){var t=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[[e("div",[e("div",{staticClass:"tag-group"},[e("span",{staticClass:"tag-group__title"},[t._v("Dark")]),t._v(" "),t._l(t.items,(function(n){return e("df-tag",{key:n.label,attrs:{type:n.type,effect:"dark"}},[t._v("\n        "+t._s(n.label)+"\n      ")])}))],2),t._v(" "),e("div",{staticClass:"tag-group"},[e("span",{staticClass:"tag-group__title"},[t._v("Plain")]),t._v(" "),t._l(t.items,(function(n){return e("df-tag",{key:n.label,attrs:{type:n.type,effect:"plain"}},[t._v("\n        "+t._s(n.label)+"\n      ")])}))],2)])]],2)},n=[],e={data:function(){return{items:[{type:"",label:"标签一"},{type:"success",label:"标签二"},{type:"info",label:"标签三"},{type:"danger",label:"标签四"},{type:"warning",label:"标签五"}]}}};return Object(s["a"])({render:t,staticRenderFns:n},e)}()}}),l=r,d=e("2877"),c=Object(d["a"])(l,a,i,!1,null,null,null);n["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0ae54a.0e45f412.js.map