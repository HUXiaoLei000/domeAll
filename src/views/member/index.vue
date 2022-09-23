
<template>
  <div>
    <!-- 头部搜索 -->
    <el-form
      :inline="true"
      ref="ResetAll"
      :model="formInline"
      class="demo-form-inline"
    >
      <!-- 会员卡号 -->
      <el-form-item prop="cardNum">
        <el-input
          v-model="formInline.cardNum"
          placeholder="会员卡号"
        ></el-input>
      </el-form-item>
      <!-- 会员名称 -->
      <el-form-item prop="name">
        <el-input v-model="formInline.name" placeholder="会员名称"></el-input>
      </el-form-item>
      <!-- 支付方式 -->
      <el-form-item prop="payType">
        <el-select v-model="formInline.payType" placeholder="支付方式">
          <el-option
            v-for="(item, index) in payType"
            :key="index"
            :label="item.name"
            :value="item.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <!-- 日期 value-format="yyyy-MM-dd"转换正常时间 -->
      <el-form-item prop="birthday">
        <el-date-picker
          v-model="formInline.birthday"
          type="date"
          value-format="yyyy-MM-dd"
          placeholder="选择日期"
        >
        </el-date-picker>
      </el-form-item>
      <!-- 查询 -->
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="edit">新增</el-button>
      </el-form-item>
      <el-form-item>
        <el-button @click="Reset('ResetAll')">重置</el-button>
      </el-form-item>
    </el-form>
    <!-- 表格 -->
    <el-table :data="tableData" height="400" border style="width: 100%">
      <el-table-column type="index" prop="date" label="序列" width="50">
      </el-table-column>
      <el-table-column prop="cardNum" label="会员卡号"> </el-table-column>
      <el-table-column prop="name" label="会员姓名" width="80">
      </el-table-column>
      <el-table-column prop="birthday" label="会员生日" width="120">
      </el-table-column>
      <el-table-column prop="phone" label="手机号码"> </el-table-column>
      <el-table-column prop="integral" label="可用积分" width="80">
      </el-table-column>
      <el-table-column prop="money" label="开卡金额" width="100">
      </el-table-column>
      <el-table-column prop="payType" label="支付类型">
        <template v-slot="scope">
          {{ scope.row.payType | filterPayType }}
        </template>
      </el-table-column>
      <el-table-column prop="address" label="会员地址" width="180">
      </el-table-column>
      <!-- 操作 -->
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="size"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
    <!-- 对话框 -->

    <el-dialog title="收货地址" :visible.sync="dialogFormVisible" width="520px" >
      <el-form :model="form">
        <el-form-item
          label="活动名称"
          :label-width="formLabelWidth"
          style="width: 400px"
        >
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="活动名称"
          :label-width="formLabelWidth"
          style="width: 400px"
        >
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="活动名称"
          :label-width="formLabelWidth"
          style="width: 400px"
        >
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="活动名称"
          :label-width="formLabelWidth"
          style="width: 400px"
        >
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
import MemberApi from "../../api/member";
import MemberEnum from "../../enum/menber";

export default {
  name: "",
  components: {},
  data() {
    return {
      // 对话框
      form: {
        name: "",
        region: "",
      },
      // 对话框宽度
      formLabelWidth: "120px",
      // 对话框的显示隐藏
      dialogFormVisible: false,
      // 页数
      page: 1,
      // 数量
      size: 10,
      // 总数
      total: 0,
      // 头部绑定数据，后台返回固定的数据
      formInline: {
        cardNum: "",
        name: "",
        payType: "",
        birthday: "",
      },
      // 数据类型转换
      payType: MemberEnum.payTapy,
      // 表格數據
      tableData: [],
    };
  },
  filters: {
    filterPayType(value) {
      const data = MemberEnum.payTapy.find((item, index) => {
        // console.log(value,"<=",item.id);
        return item.id == value;
      });
      return data ? data.name : "";
    },
  },
  computed: {},
  created() {
    // 获取数据
    this.getMemberList();
  },
  methods: {
    //  获取会员列表信息
    async getMemberList() {
      const { rows, total } = await MemberApi.getMemberList(
        this.page,
        this.size,
        this.formInline
      );
      this.total = total;
      this.tableData = rows;
    },
    // 点击查询方法
    onSubmit(value) {
      console.log("submit!");
    },

    // 新增
    edit() {
      this.dialogFormVisible = !this.dialogFormVisible;
      console.log("edit");
    },

    // 重置
    Reset(Reset) {
      // res定义的数据ResetAll传参
      this.$refs[Reset].resetFields();
      // this.$refs[Reset].resetFields();
      console.log("Reset");
    },

    // 表格编辑
    handleEdit(index, row) {
      console.log("handleEdit", index, row);
    },

    // 表格刪除
    handleDelete(index, row) {
      console.log("handleDelete", index, row);
    },
    //  条数
    handleSizeChange(val) {
      this.size = val;
      console.log(`每页 ${val} 条`);
      this.getMemberList();
    },
    // 页码数
    handleCurrentChange(val) {
      this.page = val;
      console.log(`当前页: ${val}`);
      this.getMemberList();
    },
  },
};
</script>
<style scoped lang='scss'>
</style>
