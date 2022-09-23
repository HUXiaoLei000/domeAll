
<template>
  <!-- 布局 -->
  <el-container>
    <!-- 头部 -->
    <el-header> <appHeater></appHeater> </el-header>

    <el-container>
      <!-- 、左侧 -->
      <el-aside width="200px"> <appAside></appAside> </el-aside>
      <!-- 内容区域 -->
      <el-main>
        <appMain></appMain>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import appHeater from "../../components/appHeater";
import appAside from "../../components/appAside";
import appMain from "../../components/appMain";

export default {
  name: "",
  components: {
    appHeater,
    appAside,
    appMain,
  },
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style scoped lang='scss'>
* {
  margin: 0;
}
// 高度实现满屏
.el-container {
  height: 100%;
}
// 头部
.el-header {
  background-color: #b3c0d1;
  color: rgb(247, 241, 241);
  height: 50px !important;
  box-sizing: border-box;
  padding: 0 30px;
}

// 左侧
.el-aside {
  background-color: #d3dce6;
  color: #333;
  height: 100%;
}
// 内容区域
.el-main {
  background-color: #e9eef3;
  height: 100%;
}
</style>
