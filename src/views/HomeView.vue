<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  <div>
    Hello 
    World
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
  created() {
    // 请求
    this.$axios({
      url:"/dev-api/",
      method: "GET"
    }).then(res=>{
      console.log(res);
    }).catch(err=>{
      console.log(err);
    })
  },
};
</script>
