import Menu from '../components/menu'
import ChangeLog from '../docs-ui/changelog.md'

export const rootPathName = 'component'

const guides = [
  {
    path: 'install',
    name: '安装'
  },
  {
    path: 'quickStart',
    name: '快速上手'
  },
  {
    path: 'keyboard',
    name: '快捷键'
  }
]

const demoRouters = process.env.NODE_ENV === 'development' ? [{
  path: 'demo',
  name: '示例',
  filetype: '.vue'
}] : []

const pages = {
  Basic: [
    ...demoRouters,
    {
      path: 'layout',
      name: '布局'
    },
    {
      path: 'layouts',
      name: '常用布局'
    },
    {
      path: 'container',
      name: '布局容器'
    },
    {
      path: 'icon',
      name: '图标'
    },
    {
      path: 'button',
      name: '按钮'
    },
    {
      path: 'buttonList',
      name: '配置化按钮'
    },
    {
      path: 'link',
      name: '文字链接'
    },
    {
      path: 'blueHeader',
      name: '蓝条表头'
    }
  ],
  Form: [
    {
      path: 'radio',
      name: '单选框'
    },
    {
      path: 'checkbox',
      name: '多选框'
    },
    {
      path: 'input',
      name: '输入框'
    },
    {
      path: 'inputNumber',
      name: '计数器'
    },
    {
      path: 'select',
      name: '选择器'
    },
    {
      path: 'superSelect',
      name: '超级选择器'
    },
    {
      path: 'bloodPressureInput',
      name: '血压输入框'
    },
    {
      path: 'painInput',
      name: '疼痛输入框'
    },
    {
      path: 'cascader',
      name: '级联选择器'
    },
    {
      path: 'switch',
      name: '开关'
    },
    {
      path: 'slider',
      name: '滑块'
    },
    {
      path: 'timePicker',
      name: '时间选择器'
    },
    {
      path: 'timeRangePicker',
      name: '时间范围选择器'
    },
    {
      path: 'datePicker',
      name: '日期选择器'
    },
    {
      path: 'dateRangePicker',
      name: '日期范围选择器'
    },
    {
      path: 'datetimePicker',
      name: '日期时间选择器'
    },
    {
      path: 'datetimeRangePicker',
      name: '日期时间范围选择器'
    },
    {
      path: 'upload',
      name: '上传'
    },
    {
      path: 'transfer',
      name: '穿梭框'
    },
    {
      path: 'form',
      name: '表单'
    },
    {
      path: 'treeSelect',
      name: '树形下拉选'
    },
    {
      path: 'treeTableSelect',
      name: '树形表格下拉选'
    },
    {
      path: 'pageSelect',
      name: '下拉分页'
    },
    {
      path: 'colorPicker',
      name: '颜色选择器'
    },
    {
      path: 'iconPicker',
      name: '图标选择器'
    },
    {
      path: 'graffitiBoard',
      name: '签字板'
    }
  ],
  Notice: [
    {
      path: 'alert',
      name: '警告'
    },
    {
      path: 'loading',
      name: '加载'
    },
    {
      path: 'message',
      name: '消息提示'
    },
    {
      path: 'messageBox',
      name: '弹框'
    },
    {
      path: 'notification',
      name: '通知'
    }
  ],
  Data: [
    {
      path: 'table',
      name: '表格'
    },
    {
      path: 'tableEdit',
      name: '表格编辑'
    },
    {
      path: 'xTable',
      name: '分页表格'
    },
    {
      path: 'searchBar',
      name: '搜索控件'
    },
    {
      path: 'tag',
      name: '标签'
    },
    {
      path: 'status',
      name: '状态'
    },
    {
      path: 'tree',
      name: '树形控件'
    },
    {
      path: 'treeTable',
      name: '树形表格'
    },
    {
      path: 'pagination',
      name: '分页'
    },
    {
      path: 'badge',
      name: '标记'
    },
    {
      path: 'empty',
      name: '空数据'
    },
    {
      path: 'progress',
      name: '进度条'
    }
  ],
  Navigation: [
    {
      path: 'navmenu',
      name: '导航菜单'
    },
    {
      path: 'tabs',
      name: '标签页'
    }, {
      path: 'dropdown',
      name: '下拉菜单'
    }, {
      path: 'steps',
      name: '步骤条'
    }

  ],
  Others: [
    {
      path: 'dialog',
      name: '对话框'
    },
    {
      path: 'tooltip',
      name: '提示文字'
    },
    {
      path: 'popover',
      name: '弹出框'
    },
    {
      path: 'popconfirm',
      name: '气泡弹出框'
    },
    {
      path: 'card',
      name: '卡片'
    },
    {
      path: 'carousel',
      name: '走马灯'
    },
    {
      path: 'collapse',
      name: '折叠面板'
    },
    {
      path: 'timeline',
      name: '时间线'
    },
    {
      path: 'calendar',
      name: '日历'
    },
    // {
    //   path: 'backtop',
    //   name: '回到顶部'
    // },
    {
      path: 'drawer',
      name: '抽屉'
    },
    {
      path: 'patientInfo',
      name: '病人信息'
    },
    {
      path: 'patientInfoDynamic',
      name: '病人头部信息'
    }
  ]
}

const createUiRouter = (moduleName, route) => {
  return {
    path: `/${rootPathName}/${route.path}`,
    name: `/${rootPathName}/${route.path}`,
    component: () => moduleName ? import('../docs-ui/' + moduleName.toLowerCase() + '/' + route.path + (route.filetype || '.md'))
      : import('../docs-ui/' + route.path + (route.filetype || '.md'))
  }
}

const uiGuideRouters = () => {
  const routes = []
  for (let index = 0; index < guides.length; index++) {
    routes.push(createUiRouter('', guides[index]))
  }
  return routes
}

const uiBaseRouters = () => {
  const routes = []
  for (const key in pages) {
    if (Object.hasOwnProperty.call(pages, key)) {
      const element = pages[key]
      element.forEach(page => {
        routes.push(createUiRouter(key, page))
      })
    }
  }
  return routes
}

const uiRoutersOptions = {
  path: `/${rootPathName}`,
  redirect: `/${rootPathName}/changeLog`,
  component: {
    render () {
      return (
        <div style="height: 100%;width:100%;display: flex">
          <df-aside class="main-aside" width="325px">
            <Menu rootPathName={ rootPathName } guides={ guides } pages={ pages }/>
          </df-aside>
          <df-main class="main-content">
            <router-view />
          </df-main>
          <df-backtop
            target=".df-main"
            right={100}
            bottom={150} />
        </div>
      )
    }
  },
  children: [
    {
      path: `/${rootPathName}/changeLog`,
      component: ChangeLog,
      name: `/${rootPathName}/更新日志`
    },
    ...uiGuideRouters(),
    ...uiBaseRouters()
  ]
}

export default uiRoutersOptions
