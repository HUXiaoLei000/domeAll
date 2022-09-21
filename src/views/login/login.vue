
<template>
  <div class="app">
    <!-- 中间框架 -->
    <div class="box-app">
      <!-- 主题 -->
      <h2>会员后台管理系统</h2>
      <!-- inpu框 -->
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="65px"
        class="demo-ruleForm"
      >
        <el-form-item label="账号" prop="username">
          <!-- .trim去除空格 -->
          <el-input v-model.trim="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <!-- .trim去除空格 -->
          <el-input v-model.trim="ruleForm.password"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
      <!-- input结束 -->
    </div>
  </div>
</template>

<script>
import { login } from "../../api/user";
export default {
  name: "",
  components: {},
  data() {
    return {
      // input绑定数据
      ruleForm: {
        username: "",
        password: "",
      },
      //   正则校验
      rules: {
        username: [
          { required: true, message: "请输入账号", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    // 点击登录按钮进行表单校验
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        //   原始书写
        // if (valid) {
        //   alert("登录成功");
        //   调用登录
        //   this.handlelogin();
        // } else {
        //   console.log("登录失败");
        //   return false;
        // }
        // 简写
        if (!valid) return;
        // 调用登录
        this.handlelogin();
      });
    },
    // 登录的方法 必须需要使用async和await , try和catch
    async handlelogin() {
      // 成功走try
      try {
        const response = await login(this.ruleForm);
        // 登录后查看返回值
        console.log("response=>", response);
        // 需要将token 存到vuex ,或者本地存储
        // console.log("token=>", response.data.data.token);
        console.log("token=>简化后", response.token); //  简化后
        // 失败走cath
      } catch (e) {
        //   报错回复
        console.log(e.message);
      }
    },
  },
};
</script>
<style scoped lang='scss'>
.app {
  background: url("https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fupload-images.jianshu.io%2Fupload_images%2F7192784-ba8beb72385ad02e.gif&refer=http%3A%2F%2Fupload-images.jianshu.io&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1666348536&t=e97ee807b8a47b8ff29e5a79c9efc963")
    no-repeat;
  background-size: 100% 100%;
  height: 100%;
  word-wrap: 100%;
  overflow: hidden;
}
.box-app {
  height: 300px;
  width: 400px;
  background-color: rgba(255, 255, 255, 0.808);
  margin: 200px auto;
  border-radius: 20px;
  overflow: hidden;
  padding-right: 20px;
}
h2 {
  text-align: center;
  margin-top: 20px;
}
.el-button {
  width: 100%;
}
</style>
