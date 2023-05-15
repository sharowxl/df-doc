import Menu from '../components/menu'
import ChangeLog from '../docs-js/changelog.md'

export const rootPathName = 'js'

const guides = [
  {
    path: 'install',
    name: '使用方式'
  },
  {
    path: 'methods',
    name: '共用方法表'
  }
]

const createBUiRouter = (moduleName, route) => {
  return {
    path: `/${rootPathName}/${route.path}`,
    name: `/${rootPathName}/${route.path}`,
    component: () => moduleName ? import('../docs-js/' + moduleName.toLowerCase() + '/' + route.path + (route.filetype || '.md'))
      : import('../docs-js/' + route.path + (route.filetype || '.md'))
  }
}

const bUiGuideRouters = () => {
  const routes = []
  for (let index = 0; index < guides.length; index++) {
    routes.push(createBUiRouter('', guides[index]))
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
            <Menu rootPathName={ rootPathName } guides={ guides } />
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
    ...bUiGuideRouters()
  ]
}

export default bUiRoutersOptions
