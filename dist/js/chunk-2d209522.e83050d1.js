(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d209522"],{a90d:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t._self._c;return e("section",{staticClass:"content df-doc"},[t._m(0),e("p",[t._v("通过拖动滑块在一个固定区间内进行选择")]),t._m(1),e("p",[t._v("在拖动滑块时，显示当前值")]),e("demo-block",[e("div",[e("p",[t._v("通过设置绑定值自定义滑块的初始值")])]),e("template",{slot:"source"},[e("df-demo0")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n  <div>\n    <div class="block">\n      <span class="demonstration">默认</span>\n      <df-slider v-model="value1"></df-slider>\n    </div>\n    <div class="block">\n      <span class="demonstration">自定义初始值</span>\n      <df-slider v-model="value2"></df-slider>\n    </div>\n    <div class="block">\n      <span class="demonstration">隐藏 Tooltip</span>\n      <df-slider v-model="value3" :show-tooltip="false"></df-slider>\n    </div>\n    <div class="block">\n      <span class="demonstration">格式化 Tooltip</span>\n      <df-slider v-model="value4" :format-tooltip="formatTooltip"></df-slider>\n    </div>\n    <div class="block">\n      <span class="demonstration">禁用</span>\n      <df-slider v-model="value5" disabled></df-slider>\n    </div>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        value1: 0,\n        value2: 50,\n        value3: 36,\n        value4: 48,\n        value5: 42\n      }\n    },\n    methods: {\n      formatTooltip(val) {\n        return val / 100;\n      }\n    }\n  }\n<\/script>\n')])])])],2),t._m(2),e("p",[t._v("支持设置只读模式, 此模式下, 无法对进度条进行拖拽操作")]),e("demo-block",[e("div",[e("p",[t._v("设置"),e("code",[t._v("read-only")]),t._v("属性即可")])]),e("template",{slot:"source"},[e("df-demo1")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n  <div class="block">\n    <df-slider v-model="value1" read-only></df-slider>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        value: 20\n      }\n    }\n  }\n<\/script>\n')])])])],2),t._m(3),e("p",[t._v("选项可以是离散的")]),e("demo-block",[e("div",[e("p",[t._v("改变"),e("code",[t._v("step")]),t._v("的值可以改变步长，通过设置"),e("code",[t._v("show-stops")]),t._v("属性可以显示间断点")])]),e("template",{slot:"source"},[e("df-demo2")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n  <div>\n    <div class="block">\n      <span class="demonstration">不显示间断点</span>\n      <df-slider\n        v-model="value1"\n        :step="10">\n      </df-slider>\n    </div>\n    <div class="block">\n      <span class="demonstration">显示间断点</span>\n      <df-slider\n        v-model="value2"\n        :step="10"\n        show-stops>\n      </df-slider>\n    </div>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        value1: 0,\n        value2: 0\n      }\n    }\n  }\n<\/script>\n')])])])],2),t._m(4),e("p",[t._v("通过输入框设置精确数值")]),e("demo-block",[e("div",[e("p",[t._v("设置"),e("code",[t._v("show-input")]),t._v("属性会在右侧显示一个输入框")])]),e("template",{slot:"source"},[e("df-demo3")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n  <div class="block">\n    <df-slider\n      v-model="value"\n      show-input>\n    </df-slider>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        value: 0\n      }\n    }\n  }\n<\/script>\n')])])])],2),t._m(5),e("p",[t._v("支持选择某一数值范围")]),e("demo-block",[e("div",[e("p",[t._v("设置"),e("code",[t._v("range")]),t._v("即可开启范围选择，此时绑定值是一个数组，其元素分别为最小边界值和最大边界值")])]),e("template",{slot:"source"},[e("df-demo4")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n  <div class="block">\n    <df-slider\n      v-model="value"\n      range\n      show-stops\n      :max="10">\n    </df-slider>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        value: [4, 8]\n      }\n    }\n  }\n<\/script>\n')])])])],2),t._m(6),e("demo-block",[e("div",[e("p",[t._v("设置"),e("code",[t._v("vertical")]),t._v("可使 Slider 变成竖向模式，此时必须设置高度"),e("code",[t._v("height")]),t._v("属性")])]),e("template",{slot:"source"},[e("df-demo5")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n  <div class="block">\n    <df-slider\n      v-model="value"\n      vertical\n      height="200px">\n    </df-slider>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        value: 0\n      }\n    }\n  }\n<\/script>\n')])])])],2),t._m(7),e("demo-block",[e("div",[e("p",[t._v("设置 "),e("code",[t._v("marks")]),t._v(" 属性可以展示标记")])]),e("template",{slot:"source"},[e("df-demo6")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v("<template>\n  <div class=\"block\">\n    <df-slider\n      v-model=\"value\"\n      range\n      :marks=\"marks\">\n    </df-slider>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        value: [30, 60],\n        marks: {\n          0: '0°C',\n          8: '8°C',\n          37: '37°C',\n          50: {\n            style: {\n              color: '#1989FA'\n            },\n            label: this.$createElement('strong', '50%')\n          }\n        }\n      }\n    }\n  }\n<\/script>\n")])])])],2),t._m(8),t._m(9),t._m(10),t._m(11)],1)},s=[function(){var t=this,e=t._self._c;return e("h2",{attrs:{id:"slider-hua-kuai"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#slider-hua-kuai"}},[t._v("¶")]),t._v(" Slider 滑块")])},function(){var t=this,e=t._self._c;return e("h3",{attrs:{id:"ji-chu-yong-fa"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ji-chu-yong-fa"}},[t._v("¶")]),t._v(" 基础用法")])},function(){var t=this,e=t._self._c;return e("h3",{attrs:{id:"zhi-du-mo-shi"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zhi-du-mo-shi"}},[t._v("¶")]),t._v(" 只读模式")])},function(){var t=this,e=t._self._c;return e("h3",{attrs:{id:"chi-san-zhi"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#chi-san-zhi"}},[t._v("¶")]),t._v(" 离散值")])},function(){var t=this,e=t._self._c;return e("h3",{attrs:{id:"dai-you-shu-ru-kuang"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dai-you-shu-ru-kuang"}},[t._v("¶")]),t._v(" 带有输入框")])},function(){var t=this,e=t._self._c;return e("h3",{attrs:{id:"fan-wei-xuan-ze"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fan-wei-xuan-ze"}},[t._v("¶")]),t._v(" 范围选择")])},function(){var t=this,e=t._self._c;return e("h3",{attrs:{id:"shu-xiang-mo-shi"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#shu-xiang-mo-shi"}},[t._v("¶")]),t._v(" 竖向模式")])},function(){var t=this,e=t._self._c;return e("h3",{attrs:{id:"zhan-shi-biao-ji"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zhan-shi-biao-ji"}},[t._v("¶")]),t._v(" 展示标记")])},function(){var t=this,e=t._self._c;return e("h3",{attrs:{id:"attributes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#attributes"}},[t._v("¶")]),t._v(" Attributes")])},function(){var t=this,e=t._self._c;return e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("可选值")]),e("th",[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("value / v-model")]),e("td",[t._v("绑定值")]),e("td",[t._v("number")]),e("td",[t._v("—")]),e("td",[t._v("0")])]),e("tr",[e("td",[t._v("min")]),e("td",[t._v("最小值")]),e("td",[t._v("number")]),e("td",[t._v("—")]),e("td",[t._v("0")])]),e("tr",[e("td",[t._v("max")]),e("td",[t._v("最大值")]),e("td",[t._v("number")]),e("td",[t._v("—")]),e("td",[t._v("100")])]),e("tr",[e("td",[t._v("disabled")]),e("td",[t._v("是否禁用")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("step")]),e("td",[t._v("步长")]),e("td",[t._v("number")]),e("td",[t._v("—")]),e("td",[t._v("1")])]),e("tr",[e("td",[t._v("show-input")]),e("td",[t._v("是否显示输入框，仅在非范围选择时有效")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("show-input-controls")]),e("td",[t._v("在显示输入框的情况下，是否显示输入框的控制按钮")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("true")])]),e("tr",[e("td",[t._v("input-size")]),e("td",[t._v("输入框的尺寸")]),e("td",[t._v("string")]),e("td",[t._v("large / medium / small / mini")]),e("td",[t._v("small")])]),e("tr",[e("td",[t._v("show-stops")]),e("td",[t._v("是否显示间断点")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("show-tooltip")]),e("td",[t._v("是否显示 tooltip")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("true")])]),e("tr",[e("td",[t._v("format-tooltip")]),e("td",[t._v("格式化 tooltip message")]),e("td",[t._v("function(value)")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("range")]),e("td",[t._v("是否为范围选择")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("vertical")]),e("td",[t._v("是否竖向模式")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("height")]),e("td",[t._v("Slider 高度，竖向模式时必填")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("label")]),e("td",[t._v("屏幕阅读器标签")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("debounce")]),e("td",[t._v("输入时的去抖延迟，毫秒，仅在"),e("code",[t._v("show-input")]),t._v("等于true时有效")]),e("td",[t._v("number")]),e("td",[t._v("—")]),e("td",[t._v("300")])]),e("tr",[e("td",[t._v("tooltip-class")]),e("td",[t._v("tooltip 的自定义类名")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("marks")]),e("td",[t._v("标记， key 的类型必须为 number 且取值在闭区间 "),e("code",[t._v("[min, max]")]),t._v(" 内，每个标记可以单独设置样式")]),e("td",[t._v("object")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("read-only")]),e("td",[t._v("/"),e("em",[t._v("新增")]),t._v("/ 设置只读模式, 此模式下, 无法对进度条进行拖拽操作")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("false")])])])])},function(){var t=this,e=t._self._c;return e("h3",{attrs:{id:"events"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("¶")]),t._v(" Events")])},function(){var t=this,e=t._self._c;return e("table",[e("thead",[e("tr",[e("th",[t._v("事件名称")]),e("th",[t._v("说明")]),e("th",[t._v("回调参数")])])]),e("tbody",[e("tr",[e("td",[t._v("change")]),e("td",[t._v("值改变时触发（使用鼠标拖曳时，只在松开鼠标后触发）")]),e("td",[t._v("改变后的值")])]),e("tr",[e("td",[t._v("input")]),e("td",[t._v("数据改变时触发（使用鼠标拖曳时，活动过程实时触发）")]),e("td",[t._v("改变后的值")])])])])}],l=a("5530"),d={name:"component-doc",components:{"df-demo0":function(){var t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[[a("div",[a("div",{staticClass:"block"},[a("span",{staticClass:"demonstration"},[t._v("默认")]),t._v(" "),a("df-slider",{model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}})],1),t._v(" "),a("div",{staticClass:"block"},[a("span",{staticClass:"demonstration"},[t._v("自定义初始值")]),t._v(" "),a("df-slider",{model:{value:t.value2,callback:function(e){t.value2=e},expression:"value2"}})],1),t._v(" "),a("div",{staticClass:"block"},[a("span",{staticClass:"demonstration"},[t._v("隐藏 Tooltip")]),t._v(" "),a("df-slider",{attrs:{"show-tooltip":!1},model:{value:t.value3,callback:function(e){t.value3=e},expression:"value3"}})],1),t._v(" "),a("div",{staticClass:"block"},[a("span",{staticClass:"demonstration"},[t._v("格式化 Tooltip")]),t._v(" "),a("df-slider",{attrs:{"format-tooltip":t.formatTooltip},model:{value:t.value4,callback:function(e){t.value4=e},expression:"value4"}})],1),t._v(" "),a("div",{staticClass:"block"},[a("span",{staticClass:"demonstration"},[t._v("禁用")]),t._v(" "),a("df-slider",{attrs:{disabled:""},model:{value:t.value5,callback:function(e){t.value5=e},expression:"value5"}})],1)])]],2)},e=[],a={data:function(){return{value1:0,value2:50,value3:36,value4:48,value5:42}},methods:{formatTooltip:function(t){return t/100}}};return Object(l["a"])({render:t,staticRenderFns:e},a)}(),"df-demo1":function(){var t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[[a("div",{staticClass:"block"},[a("df-slider",{attrs:{"read-only":""},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}})],1)]],2)},e=[],a={data:function(){return{value:20}}};return Object(l["a"])({render:t,staticRenderFns:e},a)}(),"df-demo2":function(){var t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[[a("div",[a("div",{staticClass:"block"},[a("span",{staticClass:"demonstration"},[t._v("不显示间断点")]),t._v(" "),a("df-slider",{attrs:{step:10},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}})],1),t._v(" "),a("div",{staticClass:"block"},[a("span",{staticClass:"demonstration"},[t._v("显示间断点")]),t._v(" "),a("df-slider",{attrs:{step:10,"show-stops":""},model:{value:t.value2,callback:function(e){t.value2=e},expression:"value2"}})],1)])]],2)},e=[],a={data:function(){return{value1:0,value2:0}}};return Object(l["a"])({render:t,staticRenderFns:e},a)}(),"df-demo3":function(){var t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[[a("div",{staticClass:"block"},[a("df-slider",{attrs:{"show-input":""},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)]],2)},e=[],a={data:function(){return{value:0}}};return Object(l["a"])({render:t,staticRenderFns:e},a)}(),"df-demo4":function(){var t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[[a("div",{staticClass:"block"},[a("df-slider",{attrs:{range:"","show-stops":"",max:10},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)]],2)},e=[],a={data:function(){return{value:[4,8]}}};return Object(l["a"])({render:t,staticRenderFns:e},a)}(),"df-demo5":function(){var t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[[a("div",{staticClass:"block"},[a("df-slider",{attrs:{vertical:"",height:"200px"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)]],2)},e=[],a={data:function(){return{value:0}}};return Object(l["a"])({render:t,staticRenderFns:e},a)}(),"df-demo6":function(){var t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[[a("div",{staticClass:"block"},[a("df-slider",{attrs:{range:"",marks:t.marks},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)]],2)},e=[],a={data:function(){return{value:[30,60],marks:{0:"0°C",8:"8°C",37:"37°C",50:{style:{color:"#1989FA"},label:this.$createElement("strong","50%")}}}}};return Object(l["a"])({render:t,staticRenderFns:e},a)}()}},r=d,v=a("2877"),i=Object(v["a"])(r,n,s,!1,null,null,null);e["default"]=i.exports}}]);
//# sourceMappingURL=chunk-2d209522.e83050d1.js.map