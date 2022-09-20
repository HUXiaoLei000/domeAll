const {
  defineConfig
} = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  // 处理白屏问题
  publicPath: "./",
  devServer: {
    // 端口号，如果端口号被占用，会自动提升1
    port: 8888,
    // 主机名，127.0.0，真机0.0.0.0
    host: "localhost",
    // 协议https
    https: false,
    // 启动服务时自动打开浏览器访问
    open: true,
    proxy: {

      // 代理名称  ["^"+process.env.VUE_APP_BASE_API]
      [process.env.VUE_APP_BASE_API]: {
        target: process.env.VUE_APP_SERVICE_URL,
        // 是否开启跨域
        changOrigin: true,
        // 重写路径
        pathRewrite: {
          ["^" + process.env.VUE_APP_BASE_API]: ''
        }
      },
      // 代理名称  ["^"+process.env.VUE_APP_BASE_API]
      [process.env.VUE_APP_BASE_API1]: {
        target: process.env.VUE_APP_SERVICE_URL1,
        // 是否开启跨域
        changOrigin: true,
        // 重写路径
        pathRewrite: {
          ["^" + process.env.VUE_APP_BASE_API1]: ''
        }
      },


      // 代理名称
      // "/dev1-api": {
      //   // 跨域地址
      //   target: "http://localhost:4000/",
      //   // 是否开启跨域
      //   changeOrigin: true,
      //   // 重写路径
      //   pathRewrite: {
      //     "^/dev1-api": ""
      //   }
      // }

      // 代理名称
      // "/dev-api": {
      //   // 跨域地址
      //   target: "http://localhost:3000/",
      //   // 是否开启跨域
      //   changeOrigin: true,
      //   // 重写路径
      //   pathRewrite: {
      //     "^/dev-api": ""
      //   }
      // }
    }
  },
  // 关闭格式检查
  lintOnSave: false,
  // 打包时不会生成 .map 文件 ，加快打包速度
  // 需要学习wabpack
  productionSourceMap: false,
});