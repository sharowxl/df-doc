(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c26d9"],{"49ec":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t._self._c;return e("section",{staticClass:"content df-doc"},[t._m(0),e("p",[t._v("df-layout 是 DF-UI 组件库中的一个用于快速进行典型页面布局的一个组件，在大多数页面布局情况中，都可以使用此组件满足页面布局的需求。")]),t._m(1),e("p",[t._v("上中下结构布局")]),e("demo-block",[e("div",[e("p",[t._v('通过slot="header" 布局顶部 通过slot.default 布局中间 可以通过 headerHeight 设置头部高度 默认为search-bar的高度')])]),e("template",{slot:"source"},[e("df-demo0")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<div class="default-layout">\n  <df-layout>\n    <df-search-bar slot=\'header\' :model="ruleForm">\n      <template>\n        <df-search-bar-item label="活动名称" prop="name" inputWidth="200px">\n          <df-input v-model="ruleForm.name"></df-input>\n        </df-search-bar-item>\n        <template slot="buttons">\n          <df-button type="success">插槽按钮</df-button>\n          <df-button type="success">插槽按钮</df-button>\n        </template>\n      </template>\n    </df-search-bar>\n    <df-x-table\n      :data="tableData"\n      :page-sizes="[5, 10, 20, 50, 100, 200, 300, 400]"\n      :page-size="20"\n      :layout="\'total, sizes, prev, pager, next, jumper\'"\n      :total="400"\n    >\n      <template slot="header">\n          <df-button type="success">\n            <i class="df-icon-add-circle"></i>\n            开单\n          </df-button>\n          <df-button plain>打印</df-button>\n          <df-button plain icon="df-icon-refresh"></df-button>\n      </template>\n      <df-table-column prop="index" label="序号" width="50" />\n      <df-table-column prop="date" label="日期" width="150" />\n      <df-table-column prop="name" label="姓名" width="150" />\n      <df-table-column prop="gender" label="性别" width="150" />\n      <df-table-column prop="address" label="地址" />\n    </df-x-table>\n  </df-layout>\n</div>\n\n<script>\nexport default {\n  data () {\n    return {\n      ruleForm: {\n        name: \'\'\n      },\n      tableData: new Array(10)\n        .fill(0)\n        .map((item, index) => ({\n          index: index + 1,\n          date: \'2016-05-03\',\n          name: \'李时珍\',\n          gender: \'女\',\n          address: \'四川省武当山普陀区金沙江路 1518 弄\'\n        }))\n    }\n  }\n}\n<\/script>\n')])])])],2),t._m(2),e("p",[t._v("左右结构布局")]),e("demo-block",[e("div",[e("p",[t._v('通过slot="left" 布局左侧 通过slot.default 布局中间 通过slot="right" 布局右侧 可以通过left right设置左右占据的栅格大小 可以通过gutter设置间隔值 left right默认值为6 gutter默认为4')])]),e("template",{slot:"source"},[e("df-demo1")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<div class="default-layout">\n  <df-layout>\n    <div slot=\'left\' class=\'layout-left\'>\n      left\n    </div>\n    <df-x-table\n      :data="tableData"\n      :page-sizes="[5, 10, 20, 50, 100, 200, 300, 400]"\n      :page-size="20"\n      :layout="\'sizes, prev, pager, next, jumper\'"\n      :total="400"\n    >\n      <df-table-column prop="index" label="序号" width="50" />\n      <df-table-column prop="date" label="日期" width="150" />\n      <df-table-column prop="name" label="姓名" width="150" />\n      <df-table-column prop="address" label="地址" />\n    </df-x-table>\n  </df-layout>\n</div>\n<div style="backgroud: #fff; height: 40px"></div>\n<div class="default-layout">\n  <df-layout>\n    <div slot=\'left\' class=\'layout-left\'>\n      left\n    </div>\n    <df-x-table\n      :data="tableData"\n      :page-sizes="[5, 10, 20, 50, 100, 200, 300, 400]"\n      :page-size="20"\n      :layout="\'sizes, pager\'"\n      :total="400"\n    >\n      <df-table-column prop="index" label="序号" width="50" />\n      <df-table-column prop="name" label="姓名" width="80" />\n      <df-table-column prop="address" label="地址" />\n    </df-x-table>\n    <div slot=\'right\' class=\'layout-right\'>\n      right\n    </div>\n  </df-layout>\n</div>\n<div style="backgroud: #fff; height: 40px"></div>\n<div class="default-layout">\n  <df-layout>\n    <df-x-table\n      :data="tableData"\n      :page-sizes="[5, 10, 20, 50, 100, 200, 300, 400]"\n      :page-size="20"\n      :layout="\'sizes, prev, pager, next, jumper\'"\n      :total="400"\n    >\n      <df-table-column prop="index" label="序号" width="50" />\n      <df-table-column prop="date" label="日期" width="150" />\n      <df-table-column prop="name" label="姓名" width="150" />\n      <df-table-column prop="address" label="地址" />\n    </df-x-table>\n    <div slot=\'right\' class=\'layout-right\'>\n      right\n    </div>\n  </df-layout>\n</div>\n\n<script>\nexport default {\n  data () {\n    return {\n      ruleForm: {\n        name: \'\'\n      },\n      tableData: new Array(10)\n        .fill(0)\n        .map((item, index) => ({\n          index: index + 1,\n          date: \'2016-05-03\',\n          name: \'李时珍\',\n          gender: \'女\',\n          address: \'四川省武当山普陀区金沙江路 1518 弄\'\n        }))\n    }\n  }\n}\n<\/script>\n')])])])],2),t._m(3),e("p",[t._v("左右结构布局")]),e("demo-block",[e("div",[e("p",[t._v("配置"),e("code",[t._v("use-division")]),t._v('即可使用模块分隔类型的左右结构，通过slot="left" 布局左侧 通过slot.default 布局中间 通过slot="right" 布局右侧 可以通过left right设置左右占据的栅格大小 可以通过gutter设置间隔值 left right默认值为6 gutter默认为4')])]),e("template",{slot:"source"},[e("df-demo2")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n  <div class="default-layout">\n    <df-layout use-division>\n      <div slot=\'left\' class=\'layout-left\'>\n        left\n      </div>\n      <df-x-table\n        :data="tableData"\n        :page-sizes="[5, 10, 20, 50, 100, 200, 300, 400]"\n        :page-size="20"\n        :layout="\'sizes, pager\'"\n        :total="400"\n      >\n        <df-table-column prop="index" label="序号" width="50" />\n        <df-table-column prop="name" label="姓名" width="80" />\n        <df-table-column prop="address" label="地址" />\n      </df-x-table>\n      <div slot=\'right\' class=\'layout-right\'>\n        right\n      </div>\n    </df-layout>\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      ruleForm: {\n        name: \'\'\n      },\n      tableData: new Array(10)\n        .fill(0)\n        .map((item, index) => ({\n          index: index + 1,\n          date: \'2016-05-03\',\n          name: \'李时珍\',\n          gender: \'女\',\n          address: \'四川省武当山普陀区金沙江路 1518 弄\'\n        }))\n    }\n  }\n}\n<\/script>\n')])])])],2),t._m(4),e("p",[t._v("上下左右结构布局")]),e("demo-block",[e("div",[e("p",[t._v("左右上下结构布局")])]),e("template",{slot:"source"},[e("df-demo3")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<div class="default-layout">\n  <df-layout>\n    <df-search-bar slot=\'header\' :model="ruleForm">\n      <template>\n        <df-search-bar-item label="活动名称" prop="name" inputWidth="200px">\n          <df-input v-model="ruleForm.name"></df-input>\n        </df-search-bar-item>\n      </template>\n    </df-search-bar>\n    <div slot=\'left\' class=\'layout-left\'>\n      left\n    </div>\n    <df-x-table\n      :data="tableData"\n      :page-sizes="[5, 10, 20, 50, 100, 200, 300, 400]"\n      :page-size="20"\n      :layout="\'sizes, prev, pager, next, jumper\'"\n      :total="400"\n    >\n      <df-table-column prop="index" label="序号" width="50" />\n      <df-table-column prop="date" label="日期" width="150" />\n      <df-table-column prop="name" label="姓名" width="150" />\n      <df-table-column prop="address" label="地址" />\n    </df-x-table>\n  </df-layout>\n</div>\n\n<script>\nexport default {\n  data () {\n    return {\n      ruleForm: {\n        name: \'\'\n      },\n      tableData: new Array(10)\n        .fill(0)\n        .map((item, index) => ({\n          index: index + 1,\n          date: \'2016-05-03\',\n          name: \'李时珍\',\n          gender: \'女\',\n          address: \'四川省武当山普陀区金沙江路 1518 弄\'\n        }))\n    }\n  }\n}\n<\/script>\n')])])])],2),t._m(5),e("p",[t._v("混合嵌套使用，生成更丰富的布局。")]),e("demo-block",[e("div",[e("p",[t._v("混合嵌套使用 layout 时，作为子元素被使用的 layout 需要配置 use-as-children 属性，以防止其默认的边距对周围元素产生影响")])]),e("template",{slot:"source"},[e("df-demo4")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<div class="default-layout">\n  <df-layout>\n    <div slot=\'left\' class=\'layout-left\'>\n      left\n    </div>\n    <df-layout use-as-children>\n      <df-search-bar slot=\'header\' :model="ruleForm">\n        <template>\n          <df-search-bar-item label="活动名称" prop="name" inputWidth="200px">\n            <df-input v-model="ruleForm.name"></df-input>\n          </df-search-bar-item>\n        </template>\n      </df-search-bar>\n    <df-x-table\n      :data="tableData"\n      :page-sizes="[5, 10, 20, 50, 100, 200, 300, 400]"\n      :page-size="20"\n      :layout="\'sizes, prev, pager, next, jumper\'"\n      :total="400"\n    >\n      <df-table-column prop="index" label="序号" width="50" />\n      <df-table-column prop="date" label="日期" width="150" />\n      <df-table-column prop="name" label="姓名" width="150" />\n      <df-table-column prop="address" label="地址" />\n    </df-x-table>\n    </df-layout>\n  </df-layout>\n</div>\n\n<script>\nexport default {\n  data () {\n    return {\n      ruleForm: {\n        name: \'\'\n      },\n      tableData: new Array(10)\n        .fill(0)\n        .map((item, index) => ({\n          index: index + 1,\n          date: \'2016-05-03\',\n          name: \'李时珍\',\n          gender: \'女\',\n          address: \'四川省武当山普陀区金沙江路 1518 弄\'\n        }))\n    }\n  }\n}\n<\/script>\n')])])])],2),t._m(6),e("p",[t._v("制作一个上下左右结构里面再嵌套一个上下结构的布局")]),e("demo-block",[e("div",[e("p",[t._v("混合嵌套使用 layout 时，作为子元素被使用的 layout 需要配置 use-as-children 属性，以防止其默认的边距对周围元素产生影响")])]),e("template",{slot:"source"},[e("df-demo5")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<div class="default-layout">\n  <df-layout>\n    <df-search-bar slot=\'header\' :model="ruleForm">\n      <template>\n        <df-search-bar-item label="活动名称" prop="name" inputWidth="200px">\n          <df-input v-model="ruleForm.name"></df-input>\n        </df-search-bar-item>\n      </template>\n    </df-search-bar>\n    <div slot=\'left\' class=\'layout-left\'>\n      left\n    </div>\n    <df-layout headerHeight="50%" use-as-children>\n      <df-table\n        slot="header"\n        height="100%"\n        :data="tableData">\n        <df-table-column prop="index" label="序号" width="50" />\n        <df-table-column prop="date" label="日期" width="150" />\n        <df-table-column prop="name" label="姓名" width="150" />\n        <df-table-column prop="address" label="地址" />\n      </df-table>\n      <df-x-table\n        :data="tableData"\n        :page-sizes="[5, 10, 20, 50, 100, 200, 300, 400]"\n        :page-size="20"\n        :layout="\'sizes, prev, pager, next, jumper\'"\n        :total="400"\n      >\n        <df-table-column prop="index" label="序号" width="50" />\n        <df-table-column prop="date" label="日期" width="150" />\n        <df-table-column prop="name" label="姓名" width="150" />\n        <df-table-column prop="address" label="地址" />\n      </df-x-table>\n    </df-layout>\n  </df-layout>\n</div>\n\n<script>\nexport default {\n  data () {\n    return {\n      ruleForm: {\n        name: \'\'\n      },\n      tableData: new Array(10)\n        .fill(0)\n        .map((item, index) => ({\n          index: index + 1,\n          date: \'2016-05-03\',\n          name: \'李时珍\',\n          gender: \'女\',\n          address: \'四川省武当山普陀区金沙江路 1518 弄\'\n        }))\n    }\n  }\n}\n<\/script>\n')])])])],2),t._m(7),t._m(8),t._m(9),t._m(10)],1)},l=[function(){var t=this,e=t._self._c;return e("h2",{attrs:{id:"shi-yong-layout-zu-jian-jin-xing-dian-xing-ye-mian-de-bu-ju"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#shi-yong-layout-zu-jian-jin-xing-dian-xing-ye-mian-de-bu-ju"}},[t._v("¶")]),t._v(" 使用 Layout 组件进行典型页面的布局")])},function(){var t=this,e=t._self._c;return e("h3",{attrs:{id:"ji-chu-bu-ju"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ji-chu-bu-ju"}},[t._v("¶")]),t._v(" 基础布局")])},function(){var t=this,e=t._self._c;return e("h3",{attrs:{id:"zuo-you-bu-ju-zuo-you-zhi-jian-shu-xian-fen-ge"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zuo-you-bu-ju-zuo-you-zhi-jian-shu-xian-fen-ge"}},[t._v("¶")]),t._v(" 左右布局（左右之间竖线分隔）")])},function(){var t=this,e=t._self._c;return e("h3",{attrs:{id:"zuo-you-bu-ju-zuo-you-zhi-jian-mo-kuai-fen-ge"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zuo-you-bu-ju-zuo-you-zhi-jian-mo-kuai-fen-ge"}},[t._v("¶")]),t._v(" 左右布局（左右之间模块分隔）")])},function(){var t=this,e=t._self._c;return e("h3",{attrs:{id:"shang-xia-zuo-you-bu-ju"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#shang-xia-zuo-you-bu-ju"}},[t._v("¶")]),t._v(" 上下左右布局")])},function(){var t=this,e=t._self._c;return e("h3",{attrs:{id:"hun-he-qian-tao-shi-yong"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hun-he-qian-tao-shi-yong"}},[t._v("¶")]),t._v(" 混合嵌套使用")])},function(){var t=this,e=t._self._c;return e("h3",{attrs:{id:"fu-za-yong-fa"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fu-za-yong-fa"}},[t._v("¶")]),t._v(" 复杂用法")])},function(){var t=this,e=t._self._c;return e("h3",{attrs:{id:"row-attributes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#row-attributes"}},[t._v("¶")]),t._v(" Row Attributes")])},function(){var t=this,e=t._self._c;return e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("可选值")]),e("th",[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("gutter")]),e("td",[t._v("左右栅格间隔")]),e("td",[t._v("number")]),e("td",[t._v("—")]),e("td",[t._v("4")])]),e("tr",[e("td",[t._v("left")]),e("td",[t._v("左侧插槽占据列数")]),e("td",[t._v("number")]),e("td",[t._v("-")]),e("td",[t._v("6")])]),e("tr",[e("td",[t._v("right")]),e("td",[t._v("右侧插槽占据列数")]),e("td",[t._v("number")]),e("td",[t._v("-")]),e("td",[t._v("6")])]),e("tr",[e("td",[t._v("headerHeight")]),e("td",[t._v("自定义头部高度")]),e("td",[t._v("string/number")]),e("td",[t._v("*")]),e("td",[t._v("48")])]),e("tr",[e("td",[t._v("use-as-children")]),e("td",[t._v("嵌套使用 layout 组件时，作为子元素被使用的 layout 需要配置 use-as-children 属性，以防止其默认的边距对周围元素产生影响")]),e("td",[t._v("boolean")]),e("td",[t._v("-")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("use-division")]),e("td",[t._v("是否使用模块分隔式的左右结构")]),e("td",[t._v("boolean")]),e("td",[t._v("-")]),e("td",[t._v("false")])])])])},function(){var t=this,e=t._self._c;return e("h3",{attrs:{id:"scoped-slot"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#scoped-slot"}},[t._v("¶")]),t._v(" Scoped Slot")])},function(){var t=this,e=t._self._c;return e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),e("th",[t._v("说明")])])]),e("tbody",[e("tr",[e("td",[t._v("-")]),e("td",[t._v("中间")])]),e("tr",[e("td",[t._v("header")]),e("td",[t._v("顶部")])]),e("tr",[e("td",[t._v("left")]),e("td",[t._v("左侧")])]),e("tr",[e("td",[t._v("right")]),e("td",[t._v("右侧")])])])])}],r=a("5530"),d=(a("b0c0"),a("d81d"),a("cb29"),{name:"component-doc",components:{"df-demo0":function(){var t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"default-layout"},[a("df-layout",[a("df-search-bar",{attrs:{slot:"header",model:t.ruleForm},slot:"header"},[[a("df-search-bar-item",{attrs:{label:"活动名称",prop:"name",inputWidth:"200px"}},[a("df-input",{model:{value:t.ruleForm.name,callback:function(e){t.$set(t.ruleForm,"name",e)},expression:"ruleForm.name"}})],1),t._v(" "),a("template",{slot:"buttons"},[a("df-button",{attrs:{type:"success"}},[t._v("插槽按钮")]),t._v(" "),a("df-button",{attrs:{type:"success"}},[t._v("插槽按钮")])],1)]],2),t._v(" "),a("df-x-table",{attrs:{data:t.tableData,"page-sizes":[5,10,20,50,100,200,300,400],"page-size":20,layout:"total, sizes, prev, pager, next, jumper",total:400}},[a("template",{slot:"header"},[a("df-button",{attrs:{type:"success"}},[a("i",{staticClass:"df-icon-add-circle"}),t._v("\n            开单\n          ")]),t._v(" "),a("df-button",{attrs:{plain:""}},[t._v("打印")]),t._v(" "),a("df-button",{attrs:{plain:"",icon:"df-icon-refresh"}})],1),t._v(" "),a("df-table-column",{attrs:{prop:"index",label:"序号",width:"50"}}),t._v(" "),a("df-table-column",{attrs:{prop:"date",label:"日期",width:"150"}}),t._v(" "),a("df-table-column",{attrs:{prop:"name",label:"姓名",width:"150"}}),t._v(" "),a("df-table-column",{attrs:{prop:"gender",label:"性别",width:"150"}}),t._v(" "),a("df-table-column",{attrs:{prop:"address",label:"地址"}})],2)],1)],1)])},e=[],a={data:function(){return{ruleForm:{name:""},tableData:new Array(10).fill(0).map((function(t,e){return{index:e+1,date:"2016-05-03",name:"李时珍",gender:"女",address:"四川省武当山普陀区金沙江路 1518 弄"}}))}}};return Object(r["a"])({render:t,staticRenderFns:e},a)}(),"df-demo1":function(){var t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"default-layout"},[a("df-layout",[a("div",{staticClass:"layout-left",attrs:{slot:"left"},slot:"left"},[t._v("\n      left\n    ")]),t._v(" "),a("df-x-table",{attrs:{data:t.tableData,"page-sizes":[5,10,20,50,100,200,300,400],"page-size":20,layout:"sizes, prev, pager, next, jumper",total:400}},[a("df-table-column",{attrs:{prop:"index",label:"序号",width:"50"}}),t._v(" "),a("df-table-column",{attrs:{prop:"date",label:"日期",width:"150"}}),t._v(" "),a("df-table-column",{attrs:{prop:"name",label:"姓名",width:"150"}}),t._v(" "),a("df-table-column",{attrs:{prop:"address",label:"地址"}})],1)],1)],1),t._v(" "),a("div",{staticStyle:{backgroud:"#fff",height:"40px"}}),t._v(" "),a("div",{staticClass:"default-layout"},[a("df-layout",[a("div",{staticClass:"layout-left",attrs:{slot:"left"},slot:"left"},[t._v("\n      left\n    ")]),t._v(" "),a("df-x-table",{attrs:{data:t.tableData,"page-sizes":[5,10,20,50,100,200,300,400],"page-size":20,layout:"sizes, pager",total:400}},[a("df-table-column",{attrs:{prop:"index",label:"序号",width:"50"}}),t._v(" "),a("df-table-column",{attrs:{prop:"name",label:"姓名",width:"80"}}),t._v(" "),a("df-table-column",{attrs:{prop:"address",label:"地址"}})],1),t._v(" "),a("div",{staticClass:"layout-right",attrs:{slot:"right"},slot:"right"},[t._v("\n      right\n    ")])],1)],1),t._v(" "),a("div",{staticStyle:{backgroud:"#fff",height:"40px"}}),t._v(" "),a("div",{staticClass:"default-layout"},[a("df-layout",[a("df-x-table",{attrs:{data:t.tableData,"page-sizes":[5,10,20,50,100,200,300,400],"page-size":20,layout:"sizes, prev, pager, next, jumper",total:400}},[a("df-table-column",{attrs:{prop:"index",label:"序号",width:"50"}}),t._v(" "),a("df-table-column",{attrs:{prop:"date",label:"日期",width:"150"}}),t._v(" "),a("df-table-column",{attrs:{prop:"name",label:"姓名",width:"150"}}),t._v(" "),a("df-table-column",{attrs:{prop:"address",label:"地址"}})],1),t._v(" "),a("div",{staticClass:"layout-right",attrs:{slot:"right"},slot:"right"},[t._v("\n      right\n    ")])],1)],1)])},e=[],a={data:function(){return{ruleForm:{name:""},tableData:new Array(10).fill(0).map((function(t,e){return{index:e+1,date:"2016-05-03",name:"李时珍",gender:"女",address:"四川省武当山普陀区金沙江路 1518 弄"}}))}}};return Object(r["a"])({render:t,staticRenderFns:e},a)}(),"df-demo2":function(){var t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[[a("div",{staticClass:"default-layout"},[a("df-layout",{attrs:{"use-division":""}},[a("div",{staticClass:"layout-left",attrs:{slot:"left"},slot:"left"},[t._v("\n        left\n      ")]),t._v(" "),a("df-x-table",{attrs:{data:t.tableData,"page-sizes":[5,10,20,50,100,200,300,400],"page-size":20,layout:"sizes, pager",total:400}},[a("df-table-column",{attrs:{prop:"index",label:"序号",width:"50"}}),t._v(" "),a("df-table-column",{attrs:{prop:"name",label:"姓名",width:"80"}}),t._v(" "),a("df-table-column",{attrs:{prop:"address",label:"地址"}})],1),t._v(" "),a("div",{staticClass:"layout-right",attrs:{slot:"right"},slot:"right"},[t._v("\n        right\n      ")])],1)],1)]],2)},e=[],a={data:function(){return{ruleForm:{name:""},tableData:new Array(10).fill(0).map((function(t,e){return{index:e+1,date:"2016-05-03",name:"李时珍",gender:"女",address:"四川省武当山普陀区金沙江路 1518 弄"}}))}}};return Object(r["a"])({render:t,staticRenderFns:e},a)}(),"df-demo3":function(){var t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"default-layout"},[a("df-layout",[a("df-search-bar",{attrs:{slot:"header",model:t.ruleForm},slot:"header"},[[a("df-search-bar-item",{attrs:{label:"活动名称",prop:"name",inputWidth:"200px"}},[a("df-input",{model:{value:t.ruleForm.name,callback:function(e){t.$set(t.ruleForm,"name",e)},expression:"ruleForm.name"}})],1)]],2),t._v(" "),a("div",{staticClass:"layout-left",attrs:{slot:"left"},slot:"left"},[t._v("\n      left\n    ")]),t._v(" "),a("df-x-table",{attrs:{data:t.tableData,"page-sizes":[5,10,20,50,100,200,300,400],"page-size":20,layout:"sizes, prev, pager, next, jumper",total:400}},[a("df-table-column",{attrs:{prop:"index",label:"序号",width:"50"}}),t._v(" "),a("df-table-column",{attrs:{prop:"date",label:"日期",width:"150"}}),t._v(" "),a("df-table-column",{attrs:{prop:"name",label:"姓名",width:"150"}}),t._v(" "),a("df-table-column",{attrs:{prop:"address",label:"地址"}})],1)],1)],1)])},e=[],a={data:function(){return{ruleForm:{name:""},tableData:new Array(10).fill(0).map((function(t,e){return{index:e+1,date:"2016-05-03",name:"李时珍",gender:"女",address:"四川省武当山普陀区金沙江路 1518 弄"}}))}}};return Object(r["a"])({render:t,staticRenderFns:e},a)}(),"df-demo4":function(){var t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"default-layout"},[a("df-layout",[a("div",{staticClass:"layout-left",attrs:{slot:"left"},slot:"left"},[t._v("\n      left\n    ")]),t._v(" "),a("df-layout",{attrs:{"use-as-children":""}},[a("df-search-bar",{attrs:{slot:"header",model:t.ruleForm},slot:"header"},[[a("df-search-bar-item",{attrs:{label:"活动名称",prop:"name",inputWidth:"200px"}},[a("df-input",{model:{value:t.ruleForm.name,callback:function(e){t.$set(t.ruleForm,"name",e)},expression:"ruleForm.name"}})],1)]],2),t._v(" "),a("df-x-table",{attrs:{data:t.tableData,"page-sizes":[5,10,20,50,100,200,300,400],"page-size":20,layout:"sizes, prev, pager, next, jumper",total:400}},[a("df-table-column",{attrs:{prop:"index",label:"序号",width:"50"}}),t._v(" "),a("df-table-column",{attrs:{prop:"date",label:"日期",width:"150"}}),t._v(" "),a("df-table-column",{attrs:{prop:"name",label:"姓名",width:"150"}}),t._v(" "),a("df-table-column",{attrs:{prop:"address",label:"地址"}})],1)],1)],1)],1)])},e=[],a={data:function(){return{ruleForm:{name:""},tableData:new Array(10).fill(0).map((function(t,e){return{index:e+1,date:"2016-05-03",name:"李时珍",gender:"女",address:"四川省武当山普陀区金沙江路 1518 弄"}}))}}};return Object(r["a"])({render:t,staticRenderFns:e},a)}(),"df-demo5":function(){var t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"default-layout"},[a("df-layout",[a("df-search-bar",{attrs:{slot:"header",model:t.ruleForm},slot:"header"},[[a("df-search-bar-item",{attrs:{label:"活动名称",prop:"name",inputWidth:"200px"}},[a("df-input",{model:{value:t.ruleForm.name,callback:function(e){t.$set(t.ruleForm,"name",e)},expression:"ruleForm.name"}})],1)]],2),t._v(" "),a("div",{staticClass:"layout-left",attrs:{slot:"left"},slot:"left"},[t._v("\n      left\n    ")]),t._v(" "),a("df-layout",{attrs:{headerHeight:"50%","use-as-children":""}},[a("df-table",{attrs:{slot:"header",height:"100%",data:t.tableData},slot:"header"},[a("df-table-column",{attrs:{prop:"index",label:"序号",width:"50"}}),t._v(" "),a("df-table-column",{attrs:{prop:"date",label:"日期",width:"150"}}),t._v(" "),a("df-table-column",{attrs:{prop:"name",label:"姓名",width:"150"}}),t._v(" "),a("df-table-column",{attrs:{prop:"address",label:"地址"}})],1),t._v(" "),a("df-x-table",{attrs:{data:t.tableData,"page-sizes":[5,10,20,50,100,200,300,400],"page-size":20,layout:"sizes, prev, pager, next, jumper",total:400}},[a("df-table-column",{attrs:{prop:"index",label:"序号",width:"50"}}),t._v(" "),a("df-table-column",{attrs:{prop:"date",label:"日期",width:"150"}}),t._v(" "),a("df-table-column",{attrs:{prop:"name",label:"姓名",width:"150"}}),t._v(" "),a("df-table-column",{attrs:{prop:"address",label:"地址"}})],1)],1)],1)],1)])},e=[],a={data:function(){return{ruleForm:{name:""},tableData:new Array(10).fill(0).map((function(t,e){return{index:e+1,date:"2016-05-03",name:"李时珍",gender:"女",address:"四川省武当山普陀区金沙江路 1518 弄"}}))}}};return Object(r["a"])({render:t,staticRenderFns:e},a)}()}}),s=d,o=a("2877"),i=Object(o["a"])(s,n,l,!1,null,null,null);e["default"]=i.exports}}]);
//# sourceMappingURL=chunk-2d0c26d9.671593a1.js.map