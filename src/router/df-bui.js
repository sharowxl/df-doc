import Menu from '../components/menu'
import ChangeLog from '../docs-bui/changelog.md'

export const rootPathName = 'professional'

const demoRouters = process.env.NODE_ENV === 'development' ? [{
  path: 'demo',
  name: '示例',
  filetype: '.vue'
}] : []

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
    path: 'map',
    name: '业务组件字典'
  },
  {
    path: 'methods',
    name: '业务组件方法'
  }
]

const pages = {
  Basic: [
    ...demoRouters,
    {
      path: 'buttonGroup',
      name: '按钮组'
    },
    {
      path: 'rightButton',
      name: '权限按钮'
    },
    {
      path: 'rightTableColumn',
      name: '权限操作列'
    },
    {
      path: 'bingRenXx',
      name: '患者信息'
    },
    {
      path: 'cardReader',
      name: '读卡'
    },
    {
      path: 'zhuYuanBingRenXz',
      name: '住院病人选择'
    },
    {
      path: 'piaoJuHeDui',
      name: '票据核对'
    },
    {
      path: 'zhenJianGuaHao',
      name: '诊间挂号'
    },
    {
      path: 'jiBingXz',
      name: '疾病选择'
    },
    {
      path: 'changYongYuXz',
      name: '常用语选择'
    }
  ],
  Form: [
    {
      path: 'pageDynamic',
      name: '下拉分页'
    },
    {
      path: 'cityAreaSelect',
      name: '地址选择器'
    },
    {
      path: 'zhenDuanForm',
      name: '诊断表单'
    }
  ],
  other: [
    {
      path: 'ruiLangPdf',
      name: '锐浪打印预览'
    },
    {
      path: 'yiBaoHelper',
      name: '医保工具类'
    },
    {
      path: 'zhuYuanShouFeiHelper',
      name: '住院收费工具类'
    },
    {
      path: 'piaoJuHelper',
      name: '票据工具类'
    },
    {
      path: 'idCardValidation',
      name: '身份证工具类'
    },
    {
      path: 'chuYuanJc',
      name: '出院检测'
    },
    {
      path: 'zhuYuanBingRenList',
      name: '住院病人列表'
    },
    {
      path: 'teShuZf',
      name: '特殊字符'
    },
    {
      path: 'duMaJinDy',
      name: '毒麻精打印'
    },
    {
      path: 'xinZhengSq',
      name: '新增授权'
    },
    {
      path: 'huiZhenSq',
      name: '会诊申请'
    },
    {
      path: 'yiBaoXxBa',
      name: '医保信息备案'
    },
    {
      path: 'jianChaBg',
      name: '检查报告'
    },
    {
      path: 'jianYanBg',
      name: '检验报告'
    },
    {
      path: 'shouShuSq',
      name: '手术申请'
    },
    {
      path: 'fuHeYzSs',
      name: '复合医嘱搜索'
    },
    {
      path: 'bingLiJianSuo',
      name: '病历检索'
    },
    {
      path: 'bingAnFuJiaXx',
      name: '病案附加信息'
    }
  ]
}

const createBUiRouter = (moduleName, route) => {
  return {
    path: `/${rootPathName}/${route.path}`,
    name: `/${rootPathName}/${route.path}`,
    component: () => moduleName ? import('../docs-bui/' + moduleName.toLowerCase() + '/' + route.path + (route.filetype || '.md'))
      : import('../docs-bui/' + route.path + (route.filetype || '.md'))
  }
}

const bUiGuideRouters = () => {
  const routes = []
  for (let index = 0; index < guides.length; index++) {
    routes.push(createBUiRouter('', guides[index]))
  }
  return routes
}

const bUiBaseRouters = () => {
  const routes = []
  for (const key in pages) {
    if (Object.hasOwnProperty.call(pages, key)) {
      const element = pages[key]
      element.forEach(page => {
        routes.push(createBUiRouter(key, page))
      })
    }
  }
  return routes
}

const bUiRoutersOptions = {
  path: `/${rootPathName}`,
  redirect: `/${rootPathName}/changeLog`,
  component: {
    render () {
      return (
        <div style="height: 100%;width:100%;display: flex">
          <df-aside class="main-aside" width="325px">
            <Menu rootPathName={ rootPathName } guides={ guides } pages={ pages } />
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
    ...bUiGuideRouters(),
    ...bUiBaseRouters()
  ]
}

export default bUiRoutersOptions
