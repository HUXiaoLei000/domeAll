
<template>
  <div>
    <!-- 面包屑导航 -->
    <appMain v-if="INDEX"></appMain>
    <!-- 内容导航 -->
    <router-view></router-view>
  </div>
</template>

<script>
// 引入面包屑导航
import appMain from "../../components/appMain/Link.vue";
export default {
  name: "",
  components: { appMain },
  data() {
    return {};
  },
  computed: {
    // 判断是不是"/index"页面，是就隐藏
    INDEX() {
      return !(this.$route.path == "/index");
    },
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style scoped lang='scss'>
</style>
