(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20957f"],{a93d:function(t,e,n){"use strict";n.r(e);var d=function(){var t=this,e=t._self._c;return e("section",{staticClass:"content df-doc"},[t._m(0),e("p",[t._v("为网站提供导航功能的菜单。")]),t._m(1),e("p",[t._v("适用广泛的基础用法。")]),e("demo-block",[e("div",[e("p",[t._v("导航菜单默认为垂直模式，通过"),e("code",[t._v("mode")]),t._v("属性可以使导航菜单变更为水平模式。另外，在菜单中通过"),e("code",[t._v("submenu")]),t._v("组件可以生成二级菜单。Menu 还提供了"),e("code",[t._v("background-color")]),t._v("、"),e("code",[t._v("text-color")]),t._v("和"),e("code",[t._v("active-text-color")]),t._v("，分别用于设置菜单的背景色、菜单的文字颜色和当前激活菜单的文字颜色。")])]),e("template",{slot:"source"},[e("df-demo0")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n  <div>\n    <df-menu :default-active="activeIndex" class="df-menu-demo" mode="horizontal" @select="handleSelect">\n      <df-menu-item index="1">处理中心</df-menu-item>\n      <df-submenu index="2">\n        <template slot="title">我的工作台</template>\n        <df-menu-item index="2-1">选项1</df-menu-item>\n        <df-menu-item index="2-2">选项2</df-menu-item>\n        <df-menu-item index="2-3">选项3</df-menu-item>\n        <df-submenu index="2-4">\n          <template slot="title">选项4</template>\n          <df-menu-item index="2-4-1">选项1</df-menu-item>\n          <df-menu-item index="2-4-2">选项2</df-menu-item>\n          <df-menu-item index="2-4-3">选项3</df-menu-item>\n        </df-submenu>\n      </df-submenu>\n      <df-menu-item index="3" disabled>消息中心</df-menu-item>\n      <df-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></df-menu-item>\n    </df-menu>\n    <div class="line"></div>\n    <df-menu\n      :default-active="activeIndex2"\n      class="df-menu-demo"\n      mode="horizontal"\n      @select="handleSelect"\n      background-color="#545c64"\n      text-color="#fff"\n      active-text-color="#ffd04b">\n      <df-menu-item index="1">处理中心</df-menu-item>\n      <df-submenu index="2">\n        <template slot="title">我的工作台</template>\n        <df-menu-item index="2-1">选项1</df-menu-item>\n        <df-menu-item index="2-2">选项2</df-menu-item>\n        <df-menu-item index="2-3">选项3</df-menu-item>\n        <df-submenu index="2-4">\n          <template slot="title">选项4</template>\n          <df-menu-item index="2-4-1">选项1</df-menu-item>\n          <df-menu-item index="2-4-2">选项2</df-menu-item>\n          <df-menu-item index="2-4-3">选项3</df-menu-item>\n        </df-submenu>\n      </df-submenu>\n      <df-menu-item index="3" disabled>消息中心</df-menu-item>\n      <df-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></df-menu-item>\n    </df-menu>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        activeIndex: \'1\',\n        activeIndex2: \'1\'\n      };\n    },\n    methods: {\n      handleSelect(key, keyPath) {\n        console.log(key, keyPath);\n      }\n    }\n  }\n<\/script>\n')])])])],2),t._m(2),e("p",[t._v("垂直菜单，可内嵌子菜单。")]),e("demo-block",[e("div",[e("p",[t._v("通过"),e("code",[t._v("df-menu-item-group")]),t._v("组件可以实现菜单进行分组，分组名可以通过"),e("code",[t._v("title")]),t._v("属性直接设定，也可以通过具名 slot 来设定。")])]),e("template",{slot:"source"},[e("df-demo1")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n  <df-row class="tac">\n    <df-col :span="12">\n      <h5>默认颜色</h5>\n      <df-menu\n        default-active="2"\n        class="df-menu-vertical-demo"\n        @open="handleOpen"\n        @close="handleClose">\n        <df-submenu index="1">\n          <template slot="title">\n            <i class="df-icon-address"></i>\n            <span>导航一</span>\n          </template>\n          <df-menu-item-group>\n            <template slot="title">分组一</template>\n            <df-menu-item index="1-1">选项1</df-menu-item>\n            <df-menu-item index="1-2">选项2</df-menu-item>\n          </df-menu-item-group>\n          <df-menu-item-group title="分组2">\n            <df-menu-item index="1-3">选项3</df-menu-item>\n          </df-menu-item-group>\n          <df-submenu index="1-4">\n            <template slot="title">选项4</template>\n            <df-menu-item index="1-4-1">选项1</df-menu-item>\n          </df-submenu>\n        </df-submenu>\n        <df-menu-item index="2">\n          <i class="df-icon-menu"></i>\n          <span slot="title">导航二</span>\n        </df-menu-item>\n        <df-menu-item index="3" disabled>\n          <i class="df-icon-content"></i>\n          <span slot="title">导航三</span>\n        </df-menu-item>\n        <df-menu-item index="4">\n          <i class="df-icon-setting"></i>\n          <span slot="title">导航四</span>\n        </df-menu-item>\n      </df-menu>\n    </df-col>\n    <df-col :span="12">\n      <h5>自定义颜色</h5>\n      <df-menu\n        default-active="2"\n        class="df-menu-vertical-demo"\n        @open="handleOpen"\n        @close="handleClose"\n        background-color="#545c64"\n        text-color="#fff"\n        active-text-color="#ffd04b">\n        <df-submenu index="1">\n          <template slot="title">\n            <i class="df-icon-address"></i>\n            <span>导航一</span>\n          </template>\n          <df-menu-item-group>\n            <template slot="title">分组一</template>\n            <df-menu-item index="1-1">选项1</df-menu-item>\n            <df-menu-item index="1-2">选项2</df-menu-item>\n          </df-menu-item-group>\n          <df-menu-item-group title="分组2">\n            <df-menu-item index="1-3">选项3</df-menu-item>\n          </df-menu-item-group>\n          <df-submenu index="1-4">\n            <template slot="title">选项4</template>\n            <df-menu-item index="1-4-1">选项1</df-menu-item>\n          </df-submenu>\n        </df-submenu>\n        <df-menu-item index="2">\n          <i class="df-icon-menu"></i>\n          <span slot="title">导航二</span>\n        </df-menu-item>\n        <df-menu-item index="3" disabled>\n          <i class="df-icon-content"></i>\n          <span slot="title">导航三</span>\n        </df-menu-item>\n        <df-menu-item index="4">\n          <i class="df-icon-setting"></i>\n          <span slot="title">导航四</span>\n        </df-menu-item>\n      </df-menu>\n    </df-col>\n  </df-row>\n</template>\n\n<script>\n  export default {\n    methods: {\n      handleOpen(key, keyPath) {\n        console.log(key, keyPath);\n      },\n      handleClose(key, keyPath) {\n        console.log(key, keyPath);\n      }\n    }\n  }\n<\/script>\n')])])])],2),t._m(3),e("demo-block",[e("template",{slot:"source"},[e("df-demo2")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n  <div>\n    <df-radio-group v-model="isCollapse" style="margin-bottom: 20px;">\n      <df-radio-button :label="false">展开</df-radio-button>\n      <df-radio-button :label="true">收起</df-radio-button>\n    </df-radio-group>\n    <df-menu default-active="1-4-1" class="df-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">\n      <df-submenu index="1">\n        <template slot="title">\n          <i class="df-icon-address"></i>\n          <span slot="title">导航一</span>\n        </template>\n        <df-menu-item-group>\n          <span slot="title">分组一</span>\n          <df-menu-item index="1-1">选项1</df-menu-item>\n          <df-menu-item index="1-2">选项2</df-menu-item>\n        </df-menu-item-group>\n        <df-menu-item-group title="分组2">\n          <df-menu-item index="1-3">选项3</df-menu-item>\n        </df-menu-item-group>\n        <df-submenu index="1-4">\n          <span slot="title">选项4</span>\n          <df-menu-item index="1-4-1">选项1</df-menu-item>\n        </df-submenu>\n      </df-submenu>\n      <df-menu-item index="2">\n        <i class="df-icon-menu"></i>\n        <span slot="title">导航二</span>\n      </df-menu-item>\n      <df-menu-item index="3" disabled>\n        <i class="df-icon-content"></i>\n        <span slot="title">导航三</span>\n      </df-menu-item>\n      <df-menu-item index="4">\n        <i class="df-icon-setting"></i>\n        <span slot="title">导航四</span>\n      </df-menu-item>\n    </df-menu>\n  </div>\n</template>\n\n<style>\n  .df-menu-vertical-demo:not(.df-menu--collapse) {\n    width: 200px;\n    min-height: 400px;\n  }\n</style>\n\n<script>\n  export default {\n    data() {\n      return {\n        isCollapse: true\n      };\n    },\n    methods: {\n      handleOpen(key, keyPath) {\n        console.log(key, keyPath);\n      },\n      handleClose(key, keyPath) {\n        console.log(key, keyPath);\n      }\n    }\n  }\n<\/script>\n')])])])],2),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),t._m(14),t._m(15)],1)},i=[function(){var t=this,e=t._self._c;return e("h2",{attrs:{id:"navmenu-dao-hang-cai-dan"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#navmenu-dao-hang-cai-dan"}},[t._v("¶")]),t._v(" NavMenu 导航菜单")])},function(){var t=this,e=t._self._c;return e("h3",{attrs:{id:"ding-lan"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ding-lan"}},[t._v("¶")]),t._v(" 顶栏")])},function(){var t=this,e=t._self._c;return e("h3",{attrs:{id:"ce-lan"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ce-lan"}},[t._v("¶")]),t._v(" 侧栏")])},function(){var t=this,e=t._self._c;return e("h3",{attrs:{id:"zhe-die"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zhe-die"}},[t._v("¶")]),t._v(" 折叠")])},function(){var t=this,e=t._self._c;return e("h3",{attrs:{id:"menu-attribute"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#menu-attribute"}},[t._v("¶")]),t._v(" Menu Attribute")])},function(){var t=this,e=t._self._c;return e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("可选值")]),e("th",[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("mode")]),e("td",[t._v("模式")]),e("td",[t._v("string")]),e("td",[t._v("horizontal / vertical")]),e("td",[t._v("vertical")])]),e("tr",[e("td",[t._v("collapse")]),e("td",[t._v("是否水平折叠收起菜单（仅在 mode 为 vertical 时可用）")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("background-color")]),e("td",[t._v("菜单的背景色（仅支持 hex 格式）")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("#ffffff")])]),e("tr",[e("td",[t._v("text-color")]),e("td",[t._v("菜单的文字颜色（仅支持 hex 格式）")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("#303133")])]),e("tr",[e("td",[t._v("active-text-color")]),e("td",[t._v("当前激活菜单的文字颜色（仅支持 hex 格式）")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("#409EFF")])]),e("tr",[e("td",[t._v("default-active")]),e("td",[t._v("当前激活菜单的 index")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("default-openeds")]),e("td",[t._v("当前打开的 sub-menu 的 index 的数组")]),e("td",[t._v("Array")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("unique-opened")]),e("td",[t._v("是否只保持一个子菜单的展开")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("menu-trigger")]),e("td",[t._v("子菜单打开的触发方式(只在 mode 为 horizontal 时有效)")]),e("td",[t._v("string")]),e("td",[t._v("hover / click")]),e("td",[t._v("hover")])]),e("tr",[e("td",[t._v("router")]),e("td",[t._v("是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("collapse-transition")]),e("td",[t._v("是否开启折叠动画")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("true")])])])])},function(){var t=this,e=t._self._c;return e("h3",{attrs:{id:"menu-methods"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#menu-methods"}},[t._v("¶")]),t._v(" Menu Methods")])},function(){var t=this,e=t._self._c;return e("table",[e("thead",[e("tr",[e("th",[t._v("方法名称")]),e("th",[t._v("说明")]),e("th",[t._v("参数")])])]),e("tbody",[e("tr",[e("td",[t._v("open")]),e("td",[t._v("展开指定的 sub-menu")]),e("td",[t._v("index: 需要打开的 sub-menu 的 index")])]),e("tr",[e("td",[t._v("close")]),e("td",[t._v("收起指定的 sub-menu")]),e("td",[t._v("index: 需要收起的 sub-menu 的 index")])])])])},function(){var t=this,e=t._self._c;return e("h3",{attrs:{id:"menu-events"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#menu-events"}},[t._v("¶")]),t._v(" Menu Events")])},function(){var t=this,e=t._self._c;return e("table",[e("thead",[e("tr",[e("th",[t._v("事件名称")]),e("th",[t._v("说明")]),e("th",[t._v("回调参数")])])]),e("tbody",[e("tr",[e("td",[t._v("select")]),e("td",[t._v("菜单激活回调")]),e("td",[t._v("index: 选中菜单项的 index, indexPath: 选中菜单项的 index path")])]),e("tr",[e("td",[t._v("open")]),e("td",[t._v("sub-menu 展开的回调")]),e("td",[t._v("index: 打开的 sub-menu 的 index， indexPath: 打开的 sub-menu 的 index path")])]),e("tr",[e("td",[t._v("close")]),e("td",[t._v("sub-menu 收起的回调")]),e("td",[t._v("index: 收起的 sub-menu 的 index， indexPath: 收起的 sub-menu 的 index path")])])])])},function(){var t=this,e=t._self._c;return e("h3",{attrs:{id:"submenu-attribute"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#submenu-attribute"}},[t._v("¶")]),t._v(" SubMenu Attribute")])},function(){var t=this,e=t._self._c;return e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("可选值")]),e("th",[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("index")]),e("td",[t._v("唯一标志")]),e("td",[t._v("string/null")]),e("td",[t._v("—")]),e("td",[t._v("null")])]),e("tr",[e("td",[t._v("popper-class")]),e("td",[t._v("弹出菜单的自定义类名")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("show-timeout")]),e("td",[t._v("展开 sub-menu 的延时")]),e("td",[t._v("number")]),e("td",[t._v("—")]),e("td",[t._v("300")])]),e("tr",[e("td",[t._v("hide-timeout")]),e("td",[t._v("收起 sub-menu 的延时")]),e("td",[t._v("number")]),e("td",[t._v("—")]),e("td",[t._v("300")])]),e("tr",[e("td",[t._v("disabled")]),e("td",[t._v("是否禁用")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("popper-append-to-body")]),e("td",[t._v("是否将弹出菜单插入至 body 元素。在菜单的定位出现问题时，可尝试修改该属性")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("一级子菜单：true / 非一级子菜单：false")])])])])},function(){var t=this,e=t._self._c;return e("h3",{attrs:{id:"menu-item-attribute"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#menu-item-attribute"}},[t._v("¶")]),t._v(" Menu-Item Attribute")])},function(){var t=this,e=t._self._c;return e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("可选值")]),e("th",[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("index")]),e("td",[t._v("唯一标志")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("route")]),e("td",[t._v("Vue Router 路径对象")]),e("td",[t._v("Object")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("disabled")]),e("td",[t._v("是否禁用")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("false")])])])])},function(){var t=this,e=t._self._c;return e("h3",{attrs:{id:"menu-group-attribute"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#menu-group-attribute"}},[t._v("¶")]),t._v(" Menu-Group Attribute")])},function(){var t=this,e=t._self._c;return e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("可选值")]),e("th",[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("title")]),e("td",[t._v("分组标题")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("—")])])])])}],s=n("5530"),a={name:"component-doc",components:{"df-demo0":function(){var t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[[n("div",[n("df-menu",{staticClass:"df-menu-demo",attrs:{"default-active":t.activeIndex,mode:"horizontal"},on:{select:t.handleSelect}},[n("df-menu-item",{attrs:{index:"1"}},[t._v("处理中心")]),t._v(" "),n("df-submenu",{attrs:{index:"2"}},[n("template",{slot:"title"},[t._v("我的工作台")]),t._v(" "),n("df-menu-item",{attrs:{index:"2-1"}},[t._v("选项1")]),t._v(" "),n("df-menu-item",{attrs:{index:"2-2"}},[t._v("选项2")]),t._v(" "),n("df-menu-item",{attrs:{index:"2-3"}},[t._v("选项3")]),t._v(" "),n("df-submenu",{attrs:{index:"2-4"}},[n("template",{slot:"title"},[t._v("选项4")]),t._v(" "),n("df-menu-item",{attrs:{index:"2-4-1"}},[t._v("选项1")]),t._v(" "),n("df-menu-item",{attrs:{index:"2-4-2"}},[t._v("选项2")]),t._v(" "),n("df-menu-item",{attrs:{index:"2-4-3"}},[t._v("选项3")])],2)],2),t._v(" "),n("df-menu-item",{attrs:{index:"3",disabled:""}},[t._v("消息中心")]),t._v(" "),n("df-menu-item",{attrs:{index:"4"}},[n("a",{attrs:{href:"https://www.ele.me",target:"_blank"}},[t._v("订单管理")])])],1),t._v(" "),n("div",{staticClass:"line"}),t._v(" "),n("df-menu",{staticClass:"df-menu-demo",attrs:{"default-active":t.activeIndex2,mode:"horizontal","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"},on:{select:t.handleSelect}},[n("df-menu-item",{attrs:{index:"1"}},[t._v("处理中心")]),t._v(" "),n("df-submenu",{attrs:{index:"2"}},[n("template",{slot:"title"},[t._v("我的工作台")]),t._v(" "),n("df-menu-item",{attrs:{index:"2-1"}},[t._v("选项1")]),t._v(" "),n("df-menu-item",{attrs:{index:"2-2"}},[t._v("选项2")]),t._v(" "),n("df-menu-item",{attrs:{index:"2-3"}},[t._v("选项3")]),t._v(" "),n("df-submenu",{attrs:{index:"2-4"}},[n("template",{slot:"title"},[t._v("选项4")]),t._v(" "),n("df-menu-item",{attrs:{index:"2-4-1"}},[t._v("选项1")]),t._v(" "),n("df-menu-item",{attrs:{index:"2-4-2"}},[t._v("选项2")]),t._v(" "),n("df-menu-item",{attrs:{index:"2-4-3"}},[t._v("选项3")])],2)],2),t._v(" "),n("df-menu-item",{attrs:{index:"3",disabled:""}},[t._v("消息中心")]),t._v(" "),n("df-menu-item",{attrs:{index:"4"}},[n("a",{attrs:{href:"https://www.ele.me",target:"_blank"}},[t._v("订单管理")])])],1)],1)]],2)},e=[],n={data:function(){return{activeIndex:"1",activeIndex2:"1"}},methods:{handleSelect:function(t,e){console.log(t,e)}}};return Object(s["a"])({render:t,staticRenderFns:e},n)}(),"df-demo1":function(){var t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[[n("df-row",{staticClass:"tac"},[n("df-col",{attrs:{span:12}},[n("h5",[t._v("默认颜色")]),t._v(" "),n("df-menu",{staticClass:"df-menu-vertical-demo",attrs:{"default-active":"2"},on:{open:t.handleOpen,close:t.handleClose}},[n("df-submenu",{attrs:{index:"1"}},[n("template",{slot:"title"},[n("i",{staticClass:"df-icon-address"}),t._v(" "),n("span",[t._v("导航一")])]),t._v(" "),n("df-menu-item-group",[n("template",{slot:"title"},[t._v("分组一")]),t._v(" "),n("df-menu-item",{attrs:{index:"1-1"}},[t._v("选项1")]),t._v(" "),n("df-menu-item",{attrs:{index:"1-2"}},[t._v("选项2")])],2),t._v(" "),n("df-menu-item-group",{attrs:{title:"分组2"}},[n("df-menu-item",{attrs:{index:"1-3"}},[t._v("选项3")])],1),t._v(" "),n("df-submenu",{attrs:{index:"1-4"}},[n("template",{slot:"title"},[t._v("选项4")]),t._v(" "),n("df-menu-item",{attrs:{index:"1-4-1"}},[t._v("选项1")])],2)],2),t._v(" "),n("df-menu-item",{attrs:{index:"2"}},[n("i",{staticClass:"df-icon-menu"}),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("导航二")])]),t._v(" "),n("df-menu-item",{attrs:{index:"3",disabled:""}},[n("i",{staticClass:"df-icon-content"}),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("导航三")])]),t._v(" "),n("df-menu-item",{attrs:{index:"4"}},[n("i",{staticClass:"df-icon-setting"}),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("导航四")])])],1)],1),t._v(" "),n("df-col",{attrs:{span:12}},[n("h5",[t._v("自定义颜色")]),t._v(" "),n("df-menu",{staticClass:"df-menu-vertical-demo",attrs:{"default-active":"2","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"},on:{open:t.handleOpen,close:t.handleClose}},[n("df-submenu",{attrs:{index:"1"}},[n("template",{slot:"title"},[n("i",{staticClass:"df-icon-address"}),t._v(" "),n("span",[t._v("导航一")])]),t._v(" "),n("df-menu-item-group",[n("template",{slot:"title"},[t._v("分组一")]),t._v(" "),n("df-menu-item",{attrs:{index:"1-1"}},[t._v("选项1")]),t._v(" "),n("df-menu-item",{attrs:{index:"1-2"}},[t._v("选项2")])],2),t._v(" "),n("df-menu-item-group",{attrs:{title:"分组2"}},[n("df-menu-item",{attrs:{index:"1-3"}},[t._v("选项3")])],1),t._v(" "),n("df-submenu",{attrs:{index:"1-4"}},[n("template",{slot:"title"},[t._v("选项4")]),t._v(" "),n("df-menu-item",{attrs:{index:"1-4-1"}},[t._v("选项1")])],2)],2),t._v(" "),n("df-menu-item",{attrs:{index:"2"}},[n("i",{staticClass:"df-icon-menu"}),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("导航二")])]),t._v(" "),n("df-menu-item",{attrs:{index:"3",disabled:""}},[n("i",{staticClass:"df-icon-content"}),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("导航三")])]),t._v(" "),n("df-menu-item",{attrs:{index:"4"}},[n("i",{staticClass:"df-icon-setting"}),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("导航四")])])],1)],1)],1)]],2)},e=[],n={methods:{handleOpen:function(t,e){console.log(t,e)},handleClose:function(t,e){console.log(t,e)}}};return Object(s["a"])({render:t,staticRenderFns:e},n)}(),"df-demo2":function(){var t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[[n("div",[n("df-radio-group",{staticStyle:{"margin-bottom":"20px"},model:{value:t.isCollapse,callback:function(e){t.isCollapse=e},expression:"isCollapse"}},[n("df-radio-button",{attrs:{label:!1}},[t._v("展开")]),t._v(" "),n("df-radio-button",{attrs:{label:!0}},[t._v("收起")])],1),t._v(" "),n("df-menu",{staticClass:"df-menu-vertical-demo",attrs:{"default-active":"1-4-1",collapse:t.isCollapse},on:{open:t.handleOpen,close:t.handleClose}},[n("df-submenu",{attrs:{index:"1"}},[n("template",{slot:"title"},[n("i",{staticClass:"df-icon-address"}),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("导航一")])]),t._v(" "),n("df-menu-item-group",[n("span",{attrs:{slot:"title"},slot:"title"},[t._v("分组一")]),t._v(" "),n("df-menu-item",{attrs:{index:"1-1"}},[t._v("选项1")]),t._v(" "),n("df-menu-item",{attrs:{index:"1-2"}},[t._v("选项2")])],1),t._v(" "),n("df-menu-item-group",{attrs:{title:"分组2"}},[n("df-menu-item",{attrs:{index:"1-3"}},[t._v("选项3")])],1),t._v(" "),n("df-submenu",{attrs:{index:"1-4"}},[n("span",{attrs:{slot:"title"},slot:"title"},[t._v("选项4")]),t._v(" "),n("df-menu-item",{attrs:{index:"1-4-1"}},[t._v("选项1")])],1)],2),t._v(" "),n("df-menu-item",{attrs:{index:"2"}},[n("i",{staticClass:"df-icon-menu"}),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("导航二")])]),t._v(" "),n("df-menu-item",{attrs:{index:"3",disabled:""}},[n("i",{staticClass:"df-icon-content"}),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("导航三")])]),t._v(" "),n("df-menu-item",{attrs:{index:"4"}},[n("i",{staticClass:"df-icon-setting"}),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("导航四")])])],1)],1)]],2)},e=[],n={data:function(){return{isCollapse:!0}},methods:{handleOpen:function(t,e){console.log(t,e)},handleClose:function(t,e){console.log(t,e)}}};return Object(s["a"])({render:t,staticRenderFns:e},n)}()}},l=a,m=n("2877"),u=Object(m["a"])(l,d,i,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d20957f.a32b5fdc.js.map