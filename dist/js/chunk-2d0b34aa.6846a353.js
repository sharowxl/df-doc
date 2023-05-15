(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b34aa"],{"286d":function(d,n,o){"use strict";o.r(n);var t=function(){var d=this,n=d._self._c;return n("section",{staticClass:"content df-doc"},[d._m(0),n("p",[d._v("将动作或菜单折叠到下拉菜单中。")]),d._m(1),n("p",[d._v("移动到下拉菜单上，展开更多操作。")]),n("demo-block",[n("div",[n("p",[d._v("通过组件"),n("code",[d._v("slot")]),d._v("来设置下拉触发的元素以及需要通过具名"),n("code",[d._v("slot")]),d._v("为"),n("code",[d._v("dropdown")]),d._v(" 来设置下拉菜单。默认情况下，下拉按钮只要"),n("code",[d._v("hover")]),d._v("即可，无需点击也会显示下拉菜单。")])]),n("template",{slot:"source"},[n("df-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[d._v('<template>\n  <df-dropdown>\n    <span class="df-dropdown-link">\n      下拉菜单<i class="df-icon-triangle-down df-icon--right"></i>\n    </span>\n    <df-dropdown-menu slot="dropdown">\n      <df-dropdown-item>黄金糕</df-dropdown-item>\n      <df-dropdown-item>狮子头</df-dropdown-item>\n      <df-dropdown-item>螺蛳粉</df-dropdown-item>\n      <df-dropdown-item disabled>双皮奶</df-dropdown-item>\n      <df-dropdown-item divided>蚵仔煎</df-dropdown-item>\n    </df-dropdown-menu>\n  </df-dropdown>\n</template>\n\n<style>\n  .df-dropdown-link {\n    cursor: pointer;\n    color: #409EFF;\n  }\n  .df-icon-triangle-down {\n    font-size: 12px;\n  }\n</style>\n')])])])],2),d._m(2),n("p",[d._v("可使用按钮触发下拉菜单。")]),n("demo-block",[n("div",[n("p",[d._v("设置"),n("code",[d._v("split-button")]),d._v("属性来让触发下拉元素呈现为按钮组，左边是功能按钮，右边是触发下拉菜单的按钮，设置为"),n("code",[d._v("true")]),d._v("即可。")])]),n("template",{slot:"source"},[n("df-demo1")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[d._v('<template>\n  <div>\n    <df-dropdown>\n      <df-button type="primary">\n        更多菜单<i class="df-icon-triangle-down df-icon--right"></i>\n      </df-button>\n      <df-dropdown-menu slot="dropdown">\n        <df-dropdown-item>黄金糕</df-dropdown-item>\n        <df-dropdown-item>狮子头</df-dropdown-item>\n        <df-dropdown-item>螺蛳粉</df-dropdown-item>\n        <df-dropdown-item>双皮奶</df-dropdown-item>\n        <df-dropdown-item>蚵仔煎</df-dropdown-item>\n      </df-dropdown-menu>\n    </df-dropdown>\n    <df-dropdown split-button type="primary" @click="handleClick">\n      更多菜单\n      <df-dropdown-menu slot="dropdown">\n        <df-dropdown-item>黄金糕</df-dropdown-item>\n        <df-dropdown-item>狮子头</df-dropdown-item>\n        <df-dropdown-item>螺蛳粉</df-dropdown-item>\n        <df-dropdown-item>双皮奶</df-dropdown-item>\n        <df-dropdown-item>蚵仔煎</df-dropdown-item>\n      </df-dropdown-menu>\n    </df-dropdown>\n  </div>\n</template>\n\n<style>\n  .df-dropdown {\n    vertical-align: top;\n  }\n  .df-dropdown + .df-dropdown {\n    margin-left: 15px;\n  }\n  .df-icon-triangle-down {\n    font-size: 12px;\n  }\n</style>\n\n<script>\n  export default {\n    methods: {\n      handleClick() {\n        alert(\'button click\');\n      }\n    }\n  }\n<\/script>\n\n')])])])],2),d._m(3),n("p",[d._v("可以配置 click 激活、hover 激活或者 contextmenu 激活。")]),n("demo-block",[n("div",[n("p",[d._v("在"),n("code",[d._v("trigger")]),d._v("属性设置为"),n("code",[d._v("click")]),d._v("或者"),n("code",[d._v("contextmenu")]),d._v("即可。")])]),n("template",{slot:"source"},[n("df-demo2")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[d._v('<template>\n  <df-row class="block-col-2">\n    <df-col :span="8">\n      <span class="demonstration">hover 激活</span>\n      <df-dropdown>\n        <span class="df-dropdown-link">\n          下拉菜单<i class="df-icon-triangle-down df-icon--right"></i>\n        </span>\n        <df-dropdown-menu slot="dropdown">\n          <df-dropdown-item icon="df-icon-add">黄金糕</df-dropdown-item>\n          <df-dropdown-item icon="df-icon-content">狮子头</df-dropdown-item>\n          <df-dropdown-item icon="df-icon-reduce">螺蛳粉</df-dropdown-item>\n          <df-dropdown-item icon="df-icon-back-r">双皮奶</df-dropdown-item>\n          <df-dropdown-item icon="df-icon-success">蚵仔煎</df-dropdown-item>\n        </df-dropdown-menu>\n      </df-dropdown>\n    </df-col>\n    <df-col :span="8">\n      <span class="demonstration">click 激活</span>\n      <df-dropdown trigger="click">\n        <span class="df-dropdown-link">\n          下拉菜单<i class="df-icon-triangle-down df-icon--right"></i>\n        </span>\n        <df-dropdown-menu slot="dropdown">\n          <df-dropdown-item icon="df-icon-add">黄金糕</df-dropdown-item>\n          <df-dropdown-item icon="df-icon-content">狮子头</df-dropdown-item>\n          <df-dropdown-item icon="df-icon-reduce">螺蛳粉</df-dropdown-item>\n          <df-dropdown-item icon="df-icon-back-r">双皮奶</df-dropdown-item>\n          <df-dropdown-item icon="df-icon-success">蚵仔煎</df-dropdown-item>\n        </df-dropdown-menu>\n      </df-dropdown>\n    </df-col>\n    <df-col :span="8">\n      <span class="demonstration">右键激活</span>\n      <df-dropdown trigger="contextmenu">\n        <span class="df-dropdown-link">\n          下拉菜单<i class="df-icon-triangle-down df-icon--right"></i>\n        </span>\n        <df-dropdown-menu slot="dropdown">\n          <df-dropdown-item icon="df-icon-add">黄金糕</df-dropdown-item>\n          <df-dropdown-item icon="df-icon-content">狮子头</df-dropdown-item>\n          <df-dropdown-item icon="df-icon-reduce">螺蛳粉</df-dropdown-item>\n          <df-dropdown-item icon="df-icon-back-r">双皮奶</df-dropdown-item>\n          <df-dropdown-item icon="df-icon-success">蚵仔煎</df-dropdown-item>\n        </df-dropdown-menu>\n      </df-dropdown>\n    </df-col>\n  </df-row>\n</template>\n\n<style>\n  .df-dropdown-link {\n    cursor: pointer;\n    color: #409EFF;\n  }\n  .df-icon-triangle-down {\n    font-size: 12px;\n  }\n  .demonstration {\n    display: block;\n    color: #8492a6;\n    font-size: 14px;\n    margin-bottom: 20px;\n  }\n</style>\n')])])])],2),d._m(4),d._m(5),n("demo-block",[n("div",[n("p",[d._v("下拉菜单默认在点击菜单项后会被隐藏，将"),n("code",[d._v("hide-on-click")]),d._v("属性默认为"),n("code",[d._v("false")]),d._v("可以关闭此功能。")])]),n("template",{slot:"source"},[n("df-demo3")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[d._v('<template>\n  <df-dropdown :hide-on-click="false">\n    <span class="df-dropdown-link">\n      下拉菜单<i class="df-icon-triangle-down df-icon--right"></i>\n    </span>\n    <df-dropdown-menu slot="dropdown">\n      <df-dropdown-item>黄金糕</df-dropdown-item>\n      <df-dropdown-item>狮子头</df-dropdown-item>\n      <df-dropdown-item>螺蛳粉</df-dropdown-item>\n      <df-dropdown-item disabled>双皮奶</df-dropdown-item>\n      <df-dropdown-item divided>蚵仔煎</df-dropdown-item>\n    </df-dropdown-menu>\n  </df-dropdown>\n</template>\n\n<style>\n  .df-dropdown-link {\n    cursor: pointer;\n    color: #409EFF;\n  }\n  .df-icon-triangle-down {\n    font-size: 12px;\n  }\n</style>\n')])])])],2),d._m(6),n("p",[d._v("点击菜单项后会触发事件，用户可以通过相应的菜单项 key 进行不同的操作")]),n("demo-block",[n("template",{slot:"source"},[n("df-demo4")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[d._v('<template>\n  <df-dropdown @command="handleCommand">\n    <span class="df-dropdown-link">\n      下拉菜单<i class="df-icon-triangle-down df-icon--right"></i>\n    </span>\n    <df-dropdown-menu slot="dropdown">\n      <df-dropdown-item command="a">黄金糕</df-dropdown-item>\n      <df-dropdown-item command="b">狮子头</df-dropdown-item>\n      <df-dropdown-item command="c">螺蛳粉</df-dropdown-item>\n      <df-dropdown-item command="d" disabled>双皮奶</df-dropdown-item>\n      <df-dropdown-item command="e" divided>蚵仔煎</df-dropdown-item>\n    </df-dropdown-menu>\n  </df-dropdown>\n</template>\n\n<style>\n  .df-dropdown-link {\n    cursor: pointer;\n    color: #409EFF;\n  }\n  .df-icon-triangle-down {\n    font-size: 12px;\n  }\n</style>\n\n<script>\n  export default {\n    methods: {\n      handleCommand(command) {\n        this.$message(\'click on item \' + command);\n      }\n    }\n  }\n<\/script>\n')])])])],2),d._m(7),n("p",[d._v("Dropdown 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的尺寸。")]),n("demo-block",[n("div",[n("p",[d._v("额外的尺寸："),n("code",[d._v("medium")]),d._v("、"),n("code",[d._v("small")]),d._v("、"),n("code",[d._v("mini")]),d._v("，通过设置"),n("code",[d._v("size")]),d._v("属性来配置它们。")])]),n("template",{slot:"source"},[n("df-demo5")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[d._v('<template>\n  <div>\n    <df-dropdown split-button type="primary">\n      默认尺寸\n      <df-dropdown-menu slot="dropdown">\n        <df-dropdown-item>黄金糕</df-dropdown-item>\n        <df-dropdown-item>狮子头</df-dropdown-item>\n        <df-dropdown-item>螺蛳粉</df-dropdown-item>\n        <df-dropdown-item>双皮奶</df-dropdown-item>\n        <df-dropdown-item>蚵仔煎</df-dropdown-item>\n      </df-dropdown-menu>\n    </df-dropdown>\n\n    <df-dropdown size="small" split-button type="primary">\n      小型尺寸\n      <df-dropdown-menu slot="dropdown">\n        <df-dropdown-item>黄金糕</df-dropdown-item>\n        <df-dropdown-item>狮子头</df-dropdown-item>\n        <df-dropdown-item>螺蛳粉</df-dropdown-item>\n        <df-dropdown-item>双皮奶</df-dropdown-item>\n        <df-dropdown-item>蚵仔煎</df-dropdown-item>\n      </df-dropdown-menu>\n    </df-dropdown>\n\n    <df-dropdown size="medium" split-button type="primary">\n      中等尺寸\n      <df-dropdown-menu slot="dropdown">\n        <df-dropdown-item>黄金糕</df-dropdown-item>\n        <df-dropdown-item>狮子头</df-dropdown-item>\n        <df-dropdown-item>螺蛳粉</df-dropdown-item>\n        <df-dropdown-item>双皮奶</df-dropdown-item>\n        <df-dropdown-item>蚵仔煎</df-dropdown-item>\n      </df-dropdown-menu>\n    </df-dropdown>\n  </div>\n</template>\n')])])])],2),d._m(8),d._m(9),d._m(10),d._m(11),d._m(12),d._m(13),d._m(14),d._m(15)],1)},r=[function(){var d=this,n=d._self._c;return n("h2",{attrs:{id:"dropdown-xia-la-cai-dan"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dropdown-xia-la-cai-dan"}},[d._v("¶")]),d._v(" Dropdown 下拉菜单")])},function(){var d=this,n=d._self._c;return n("h3",{attrs:{id:"ji-chu-yong-fa"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ji-chu-yong-fa"}},[d._v("¶")]),d._v(" 基础用法")])},function(){var d=this,n=d._self._c;return n("h3",{attrs:{id:"chu-fa-dui-xiang"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#chu-fa-dui-xiang"}},[d._v("¶")]),d._v(" 触发对象")])},function(){var d=this,n=d._self._c;return n("h3",{attrs:{id:"chu-fa-fang-shi"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#chu-fa-fang-shi"}},[d._v("¶")]),d._v(" 触发方式")])},function(){var d=this,n=d._self._c;return n("h3",{attrs:{id:"cai-dan-yin-cang-fang-shi"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#cai-dan-yin-cang-fang-shi"}},[d._v("¶")]),d._v(" 菜单隐藏方式")])},function(){var d=this,n=d._self._c;return n("p",[d._v("可以"),n("code",[d._v("hide-on-click")]),d._v("属性来配置。")])},function(){var d=this,n=d._self._c;return n("h3",{attrs:{id:"zhi-ling-shi-jian"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#zhi-ling-shi-jian"}},[d._v("¶")]),d._v(" 指令事件")])},function(){var d=this,n=d._self._c;return n("h3",{attrs:{id:"bu-tong-chi-cun"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#bu-tong-chi-cun"}},[d._v("¶")]),d._v(" 不同尺寸")])},function(){var d=this,n=d._self._c;return n("h3",{attrs:{id:"dropdown-attributes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dropdown-attributes"}},[d._v("¶")]),d._v(" Dropdown Attributes")])},function(){var d=this,n=d._self._c;return n("table",[n("thead",[n("tr",[n("th",[d._v("参数")]),n("th",[d._v("说明")]),n("th",[d._v("类型")]),n("th",[d._v("可选值")]),n("th",[d._v("默认值")])])]),n("tbody",[n("tr",[n("td",[d._v("type")]),n("td",[d._v("菜单按钮类型，同 Button 组件(只在"),n("code",[d._v("split-button")]),d._v("为 true 的情况下有效)")]),n("td",[d._v("string")]),n("td",[d._v("—")]),n("td",[d._v("—")])]),n("tr",[n("td",[d._v("size")]),n("td",[d._v("菜单尺寸，在"),n("code",[d._v("split-button")]),d._v("为 true 的情况下也对触发按钮生效")]),n("td",[d._v("string")]),n("td",[d._v("medium / small / mini")]),n("td",[d._v("—")])]),n("tr",[n("td",[d._v("split-button")]),n("td",[d._v("下拉触发元素呈现为按钮组")]),n("td",[d._v("boolean")]),n("td",[d._v("—")]),n("td",[d._v("false")])]),n("tr",[n("td",[d._v("placement")]),n("td",[d._v("菜单弹出位置")]),n("td",[d._v("string")]),n("td",[d._v("top/top-start/top-end/bottom/bottom-start/bottom-end")]),n("td",[d._v("bottom-end")])]),n("tr",[n("td",[d._v("trigger")]),n("td",[d._v("触发下拉的行为")]),n("td",[d._v("string")]),n("td",[d._v("hover, click, contextmenu")]),n("td",[d._v("hover")])]),n("tr",[n("td",[d._v("hide-on-click")]),n("td",[d._v("是否在点击菜单项后隐藏菜单")]),n("td",[d._v("boolean")]),n("td",[d._v("—")]),n("td",[d._v("true")])]),n("tr",[n("td",[d._v("show-timeout")]),n("td",[d._v("展开下拉菜单的延时（仅在 trigger 为 hover 时有效）")]),n("td",[d._v("number")]),n("td",[d._v("—")]),n("td",[d._v("250")])]),n("tr",[n("td",[d._v("hide-timeout")]),n("td",[d._v("收起下拉菜单的延时（仅在 trigger 为 hover 时有效）")]),n("td",[d._v("number")]),n("td",[d._v("—")]),n("td",[d._v("150")])]),n("tr",[n("td",[d._v("tabindex")]),n("td",[d._v("Dropdown 组件的 "),n("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex"}},[d._v("tabindex")])]),n("td",[d._v("number")]),n("td",[d._v("—")]),n("td",[d._v("0")])])])])},function(){var d=this,n=d._self._c;return n("h3",{attrs:{id:"dropdown-slots"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dropdown-slots"}},[d._v("¶")]),d._v(" Dropdown Slots")])},function(){var d=this,n=d._self._c;return n("table",[n("thead",[n("tr",[n("th",[d._v("Name")]),n("th",[d._v("说明")])])]),n("tbody",[n("tr",[n("td",[d._v("—")]),n("td",[d._v("触发下拉列表显示的元素。 注意： 必须是一个元素或者或者组件")])]),n("tr",[n("td",[d._v("dropdown")]),n("td",[d._v("下拉列表，通常是 "),n("code",[d._v("<df-dropdown-menu>")]),d._v(" 组件")])])])])},function(){var d=this,n=d._self._c;return n("h3",{attrs:{id:"dropdown-events"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dropdown-events"}},[d._v("¶")]),d._v(" Dropdown Events")])},function(){var d=this,n=d._self._c;return n("table",[n("thead",[n("tr",[n("th",[d._v("事件名称")]),n("th",[d._v("说明")]),n("th",[d._v("回调参数")])])]),n("tbody",[n("tr",[n("td",[d._v("click")]),n("td",[n("code",[d._v("split-button")]),d._v(" 为 true 时，点击左侧按钮的回调")]),n("td",[d._v("—")])]),n("tr",[n("td",[d._v("command")]),n("td",[d._v("点击菜单项触发的事件回调")]),n("td",[d._v("dropdown-item 的指令")])]),n("tr",[n("td",[d._v("visible-change")]),n("td",[d._v("下拉框出现/隐藏时触发")]),n("td",[d._v("出现则为 true，隐藏则为 false")])])])])},function(){var d=this,n=d._self._c;return n("h3",{attrs:{id:"dropdown-menu-item-attributes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dropdown-menu-item-attributes"}},[d._v("¶")]),d._v(" Dropdown Menu Item Attributes")])},function(){var d=this,n=d._self._c;return n("table",[n("thead",[n("tr",[n("th",[d._v("参数")]),n("th",[d._v("说明")]),n("th",[d._v("类型")]),n("th",[d._v("可选值")]),n("th",[d._v("默认值")])])]),n("tbody",[n("tr",[n("td",[d._v("command")]),n("td",[d._v("指令")]),n("td",[d._v("string/number/object")]),n("td",[d._v("—")]),n("td",[d._v("—")])]),n("tr",[n("td",[d._v("disabled")]),n("td",[d._v("禁用")]),n("td",[d._v("boolean")]),n("td",[d._v("—")]),n("td",[d._v("false")])]),n("tr",[n("td",[d._v("divided")]),n("td",[d._v("显示分割线")]),n("td",[d._v("boolean")]),n("td",[d._v("—")]),n("td",[d._v("false")])]),n("tr",[n("td",[d._v("icon")]),n("td",[d._v("图标类名")]),n("td",[d._v("string")]),n("td",[d._v("—")]),n("td",[d._v("—")])])])])}],e=o("5530"),i={name:"component-doc",components:{"df-demo0":function(){var d=function(){var d=this,n=d.$createElement,o=d._self._c||n;return o("div",[[o("df-dropdown",[o("span",{staticClass:"df-dropdown-link"},[d._v("\n      下拉菜单"),o("i",{staticClass:"df-icon-triangle-down df-icon--right"})]),d._v(" "),o("df-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[o("df-dropdown-item",[d._v("黄金糕")]),d._v(" "),o("df-dropdown-item",[d._v("狮子头")]),d._v(" "),o("df-dropdown-item",[d._v("螺蛳粉")]),d._v(" "),o("df-dropdown-item",{attrs:{disabled:""}},[d._v("双皮奶")]),d._v(" "),o("df-dropdown-item",{attrs:{divided:""}},[d._v("蚵仔煎")])],1)],1)]],2)},n=[],o={};return Object(e["a"])({render:d,staticRenderFns:n},o)}(),"df-demo1":function(){var d=function(){var d=this,n=d.$createElement,o=d._self._c||n;return o("div",[[o("div",[o("df-dropdown",[o("df-button",{attrs:{type:"primary"}},[d._v("\n        更多菜单"),o("i",{staticClass:"df-icon-triangle-down df-icon--right"})]),d._v(" "),o("df-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[o("df-dropdown-item",[d._v("黄金糕")]),d._v(" "),o("df-dropdown-item",[d._v("狮子头")]),d._v(" "),o("df-dropdown-item",[d._v("螺蛳粉")]),d._v(" "),o("df-dropdown-item",[d._v("双皮奶")]),d._v(" "),o("df-dropdown-item",[d._v("蚵仔煎")])],1)],1),d._v(" "),o("df-dropdown",{attrs:{"split-button":"",type:"primary"},on:{click:d.handleClick}},[d._v("\n      更多菜单\n      "),o("df-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[o("df-dropdown-item",[d._v("黄金糕")]),d._v(" "),o("df-dropdown-item",[d._v("狮子头")]),d._v(" "),o("df-dropdown-item",[d._v("螺蛳粉")]),d._v(" "),o("df-dropdown-item",[d._v("双皮奶")]),d._v(" "),o("df-dropdown-item",[d._v("蚵仔煎")])],1)],1)],1)]],2)},n=[],o={methods:{handleClick:function(){alert("button click")}}};return Object(e["a"])({render:d,staticRenderFns:n},o)}(),"df-demo2":function(){var d=function(){var d=this,n=d.$createElement,o=d._self._c||n;return o("div",[[o("df-row",{staticClass:"block-col-2"},[o("df-col",{attrs:{span:8}},[o("span",{staticClass:"demonstration"},[d._v("hover 激活")]),d._v(" "),o("df-dropdown",[o("span",{staticClass:"df-dropdown-link"},[d._v("\n          下拉菜单"),o("i",{staticClass:"df-icon-triangle-down df-icon--right"})]),d._v(" "),o("df-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[o("df-dropdown-item",{attrs:{icon:"df-icon-add"}},[d._v("黄金糕")]),d._v(" "),o("df-dropdown-item",{attrs:{icon:"df-icon-content"}},[d._v("狮子头")]),d._v(" "),o("df-dropdown-item",{attrs:{icon:"df-icon-reduce"}},[d._v("螺蛳粉")]),d._v(" "),o("df-dropdown-item",{attrs:{icon:"df-icon-back-r"}},[d._v("双皮奶")]),d._v(" "),o("df-dropdown-item",{attrs:{icon:"df-icon-success"}},[d._v("蚵仔煎")])],1)],1)],1),d._v(" "),o("df-col",{attrs:{span:8}},[o("span",{staticClass:"demonstration"},[d._v("click 激活")]),d._v(" "),o("df-dropdown",{attrs:{trigger:"click"}},[o("span",{staticClass:"df-dropdown-link"},[d._v("\n          下拉菜单"),o("i",{staticClass:"df-icon-triangle-down df-icon--right"})]),d._v(" "),o("df-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[o("df-dropdown-item",{attrs:{icon:"df-icon-add"}},[d._v("黄金糕")]),d._v(" "),o("df-dropdown-item",{attrs:{icon:"df-icon-content"}},[d._v("狮子头")]),d._v(" "),o("df-dropdown-item",{attrs:{icon:"df-icon-reduce"}},[d._v("螺蛳粉")]),d._v(" "),o("df-dropdown-item",{attrs:{icon:"df-icon-back-r"}},[d._v("双皮奶")]),d._v(" "),o("df-dropdown-item",{attrs:{icon:"df-icon-success"}},[d._v("蚵仔煎")])],1)],1)],1),d._v(" "),o("df-col",{attrs:{span:8}},[o("span",{staticClass:"demonstration"},[d._v("右键激活")]),d._v(" "),o("df-dropdown",{attrs:{trigger:"contextmenu"}},[o("span",{staticClass:"df-dropdown-link"},[d._v("\n          下拉菜单"),o("i",{staticClass:"df-icon-triangle-down df-icon--right"})]),d._v(" "),o("df-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[o("df-dropdown-item",{attrs:{icon:"df-icon-add"}},[d._v("黄金糕")]),d._v(" "),o("df-dropdown-item",{attrs:{icon:"df-icon-content"}},[d._v("狮子头")]),d._v(" "),o("df-dropdown-item",{attrs:{icon:"df-icon-reduce"}},[d._v("螺蛳粉")]),d._v(" "),o("df-dropdown-item",{attrs:{icon:"df-icon-back-r"}},[d._v("双皮奶")]),d._v(" "),o("df-dropdown-item",{attrs:{icon:"df-icon-success"}},[d._v("蚵仔煎")])],1)],1)],1)],1)]],2)},n=[],o={};return Object(e["a"])({render:d,staticRenderFns:n},o)}(),"df-demo3":function(){var d=function(){var d=this,n=d.$createElement,o=d._self._c||n;return o("div",[[o("df-dropdown",{attrs:{"hide-on-click":!1}},[o("span",{staticClass:"df-dropdown-link"},[d._v("\n      下拉菜单"),o("i",{staticClass:"df-icon-triangle-down df-icon--right"})]),d._v(" "),o("df-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[o("df-dropdown-item",[d._v("黄金糕")]),d._v(" "),o("df-dropdown-item",[d._v("狮子头")]),d._v(" "),o("df-dropdown-item",[d._v("螺蛳粉")]),d._v(" "),o("df-dropdown-item",{attrs:{disabled:""}},[d._v("双皮奶")]),d._v(" "),o("df-dropdown-item",{attrs:{divided:""}},[d._v("蚵仔煎")])],1)],1)]],2)},n=[],o={};return Object(e["a"])({render:d,staticRenderFns:n},o)}(),"df-demo4":function(){var d=function(){var d=this,n=d.$createElement,o=d._self._c||n;return o("div",[[o("df-dropdown",{on:{command:d.handleCommand}},[o("span",{staticClass:"df-dropdown-link"},[d._v("\n      下拉菜单"),o("i",{staticClass:"df-icon-triangle-down df-icon--right"})]),d._v(" "),o("df-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[o("df-dropdown-item",{attrs:{command:"a"}},[d._v("黄金糕")]),d._v(" "),o("df-dropdown-item",{attrs:{command:"b"}},[d._v("狮子头")]),d._v(" "),o("df-dropdown-item",{attrs:{command:"c"}},[d._v("螺蛳粉")]),d._v(" "),o("df-dropdown-item",{attrs:{command:"d",disabled:""}},[d._v("双皮奶")]),d._v(" "),o("df-dropdown-item",{attrs:{command:"e",divided:""}},[d._v("蚵仔煎")])],1)],1)]],2)},n=[],o={methods:{handleCommand:function(d){this.$message("click on item "+d)}}};return Object(e["a"])({render:d,staticRenderFns:n},o)}(),"df-demo5":function(){var d=function(){var d=this,n=d.$createElement,o=d._self._c||n;return o("div",[[o("div",[o("df-dropdown",{attrs:{"split-button":"",type:"primary"}},[d._v("\n      默认尺寸\n      "),o("df-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[o("df-dropdown-item",[d._v("黄金糕")]),d._v(" "),o("df-dropdown-item",[d._v("狮子头")]),d._v(" "),o("df-dropdown-item",[d._v("螺蛳粉")]),d._v(" "),o("df-dropdown-item",[d._v("双皮奶")]),d._v(" "),o("df-dropdown-item",[d._v("蚵仔煎")])],1)],1),d._v(" "),o("df-dropdown",{attrs:{size:"small","split-button":"",type:"primary"}},[d._v("\n      小型尺寸\n      "),o("df-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[o("df-dropdown-item",[d._v("黄金糕")]),d._v(" "),o("df-dropdown-item",[d._v("狮子头")]),d._v(" "),o("df-dropdown-item",[d._v("螺蛳粉")]),d._v(" "),o("df-dropdown-item",[d._v("双皮奶")]),d._v(" "),o("df-dropdown-item",[d._v("蚵仔煎")])],1)],1),d._v(" "),o("df-dropdown",{attrs:{size:"medium","split-button":"",type:"primary"}},[d._v("\n      中等尺寸\n      "),o("df-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[o("df-dropdown-item",[d._v("黄金糕")]),d._v(" "),o("df-dropdown-item",[d._v("狮子头")]),d._v(" "),o("df-dropdown-item",[d._v("螺蛳粉")]),d._v(" "),o("df-dropdown-item",[d._v("双皮奶")]),d._v(" "),o("df-dropdown-item",[d._v("蚵仔煎")])],1)],1)],1)]],2)},n=[],o={};return Object(e["a"])({render:d,staticRenderFns:n},o)}()}},s=i,a=o("2877"),p=Object(a["a"])(s,t,r,!1,null,null,null);n["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d0b34aa.6846a353.js.map