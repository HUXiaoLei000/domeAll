
<template>
  <div class="box">
    <!-- 头部左侧 -->
    <p>
      <img width="50px" src="https://img0.baidu.com/it/u=1211786242,1068363314&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=333" alt="logo" />
      <span>会员后台管理系统</span>
    </p>
    <!-- 头部右侧下拉菜单 -->
    <p>
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          {{ this.$store.getters.UserInfo.name }}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-edit" command="ChangePassword"
            >修改密码</el-dropdown-item
          >
          <el-dropdown-item icon="el-icon-s-fold" command="LogOut"
            >退出登录</el-dropdown-item
          >
        </el-dropdown-menu>
      </el-dropdown>
    </p>
  </div>
</template>

<script>
import { removeTokenAndUserInfo } from "../../utils/auth";
export default {
  name: "",
  components: { removeTokenAndUserInfo },
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    // 实现下拉菜单 // 退出登录
    handleCommand(command) {
      switch (command) {
        case "ChangePassword":
          this.ChangePasswordAll();
          break;
        case "LogOut":
          this.logOutAdd();
          break;
      }
      this.$message("请选择" + command);
    },
    // 退出功能
    async logOutAdd() {
 
      // 调用vuex异步
      const allAdd = await this.$store.dispatch("logOutAdd");
      //跳回login
      setTimeout(() => {
        this.$router.push("/login");
      }, 300);

      // 提示
      this.$message.success("退出成功");
      // alert("退出功能");
    },
    // 编辑功能
    ChangePasswordAll() {
      alert("编辑功能");
    },
  },
};
</script>
<style scoped lang='scss'>
.box {
  height: 50px;
  box-sizing: border-box;
}
// 头部下拉菜单
img {
  // 与文字并行
  vertical-align: middle;
  margin-right: 10px;
}
p {
  display: inline-block;
}
p:nth-child(2) {
  float: right;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.el-dropdown-menu {
  padding: 0px 20px;
}
</style>
