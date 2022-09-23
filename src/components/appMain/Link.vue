
<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item class="title" :to="{ path: '/' }">
         {{RouteNavigation}}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {};
  },
  computed: {
    //  获取路由地址
    RouteNavigation() {
      return this.$route.meta?.title;
    },
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style scoped lang='scss'>
.el-breadcrumb {
  box-shadow: 0 2px 2px 2px aqua;
  margin-bottom: 10px;
  .title {
    padding: 10px 0;
    margin-left: 10px;
    font-weight: 900;
    font-size: 18px;
  }
  .title::before {
    content: "";
    padding: 0 10px;
    border-left: 3px solid rgb(196, 28, 28);
  }
}
</style>
