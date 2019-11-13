module.exports = {
    lintOnSave: false,
    devServer: {
      proxy: {
        '/api': {
          target: 'http://192.168.200.235:1880',//后端地址
          changeOrigin: true,
          pathRewrite: { // 重写路径: 去掉路径中开头的'/api'
            '^/api': ''
          }
        }
      }
    }
  }
  