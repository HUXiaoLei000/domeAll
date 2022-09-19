const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    // 端口号，如果端口号被占用，会自动提升1
    port: 8888,
    // 主机名，127.0.0，真机0.0.0.0
    host: "localhost",
    // 协议https
    https: false,
    // 启动服务时自动打开浏览器访问
    open: true,
  },
  // 关闭格式检查
  lintOnSave: false,
  // 打包时不会生成 .map 文件 ，加快打包速度
  // 需要学习wabpack
  productionSourceMap: false,
});
