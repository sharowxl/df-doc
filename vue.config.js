const fs = require('fs')
const path = require('path')

function resolve (dir) {
  return path.resolve(__dirname, dir)
}
const join = path.join
// 123
// 获取参数目录下所有入口
// eslint-disable-next-line no-unused-vars
function getEntries (path) {
  const files = fs.readdirSync(resolve(path))
  const entries = files.reduce((ret, item) => {
    const itemPath = join(path, item)
    const isDir = fs.statSync(itemPath).isDirectory()
    if (isDir) {
      if (item !== 'theme' && fs.existsSync(resolve(join(itemPath, 'index.js')))) {
        ret[item] = resolve(join(itemPath, 'index.js'))
      }
    } else {
      const [name] = item.split('.')
      ret[name] = resolve(`${itemPath}`)
    }
    return ret
  }, {})
  return entries
}
/**
 *
 * @param {String} name 命令参数名
 * @returns {String} 参数值
 */
const getScriptValue = name => {
  const argv = process.argv
  return argv.includes(name)
}

// 开发环境配置
const devConfig = {
  lintOnSave: process.env.NODE_ENV !== 'production',
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  chainWebpack: config => {
    config.module
      .rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('./docs/md-loader/index.js')
  },

  devServer: {
    port: 9090,
    hot: true,
    // open: 'Google Chrome',
    proxy: {
      '/api': {
        target: 'http://api.df-mic.com/',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  }
}

const entry = resolve('src/main.js')

// 生成环境配置
const buildConfig = {
  css: {
    sourceMap: true,
    extract: {
      filename: 'theme/[name].css'
    }
  },
  configureWebpack: {
    entry,
    output: {
      filename: '[name]/index.js',
      libraryTarget: 'commonjs2'
    }
  },
  chainWebpack: config => {
  },
  outputDir: 'lib',
  productionSourceMap: false
}

const buildDocsConfig = {
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  chainWebpack: config => {
    config.module
      .rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('./docs/md-loader/index.js')
  }
}

module.exports = process.env.NODE_ENV === 'development' ? devConfig : getScriptValue('--docs') ? buildDocsConfig : buildConfig
