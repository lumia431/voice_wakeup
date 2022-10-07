module.exports = {
  /* 代码保存时进行eslint检测 */
  lintOnSave: false,
  /* webpack-dev-server 相关配置 */
  devServer: {
      /* 自动打开浏览器 */
      host: "0.0.0.0",  //指定要使用的 host
      port: 8085,   //指定端口号以侦听
      /* 设置为0.0.0.0则所有的地址均能访问 */
      // https: false,
      // /* 使用代理 */
      // proxy: { // string | Object
      //     '/api': {
      //         /* 目标代理服务器地址 */
      //         target: 'http://192.168.1.8:8082/',
      //         /* 允许跨域 */
      //         changeOrigin: true,
      //         pathRewrite: {
      //           '^/api': '' //规定请求地址以什么作为开头
      //       }
      //     },
      // },
  },
}