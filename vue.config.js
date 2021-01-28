const path = require('path')
const resolve = (dir) => path.join(__dirname, dir)
const IS_PRO = process.env.NODE_ENV === 'production'

// vue.config.js
module.exports = {
  publicPath: '/', // 应用程序捆绑包部署在的基本URL
  outputDir: 'dist', // 执行build构建的目录名称
  assetsDir: 'static', // 执行build生成的存放静态文件的目录，位于dist下
  indexPath: 'index.html', // 一个目录（相对于outputDir），用于在其下嵌套生成的静态资产（js，css，img，字体）
  lintOnSave: true, // 是否在开发过程中使用eslint-loader执行保存时的存储。仅在安装时才尊重该值。
  // 样式相关
  css: {
    loaderOptions: {
      css: {},
      scss: {
        additionalData: `
                    @import '@/assets/style/sass/mixin.scss';
                    @import '@/assets/style/sass/variable.scss';
                `
      }
    }
  },
  devServer: {
    // 配置eslint显示错误
    overlay: {
      warnings: true,
      errors: true
    },
    host: '0.0.0.0',
    port: '2233',
    https: false,
    proxy: {
      '/api': {
        target: process.env.VUE_APP_SERVER,
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          /* 重写路径，当我们在浏览器中看到请求的地址为：http://localhost:8080/api/core 时
                        实际上访问的地址是：http://121.121.67.254:8185/core,因为重写了 /api
                        */
          '^/api': ''
        }
      }
    }
  },
  // 插件
  pluginOptions: {
    foo: {
      // 插件可以访问这些选项作为
      // `options.pluginOptions.foo`.
    }
  }
}
