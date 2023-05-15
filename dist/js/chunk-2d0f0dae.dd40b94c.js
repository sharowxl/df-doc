(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0f0dae"],{"9dc0":function(t,e,n){"use strict";n.r(e);var d=function(){var t=this,e=t._self._c;return e("section",{staticClass:"content df-doc"},[t._m(0),e("p",[t._v("用于体温单录入。")]),t._m(1),e("demo-block",[e("div",[e("p",[t._v("疼痛输入框是一个组合式的组件, 是由左边的 "),e("code",[t._v("df-input")]),t._v(" 组件, 中间的 "),e("code",[t._v("df-input")]),t._v(" 组件和右边 "),e("code",[t._v("df-select")]),t._v(" 组件联合组成的, 分别通过传入的 sync 类型的 "),e("code",[t._v("value1")]),t._v(", "),e("code",[t._v("value2")]),t._v(", "),e("code",[t._v("valueRight")]),t._v(" 控制各自 v-model 绑定的值, "),e("code",[t._v("optionsRight")]),t._v(" 表示右边 select 的选项, 右边 select 绑定的 v-model 是 optionsRight 里的 "),e("code",[t._v("value")]),t._v(", 如果想要控制左中右三个组件的 attributes, 则分别传入 "),e("code",[t._v("leftProps")]),t._v(", "),e("code",[t._v("middleProps")]),t._v(" 和 "),e("code",[t._v("rightProps")]),t._v(" 来控制")])]),e("template",{slot:"source"},[e("df-demo0")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v("\n<template>\n  <df-pain-input\n    :valueLeft.sync=\"valueLeft\"\n    :valueMiddle.sync=\"valueMiddle\"\n    :valueRight.sync=\"valueRight\"\n    :optionsRight=\"optionsRight\"\n    :normalMax=\"4\"\n    :normalMin=\"0\"\n    abnormalColor=\"#f00\"\n    @change=\"handleChange\"\n    @changeValueLeft=\"handleChangeLeft\"\n    @changeValueMiddle=\"handleChangeMiddle\"\n    @changeValueRight=\"handleChangeRight\"\n  />\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      optionsRight: [{\n        value: 'juce',\n        label: '拒测'\n      }, {\n        value: 'buzai',\n        label: '不在'\n      }, {\n        value: 'waichu',\n        label: '外出'\n      }, {\n        value: 'busheng',\n        label: '不升'\n      }],\n      valueLeft: 'PIPP',\n      valueMiddle: '',\n      valueRight: ''\n    }\n  },\n  methods:{\n    handleChange({valueLeft,valueMiddle,valueRight}){\n      console.log('change',valueLeft,valueMiddle,valueRight)\n    },\n    handleChangeLeft(val){\n      console.log(val)\n    },\n    handleChangeMiddle(val){\n      console.log(val)\n    },\n    handleChangeRight(val){\n      console.log(val)\n    }\n  }\n}\n<\/script>\n\n")])])])],2),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7)],1)},a=[function(){var t=this,e=t._self._c;return e("h2",{attrs:{id:"paininput-teng-tong-shu-ru-kuang"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#paininput-teng-tong-shu-ru-kuang"}},[t._v("¶")]),t._v(" PainInput 疼痛输入框")])},function(){var t=this,e=t._self._c;return e("h3",{attrs:{id:"ji-chu-yong-fa"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ji-chu-yong-fa"}},[t._v("¶")]),t._v(" 基础用法")])},function(){var t=this,e=t._self._c;return e("h3",{attrs:{id:"attributes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#attributes"}},[t._v("¶")]),t._v(" Attributes")])},function(){var t=this,e=t._self._c;return e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("可选值")]),e("th",[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("valueLeft")]),e("td",[t._v("左侧 select 的值（务必使用 .sync）")]),e("td",[t._v("string / number")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("valueMiddle")]),e("td",[t._v("中间 input 的值（务必使用 .sync）")]),e("td",[t._v("string / number")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("valueRight")]),e("td",[t._v("右侧 select 的值（务必使用 .sync）")]),e("td",[t._v("string / number")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("optionsRight")]),e("td",[t._v("右侧 select 的 options")]),e("td",[t._v("array")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("noLeft")]),e("td",[t._v("移除左侧的 select")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("noRight")]),e("td",[t._v("移除右侧的 select")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("noPainTypes")]),e("td",[t._v("移除疼痛类型选择区")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("size")]),e("td",[t._v("尺寸")]),e("td",[t._v("string")]),e("td",[t._v("medium / small / mini")]),e("td",[t._v("small")])]),e("tr",[e("td",[t._v("referenceClass")]),e("td",[t._v("reference 插槽的 class")]),e("td",[t._v("—")]),e("td"),e("td")]),e("tr",[e("td",[t._v("normalMax")]),e("td",[t._v("正常最大值")]),e("td",[t._v("number")]),e("td",[t._v("—")]),e("td")]),e("tr",[e("td",[t._v("normalMin")]),e("td",[t._v("正常最小值")]),e("td",[t._v("number")]),e("td",[t._v("—")]),e("td")]),e("tr",[e("td",[t._v("abnormalColor")]),e("td",[t._v("异常时颜色")]),e("td",[t._v("string")]),e("td",[t._v("#f00")]),e("td")]),e("tr",[e("td",[t._v("leftProps")]),e("td",[t._v("左边 input 组件的 props")]),e("td",[t._v("object")]),e("td",[t._v("—")]),e("td")]),e("tr",[e("td",[t._v("middleProps")]),e("td",[t._v("中间 input 组件的 props")]),e("td",[t._v("object")]),e("td",[t._v("—")]),e("td")]),e("tr",[e("td",[t._v("rightProps")]),e("td",[t._v("右边 select 组件的 props")]),e("td",[t._v("object")]),e("td",[t._v("—")]),e("td")])])])},function(){var t=this,e=t._self._c;return e("h3",{attrs:{id:"events"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("¶")]),t._v(" Events")])},function(){var t=this,e=t._self._c;return e("table",[e("thead",[e("tr",[e("th",[t._v("事件名")]),e("th",[t._v("说明")]),e("th",[t._v("参数")])])]),e("tbody",[e("tr",[e("td",[t._v("change")]),e("td",[t._v("当左中右三个组件的值发生变化时触发")]),e("td",[t._v("{valueLeft,valueMiddle,valueRight}")])]),e("tr",[e("td",[t._v("changeValueLeft")]),e("td",[t._v("当左边 select 的值发生变化时触发")]),e("td",[t._v("valueLeft")])]),e("tr",[e("td",[t._v("changeValueMiddle")]),e("td",[t._v("当中间 input 的值发生变化时触发")]),e("td",[t._v("valueMiddle")])]),e("tr",[e("td",[t._v("changeValueRight")]),e("td",[t._v("当右边 select 的值发生变化时触发")]),e("td",[t._v("valueRight")])])])])},function(){var t=this,e=t._self._c;return e("h3",{attrs:{id:"methods"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#methods"}},[t._v("¶")]),t._v(" Methods")])},function(){var t=this,e=t._self._c;return e("table",[e("thead",[e("tr",[e("th",[t._v("方法名")]),e("th",[t._v("说明")]),e("th",[t._v("参数")])])]),e("tbody",[e("tr",[e("td",[t._v("getRefLeft")]),e("td",[t._v("获取左边 select 组件实例")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("getRefMiddle")]),e("td",[t._v("获取中间 input 组件实例")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("getRefRight")]),e("td",[t._v("获取右边 select 组件实例")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("focusLeft")]),e("td",[t._v("使左边 select 组件获取焦点")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("focusMiddle")]),e("td",[t._v("使中间 input 组件获取焦点")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("focusRight")]),e("td",[t._v("使右边 select 组件获取焦点")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("focus")]),e("td",[t._v("同 focusMiddle")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("blurLeft")]),e("td",[t._v("使左边 select 组件失去焦点")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("blurMiddle")]),e("td",[t._v("使中间 input 组件失去焦点")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("blurRight")]),e("td",[t._v("使右边 select 组件失去焦点")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("blur")]),e("td",[t._v("同 blurMiddle")]),e("td",[t._v("—")])])])])}],v=n("5530"),l={name:"component-doc",components:{"df-demo0":function(){var t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[[n("df-pain-input",{attrs:{valueLeft:t.valueLeft,valueMiddle:t.valueMiddle,valueRight:t.valueRight,optionsRight:t.optionsRight,normalMax:4,normalMin:0,abnormalColor:"#f00"},on:{"update:valueLeft":function(e){t.valueLeft=e},"update:value-left":function(e){t.valueLeft=e},"update:valueMiddle":function(e){t.valueMiddle=e},"update:value-middle":function(e){t.valueMiddle=e},"update:valueRight":function(e){t.valueRight=e},"update:value-right":function(e){t.valueRight=e},change:t.handleChange,changeValueLeft:t.handleChangeLeft,changeValueMiddle:t.handleChangeMiddle,changeValueRight:t.handleChangeRight}})]],2)},e=[],n={data:function(){return{optionsRight:[{value:"juce",label:"拒测"},{value:"buzai",label:"不在"},{value:"waichu",label:"外出"},{value:"busheng",label:"不升"}],valueLeft:"PIPP",valueMiddle:"",valueRight:""}},methods:{handleChange:function(t){var e=t.valueLeft,n=t.valueMiddle,d=t.valueRight;console.log("change",e,n,d)},handleChangeLeft:function(t){console.log(t)},handleChangeMiddle:function(t){console.log(t)},handleChangeRight:function(t){console.log(t)}}};return Object(v["a"])({render:t,staticRenderFns:e},n)}()}},_=l,i=n("2877"),u=Object(i["a"])(_,d,a,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0f0dae.dd40b94c.js.map