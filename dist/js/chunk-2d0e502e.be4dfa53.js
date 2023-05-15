(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e502e"],{9353:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e._self._c;return t("section",{staticClass:"content df-doc"},[e._m(0),t("p",[e._v("由输入框、选择器、单选框、多选框等控件组成，用以条件查询")]),e._m(1),t("p",[e._v("简单的单条件查询。")]),t("demo-block",[t("div",[t("p",[e._v("在 SearchBar 组件中，每一个表单域由一个 SearchBarItem 组件构成，表单域中可以放置各种类型的表单控件，包括 Input、Select、Checkbox、Radio、Switch、DatePicker、TimePicker")])]),t("template",{slot:"source"},[t("df-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <df-search-bar\n    :model="ruleForm"\n    ref="ruleForm"\n    class="demo-ruleForm"\n    @submit="search"\n  >\n    <template>\n      <df-search-bar-item label="活动名称" prop="name" inputWidth="200px">\n        <df-input v-model="ruleForm.name"></df-input>\n      </df-search-bar-item>\n    </template>\n  </df-search-bar>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        ruleForm: {\n          name: \'\'\n        }\n      };\n    },\n    methods: {\n      search(){\n        console.log(\'search\')\n      }\n    }\n  }\n<\/script>\n')])])])],2),e._m(2),t("p",[e._v("包括各种查询类型项，比如输入框、选择器、开关、单选框、多选框等，如果条件很多时，你可能需要重置按钮，配置 props.showResetButton = true 即可，注意要想使用重置按钮的内置重置功能，你必须要为 search-bar-item 传入 prop 参数，或者你也可以使用 reset 按钮传回的回调函数 @reset，来调用自己的重置方法。")]),t("demo-block",[t("div",[t("p",[e._v("在 SearchBar 组件中，放置各种类型的表单控件，以实现多条件查询。")])]),t("template",{slot:"source"},[t("df-demo1")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <df-search-bar\n    :model="ruleForm"\n    ref="ruleForm"\n    class="demo-ruleForm"\n    showResetButton\n    @submit="search"\n    @reset="reset"\n  >\n    <template>\n      <df-search-bar-item label="活动名称" prop="name">\n        <df-input v-model="ruleForm.name"></df-input>\n      </df-search-bar-item>\n      <df-search-bar-item label="活动区域" prop="region" inputWidth="150px">\n        <df-select v-model="ruleForm.region" placeholder="请选择活动区域" style="width: 100%;">\n          <df-option label="区域一" value="shanghai"></df-option>\n          <df-option label="区域二" value="beijing"></df-option>\n        </df-select>\n      </df-search-bar-item>\n    </template>\n  </df-search-bar>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        ruleForm: {\n          name: \'\',\n          region: \'\'\n        },\n      };\n    },\n    methods: {\n      search(){\n        console.log(\'search\')\n      },\n      reset () {\n        console.log(\'reset\')\n      }\n    }\n  }\n<\/script>\n')])])])],2),e._m(3),t("p",[e._v("当查询条件非常多时，可以隐藏一部分不重要的查询条件。")]),t("demo-block",[t("div",[t("p",[e._v("配置 collapse 属性，即可开启隐藏/展开的切换功能，被隐藏的 SearchItem 需要放置在名为 collapse 的具名插槽中")])]),t("template",{slot:"source"},[t("df-demo2")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <df-search-bar\n    :model="ruleForm"\n    ref="ruleForm"\n    class="demo-ruleForm"\n    collapse\n    showResetButton\n    @submit="search"\n  >\n    <template>\n      <df-search-bar-item label="活动名称" prop="name">\n        <df-input v-model="ruleForm.name"></df-input>\n      </df-search-bar-item>\n      <df-search-bar-item label="活动区域" prop="region" inputWidth="150px">\n        <df-select v-model="ruleForm.region" placeholder="请选择活动区域" style="width: 100%;">\n          <df-option label="区域一" value="shanghai"></df-option>\n          <df-option label="区域二" value="beijing"></df-option>\n        </df-select>\n      </df-search-bar-item>\n    </template>\n    <template slot="collapse">\n      <df-search-bar-item label="活动时间">\n        <df-search-bar-item prop="date">\n          <df-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date" style="width: 100%;"></df-date-picker>\n        </df-search-bar-item>\n      </df-search-bar-item>\n      <df-search-bar-item label="即时配送" prop="delivery">\n        <df-switch v-model="ruleForm.delivery"></df-switch>\n      </df-search-bar-item>\n      <df-search-bar-item label="活动性质" prop="type" inputWidth="auto">\n        <df-checkbox-group v-model="ruleForm.type">\n        <df-checkbox label="美食/餐厅线上活动" name="type"></df-checkbox>\n        <df-checkbox label="地推活动" name="type"></df-checkbox>\n        <df-checkbox label="线下主题活动" name="type"></df-checkbox>\n        <df-checkbox label="单纯品牌曝光" name="type"></df-checkbox>\n        </df-checkbox-group>\n      </df-search-bar-item>\n      <df-search-bar-item label="特殊资源" prop="resource" inputWidth="auto">\n        <df-radio-group v-model="ruleForm.resource">\n          <df-radio label="线上品牌"></df-radio>\n          <df-radio label="线下场地"></df-radio>\n        </df-radio-group>\n      </df-search-bar-item>\n      <df-search-bar-item label="活动地址" prop="address" inputWidth="260px">\n        <df-input v-model="ruleForm.address"></df-input>\n      </df-search-bar-item>\n    </template>\n  </df-search-bar>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        ruleForm: {\n          name: \'\',\n          region: \'\',\n          date: \'\',\n          delivery: false,\n          type: [],\n          resource: \'\',\n          address: \'\'\n        }\n      };\n    },\n    methods: {\n      search(){\n        console.log(\'search\')\n      }\n    }\n  }\n<\/script>\n')])])])],2),e._m(4),t("p",[e._v("在防止用户犯错的前提下，尽可能让用户更早地发现并纠正错误，避免因为输入错误而引起的查询失败。")]),t("demo-block",[t("div",[t("p",[e._v("SearchBar 组件提供了查询条件验证的功能，只需要通过 "),t("code",[e._v("rules")]),e._v(" 属性传入约定的验证规则即可。校验规则参见 "),t("a",{attrs:{href:"https://github.com/yiminghe/async-validator"}},[e._v("async-validator")])])]),t("template",{slot:"source"},[t("df-demo3")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <df-search-bar\n    :model="ruleForm"\n    :rules="rules"\n    ref="ruleForm"\n    class="demo-ruleForm"\n    collapse\n    showResetButton\n    @submit="search"\n  >\n    <template>\n      <df-search-bar-item label="活动名称" prop="name" tip-down>\n        <df-input v-model="ruleForm.name"></df-input>\n      </df-search-bar-item>\n      <df-search-bar-item label="活动区域" prop="region" inputWidth="150px">\n        <df-select v-model="ruleForm.region" placeholder="请选择活动区域" style="width: 100%;">\n          <df-option label="区域一" value="shanghai"></df-option>\n          <df-option label="区域二" value="beijing"></df-option>\n        </df-select>\n      </df-search-bar-item>\n    </template>\n    <template slot="collapse">\n      <df-search-bar-item label="活动时间" required>\n        <df-search-bar-item prop="date1">\n          <df-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></df-date-picker>\n        </df-search-bar-item>\n      </df-search-bar-item>\n      <df-search-bar-item label="即时配送" prop="delivery">\n        <df-switch v-model="ruleForm.delivery"></df-switch>\n      </df-search-bar-item>\n      <df-search-bar-item label="活动性质" prop="type" inputWidth="auto">\n        <df-checkbox-group v-model="ruleForm.type">\n        <df-checkbox label="美食/餐厅线上活动" name="type"></df-checkbox>\n        <df-checkbox label="地推活动" name="type"></df-checkbox>\n        <df-checkbox label="线下主题活动" name="type"></df-checkbox>\n        <df-checkbox label="单纯品牌曝光" name="type"></df-checkbox>\n        </df-checkbox-group>\n      </df-search-bar-item>\n      <df-search-bar-item label="特殊资源" prop="resource" inputWidth="auto" tip-down>\n        <df-radio-group v-model="ruleForm.resource">\n          <df-radio label="线上品牌"></df-radio>\n          <df-radio label="线下场地"></df-radio>\n        </df-radio-group>\n      </df-search-bar-item>\n      <df-search-bar-item label="活动地址" prop="address" inputWidth="260px">\n        <df-input v-model="ruleForm.address"></df-input>\n      </df-search-bar-item>\n    </template>\n  </df-search-bar>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        ruleForm: {\n          name: \'\',\n          region: \'\',\n          date1: \'\',\n          date2: \'\',\n          delivery: false,\n          type: [],\n          resource: \'\',\n          address: \'\'\n        },\n        rules: {\n          name: [\n            { required: true, message: \'请输入活动名称\', trigger: \'blur\' },\n            { min: 3, max: 5, message: \'长度在 3 到 5 个字符\', trigger: \'blur\' }\n          ],\n          region: [\n            { required: true, message: \'请选择活动区域\', trigger: \'change\' }\n          ],\n          date1: [\n            { type: \'date\', required: true, message: \'请选择日期\', trigger: \'change\' }\n          ],\n          date2: [\n            { type: \'date\', required: true, message: \'请选择时间\', trigger: \'change\' }\n          ],\n          type: [\n            { type: \'array\', required: true, message: \'请至少选择一个活动性质\', trigger: \'change\' }\n          ],\n          resource: [\n            { required: true, message: \'请选择活动资源\', trigger: \'change\' }\n          ],\n          address: [\n            { required: true, message: \'请填写活动地址\', trigger: \'blur\' }\n          ]\n        }\n      };\n    },\n    methods: {\n      search(){\n        console.log(\'search\')\n      }\n    }\n  }\n<\/script>\n')])])])],2),e._m(5),t("p",[e._v("组件内部提供了按钮组的插槽，按钮插槽将被放置在展开/收起按钮的左边，按钮插槽的 name 是 buttons。")]),t("demo-block",[t("div",[t("p",[e._v("配置 collapse 属性，即可开启隐藏/展开的切换功能，被隐藏的 SearchItem 需要放置在名为 collapse 的具名插槽中")])]),t("template",{slot:"source"},[t("df-demo4")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <df-search-bar\n    :model="ruleForm"\n    ref="ruleForm"\n    class="demo-ruleForm"\n    collapse\n    showResetButton\n    @submit="search"\n  >\n    <template>\n      <df-search-bar-item label="活动名称" prop="name">\n        <df-input v-model="ruleForm.name"></df-input>\n      </df-search-bar-item>\n      <df-search-bar-item label="即时配送" prop="delivery" inputWidth="100px">\n        <df-switch v-model="ruleForm.delivery"></df-switch>\n      </df-search-bar-item>\n    </template>\n    <template slot="collapse">\n      <df-search-bar-item label="活动时间">\n        <df-search-bar-item prop="date">\n          <df-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date" style="width: 100%;"></df-date-picker>\n        </df-search-bar-item>\n      </df-search-bar-item>\n      <df-search-bar-item label="活动区域" prop="region">\n        <df-select v-model="ruleForm.region" placeholder="请选择活动区域" style="width: 100%;">\n          <df-option label="区域一" value="shanghai"></df-option>\n          <df-option label="区域二" value="beijing"></df-option>\n        </df-select>\n      </df-search-bar-item>\n      <df-search-bar-item label="活动性质" prop="type" inputWidth="auto">\n        <df-checkbox-group v-model="ruleForm.type">\n        <df-checkbox label="美食/餐厅线上活动" name="type"></df-checkbox>\n        <df-checkbox label="地推活动" name="type"></df-checkbox>\n        <df-checkbox label="线下主题活动" name="type"></df-checkbox>\n        <df-checkbox label="单纯品牌曝光" name="type"></df-checkbox>\n        </df-checkbox-group>\n      </df-search-bar-item>\n      <df-search-bar-item label="特殊资源" prop="resource" inputWidth="auto">\n        <df-radio-group v-model="ruleForm.resource">\n          <df-radio label="线上品牌"></df-radio>\n          <df-radio label="线下场地"></df-radio>\n        </df-radio-group>\n      </df-search-bar-item>\n      <df-search-bar-item label="活动地址" prop="address" inputWidth="260px">\n        <df-input v-model="ruleForm.address"></df-input>\n      </df-search-bar-item>\n    </template>\n    <template slot="buttons">\n      <df-button type="success">插槽按钮</df-button>\n      <df-button type="success">插槽按钮</df-button>\n    </template>\n  </df-search-bar>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        ruleForm: {\n          name: \'\',\n          region: \'\',\n          date: \'\',\n          delivery: false,\n          type: [],\n          resource: \'\',\n          address: \'\'\n        }\n      };\n    },\n    methods: {\n      search(){\n        console.log(\'search\')\n      }\n    }\n  }\n<\/script>\n')])])])],2),e._m(6),e._m(7),e._m(8),e._m(9),e._m(10),e._m(11),e._m(12),e._m(13),e._m(14),e._m(15),e._m(16),e._m(17),e._m(18),e._m(19),e._m(20),e._m(21)],1)},d=[function(){var e=this,t=e._self._c;return t("h2",{attrs:{id:"searchbar-sou-suo-kong-jian"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#searchbar-sou-suo-kong-jian"}},[e._v("¶")]),e._v(" SearchBar 搜索控件")])},function(){var e=this,t=e._self._c;return t("h3",{attrs:{id:"dan-tiao-jian-cha-xun"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dan-tiao-jian-cha-xun"}},[e._v("¶")]),e._v(" 单条件查询")])},function(){var e=this,t=e._self._c;return t("h3",{attrs:{id:"duo-tiao-jian-cha-xun"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#duo-tiao-jian-cha-xun"}},[e._v("¶")]),e._v(" 多条件查询")])},function(){var e=this,t=e._self._c;return t("h3",{attrs:{id:"ke-zhan-kai-de-duo-tiao-jian-cha-xun"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ke-zhan-kai-de-duo-tiao-jian-cha-xun"}},[e._v("¶")]),e._v(" 可展开的多条件查询")])},function(){var e=this,t=e._self._c;return t("h3",{attrs:{id:"cha-xun-tiao-jian-shu-ru-yan-zheng"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cha-xun-tiao-jian-shu-ru-yan-zheng"}},[e._v("¶")]),e._v(" 查询条件输入验证")])},function(){var e=this,t=e._self._c;return t("h3",{attrs:{id:"cha-cao-an-niu"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cha-cao-an-niu"}},[e._v("¶")]),e._v(" 插槽按钮")])},function(){var e=this,t=e._self._c;return t("h3",{attrs:{id:"searchbar-attributes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#searchbar-attributes"}},[e._v("¶")]),e._v(" SearchBar Attributes")])},function(){var e=this,t=e._self._c;return t("table",[t("thead",[t("tr",[t("th",[e._v("参数")]),t("th",[e._v("说明")]),t("th",[e._v("类型")]),t("th",[e._v("可选值")]),t("th",[e._v("默认值")])])]),t("tbody",[t("tr",[t("td",[e._v("model")]),t("td",[e._v("数据对象")]),t("td",[e._v("object")]),t("td",[e._v("—")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("rules")]),t("td",[e._v("验证规则")]),t("td",[e._v("object")]),t("td",[e._v("—")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("label-width")]),t("td",[e._v("表单域标签的宽度，例如 '50px'。作为 SearchBar 直接子元素的 SearchBarItem 会继承该值。支持 "),t("code",[e._v("auto")]),e._v("。")]),t("td",[e._v("string")]),t("td",[e._v("—")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("label-suffix")]),t("td",[e._v("表单域标签的后缀")]),t("td",[e._v("string")]),t("td",[e._v("—")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("hide-required-asterisk")]),t("td",[e._v("是否显示必填字段的标签旁边的红色星号")]),t("td",[e._v("boolean")]),t("td",[e._v("—")]),t("td",[e._v("false")])]),t("tr",[t("td",[e._v("show-message")]),t("td",[e._v("是否显示校验错误信息")]),t("td",[e._v("boolean")]),t("td",[e._v("—")]),t("td",[e._v("true")])]),t("tr",[t("td",[e._v("inline-message")]),t("td",[e._v("是否以行内形式展示校验信息")]),t("td",[e._v("boolean")]),t("td",[e._v("—")]),t("td",[e._v("false")])]),t("tr",[t("td",[e._v("status-icon")]),t("td",[e._v("是否在输入框中显示校验结果反馈图标")]),t("td",[e._v("boolean")]),t("td",[e._v("—")]),t("td",[e._v("false")])]),t("tr",[t("td",[e._v("validate-on-rule-change")]),t("td",[e._v("是否在 "),t("code",[e._v("rules")]),e._v(" 属性改变后立即触发一次验证")]),t("td",[e._v("boolean")]),t("td",[e._v("—")]),t("td",[e._v("true")])]),t("tr",[t("td",[e._v("disabled")]),t("td",[e._v("是否禁用该表单内的所有组件。若设置为 true，则表单内组件上的 disabled 属性不再生效")]),t("td",[e._v("boolean")]),t("td",[e._v("—")]),t("td",[e._v("false")])]),t("tr",[t("td",[e._v("collapse")]),t("td",[e._v("是否开启更多查询条件的隐藏/开启按钮")]),t("td",[e._v("boolean")]),t("td",[e._v("—")]),t("td",[e._v("false")])]),t("tr",[t("td",[e._v("show-submit-button")]),t("td",[e._v("是否显示查询按钮")]),t("td",[e._v("boolean")]),t("td",[e._v("—")]),t("td",[e._v("true")])]),t("tr",[t("td",[e._v("show-reset-button")]),t("td",[e._v("是否显示重置按钮")]),t("td",[e._v("boolean")]),t("td",[e._v("—")]),t("td",[e._v("false")])]),t("tr",[t("td",[e._v("disable-submit-button")]),t("td",[e._v("是否禁用查询按钮")]),t("td",[e._v("boolean")]),t("td",[e._v("—")]),t("td",[e._v("false")])]),t("tr",[t("td",[e._v("disable-reset-button")]),t("td",[e._v("是否禁用重置按钮")]),t("td",[e._v("boolean")]),t("td",[e._v("—")]),t("td",[e._v("false")])]),t("tr",[t("td",[e._v("buttons-size")]),t("td",[e._v("查询/重置按钮的尺寸")]),t("td",[e._v("string")]),t("td",[e._v("—")]),t("td",[e._v("mini")])]),t("tr",[t("td",[e._v("slot-buttons-inject-style")]),t("td",[e._v("/"),t("em",[e._v("新增")]),e._v("/ slot-buttons 的注入样式，当样式需求比较复杂时，以 style 对象注入的形式定制 slot-buttons 的样式")]),t("td",[e._v("object")]),t("td",[e._v("—")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("submit-text")]),t("td",[e._v("/"),t("em",[e._v("新增")]),e._v("/ 查询按钮的文本")]),t("td",[e._v("string")]),t("td",[e._v("—")]),t("td",[e._v("查询")])]),t("tr",[t("td",[e._v("reset-text")]),t("td",[e._v("/"),t("em",[e._v("新增")]),e._v("/ 重置按钮的文本")]),t("td",[e._v("string")]),t("td",[e._v("—")]),t("td",[e._v("重置")])])])])},function(){var e=this,t=e._self._c;return t("h3",{attrs:{id:"searchbar-methods"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#searchbar-methods"}},[e._v("¶")]),e._v(" SearchBar Methods")])},function(){var e=this,t=e._self._c;return t("table",[t("thead",[t("tr",[t("th",[e._v("方法名")]),t("th",[e._v("说明")]),t("th",[e._v("参数")])])]),t("tbody",[t("tr",[t("td",[e._v("validate")]),t("td",[e._v("对整个输入区域进行校验的方法，参数为一个回调函数。该回调函数会在校验结束后被调用，并传入两个参数：是否校验成功和未通过校验的字段。若不传入回调函数，则会返回一个 promise")]),t("td",[e._v("Function(callback: Function(boolean, object))")])]),t("tr",[t("td",[e._v("validateField")]),t("td",[e._v("对部分输入项字段进行校验的方法")]),t("td",[e._v("Function(props: array | string, callback: Function(errorMessage: string))")])]),t("tr",[t("td",[e._v("resetFields")]),t("td",[e._v("对整个输入区域进行重置，将所有字段值重置为初始值并移除校验结果")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("clearValidate")]),t("td",[e._v("移除输入项的校验结果。传入待移除的输入项的 prop 属性或者 prop 组成的数组，如不传则移除整个输入区域的校验结果")]),t("td",[e._v("Function(props: array | string)")])])])])},function(){var e=this,t=e._self._c;return t("h3",{attrs:{id:"searchbar-events"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#searchbar-events"}},[e._v("¶")]),e._v(" SearchBar Events")])},function(){var e=this,t=e._self._c;return t("table",[t("thead",[t("tr",[t("th",[e._v("事件名称")]),t("th",[e._v("说明")]),t("th",[e._v("回调参数")])])]),t("tbody",[t("tr",[t("td",[e._v("submit")]),t("td",[e._v("点击查询按钮后触发")]),t("td",[e._v("无")])]),t("tr",[t("td",[e._v("reset")]),t("td",[e._v("点击重置按钮后触发")]),t("td",[e._v("无")])]),t("tr",[t("td",[e._v("validate")]),t("td",[e._v("任一表单项被校验后触发")]),t("td",[e._v("被校验的表单项 prop 值，校验是否通过，错误消息（如果存在）")])])])])},function(){var e=this,t=e._self._c;return t("h3",{attrs:{id:"searchbar-slot"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#searchbar-slot"}},[e._v("¶")]),e._v(" SearchBar Slot")])},function(){var e=this,t=e._self._c;return t("table",[t("thead",[t("tr",[t("th",[e._v("name")]),t("th",[e._v("说明")])])]),t("tbody",[t("tr",[t("td",[e._v("—")]),t("td",[e._v("默认展示的查询输入项")])]),t("tr",[t("td",[e._v("collapse")]),t("td",[e._v("可展开/隐藏的查询输入项")])]),t("tr",[t("td",[e._v("buttons")]),t("td",[e._v("按钮组插槽")])])])])},function(){var e=this,t=e._self._c;return t("h3",{attrs:{id:"searchbaritem-attributes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#searchbaritem-attributes"}},[e._v("¶")]),e._v(" SearchBarItem Attributes")])},function(){var e=this,t=e._self._c;return t("table",[t("thead",[t("tr",[t("th",[e._v("参数")]),t("th",[e._v("说明")]),t("th",[e._v("类型")]),t("th",[e._v("可选值")]),t("th",[e._v("默认值")])])]),t("tbody",[t("tr",[t("td",[e._v("prop")]),t("td",[e._v("表单域 model 字段，如果需要重置功能，则该属性是必填的")]),t("td",[e._v("string")]),t("td",[e._v("传入 SearchBar 组件的 "),t("code",[e._v("model")]),e._v(" 中的字段")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("label")]),t("td",[e._v("标签文本")]),t("td",[e._v("string")]),t("td",[e._v("—")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("input-width")]),t("td",[e._v("表单域输入框的宽度，例如 '50px'。支持 "),t("code",[e._v("auto")]),e._v("。")]),t("td",[e._v("string/number")]),t("td",[e._v("—")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("label-width")]),t("td",[e._v("标签的的宽度，例如 '50px'。支持 "),t("code",[e._v("auto")]),e._v("。")]),t("td",[e._v("string")]),t("td",[e._v("—")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("required")]),t("td",[e._v("是否必填，如不设置，则会根据校验规则自动生成")]),t("td",[e._v("boolean")]),t("td",[e._v("—")]),t("td",[e._v("false")])]),t("tr",[t("td",[e._v("rules")]),t("td",[e._v("验证规则")]),t("td",[e._v("object")]),t("td",[e._v("—")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("error")]),t("td",[e._v("验证错误信息, 设置该值会使表单验证状态变为"),t("code",[e._v("error")]),e._v("，并显示该错误信息")]),t("td",[e._v("string")]),t("td",[e._v("—")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("show-message")]),t("td",[e._v("是否显示校验错误信息")]),t("td",[e._v("boolean")]),t("td",[e._v("—")]),t("td",[e._v("true")])]),t("tr",[t("td",[e._v("inline-message")]),t("td",[e._v("以行内形式展示校验信息")]),t("td",[e._v("boolean")]),t("td",[e._v("—")]),t("td",[e._v("false")])]),t("tr",[t("td",[e._v("size")]),t("td",[e._v("用于控制该组件的尺寸")]),t("td",[e._v("string")]),t("td",[e._v("medium / small / mini")]),t("td",[e._v("-")])]),t("tr",[t("td",[e._v("show-message")]),t("td",[e._v("是否显示校验错误信息")]),t("td",[e._v("boolean")]),t("td",[e._v("—")]),t("td",[e._v("true")])]),t("tr",[t("td",[e._v("label-min-width")]),t("td",[e._v("/"),t("em",[e._v("新增")]),e._v("/ 标签的最小宽度，例如 '50px'。")]),t("td",[e._v("string")]),t("td",[e._v("—")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("input-min-width")]),t("td",[e._v("/"),t("em",[e._v("新增")]),e._v("/ 表单域输入框的最小宽度，例如 '50px'。")]),t("td",[e._v("string")]),t("td",[e._v("—")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("label-inject-style")]),t("td",[e._v("/"),t("em",[e._v("新增")]),e._v("/ 标签的注入样式，当样式需求比较复杂时，以 style 对象注入的形式定制 label 的样式")]),t("td",[e._v("object")]),t("td",[e._v("—")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("input-inject-style")]),t("td",[e._v("/"),t("em",[e._v("新增")]),e._v("/ 表单域输入框的注入样式，当样式需求比较复杂时，以 style 对象注入的形式定制 input 的样式")]),t("td",[e._v("object")]),t("td",[e._v("—")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("content-inject-style")]),t("td",[e._v("/"),t("em",[e._v("新增")]),e._v("/ 表单域 content 的注入样式，当样式需求比较复杂时，以 style 对象注入的形式定制 input 的样式")]),t("td",[e._v("object")]),t("td",[e._v("—")]),t("td",[e._v("—")])])])])},function(){var e=this,t=e._self._c;return t("h3",{attrs:{id:"searchbaritem-slot"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#searchbaritem-slot"}},[e._v("¶")]),e._v(" SearchBarItem Slot")])},function(){var e=this,t=e._self._c;return t("table",[t("thead",[t("tr",[t("th",[e._v("name")]),t("th",[e._v("说明")])])]),t("tbody",[t("tr",[t("td",[e._v("—")]),t("td",[e._v("SearchBar Item 的内容")])]),t("tr",[t("td",[e._v("label")]),t("td",[e._v("标签文本的内容")])])])])},function(){var e=this,t=e._self._c;return t("h3",{attrs:{id:"searchbaritem-scoped-slot"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#searchbaritem-scoped-slot"}},[e._v("¶")]),e._v(" SearchBarItem Scoped Slot")])},function(){var e=this,t=e._self._c;return t("table",[t("thead",[t("tr",[t("th",[e._v("name")]),t("th",[e._v("说明")])])]),t("tbody",[t("tr",[t("td",[e._v("error")]),t("td",[e._v("自定义校验信息的显示方式，参数为 { error }")])])])])},function(){var e=this,t=e._self._c;return t("h3",{attrs:{id:"searchbaritem-methods"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#searchbaritem-methods"}},[e._v("¶")]),e._v(" SearchBarItem Methods")])},function(){var e=this,t=e._self._c;return t("table",[t("thead",[t("tr",[t("th",[e._v("方法名")]),t("th",[e._v("说明")]),t("th",[e._v("参数")])])]),t("tbody",[t("tr",[t("td",[e._v("resetField")]),t("td",[e._v("对该输入项进行重置，将其值重置为初始值并移除校验结果")]),t("td",[e._v("-")])]),t("tr",[t("td",[e._v("clearValidate")]),t("td",[e._v("移除该输入项的校验结果")]),t("td",[e._v("-")])])])])}],n=r("5530"),o=(r("ac1f"),r("841c"),r("b0c0"),{name:"component-doc",components:{"df-demo0":function(){var e=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[[r("df-search-bar",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm},on:{submit:e.search}},[[r("df-search-bar-item",{attrs:{label:"活动名称",prop:"name",inputWidth:"200px"}},[r("df-input",{model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1)]],2)]],2)},t=[],r={data:function(){return{ruleForm:{name:""}}},methods:{search:function(){console.log("search")}}};return Object(n["a"])({render:e,staticRenderFns:t},r)}(),"df-demo1":function(){var e=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[[r("df-search-bar",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,showResetButton:""},on:{submit:e.search,reset:e.reset}},[[r("df-search-bar-item",{attrs:{label:"活动名称",prop:"name"}},[r("df-input",{model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),e._v(" "),r("df-search-bar-item",{attrs:{label:"活动区域",prop:"region",inputWidth:"150px"}},[r("df-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择活动区域"},model:{value:e.ruleForm.region,callback:function(t){e.$set(e.ruleForm,"region",t)},expression:"ruleForm.region"}},[r("df-option",{attrs:{label:"区域一",value:"shanghai"}}),e._v(" "),r("df-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1)]],2)]],2)},t=[],r={data:function(){return{ruleForm:{name:"",region:""}}},methods:{search:function(){console.log("search")},reset:function(){console.log("reset")}}};return Object(n["a"])({render:e,staticRenderFns:t},r)}(),"df-demo2":function(){var e=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[[r("df-search-bar",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,collapse:"",showResetButton:""},on:{submit:e.search}},[[r("df-search-bar-item",{attrs:{label:"活动名称",prop:"name"}},[r("df-input",{model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),e._v(" "),r("df-search-bar-item",{attrs:{label:"活动区域",prop:"region",inputWidth:"150px"}},[r("df-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择活动区域"},model:{value:e.ruleForm.region,callback:function(t){e.$set(e.ruleForm,"region",t)},expression:"ruleForm.region"}},[r("df-option",{attrs:{label:"区域一",value:"shanghai"}}),e._v(" "),r("df-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1)],e._v(" "),r("template",{slot:"collapse"},[r("df-search-bar-item",{attrs:{label:"活动时间"}},[r("df-search-bar-item",{attrs:{prop:"date"}},[r("df-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:e.ruleForm.date,callback:function(t){e.$set(e.ruleForm,"date",t)},expression:"ruleForm.date"}})],1)],1),e._v(" "),r("df-search-bar-item",{attrs:{label:"即时配送",prop:"delivery"}},[r("df-switch",{model:{value:e.ruleForm.delivery,callback:function(t){e.$set(e.ruleForm,"delivery",t)},expression:"ruleForm.delivery"}})],1),e._v(" "),r("df-search-bar-item",{attrs:{label:"活动性质",prop:"type",inputWidth:"auto"}},[r("df-checkbox-group",{model:{value:e.ruleForm.type,callback:function(t){e.$set(e.ruleForm,"type",t)},expression:"ruleForm.type"}},[r("df-checkbox",{attrs:{label:"美食/餐厅线上活动",name:"type"}}),e._v(" "),r("df-checkbox",{attrs:{label:"地推活动",name:"type"}}),e._v(" "),r("df-checkbox",{attrs:{label:"线下主题活动",name:"type"}}),e._v(" "),r("df-checkbox",{attrs:{label:"单纯品牌曝光",name:"type"}})],1)],1),e._v(" "),r("df-search-bar-item",{attrs:{label:"特殊资源",prop:"resource",inputWidth:"auto"}},[r("df-radio-group",{model:{value:e.ruleForm.resource,callback:function(t){e.$set(e.ruleForm,"resource",t)},expression:"ruleForm.resource"}},[r("df-radio",{attrs:{label:"线上品牌"}}),e._v(" "),r("df-radio",{attrs:{label:"线下场地"}})],1)],1),e._v(" "),r("df-search-bar-item",{attrs:{label:"活动地址",prop:"address",inputWidth:"260px"}},[r("df-input",{model:{value:e.ruleForm.address,callback:function(t){e.$set(e.ruleForm,"address",t)},expression:"ruleForm.address"}})],1)],1)],2)]],2)},t=[],r={data:function(){return{ruleForm:{name:"",region:"",date:"",delivery:!1,type:[],resource:"",address:""}}},methods:{search:function(){console.log("search")}}};return Object(n["a"])({render:e,staticRenderFns:t},r)}(),"df-demo3":function(){var e=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[[r("df-search-bar",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,collapse:"",showResetButton:""},on:{submit:e.search}},[[r("df-search-bar-item",{attrs:{label:"活动名称",prop:"name","tip-down":""}},[r("df-input",{model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),e._v(" "),r("df-search-bar-item",{attrs:{label:"活动区域",prop:"region",inputWidth:"150px"}},[r("df-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择活动区域"},model:{value:e.ruleForm.region,callback:function(t){e.$set(e.ruleForm,"region",t)},expression:"ruleForm.region"}},[r("df-option",{attrs:{label:"区域一",value:"shanghai"}}),e._v(" "),r("df-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1)],e._v(" "),r("template",{slot:"collapse"},[r("df-search-bar-item",{attrs:{label:"活动时间",required:""}},[r("df-search-bar-item",{attrs:{prop:"date1"}},[r("df-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:e.ruleForm.date1,callback:function(t){e.$set(e.ruleForm,"date1",t)},expression:"ruleForm.date1"}})],1)],1),e._v(" "),r("df-search-bar-item",{attrs:{label:"即时配送",prop:"delivery"}},[r("df-switch",{model:{value:e.ruleForm.delivery,callback:function(t){e.$set(e.ruleForm,"delivery",t)},expression:"ruleForm.delivery"}})],1),e._v(" "),r("df-search-bar-item",{attrs:{label:"活动性质",prop:"type",inputWidth:"auto"}},[r("df-checkbox-group",{model:{value:e.ruleForm.type,callback:function(t){e.$set(e.ruleForm,"type",t)},expression:"ruleForm.type"}},[r("df-checkbox",{attrs:{label:"美食/餐厅线上活动",name:"type"}}),e._v(" "),r("df-checkbox",{attrs:{label:"地推活动",name:"type"}}),e._v(" "),r("df-checkbox",{attrs:{label:"线下主题活动",name:"type"}}),e._v(" "),r("df-checkbox",{attrs:{label:"单纯品牌曝光",name:"type"}})],1)],1),e._v(" "),r("df-search-bar-item",{attrs:{label:"特殊资源",prop:"resource",inputWidth:"auto","tip-down":""}},[r("df-radio-group",{model:{value:e.ruleForm.resource,callback:function(t){e.$set(e.ruleForm,"resource",t)},expression:"ruleForm.resource"}},[r("df-radio",{attrs:{label:"线上品牌"}}),e._v(" "),r("df-radio",{attrs:{label:"线下场地"}})],1)],1),e._v(" "),r("df-search-bar-item",{attrs:{label:"活动地址",prop:"address",inputWidth:"260px"}},[r("df-input",{model:{value:e.ruleForm.address,callback:function(t){e.$set(e.ruleForm,"address",t)},expression:"ruleForm.address"}})],1)],1)],2)]],2)},t=[],r={data:function(){return{ruleForm:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",address:""},rules:{name:[{required:!0,message:"请输入活动名称",trigger:"blur"},{min:3,max:5,message:"长度在 3 到 5 个字符",trigger:"blur"}],region:[{required:!0,message:"请选择活动区域",trigger:"change"}],date1:[{type:"date",required:!0,message:"请选择日期",trigger:"change"}],date2:[{type:"date",required:!0,message:"请选择时间",trigger:"change"}],type:[{type:"array",required:!0,message:"请至少选择一个活动性质",trigger:"change"}],resource:[{required:!0,message:"请选择活动资源",trigger:"change"}],address:[{required:!0,message:"请填写活动地址",trigger:"blur"}]}}},methods:{search:function(){console.log("search")}}};return Object(n["a"])({render:e,staticRenderFns:t},r)}(),"df-demo4":function(){var e=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[[r("df-search-bar",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,collapse:"",showResetButton:""},on:{submit:e.search}},[[r("df-search-bar-item",{attrs:{label:"活动名称",prop:"name"}},[r("df-input",{model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),e._v(" "),r("df-search-bar-item",{attrs:{label:"即时配送",prop:"delivery",inputWidth:"100px"}},[r("df-switch",{model:{value:e.ruleForm.delivery,callback:function(t){e.$set(e.ruleForm,"delivery",t)},expression:"ruleForm.delivery"}})],1)],e._v(" "),r("template",{slot:"collapse"},[r("df-search-bar-item",{attrs:{label:"活动时间"}},[r("df-search-bar-item",{attrs:{prop:"date"}},[r("df-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:e.ruleForm.date,callback:function(t){e.$set(e.ruleForm,"date",t)},expression:"ruleForm.date"}})],1)],1),e._v(" "),r("df-search-bar-item",{attrs:{label:"活动区域",prop:"region"}},[r("df-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择活动区域"},model:{value:e.ruleForm.region,callback:function(t){e.$set(e.ruleForm,"region",t)},expression:"ruleForm.region"}},[r("df-option",{attrs:{label:"区域一",value:"shanghai"}}),e._v(" "),r("df-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),e._v(" "),r("df-search-bar-item",{attrs:{label:"活动性质",prop:"type",inputWidth:"auto"}},[r("df-checkbox-group",{model:{value:e.ruleForm.type,callback:function(t){e.$set(e.ruleForm,"type",t)},expression:"ruleForm.type"}},[r("df-checkbox",{attrs:{label:"美食/餐厅线上活动",name:"type"}}),e._v(" "),r("df-checkbox",{attrs:{label:"地推活动",name:"type"}}),e._v(" "),r("df-checkbox",{attrs:{label:"线下主题活动",name:"type"}}),e._v(" "),r("df-checkbox",{attrs:{label:"单纯品牌曝光",name:"type"}})],1)],1),e._v(" "),r("df-search-bar-item",{attrs:{label:"特殊资源",prop:"resource",inputWidth:"auto"}},[r("df-radio-group",{model:{value:e.ruleForm.resource,callback:function(t){e.$set(e.ruleForm,"resource",t)},expression:"ruleForm.resource"}},[r("df-radio",{attrs:{label:"线上品牌"}}),e._v(" "),r("df-radio",{attrs:{label:"线下场地"}})],1)],1),e._v(" "),r("df-search-bar-item",{attrs:{label:"活动地址",prop:"address",inputWidth:"260px"}},[r("df-input",{model:{value:e.ruleForm.address,callback:function(t){e.$set(e.ruleForm,"address",t)},expression:"ruleForm.address"}})],1)],1),e._v(" "),r("template",{slot:"buttons"},[r("df-button",{attrs:{type:"success"}},[e._v("插槽按钮")]),e._v(" "),r("df-button",{attrs:{type:"success"}},[e._v("插槽按钮")])],1)],2)]],2)},t=[],r={data:function(){return{ruleForm:{name:"",region:"",date:"",delivery:!1,type:[],resource:"",address:""}}},methods:{search:function(){console.log("search")}}};return Object(n["a"])({render:e,staticRenderFns:t},r)}()}}),l=o,s=r("2877"),i=Object(s["a"])(l,a,d,!1,null,null,null);t["default"]=i.exports}}]);
//# sourceMappingURL=chunk-2d0e502e.be4dfa53.js.map