<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div>Hello World</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
// import request from "../utils/request"   // 一次封装的使用
// console.log(request,"请求数据引入后，导出收到");
import getAll from "../api/api";
export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
  data() {
    return {
      size: 1,
      page: 10,
    };
  },
  created() {
    // 封装后的接口
    getAll
      .getAdd(this.page, this.size)
      .then((response) => {
        console.log(response, "成功");
      })
      .catch((error) => {
        console.log(error, "失败");
      });
    getAll
      .getAdd1(this.page, this.size)
      .then((response) => {
        console.log(response, "成功");
      })
      .catch((error) => {
        console.log(error, "失败");
      });

    // 请求3000的接口
    // request({
    //   url: process.env.VUE_APP_BASE_API + "/",
    //   method: "GET",
    // })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // 请求4000的接口
    // request({
    //   url: process.env.VUE_APP_BASE_API1 + "/",
    //   method: "GET",
    // })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  },
  methods: {},
};
</script>
